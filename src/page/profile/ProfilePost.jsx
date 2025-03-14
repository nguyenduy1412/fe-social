import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import NavProfile from "../../components/NavProfile.jsx";
import api from "../../routes/AxiosInstance.jsx";
import { useEffect, useRef, useState } from "react";
import PostModal from "./PostModal.jsx";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import PostImages from "./PostImage.jsx";
import CommentModal from "./CommentModal.jsx";
import { useUser } from "../../components/UserProvider.jsx";

export default function ProfilePost() {

    const { user } = useUser();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [lastCreatedAt, setLastCreatedAt] = useState(null);
    const [loading, setLoading] = useState(false);
    const observer = useRef();
    const [timeLoaded, setTimeLoaded] = useState(new Date().toLocaleString());
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpenPost, setIsModalOpenPost] = useState(false);
  
    const handleOpenModal = (post) => {
      console.log("Vào k");
      setSelectedPost(post);
      setIsModalOpenPost(true);
    };
    
    useEffect(() => {
        if (user?.id) {
            fetchPosts();
        }
    }, []); // Chạy lại khi user thay đổi
    const fetchPosts = async () => {
        if (loading) return; // Tránh gọi API liên tục
        setLoading(true);
        try {
            const response = await api.post("post/search", {
                size: 10,
                userId: user.id, 
                content: "",
                visibility: 0,
                lastCreatedAt: lastCreatedAt,
            });

            const newPosts = response.data;
            setPosts((prev) => [...prev, ...newPosts]); // Thêm bài viết mới vào danh sách
            if (newPosts.length > 0) {
                setLastCreatedAt(newPosts[newPosts.length - 1].createdAt); // Cập nhật lastCreatedAt
            }
            console.log(newPosts);
        } catch (err) {
            console.error("Lỗi khi gọi API:", err);
        } finally {
            setLoading(false);
        }
    };
    // Infinite Scroll - Theo dõi phần tử cuối cùng
    const lastPostRef = (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchPosts();
                }
            },
            { threshold: 1.0 }
        );
        if (node) observer.current.observe(node);
    };

    // Gọi API lần đầu tiên khi có userId
    useEffect(() => {
        if (user?.id) fetchPosts();
    }, [user]);
    if (!user) {
        return <p>Đang tải dữ liệu người dùng...</p>;
    }
    const handlePostSubmit = async (postData) => {
        try {
            const formData = new FormData();
            formData.append("contents", postData.contents);
            formData.append("visibility", postData.visibility);
    
            // Thêm từng file ảnh vào formData
            postData.files.forEach((image, index) => {
                formData.append(`files`, image);
            });
            for (let [key, value] of formData.entries()) {
                console.log(`${key}:`, value);
            }
            const response = await api.post("/post", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            // const result = await response.json();
            if (response.status === 200) {
                console.log("post new ",response.data );
                setPosts((prevPosts) => [response.data, ...prevPosts]);
            }
            console.log("Kết quả từ API:", response.data);
        } catch (error) {
            console.error("Lỗi khi gửi bài viết:", error);
        }
    };
    
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header user={user} />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <NavProfile user={user} active="1" />
                    <div className="row sidebar-toggler">
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
                            <div className="d-inline-block d-lg-none">
                                <button className="gap-2 mb-4 button profile-active mb-lg-0 d-flex align-items-center">
                                    <i className="material-symbols-outlined mat-icon"> tune </i>
                                    <span>My profile</span>
                                </button>
                            </div>
                            <div className="p-5 profile-sidebar cus-scrollbar max-width">
                                <div className="top-0 d-block d-lg-none position-absolute end-0">
                                    <button className="button profile-close">
                                        <i className="material-symbols-outlined mat-icon fs-xl"> close </i>
                                    </button>
                                </div>
                                <div className="sidebar-area">
                                    <div className="mb-3">
                                        <h6 className="d-inline-flex">
                                            About
                                        </h6>
                                    </div>
                                    <p className="mdtxt descript"> {user.about}</p>
                                </div>
                                <div className="mt-5 sidebar-area">
                                    <div className="mb-2">
                                        <h6 className="d-inline-flex">
                                            Info
                                        </h6>
                                    </div>
                                    <ul className="gap-2 mt-4 d-grid">
                                        <li className="gap-2 d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> integration_instructions </i>
                                            <span className="mdtxt">Developer</span>
                                        </li>
                                        <li className="gap-2 d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> school </i>
                                            <span className="mdtxt">Master's degree</span>
                                        </li>
                                        <li className="gap-2 d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> flag </i>
                                            <span className="mdtxt link"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="81f5e4f2f5c1ece0e8edafe2eeec">[email&#160;protected]</a></span>
                                        </li>
                                        <li className="gap-2 d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> language </i>
                                            <span className="mdtxt link">www.wisoky.com</span>
                                        </li>
                                        <li className="gap-2 d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> call </i>
                                            <span className="mdtxt">(316) 555-0116</span>
                                        </li>
                                        <li className="gap-2 d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> pin_drop </i>
                                            <span className="mdtxt">USA</span>
                                        </li>
                                        <li className="gap-2 d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> house </i>
                                            <span className="mdtxt">775 Rolling Green Rd.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-0 col-xxl-6 col-xl-5 col-lg-8 mt-lg-10 mt-xl-0 d-flex flex-column gap-7 cus-z">
                            {/* đăng bài viết */}
                            <div className="gap-3 p-3 share-post d-flex gap-sm-5 p-sm-5">
                            
                                <form action="#" className="w-100 position-relative">
                                    <div className="flex justify-between align-items-center">
                                        <a href="#"><img src="src/assets/images/add-post-avatar.png" className="pr-3 max-un" alt="icon" /></a>
                                    <textarea onClick={() => setIsModalOpen(true)} cols="10" rows="1" placeholder="Write something to Lerio.."></textarea>
                                    </div>
                                    <div className="abs-area position-absolute d-none d-sm-block">
                                        <i className="material-symbols-outlined mat-icon xxltxt"> sentiment_satisfied </i>
                                    </div>
                                    <ul className="flex-wrap gap-3 mt-3 d-flex justify-content-between">
                                        <li className="gap-2 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#goLiveMod">
                                            <img src="src/assets/images/icon/live-video.png" className="max-un" alt="icon" />
                                            <span>Live</span>
                                        </li>
                                        <li className="gap-2 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#photoVideoMod">
                                            <img src="src/assets/images/icon/vgallery.png" className="max-un" alt="icon" />
                                            <span>Photo/Video</span>
                                        </li>
                                        <li className="gap-2 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#activityMod">
                                            <img src="src/assets/images/icon/emoji-laughing.png" className="max-un" alt="icon" />
                                            <span>Fallings/Activity</span>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            {/* lấy danh sách bài viết */}
                            <div className="gap-5 post-item d-flex flex-column gap-md-7" id="news-feed">
                                
                                {posts.map((post, index) => (
                                    <div key={post.id} ref={index === posts.length - 1 ? lastPostRef : null} className="p-3 post-single-box p-sm-5">
                                    <div className="pb-5 top-area">
                                        <div className="profile-area d-center justify-content-between">
                                            <div className="gap-3 avatar-item d-flex align-items-center">
                                                <div className="avatar position-relative">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar" />
                                                </div>
                                                <div className="info-area">
                                                    <h6 className="m-0"><a href="public-profile-post.html">{post.createdBy.fullName}</a></h6>
                                                    <span className="mdtxt status">{formatDistanceToNow(post.createdAt, { addSuffix: true, locale: vi })}</span>
                                                </div>
                                            </div>
                                            <div className="btn-group cus-dropdown">
                                                <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> bookmark_add </i>
                                                            <span>Saved Post</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> lock </i>
                                                            <span>Block</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                            <span>Hide Post</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> lock </i>
                                                            <span>Block</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> flag </i>
                                                            <span>Report</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="py-4">
                                            <p className="description">{post.contents}</p>
                                        </div>
                                       <PostImages image={post.image} />
                                    </div>
                                    <div className="flex-wrap gap-2 pb-4 total-react-share d-center justify-content-between">
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image" /></li>
                                                <li><span className="mdtxt d-center">{post.reactions}</span></li>
                                            </ul>
                                        </div>
                                        <div className="flex-wrap gap-6 text-center react-list d-flex align-items-center">
                                            <button className="mdtxt" >{post.comments} Comments</button>
                                            <button className="mdtxt">{post.shares} Shares</button>
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-3 py-5 like-comment-share d-center gap-md-0 justify-content-between">
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
                                            <i className="material-symbols-outlined mat-icon"> favorite </i>
                                            Like
                                        </button>
                                        <button className="gap-1 d-center gap-sm-2 mdtxt" onClick={() => handleOpenModal(post)}>
                                            <i className="material-symbols-outlined mat-icon"> chat </i>
                                            Comment
                                        </button>
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                            Share
                                        </button>
                                    </div>
                                    <form action="#">
                                        <div className="gap-3 mt-5 d-flex">
                                            <div className="profile-box d-none d-xxl-block">
                                                <a href="#"><img src="src/assets/images/add-post-avatar.png" className="max-un" alt="icon" /></a>
                                            </div>
                                            <div className="gap-2 py-1 form-content input-area d-flex align-items-center w-100">
                                                <input placeholder="Write a comment.." />
                                                <div className="gap-1 file-input d-flex gap-md-2">
                                                    <div className="file-upload">
                                                        <label className="file">
                                                            <input type="file" />
                                                            <span className="text-center border-0 file-custom d-grid">
                                                                <span className="m-0 material-symbols-outlined mat-icon xxltxt"> gif_box </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="file-upload">
                                                        <label className="file">
                                                            <input type="file" />
                                                            <span className="text-center border-0 file-custom d-grid">
                                                                <span className="m-0 material-symbols-outlined mat-icon xxltxt"> perm_media </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <span className="mood-area">
                                                        <span className="m-0 material-symbols-outlined mat-icon xxltxt"> mood </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="btn-area d-flex">
                                                <button className="px-2 cmn-btn px-sm-5 px-lg-6">
                                                    <i className="m-0 material-symbols-outlined mat-icon fs-xxl"> near_me </i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                ))}
                                {loading && <p>Loading more...</p>}
                            </div>
                        </div>
                        <div className="mt-5 col-xxl-3 col-xl-4 col-lg-4 col-6 mt-xl-0">
                            <div className="cus-overflow cus-scrollbar sidebar-head">
                                <div className="d-flex justify-content-end">
                                    <div className="d-block d-xl-none me-4">
                                        <button className="gap-2 mb-4 button toggler-btn mb-lg-0 d-flex align-items-center">
                                            <span>My List</span>
                                            <i className="material-symbols-outlined mat-icon"> tune </i>
                                        </button>
                                    </div>
                                </div>
                                <div className="cus-scrollbar side-wrapper">
                                    <div className="gap-6 sidebar-wrapper d-flex flex-column max-width">
                                        <div className="p-5 sidebar-area post-item">
                                            <div className="mb-3">
                                                <h6 className="d-inline-flex">
                                                    Photos
                                                </h6>
                                            </div>
                                            <div className="post-single-box">
                                                <div className="flex-wrap gap-2 post-img d-flex justify-content-between gap-lg-3">
                                                    <div className="gap-3 single d-grid">
                                                        <img src="src/assets/images/post-img-6.png" alt="image" />
                                                        <img src="src/assets/images/post-img-14.png" alt="image" />
                                                    </div>
                                                    <div className="gap-3 single d-grid">
                                                        <img src="src/assets/images/post-img-5.png" alt="image" />
                                                        <img src="src/assets/images/post-img-15.png" alt="image" />
                                                    </div>
                                                    <div className="gap-3 single d-flex">
                                                        <img src="src/assets/images/post-img-16.png" alt="image" />
                                                        <img src="src/assets/images/post-img-17.png" alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5 sidebar-area">
                                            <div className="mb-4">
                                                <h6 className="d-inline-flex">
                                                    Contact
                                                </h6>
                                            </div>
                                            <div className="gap-6 d-flex flex-column">
                                                <div className="profile-area d-center position-relative align-items-center justify-content-between">
                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-6.png" alt="avatar" />
                                                        </div>
                                                        <div className="info-area">
                                                            <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Piter Maio</a></h6>
                                                        </div>
                                                    </div>
                                                    <span className="mdtxt abs-area d-center position-absolute end-0">5</span>
                                                </div>
                                                <div className="profile-area d-center justify-content-between">
                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-7.png" alt="avatar" />
                                                        </div>
                                                        <div className="info-area">
                                                            <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Floyd Miles</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="btn-group cus-dropdown dropend">
                                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                        </button>
                                                        <ul className="p-4 pt-2 dropdown-menu">
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                    <span>Unfollow</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                    <span>Hide Contact</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="profile-area d-center justify-content-between">
                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-8.png" alt="avatar" />
                                                        </div>
                                                        <div className="info-area">
                                                            <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Darrell Steward</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="btn-group cus-dropdown dropend">
                                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                        </button>
                                                        <ul className="p-4 pt-2 dropdown-menu">
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                    <span>Unfollow</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                    <span>Hide Contact</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="profile-area d-center justify-content-between">
                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-2.png" alt="avatar" />
                                                        </div>
                                                        <div className="info-area">
                                                            <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Kristin Watson</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="btn-group cus-dropdown dropend">
                                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                        </button>
                                                        <ul className="p-4 pt-2 dropdown-menu">
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                    <span>Unfollow</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                    <span>Hide Contact</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="profile-area d-center justify-content-between">
                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-3.png" alt="avatar" />
                                                        </div>
                                                        <div className="info-area">
                                                            <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Jane Cooper</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="btn-group cus-dropdown dropend">
                                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                        </button>
                                                        <ul className="p-4 pt-2 dropdown-menu">
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                    <span>Unfollow</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                    <span>Hide Contact</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="profile-area d-center justify-content-between">
                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-4.png" alt="avatar" />
                                                        </div>
                                                        <div className="info-area">
                                                            <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Devon Lane</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="btn-group cus-dropdown dropend">
                                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                        </button>
                                                        <ul className="p-4 pt-2 dropdown-menu">
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                    <span>Unfollow</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                    <span>Hide Contact</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="profile-area d-center justify-content-between">
                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-9.png" alt="avatar" />
                                                        </div>
                                                        <div className="info-area">
                                                            <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Annette Black</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="btn-group cus-dropdown dropend">
                                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                        </button>
                                                        <ul className="p-4 pt-2 dropdown-menu">
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                    <span>Unfollow</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                    <span>Hide Contact</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="profile-area d-center justify-content-between">
                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-10.png" alt="avatar" />
                                                        </div>
                                                        <div className="info-area">
                                                            <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Jerome Bell</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="btn-group cus-dropdown dropend">
                                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                        </button>
                                                        <ul className="p-4 pt-2 dropdown-menu">
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                    <span>Unfollow</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                    <span>Hide Contact</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="profile-area d-center justify-content-between">
                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-11.png" alt="avatar" />
                                                        </div>
                                                        <div className="info-area">
                                                            <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Guy Hawkins</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="btn-group cus-dropdown dropend">
                                                        <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                        </button>
                                                        <ul className="p-4 pt-2 dropdown-menu">
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                    <span>Unfollow</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                    <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                    <span>Hide Contact</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handlePostSubmit}
                user={user} // Truyền hàm xử lý xuống modal
            />
            {selectedPost && (
                <CommentModal
                isOpen={isModalOpenPost}
                onClose={() => setIsModalOpenPost(false)}
                post={selectedPost}
                />
            )}
        </div>
    )
}
