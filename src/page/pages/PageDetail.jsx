import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import MyProfile from "../../components/MyProfile.jsx";

export default function PageDetail() {
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <div className="row">
                        <MyProfile hide={true} index={4} />
                        <div className="col-xl-9 col-lg-8">
                            <div className="mb-5 banner-area pages-create">
                                <div className="p-5 single-box">
                                    <div className="avatar-area">
                                        <img className="avatar-img w-100" src="/src/assets/images/page-cover-img.png" alt="image" />
                                    </div>
                                    <div className="flex-wrap gap-3 py-4 top-area d-center justify-content-between">
                                        <div className="gap-3 d-flex align-items-center">
                                            <div className="avatar-item p">
                                                <img className="avatar-img max-un" src="/src/assets/images/page-avatar-1.png" alt="avatar" />
                                            </div>
                                            <div className="text-area text-start">
                                                <h6 className="m-0 mb-1">Travel Moon</h6>
                                                <p className="mdtxt">Travel-30k Liked</p>
                                            </div>
                                        </div>
                                        <div className="gap-3 btn-item d-center">
                                            <a href="#" className="gap-1 cmn-btn">
                                                Liked
                                            </a>
                                            <a href="#" className="gap-1 cmn-btn third">
                                                <i className="material-symbols-outlined mat-icon fs-xl"> add_box </i>
                                                Invite
                                            </a>
                                            <div className="btn-group cus-dropdown dropend">
                                                <button type="button" className="px-2 dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                            <span>Hide</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-wrap gap-2 text-center friends-list d-flex align-items-center">
                                        <ul className="d-flex align-items-center justify-content-center">
                                            <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                            <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                            <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
                                            <li><img src="/src/assets/images/avatar-5.png" alt="image" /></li>
                                            <li><img src="/src/assets/images/avatar-6.png" alt="image" /></li>
                                            <li><img src="/src/assets/images/avatar-7.png" alt="image" /></li>
                                            <li><img src="/src/assets/images/avatar-8.png" alt="image" /></li>
                                            <li><img src="/src/assets/images/avatar-9.png" alt="image" /></li>
                                            <li><img src="/src/assets/images/avatar-10.png" alt="image" /></li>
                                        </ul>
                                        <span className="mdtxt d-center">Rezeka, Martiola, Larmjio, and 10+ more</span>
                                    </div>
                                    <div className="page-details">
                                        <ul className="flex-wrap gap-2 pt-4 mt-5 nav tab-area" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link d-center active" id="feed-tab" data-bs-toggle="tab" data-bs-target="#feed-tab-pane"
                                                    type="button" role="tab" aria-controls="feed-tab-pane" aria-selected="true">feed</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link d-center" id="about-tab" data-bs-toggle="tab" data-bs-target="#about-tab-pane"
                                                    type="button" role="tab" aria-controls="about-tab-pane" aria-selected="false">about</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link d-center" id="connections-tab" data-bs-toggle="tab" data-bs-target="#connections-tab-pane"
                                                    type="button" role="tab" aria-controls="connections-tab-pane" aria-selected="false">connections</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link d-center" id="media-tab" data-bs-toggle="tab" data-bs-target="#media-tab-pane"
                                                    type="button" role="tab" aria-controls="media-tab-pane" aria-selected="false">media</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link d-center" id="videos-tab" data-bs-toggle="tab" data-bs-target="#videos-tab-pane"
                                                    type="button" role="tab" aria-controls="videos-tab-pane" aria-selected="false">videos</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="feed-tab-pane" role="tabpanel" aria-labelledby="feed-tab" tabindex="0">
                                    <div className="row">
                                        <div className="col-xxl-8 col-xl-8 col-lg-12 d-flex flex-column gap-7">
                                            <div className="gap-5 post-item d-flex flex-column gap-md-7">
                                                <div className="p-3 post-single-box p-sm-5">
                                                    <div className="pb-5 top-area">
                                                        <div className="profile-area d-center justify-content-between">
                                                            <div className="gap-3 avatar-item d-flex align-items-center">
                                                                <div className="avatar position-relative">
                                                                    <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
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
                                                                            <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                            <span>Unfollow</span>
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
                                                                            <span>Report Post</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-4">
                                                            <p className="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                                        </div>
                                                        <div className="post-img">
                                                            <img src="/src/assets/images/post-img-1.png" className="w-100" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-wrap gap-2 pb-4 total-react-share d-center justify-content-between">
                                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                                            <ul className="d-flex align-items-center justify-content-center">
                                                                <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
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
                                                                <a href="#"><img src="/src/assets/images/add-post-avatar.png" className="max-un" alt="icon" /></a>
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
                                                                    <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
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
                                                                            <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                            <span>Unfollow</span>
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
                                                                            <span>Report Post</span>
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
                                                                <img src="/src/assets/images/post-img-2.png" alt="image" />
                                                            </div>
                                                            <div className="gap-3 single d-grid">
                                                                <img src="/src/assets/images/post-img-3.png" alt="image" />
                                                                <img src="/src/assets/images/post-img-4.png" alt="image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-wrap gap-2 pb-4 total-react-share d-center justify-content-between">
                                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                                            <ul className="d-flex align-items-center justify-content-center">
                                                                <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
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
                                                                <a href="#"><img src="/src/assets/images/add-post-avatar.png" className="max-un" alt="icon" /></a>
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
                                                                    <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar" />
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
                                                                        <img className="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar" />
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
                                                                    <img className="avatar-img max-un" src="/src/assets/images/avatar-5.png" alt="avatar" />
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
                                                                            <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                            <span>Unfollow</span>
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
                                                                            <span>Report Post</span>
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
                                                                <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
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
                                                                <a href="#"><img src="/src/assets/images/add-post-avatar.png" className="max-un" alt="icon" /></a>
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
                                                                    <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar" />
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
                                                                        <img className="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar" />
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
                                                                        <img className="avatar-img max-un" src="/src/assets/images/avatar-7.png" alt="avatar" />
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
                                                                    <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar" />
                                                                </div>
                                                                <div className="info-item w-100">
                                                                    <div className="gap-3 px-4 py-3 top-area d-flex align-items-start justify-content-between">
                                                                        <div className="title-area">
                                                                            <h6 className="m-0 mb-3"><a href="public-profile-post.html">Marlio</a></h6>
                                                                            <div className="post-img">
                                                                                <img src="/src/assets/images/icon/emoji-love-2.png" alt="icon" />
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
                                                                    <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
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
                                                                            <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                            <span>Unfollow</span>
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
                                                                            <span>Report Post</span>
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
                                                            <iframe width="100%" height="347" src="https://www.youtube.com/embed/lRsaDQtYqAo?si=Xm3HMZgbP-LYZieJ"></iframe>
                                                        </div>
                                                    </div>
                                                    <div className="flex-wrap gap-2 pb-4 total-react-share d-center justify-content-between">
                                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                                            <ul className="d-flex align-items-center justify-content-center">
                                                                <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
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
                                                                <a href="#"><img src="/src/assets/images/add-post-avatar.png" className="max-un" alt="icon" /></a>
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
                                                                    <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
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
                                                                            <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                            <span>Unfollow</span>
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
                                                                            <span>Report Post</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="py-4">
                                                            <p className="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                                        </div>
                                                        <div className="post-img">
                                                            <img src="/src/assets/images/post-img-1.png" className="w-100" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-wrap gap-2 pb-4 total-react-share d-center justify-content-between">
                                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                                            <ul className="d-flex align-items-center justify-content-center">
                                                                <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
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
                                                                <a href="#"><img src="/src/assets/images/add-post-avatar.png" className="max-un" alt="icon" /></a>
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
                                        <div className="mt-5 col-xxl-4 col-xl-4 col-lg-10 mt-xl-0">
                                            <div className="cus-scrollbar">
                                                <div className="flex flex-wrap gap-6 sidebar-wrapper d-flex al-item justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column">
                                                    <div className="p-5 sidebar-area">
                                                        <div className="mb-3">
                                                            <h6 className="d-inline-flex">
                                                                Info
                                                            </h6>
                                                        </div>
                                                        <ul className="gap-2 mt-5 d-grid">
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span className="mdtxt">Page- Travel Agency</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt">Public</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span className="mdtxt link"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1d69786e695d707c7471337e7270">[email&#160;protected]</a></span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt link">www.wisoky.com</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> call </i>
                                                                <span className="mdtxt">(316) 555-0116</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="p-5 sidebar-area">
                                                        <div className="mb-3">
                                                            <h6 className="d-inline-flex">
                                                                About
                                                            </h6>
                                                        </div>
                                                        <p className="mdtxt descript">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
                                                        <ul className="gap-2 mt-5 d-grid">
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span className="mdtxt">Always</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span className="mdtxt">31k Member</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt">Public</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="p-5 sidebar-area post-item">
                                                        <div className="mb-3">
                                                            <h6 className="d-inline-flex">
                                                                Photos
                                                            </h6>
                                                        </div>
                                                        <div className="post-single-box">
                                                            <div className="flex-wrap gap-2 post-img d-flex justify-content-between gap-lg-3">
                                                                <div className="gap-3 single d-grid">
                                                                    <img src="/src/assets/images/post-img-6.png" alt="image" />
                                                                    <img src="/src/assets/images/post-img-5.png" alt="image" />
                                                                </div>
                                                                <div className="gap-3 single d-grid">
                                                                    <img src="/src/assets/images/post-img-6.png" alt="image" />
                                                                    <img src="/src/assets/images/post-img-5.png" alt="image" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab-pane" role="tabpanel" aria-labelledby="about-tab" tabindex="0">
                                    <div className="row">
                                        <div className="col-xxl-8 col-xl-7">
                                            <div className="p-3 single-box p-sm-5">
                                                <div className="head-area text-start">
                                                    <h6>Bio</h6>
                                                    <p className="mt-6 mdtxt">“Lorem ipsum dolor sit amet consectetur. Nec donec vestibulum eleifend lectus ipsum ultrices et dictum”.</p>
                                                </div>
                                                <ul className="gap-3 mt-4 d-grid">
                                                    <li className="gap-3 d-center justify-content-between">
                                                        <div className="gap-2 info-area d-flex align-items-center">
                                                            <i className="material-symbols-outlined mat-icon"> integration_instructions </i>
                                                            <span className="mdtxt">Developer</span>
                                                        </div>
                                                        <div className="input-item d-center text-start">
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="gap-3 d-center justify-content-between">
                                                        <div className="gap-2 info-area d-flex align-items-center">
                                                            <i className="material-symbols-outlined mat-icon"> school </i>
                                                            <span className="mdtxt">Master's degree</span>
                                                        </div>
                                                        <div className="input-item d-center text-start">
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="gap-3 d-center justify-content-between">
                                                        <div className="gap-2 info-area d-flex align-items-center">
                                                            <i className="material-symbols-outlined mat-icon"> flag </i>
                                                            <span className="mdtxt link"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0377667077436e626a6f2d606c6e">[email&#160;protected]</a></span>
                                                        </div>
                                                        <div className="input-item d-center text-start">
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="gap-3 d-center justify-content-between">
                                                        <div className="gap-2 info-area d-flex align-items-center">
                                                            <i className="material-symbols-outlined mat-icon"> language </i>
                                                            <span className="mdtxt link">www.wisoky.com</span>
                                                        </div>
                                                        <div className="input-item d-center text-start">
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="gap-3 d-center justify-content-between">
                                                        <div className="gap-2 info-area d-flex align-items-center">
                                                            <i className="material-symbols-outlined mat-icon"> call </i>
                                                            <span className="mdtxt">(316) 555-0116</span>
                                                        </div>
                                                        <div className="input-item d-center text-start">
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="gap-3 d-center justify-content-between">
                                                        <div className="gap-2 info-area d-flex align-items-center">
                                                            <i className="material-symbols-outlined mat-icon"> pin_drop </i>
                                                            <span className="mdtxt">USA</span>
                                                        </div>
                                                        <div className="input-item d-center text-start">
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="gap-3 d-center justify-content-between">
                                                        <div className="gap-2 info-area d-flex align-items-center">
                                                            <i className="material-symbols-outlined mat-icon"> house </i>
                                                            <span className="mdtxt">775 Rolling Green Rd.</span>
                                                        </div>
                                                        <div className="input-item d-center text-start">
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="group-btn cus-dropdown dropend">
                                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                                </button>
                                                                <ul className="p-4 pt-2 dropdown-menu">
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-5 col-xxl-4 col-xl-5 col-lg-10 mt-xl-0">
                                            <div className="cus-scrollbar">
                                                <div className="flex flex-wrap gap-6 sidebar-wrapper d-flex al-item justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column">
                                                    <div className="p-5 sidebar-area">
                                                        <div className="mb-3">
                                                            <h6 className="d-inline-flex">
                                                                Info
                                                            </h6>
                                                        </div>
                                                        <ul className="gap-2 mt-5 d-grid">
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span className="mdtxt">Page- Travel Agency</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt">Public</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span className="mdtxt link"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="deaabbadaa9eb3bfb7b2f0bdb1b3">[email&#160;protected]</a></span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt link">www.wisoky.com</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> call </i>
                                                                <span className="mdtxt">(316) 555-0116</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="p-5 sidebar-area">
                                                        <div className="mb-3">
                                                            <h6 className="d-inline-flex">
                                                                About
                                                            </h6>
                                                        </div>
                                                        <p className="mdtxt">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
                                                        <ul className="gap-2 mt-5 d-grid">
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span className="mdtxt">Always</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span className="mdtxt">31k Member</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt">Public</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="connections-tab-pane" role="tabpanel" aria-labelledby="connections-tab" tabindex="0">
                                    <div className="row">
                                        <div className="col-xxl-8">
                                            <div className="p-5 single-box">
                                                <ul className="flex-wrap gap-2 nav tab-area" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link d-center active" id="followers-tab" data-bs-toggle="tab" data-bs-target="#followers-tab-pane" type="button" role="tab" aria-controls="followers-tab-pane" aria-selected="true">followers</button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="following-tab" data-bs-toggle="tab" data-bs-target="#following-tab-pane" type="button" role="tab" aria-controls="following-tab-pane" aria-selected="false" tabindex="-1">following</button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="followers-tab-pane" role="tabpanel" aria-labelledby="followers-tab" tabindex="0">
                                                    <div className="flex-wrap gap-2 search-area d-center my-7 justify-content-between">
                                                        <div className="total-followers">
                                                            <h6>30k Followers</h6>
                                                        </div>
                                                        <form action="#" className="gap-4 d-flex align-items-stretch justify-content-between">
                                                            <div className="gap-2 py-2 input-area w-100 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon">search</i>
                                                                <input type="text" placeholder="Search" autocomplete="off" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-1.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Cameron Williamson</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-2.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Esther Howard</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-3.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Brooklyn Simmons</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-4.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Courtney Henry</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-5.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Eleanor Pena</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-6.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Arlene McCoy</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-7.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Devon Lane</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-8.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Ronald Richards</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-9.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Kathryn Murphy</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-10.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="#">Darrell Steward</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-11.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Guy Hawkins</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-12.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="#">Floyd Miles</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-13.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Cameron Williamson</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-14.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Wade Warren</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="my-5 text-center col-12">
                                                            <button className="cmn-btn alt third fw-600">Load More</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="following-tab-pane" role="tabpanel" aria-labelledby="following-tab" tabindex="0">
                                                    <div className="flex-wrap gap-2 search-area d-center my-7 justify-content-between">
                                                        <div className="total-followers">
                                                            <h6>30k Followers</h6>
                                                        </div>
                                                        <form action="#" className="gap-4 d-flex align-items-stretch justify-content-between">
                                                            <div className="gap-2 py-2 input-area w-100 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon">search</i>
                                                                <input type="text" placeholder="Search" autocomplete="off" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-6.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Arlene McCoy</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-7.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Devon Lane</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-8.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Ronald Richards</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-9.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Kathryn Murphy</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-3.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Brooklyn Simmons</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-13.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Cameron Williamson</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="col-md-6">
                                                            <div className="p-3 single-box member-single">
                                                                <div className="profile-area d-center justify-content-between">
                                                                    <div className="gap-3 avatar-item d-flex align-items-center">
                                                                        <div className="avatar-item">
                                                                            <img className="avatar-img max-un" src="/src/assets/images/followers-img-14.png" alt="avatar" />
                                                                        </div>
                                                                        <div className="info-area text-start">
                                                                            <h6 className="m-0"><a href="public-profile-post.html">Wade Warren</a></h6>
                                                                            <p className="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="group-btn cus-dropdown">
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
                                                        <div className="my-5 text-center col-12">
                                                            <button className="cmn-btn alt third fw-600">Load More</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 col-xxl-4 col-lg-10 mt-xl-0">
                                            <div className="cus-scrollbar">
                                                <div className="flex flex-wrap gap-6 sidebar-wrapper d-flex al-item justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column">
                                                    <div className="p-5 sidebar-area">
                                                        <div className="mb-3">
                                                            <h6 className="d-inline-flex">
                                                                Info
                                                            </h6>
                                                        </div>
                                                        <ul className="gap-2 mt-5 d-grid">
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span className="mdtxt">Page- Travel Agency</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt">Public</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span className="mdtxt link"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="add9c8ded9edc0ccc4c183cec2c0">[email&#160;protected]</a></span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt link">www.wisoky.com</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> call </i>
                                                                <span className="mdtxt">(316) 555-0116</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="p-5 sidebar-area">
                                                        <div className="mb-3">
                                                            <h6 className="d-inline-flex">
                                                                About
                                                            </h6>
                                                        </div>
                                                        <p className="mdtxt">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
                                                        <ul className="gap-2 mt-5 d-grid">
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span className="mdtxt">Always</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span className="mdtxt">31k Member</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt">Public</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="media-tab-pane" role="tabpanel" aria-labelledby="media-tab" tabindex="0">
                                    <div className="row">
                                        <div className="col-xxl-8">
                                            <div className="p-5 single-box">
                                                <div className="row cus-mar">
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-1.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-2.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-3.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-4.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-5.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-6.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-7.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-8.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-9.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-10.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-11.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <div className="single-box">
                                                            <img className="w-100" src="/src/assets/images/photo-gallery-12.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 col-xxl-4 col-lg-10 mt-xl-0">
                                            <div className="cus-scrollbar">
                                                <div className="flex flex-wrap gap-6 sidebar-wrapper d-flex al-item justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column">
                                                    <div className="p-5 sidebar-area">
                                                        <div className="mb-3">
                                                            <h6 className="d-inline-flex">
                                                                Info
                                                            </h6>
                                                        </div>
                                                        <ul className="gap-2 mt-5 d-grid">
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span className="mdtxt">Page- Travel Agency</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt">Public</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span className="mdtxt link"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="aedacbdddaeec3cfc7c280cdc1c3">[email&#160;protected]</a></span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt link">www.wisoky.com</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> call </i>
                                                                <span className="mdtxt">(316) 555-0116</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="p-5 sidebar-area">
                                                        <div className="mb-3">
                                                            <h6 className="d-inline-flex">
                                                                About
                                                            </h6>
                                                        </div>
                                                        <p className="mdtxt">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
                                                        <ul className="gap-2 mt-5 d-grid">
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span className="mdtxt">Always</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span className="mdtxt">31k Member</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt">Public</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="videos-tab-pane" role="tabpanel" aria-labelledby="videos-tab" tabindex="0">
                                    <div className="row">
                                        <div className="col-xxl-8 col-xl-8">
                                            <div className="p-5 single-box">
                                                <div className="row cus-mar">
                                                    <div className="col-md-6">
                                                        <div className="single-box">
                                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div className="bg-area w-100">
                                                                    <img className="bg-item w-100" src="/src/assets/images/video-bg-1.png" alt="image" />
                                                                </div>
                                                                <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                                                    <div className="content-box">
                                                                        <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-box">
                                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div className="bg-area w-100">
                                                                    <img className="bg-item w-100" src="/src/assets/images/video-bg-2.png" alt="image" />
                                                                </div>
                                                                <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                                                    <div className="content-box">
                                                                        <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-box">
                                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div className="bg-area w-100">
                                                                    <img className="bg-item w-100" src="/src/assets/images/video-bg-3.png" alt="image" />
                                                                </div>
                                                                <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                                                    <div className="content-box">
                                                                        <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-box">
                                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div className="bg-area w-100">
                                                                    <img className="bg-item w-100" src="/src/assets/images/video-bg-4.png" alt="image" />
                                                                </div>
                                                                <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                                                    <div className="content-box">
                                                                        <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-box">
                                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div className="bg-area w-100">
                                                                    <img className="bg-item w-100" src="/src/assets/images/video-bg-5.png" alt="image" />
                                                                </div>
                                                                <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                                                    <div className="content-box">
                                                                        <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-box">
                                                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div className="bg-area w-100">
                                                                    <img className="bg-item w-100" src="/src/assets/images/video-bg-6.png" alt="image" />
                                                                </div>
                                                                <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                                                    <div className="content-box">
                                                                        <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 col-xxl-4 col-lg-10 mt-xl-0">
                                            <div className="cus-scrollbar">
                                                <div className="flex flex-wrap gap-6 sidebar-wrapper d-flex al-item justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column">
                                                    <div className="p-5 sidebar-area">
                                                        <div className="mb-3">
                                                            <h6 className="d-inline-flex">
                                                                Info
                                                            </h6>
                                                        </div>
                                                        <ul className="gap-2 mt-5 d-grid">
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span className="mdtxt">Page- Travel Agency</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt">Public</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span className="mdtxt link"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9eeafbedeadef3fff7f2b0fdf1f3">[email&#160;protected]</a></span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt link">www.wisoky.com</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> call </i>
                                                                <span className="mdtxt">(316) 555-0116</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="p-5 sidebar-area">
                                                        <div className="mb-3">
                                                            <h6 className="d-inline-flex">
                                                                About
                                                            </h6>
                                                        </div>
                                                        <p className="mdtxt">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
                                                        <ul className="gap-2 mt-5 d-grid">
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span className="mdtxt">Always</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> flag </i>
                                                                <span className="mdtxt">31k Member</span>
                                                            </li>
                                                            <li className="gap-2 d-flex align-items-center">
                                                                <i className="material-symbols-outlined mat-icon"> language </i>
                                                                <span className="mdtxt">Public</span>
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
