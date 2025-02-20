import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import NavProfile from "../../components/NavProfile.jsx";


export default function ProfilePost() {
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header  />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <NavProfile active="1" />
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
                                    <p className="mdtxt descript">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
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
                            <div className="gap-5 post-item d-flex flex-column gap-md-7" id="news-feed">
                                <div className="p-3 post-single-box p-sm-5">
                                    <div className="pb-5 top-area">
                                        <div className="profile-area d-center justify-content-between">
                                            <div className="gap-3 avatar-item d-flex align-items-center">
                                                <div className="avatar position-relative">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar" />
                                                </div>
                                                <div className="info-area">
                                                    <h6 className="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                    <span className="mdtxt status">Active</span>
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
                                            <p className="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                        </div>
                                        <div className="post-img">
                                            <img src="src/assets/images/post-img-1.png" className="w-100" alt="image" />
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-2 pb-4 total-react-share d-center justify-content-between">
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image" /></li>
                                                <li><span className="mdtxt d-center">8+</span></li>
                                            </ul>
                                        </div>
                                        <div className="flex-wrap gap-6 text-center react-list d-flex align-items-center">
                                            <button className="mdtxt">4 Comments</button>
                                            <button className="mdtxt">1 Shares</button>
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-3 py-5 like-comment-share d-center gap-md-0 justify-content-between">
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
                                            <i className="material-symbols-outlined mat-icon"> favorite </i>
                                            Like
                                        </button>
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
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
                                <div className="p-3 post-single-box p-sm-5">
                                    <div className="pb-5 top-area">
                                        <div className="profile-area d-center justify-content-between">
                                            <div className="gap-3 avatar-item d-flex align-items-center">
                                                <div className="avatar position-relative">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar" />
                                                </div>
                                                <div className="info-area">
                                                    <h6 className="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                    <span className="mdtxt status">Active</span>
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
                                            <p className="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                        </div>
                                        <div className="flex-wrap gap-2 post-img d-flex justify-content-between gap-lg-3">
                                            <div className="single">
                                                <img src="src/assets/images/post-img-2.png" alt="image" />
                                            </div>
                                            <div className="gap-3 single d-grid">
                                                <img src="src/assets/images/post-img-3.png" alt="image" />
                                                <img src="src/assets/images/post-img-4.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-2 pb-4 total-react-share d-center justify-content-between">
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image" /></li>
                                                <li><span className="mdtxt d-center">8+</span></li>
                                            </ul>
                                        </div>
                                        <div className="flex-wrap gap-6 text-center react-list d-flex align-items-center">
                                            <button className="mdtxt">4 Comments</button>
                                            <button className="mdtxt">1 Shares</button>
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-3 py-5 like-comment-share d-center gap-md-0 justify-content-between">
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
                                            <i className="material-symbols-outlined mat-icon"> favorite </i>
                                            Like
                                        </button>
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
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
                                    <div className="mt-5 comments-area">
                                        <div className="single-comment-area ms-1 ms-xxl-15">
                                            <div className="gap-2 parent-comment d-flex gap-sm-4">
                                                <div className="avatar-item d-center align-items-baseline">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-3.png" alt="avatar" />
                                                </div>
                                                <div className="info-item">
                                                    <div className="gap-3 px-4 py-3 top-area d-flex align-items-start justify-content-between">
                                                        <div className="title-area">
                                                            <h6 className="m-0 mb-3"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                            <p className="mdtxt">The only way to solve the problem is to code for the hardware directly</p>
                                                        </div>
                                                        <div className="btn-group dropend cus-dropdown">
                                                            <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                            </button>
                                                            <ul className="p-4 pt-2 dropdown-menu">
                                                                <li>
                                                                    <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                        <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                        <span>Hide Comments</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                        <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                        <span>Report Comments</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="gap-6 mt-2 like-share d-flex">
                                                        <li className="d-center">
                                                            <button className="mdtxt">Like</button>
                                                        </li>
                                                        <li className="d-center flex-column">
                                                            <button className="mdtxt reply-btn">Reply</button>
                                                        </li>
                                                        <li className="d-center">
                                                            <button className="mdtxt">Share</button>
                                                        </li>
                                                    </ul>
                                                    <form action="#" className="comment-form">
                                                        <div className="gap-3 d-flex">
                                                            <input placeholder="Write a comment.." className="py-3" />
                                                            <button className="px-2 cmn-btn px-sm-5 px-lg-6">
                                                                <i className="m-0 material-symbols-outlined mat-icon fs-xxl"> near_me </i>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="mt-4 single-comment-area comment-item-nested mt-sm-7 ms-13 ms-sm-15">
                                                <div className="gap-2 d-flex gap-sm-4 align-items-baseline">
                                                    <div className="avatar-item">
                                                        <img className="avatar-img max-un" src="src/assets/images/avatar-4.png" alt="avatar" />
                                                    </div>
                                                    <div className="info-item">
                                                        <div className="gap-3 px-4 py-3 top-area d-flex align-items-start justify-content-between">
                                                            <div className="title-area">
                                                                <h6 className="m-0 mb-3"><a href="public-profile-post.html">Alex</a></h6>
                                                                <p className="mdtxt">The only way to solve the</p>
                                                            </div>
                                                            <div className="btn-group dropend cus-dropdown">
                                                                <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                            <span>Hide Comments</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                            <span>Report Comments</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ul className="gap-6 mt-2 like-share d-flex">
                                                            <li className="d-center">
                                                                <button className="mdtxt">Like</button>
                                                            </li>
                                                            <li className="d-center flex-column">
                                                                <button className="mdtxt reply-btn">Reply</button>
                                                            </li>
                                                            <li className="d-center">
                                                                <button className="mdtxt">Share</button>
                                                            </li>
                                                        </ul>
                                                        <form action="#" className="comment-form">
                                                            <div className="gap-3 d-flex">
                                                                <input placeholder="Write a comment.." className="py-3" />
                                                                <button className="px-2 cmn-btn px-sm-5 px-lg-6">
                                                                    <i className="m-0 material-symbols-outlined mat-icon fs-xxl"> near_me </i>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 post-single-box p-sm-5">
                                    <div className="pb-5 top-area">
                                        <div className="profile-area d-center justify-content-between">
                                            <div className="gap-3 avatar-item d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-5.png" alt="avatar" />
                                                </div>
                                                <div className="info-area">
                                                    <h6 className="m-0"><a href="public-profile-post.html">Loprayos</a></h6>
                                                    <span className="mdtxt status">20m Ago</span>
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
                                            <p className="description">Nam ornare a nibh id sagittis. Vestibulum nec molestie urna, eget convallis mi. Vestibulum rhoncus ligula eget sem sollicitudin interdum. Aliquam massa lectus, fringilla non diam ut, laoreet convallis risus. Curabitur at metus imperdiet, pellentesque ligula vel,</p>
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-2 pb-4 total-react-share d-center justify-content-between">
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image" /></li>
                                                <li><span className="mdtxt d-center">8+</span></li>
                                            </ul>
                                        </div>
                                        <div className="flex-wrap gap-6 text-center react-list d-flex align-items-center">
                                            <button className="mdtxt">4 Comments</button>
                                            <button className="mdtxt">1 Shares</button>
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-3 py-5 like-comment-share d-center gap-md-0 justify-content-between">
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
                                            <i className="material-symbols-outlined mat-icon"> favorite </i>
                                            Like
                                        </button>
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
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
                                    <div className="mt-5 comments-area">
                                        <div className="single-comment-area ms-1 ms-xxl-15">
                                            <div className="gap-2 parent-comment d-flex gap-sm-4">
                                                <div className="avatar-item d-center align-items-baseline">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-3.png" alt="avatar" />
                                                </div>
                                                <div className="info-item active">
                                                    <div className="gap-3 px-4 py-3 top-area d-flex align-items-start justify-content-between">
                                                        <div className="title-area">
                                                            <h6 className="m-0 mb-3"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                            <p className="mdtxt">The only way to solve the problem is to code for the hardware directly</p>
                                                        </div>
                                                        <div className="btn-group dropend cus-dropdown">
                                                            <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                            </button>
                                                            <ul className="p-4 pt-2 dropdown-menu">
                                                                <li>
                                                                    <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                        <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                        <span>Hide Comments</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                        <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                        <span>Report Comments</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="gap-6 mt-2 like-share d-flex">
                                                        <li className="d-center">
                                                            <button className="mdtxt">Like</button>
                                                        </li>
                                                        <li className="d-center flex-column">
                                                            <button className="mdtxt reply-btn">Reply</button>
                                                        </li>
                                                        <li className="d-center">
                                                            <button className="mdtxt">Share</button>
                                                        </li>
                                                    </ul>
                                                    <form action="#" className="comment-form">
                                                        <div className="gap-3 d-flex">
                                                            <input placeholder="Write a comment.." className="py-3" />
                                                            <button className="px-2 cmn-btn px-sm-5 px-lg-6">
                                                                <i className="m-0 material-symbols-outlined mat-icon fs-xxl"> near_me </i>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="sibling-comment comment-item-nested single-comment-area mt-7 ms-13 ms-sm-15">
                                                <div className="gap-2 d-flex gap-sm-4 align-items-baseline">
                                                    <div className="avatar-item">
                                                        <img className="avatar-img max-un" src="src/assets/images/avatar-4.png" alt="avatar" />
                                                    </div>
                                                    <div className="info-item">
                                                        <div className="gap-3 px-4 py-3 top-area d-flex align-items-start justify-content-between">
                                                            <div className="title-area">
                                                                <h6 className="m-0 mb-3"><a href="public-profile-post.html">Alexa</a></h6>
                                                                <p className="mdtxt">The only way to solve the</p>
                                                            </div>
                                                            <div className="btn-group dropend cus-dropdown">
                                                                <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                            <span>Hide Comments</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                            <span>Report Comments</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ul className="gap-6 mt-2 like-share d-flex">
                                                            <li className="d-center">
                                                                <button className="mdtxt">Like</button>
                                                            </li>
                                                            <li className="d-center flex-column">
                                                                <button className="mdtxt reply-btn">Reply</button>
                                                            </li>
                                                            <li className="d-center">
                                                                <button className="mdtxt">Share</button>
                                                            </li>
                                                        </ul>
                                                        <form action="#" className="comment-form">
                                                            <div className="gap-3 d-flex">
                                                                <input placeholder="Write a comment.." className="py-3" />
                                                                <button className="px-2 cmn-btn px-sm-5 px-lg-6">
                                                                    <i className="m-0 material-symbols-outlined mat-icon fs-xxl"> near_me </i>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-comment-area comment-item-nested mt-7 ms-13 ms-sm-15">
                                                <div className="gap-2 d-flex gap-sm-4 align-items-baseline">
                                                    <div className="avatar-item">
                                                        <img className="avatar-img max-un" src="src/assets/images/avatar-7.png" alt="avatar" />
                                                    </div>
                                                    <div className="info-item">
                                                        <div className="gap-3 px-4 py-3 top-area d-flex align-items-start justify-content-between">
                                                            <div className="title-area">
                                                                <h6 className="m-0 mb-3"><a href="public-profile-post.html">Haplika</a></h6>
                                                                <p className="mdtxt">The only way to solve the</p>
                                                            </div>
                                                            <div className="btn-group dropend cus-dropdown">
                                                                <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                            <span>Hide Comments</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                            <span>Report Comments</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ul className="gap-6 mt-2 like-share d-flex">
                                                            <li className="d-center">
                                                                <button className="mdtxt">Like</button>
                                                            </li>
                                                            <li className="d-center flex-column">
                                                                <button className="mdtxt reply-btn">Reply</button>
                                                            </li>
                                                            <li className="d-center">
                                                                <button className="mdtxt">Share</button>
                                                            </li>
                                                        </ul>
                                                        <form action="#" className="comment-form">
                                                            <div className="gap-3 d-flex">
                                                                <input placeholder="Write a comment.." className="py-3" />
                                                                <button className="px-2 cmn-btn px-sm-5 px-lg-6">
                                                                    <i className="m-0 material-symbols-outlined mat-icon fs-xxl"> near_me </i>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 comments-area">
                                        <div className="single-comment-area ms-1 ms-xxl-15">
                                            <div className="gap-4 d-flex">
                                                <div className="avatar-item d-center align-items-baseline">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-3.png" alt="avatar" />
                                                </div>
                                                <div className="info-item w-100">
                                                    <div className="gap-3 px-4 py-3 top-area d-flex align-items-start justify-content-between">
                                                        <div className="title-area">
                                                            <h6 className="m-0 mb-3"><a href="public-profile-post.html">Marlio</a></h6>
                                                            <div className="post-img">
                                                                <img src="src/assets/images/icon/emoji-love-2.png" alt="icon" />
                                                            </div>
                                                        </div>
                                                        <div className="btn-group dropend cus-dropdown">
                                                            <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                            </button>
                                                            <ul className="p-4 pt-2 dropdown-menu">
                                                                <li>
                                                                    <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                        <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                        <span>Hide Comments</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                        <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                        <span>Report Comments</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="gap-6 mt-2 like-share d-flex">
                                                        <li className="d-center">
                                                            <button className="mdtxt">Like</button>
                                                        </li>
                                                        <li className="d-center flex-column">
                                                            <button className="mdtxt reply-btn">Reply</button>
                                                        </li>
                                                        <li className="d-center">
                                                            <button className="mdtxt">Share</button>
                                                        </li>
                                                    </ul>
                                                    <form action="#" className="comment-form">
                                                        <div className="gap-3 d-flex">
                                                            <input placeholder="Write a comment.." className="py-3" />
                                                            <button className="px-2 cmn-btn px-sm-5 px-lg-6">
                                                                <i className="m-0 material-symbols-outlined mat-icon fs-xxl"> near_me </i>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 post-single-box p-sm-5">
                                    <div className="pb-5 top-area">
                                        <div className="profile-area d-center justify-content-between">
                                            <div className="gap-3 avatar-item d-flex align-items-center">
                                                <div className="avatar position-relative">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar" />
                                                </div>
                                                <div className="info-area">
                                                    <h6 className="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                    <span className="mdtxt status">Active</span>
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
                                            <p className="description">My Travel Video</p>
                                            <p className="gap-2 hastag d-flex">
                                                <a href="#">#Viral</a>
                                                <a href="#">#travel</a>
                                            </p>
                                        </div>
                                        <div className="post-img">
                                            <iframe width="100%" height="232" src="https://www.youtube.com/embed/lRsaDQtYqAo?si=Xm3HMZgbP-LYZieJ"></iframe>
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-2 pb-4 total-react-share d-center justify-content-between">
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image" /></li>
                                                <li><span className="mdtxt d-center">8+</span></li>
                                            </ul>
                                        </div>
                                        <div className="flex-wrap gap-6 text-center react-list d-flex align-items-center">
                                            <button className="mdtxt">4 Comments</button>
                                            <button className="mdtxt">1 Shares</button>
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-3 py-5 like-comment-share d-center gap-md-0 justify-content-between">
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
                                            <i className="material-symbols-outlined mat-icon"> favorite </i>
                                            Like
                                        </button>
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
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
                                <div className="p-3 post-single-box p-sm-5">
                                    <div className="pb-5 top-area">
                                        <div className="profile-area d-center justify-content-between">
                                            <div className="gap-3 avatar-item d-flex align-items-center">
                                                <div className="avatar position-relative">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar" />
                                                </div>
                                                <div className="info-area">
                                                    <h6 className="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                    <span className="mdtxt status">Active</span>
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
                                            <p className="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                        </div>
                                        <div className="post-img">
                                            <img src="src/assets/images/post-img-1.png" className="w-100" alt="image" />
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-2 pb-4 total-react-share d-center justify-content-between">
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image" /></li>
                                                <li><span className="mdtxt d-center">8+</span></li>
                                            </ul>
                                        </div>
                                        <div className="flex-wrap gap-6 text-center react-list d-flex align-items-center">
                                            <button className="mdtxt">4 Comments</button>
                                            <button className="mdtxt">1 Shares</button>
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-3 py-5 like-comment-share d-center gap-md-0 justify-content-between">
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
                                            <i className="material-symbols-outlined mat-icon"> favorite </i>
                                            Like
                                        </button>
                                        <button className="gap-1 d-center gap-sm-2 mdtxt">
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
        </div>
    )
}
