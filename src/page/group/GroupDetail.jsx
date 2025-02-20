import React from 'react'
import Header from '../../components/Header'
import BottomMenuStart from '../../components/BottomMenuStart'
import MyProfile from '../../components/MyProfile'

export default function GroupDetail() {
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <div className="row">
                        <MyProfile hide={true} index={5} />
                        <div class="col-xl-9 col-lg-8">
                            <div class="banner-area pages-create mb-5">
                                <div class="single-box p-5">
                                    <div class="avatar-area">
                                        <img class="avatar-img w-100" src="/src/assets/images/group-cover-img.png" alt="image" />
                                    </div>
                                    <div class="top-area py-4 d-center flex-wrap gap-3 justify-content-between">
                                        <div class="d-flex gap-3 align-items-center">
                                            <div class="abs-avatar-item m-0">
                                                <img class="avatar-img max-un" src="/src/assets/images/group-avatar-2.png" alt="avatar" />
                                            </div>
                                            <div class="text-area text-start">
                                                <h5 class="m-0 mb-1">Car Legend Community</h5>
                                                <p class="mdtxt">Public Group-30k Member</p>
                                            </div>
                                        </div>
                                        <div class="btn-item d-center gap-3">
                                            <a href="#" class="cmn-btn fourth gap-1">
                                                Joined
                                            </a>
                                            <a href="#" class="cmn-btn third gap-1">
                                                <i class="material-symbols-outlined mat-icon fs-xl"> add_box </i>
                                                Invite
                                            </a>
                                            <div class="btn-group cus-dropdown dropend">
                                                <button type="button" class="dropdown-btn d-center px-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                </button>
                                                <ul class="dropdown-menu p-4 pt-2">
                                                    <li>
                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                            <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                            <span>Unfollow</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                            <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                            <span>Hide</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="friends-list d-flex flex-wrap gap-2 align-items-center text-center">
                                        <ul class="d-flex align-items-center justify-content-center">
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
                                        <span class="mdtxt d-center">Rezeka, Martiola, Larmjio, and 10+ more</span>
                                    </div>
                                    <div class="page-details">
                                        <ul class="nav mt-5 pt-4 flex-wrap gap-2 tab-area" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link d-center active" id="feed-tab" data-bs-toggle="tab" data-bs-target="#feed-tab-pane"
                                                    type="button" role="tab" aria-controls="feed-tab-pane" aria-selected="true">feed</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link d-center" id="about-tab" data-bs-toggle="tab" data-bs-target="#about-tab-pane"
                                                    type="button" role="tab" aria-controls="about-tab-pane" aria-selected="false">about</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link d-center" id="connections-tab" data-bs-toggle="tab" data-bs-target="#connections-tab-pane"
                                                    type="button" role="tab" aria-controls="connections-tab-pane" aria-selected="false">connections</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link d-center" id="media-tab" data-bs-toggle="tab" data-bs-target="#media-tab-pane"
                                                    type="button" role="tab" aria-controls="media-tab-pane" aria-selected="false">media</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link d-center" id="videos-tab" data-bs-toggle="tab" data-bs-target="#videos-tab-pane"
                                                    type="button" role="tab" aria-controls="videos-tab-pane" aria-selected="false">videos</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="feed-tab-pane" role="tabpanel" aria-labelledby="feed-tab" tabindex="0">
                                    <div class="row">
                                        <div class="col-xxl-8 col-xl-8 col-lg-12 d-flex flex-column gap-7">
                                            <div class="share-post d-flex gap-3 gap-sm-5 p-3 p-sm-5">
                                                <div class="profile-box">
                                                    <a href="#"><img src="/src/assets/images/add-post-avatar.png" class="max-un" alt="icon" /></a>
                                                </div>
                                                <form action="#" class="w-100 position-relative">
                                                    <textarea cols="10" rows="2" placeholder="Write something to Lerio.."></textarea>
                                                    <div class="abs-area position-absolute d-none d-sm-block">
                                                        <i class="material-symbols-outlined mat-icon xxltxt"> sentiment_satisfied </i>
                                                    </div>
                                                    <ul class="d-flex justify-content-between flex-wrap mt-3 gap-3">
                                                        <li class="d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#goLiveMod">
                                                            <img src="/src/assets/images/icon/live-video.png" class="max-un" alt="icon" />
                                                            <span>Live</span>
                                                        </li>
                                                        <li class="d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#photoVideoMod">
                                                            <img src="/src/assets/images/icon/vgallery.png" class="max-un" alt="icon" />
                                                            <span>Photo/Video</span>
                                                        </li>
                                                        <li class="d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#activityMod">
                                                            <img src="/src/assets/images/icon/emoji-laughing.png" class="max-un" alt="icon" />
                                                            <span>Fallings/Activity</span>
                                                        </li>
                                                    </ul>
                                                </form>
                                            </div>
                                            <div class="post-item d-flex flex-column gap-5 gap-md-7">
                                                <div class="post-single-box p-3 p-sm-5">
                                                    <div class="top-area pb-5">
                                                        <div class="profile-area d-center justify-content-between">
                                                            <div class="avatar-item d-flex gap-3 align-items-center">
                                                                <div class="avatar position-relative">
                                                                    <img class="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
                                                                </div>
                                                                <div class="info-area">
                                                                    <h6 class="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                                    <span class="mdtxt status">Active</span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-group cus-dropdown">
                                                                <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> bookmark_add </i>
                                                                            <span>Saved Post</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                            <span>Unfollow</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                            <span>Hide Post</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> lock </i>
                                                                            <span>Block</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                            <span>Report Post</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="py-4">
                                                            <p class="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                                        </div>
                                                        <div class="post-img">
                                                            <img src="/src/assets/images/post-img-1.png" class="w-100" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                                        <div class="friends-list d-flex gap-3 align-items-center text-center">
                                                            <ul class="d-flex align-items-center justify-content-center">
                                                                <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
                                                                <li><span class="mdtxt d-center">8+</span></li>
                                                            </ul>
                                                        </div>
                                                        <div class="react-list d-flex flex-wrap gap-6 align-items-center text-center">
                                                            <button class="mdtxt">4 Comments</button>
                                                            <button class="mdtxt">1 Shares</button>
                                                        </div>
                                                    </div>
                                                    <div class="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> favorite </i>
                                                            Like
                                                        </button>
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> chat </i>
                                                            Comment
                                                        </button>
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                            Share
                                                        </button>
                                                    </div>
                                                    <form action="#">
                                                        <div class="d-flex mt-5 gap-3">
                                                            <div class="profile-box d-none d-xxl-block">
                                                                <a href="#"><img src="/src/assets/images/add-post-avatar.png" class="max-un" alt="icon" /></a>
                                                            </div>
                                                            <div class="form-content input-area py-1 d-flex gap-2 align-items-center w-100">
                                                                <input placeholder="Write a comment.." />
                                                                <div class="file-input d-flex gap-1 gap-md-2">
                                                                    <div class="file-upload">
                                                                        <label class="file">
                                                                            <input type="file" />
                                                                            <span class="file-custom border-0 d-grid text-center">
                                                                                <span class="material-symbols-outlined mat-icon m-0 xxltxt"> gif_box </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="file-upload">
                                                                        <label class="file">
                                                                            <input type="file" />
                                                                            <span class="file-custom border-0 d-grid text-center">
                                                                                <span class="material-symbols-outlined mat-icon m-0 xxltxt"> perm_media </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <span class="mood-area">
                                                                        <span class="material-symbols-outlined mat-icon m-0 xxltxt"> mood </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-area d-flex">
                                                                <button class="cmn-btn px-2 px-sm-5 px-lg-6">
                                                                    <i class="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="post-single-box p-3 p-sm-5">
                                                    <div class="top-area pb-5">
                                                        <div class="profile-area d-center justify-content-between">
                                                            <div class="avatar-item d-flex gap-3 align-items-center">
                                                                <div class="avatar position-relative">
                                                                    <img class="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
                                                                </div>
                                                                <div class="info-area">
                                                                    <h6 class="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                                    <span class="mdtxt status">Active</span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-group cus-dropdown">
                                                                <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> bookmark_add </i>
                                                                            <span>Saved Post</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                            <span>Unfollow</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                            <span>Hide Post</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> lock </i>
                                                                            <span>Block</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                            <span>Report Post</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="py-4">
                                                            <p class="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                                        </div>
                                                        <div class="post-img  d-flex justify-content-between flex-wrap gap-2 gap-lg-3">
                                                            <div class="single">
                                                                <img src="/src/assets/images/post-img-2.png" alt="image" />
                                                            </div>
                                                            <div class="single d-grid gap-3">
                                                                <img src="/src/assets/images/post-img-3.png" alt="image" />
                                                                <img src="/src/assets/images/post-img-4.png" alt="image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                                        <div class="friends-list d-flex gap-3 align-items-center text-center">
                                                            <ul class="d-flex align-items-center justify-content-center">
                                                                <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
                                                                <li><span class="mdtxt d-center">8+</span></li>
                                                            </ul>
                                                        </div>
                                                        <div class="react-list d-flex flex-wrap gap-6 align-items-center text-center">
                                                            <button class="mdtxt">4 Comments</button>
                                                            <button class="mdtxt">1 Shares</button>
                                                        </div>
                                                    </div>
                                                    <div class="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> favorite </i>
                                                            Like
                                                        </button>
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> chat </i>
                                                            Comment
                                                        </button>
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                            Share
                                                        </button>
                                                    </div>
                                                    <form action="#">
                                                        <div class="d-flex mt-5 gap-3">
                                                            <div class="profile-box d-none d-xxl-block">
                                                                <a href="#"><img src="/src/assets/images/add-post-avatar.png" class="max-un" alt="icon" /></a>
                                                            </div>
                                                            <div class="form-content input-area py-1 d-flex gap-2 align-items-center w-100">
                                                                <input placeholder="Write a comment.." />
                                                                <div class="file-input d-flex gap-1 gap-md-2">
                                                                    <div class="file-upload">
                                                                        <label class="file">
                                                                            <input type="file" />
                                                                            <span class="file-custom border-0 d-grid text-center">
                                                                                <span class="material-symbols-outlined mat-icon m-0 xxltxt"> gif_box </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="file-upload">
                                                                        <label class="file">
                                                                            <input type="file" />
                                                                            <span class="file-custom border-0 d-grid text-center">
                                                                                <span class="material-symbols-outlined mat-icon m-0 xxltxt"> perm_media </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <span class="mood-area">
                                                                        <span class="material-symbols-outlined mat-icon m-0 xxltxt"> mood </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-area d-flex">
                                                                <button class="cmn-btn px-2 px-sm-5 px-lg-6">
                                                                    <i class="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div class="comments-area mt-5">
                                                        <div class="single-comment-area ms-1 ms-xxl-15">
                                                            <div class="parent-comment d-flex gap-2 gap-sm-4">
                                                                <div class="avatar-item d-center align-items-baseline">
                                                                    <img class="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar" />
                                                                </div>
                                                                <div class="info-item">
                                                                    <div class="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                                        <div class="title-area">
                                                                            <h6 class="m-0 mb-3"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                                            <p class="mdtxt">The only way to solve the problem is to code for the hardware directly</p>
                                                                        </div>
                                                                        <div class="btn-group dropend cus-dropdown">
                                                                            <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                            </button>
                                                                            <ul class="dropdown-menu p-4 pt-2">
                                                                                <li>
                                                                                    <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                        <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                        <span>Hide Comments</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                        <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                                        <span>Report Comments</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <ul class="like-share d-flex gap-6 mt-2">
                                                                        <li class="d-center">
                                                                            <button class="mdtxt">Like</button>
                                                                        </li>
                                                                        <li class="d-center flex-column">
                                                                            <button class="mdtxt reply-btn">Reply</button>
                                                                        </li>
                                                                        <li class="d-center">
                                                                            <button class="mdtxt">Share</button>
                                                                        </li>
                                                                    </ul>
                                                                    <form action="#" class="comment-form">
                                                                        <div class="d-flex gap-3">
                                                                            <input placeholder="Write a comment.." class="py-3" />
                                                                            <button class="cmn-btn px-2 px-sm-5 px-lg-6">
                                                                                <i class="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div class="single-comment-area comment-item-nested mt-4 mt-sm-7 ms-13 ms-sm-15">
                                                                <div class="d-flex gap-2 gap-sm-4 align-items-baseline">
                                                                    <div class="avatar-item">
                                                                        <img class="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar" />
                                                                    </div>
                                                                    <div class="info-item">
                                                                        <div class="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                                            <div class="title-area">
                                                                                <h6 class="m-0 mb-3"><a href="public-profile-post.html">Alex</a></h6>
                                                                                <p class="mdtxt">The only way to solve the</p>
                                                                            </div>
                                                                            <div class="btn-group dropend cus-dropdown">
                                                                                <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                                </button>
                                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                                    <li>
                                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                            <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                            <span>Hide Comments</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                            <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                                            <span>Report Comments</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <ul class="like-share d-flex gap-6 mt-2">
                                                                            <li class="d-center">
                                                                                <button class="mdtxt">Like</button>
                                                                            </li>
                                                                            <li class="d-center flex-column">
                                                                                <button class="mdtxt reply-btn">Reply</button>
                                                                            </li>
                                                                            <li class="d-center">
                                                                                <button class="mdtxt">Share</button>
                                                                            </li>
                                                                        </ul>
                                                                        <form action="#" class="comment-form">
                                                                            <div class="d-flex gap-3">
                                                                                <input placeholder="Write a comment.." class="py-3" />
                                                                                <button class="cmn-btn px-2 px-sm-5 px-lg-6">
                                                                                    <i class="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                                                </button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post-single-box p-3 p-sm-5">
                                                    <div class="top-area pb-5">
                                                        <div class="profile-area d-center justify-content-between">
                                                            <div class="avatar-item d-flex gap-3 align-items-center">
                                                                <div class="avatar-item">
                                                                    <img class="avatar-img max-un" src="/src/assets/images/avatar-5.png" alt="avatar" />
                                                                </div>
                                                                <div class="info-area">
                                                                    <h6 class="m-0"><a href="public-profile-post.html">Loprayos</a></h6>
                                                                    <span class="mdtxt status">20m Ago</span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-group cus-dropdown">
                                                                <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> bookmark_add </i>
                                                                            <span>Saved Post</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                            <span>Unfollow</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                            <span>Hide Post</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> lock </i>
                                                                            <span>Block</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                            <span>Report Post</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="py-4">
                                                            <p class="description">Nam ornare a nibh id sagittis. Vestibulum nec molestie urna, eget convallis mi. Vestibulum rhoncus ligula eget sem sollicitudin interdum. Aliquam massa lectus, fringilla non diam ut, laoreet convallis risus. Curabitur at metus imperdiet, pellentesque ligula vel,</p>
                                                        </div>
                                                    </div>
                                                    <div class="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                                        <div class="friends-list d-flex gap-3 align-items-center text-center">
                                                            <ul class="d-flex align-items-center justify-content-center">
                                                                <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
                                                                <li><span class="mdtxt d-center">8+</span></li>
                                                            </ul>
                                                        </div>
                                                        <div class="react-list d-flex flex-wrap gap-6 align-items-center text-center">
                                                            <button class="mdtxt">4 Comments</button>
                                                            <button class="mdtxt">1 Shares</button>
                                                        </div>
                                                    </div>
                                                    <div class="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> favorite </i>
                                                            Like
                                                        </button>
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> chat </i>
                                                            Comment
                                                        </button>
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                            Share
                                                        </button>
                                                    </div>
                                                    <form action="#">
                                                        <div class="d-flex mt-5 gap-3">
                                                            <div class="profile-box d-none d-xxl-block">
                                                                <a href="#"><img src="/src/assets/images/add-post-avatar.png" class="max-un" alt="icon" /></a>
                                                            </div>
                                                            <div class="form-content input-area py-1 d-flex gap-2 align-items-center w-100">
                                                                <input placeholder="Write a comment.." />
                                                                <div class="file-input d-flex gap-1 gap-md-2">
                                                                    <div class="file-upload">
                                                                        <label class="file">
                                                                            <input type="file" />
                                                                            <span class="file-custom border-0 d-grid text-center">
                                                                                <span class="material-symbols-outlined mat-icon m-0 xxltxt"> gif_box </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="file-upload">
                                                                        <label class="file">
                                                                            <input type="file" />
                                                                            <span class="file-custom border-0 d-grid text-center">
                                                                                <span class="material-symbols-outlined mat-icon m-0 xxltxt"> perm_media </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <span class="mood-area">
                                                                        <span class="material-symbols-outlined mat-icon m-0 xxltxt"> mood </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-area d-flex">
                                                                <button class="cmn-btn px-2 px-sm-5 px-lg-6">
                                                                    <i class="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div class="comments-area mt-5">
                                                        <div class="single-comment-area ms-1 ms-xxl-15">
                                                            <div class="parent-comment d-flex gap-2 gap-sm-4">
                                                                <div class="avatar-item d-center align-items-baseline">
                                                                    <img class="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar" />
                                                                </div>
                                                                <div class="info-item active">
                                                                    <div class="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                                        <div class="title-area">
                                                                            <h6 class="m-0 mb-3"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                                            <p class="mdtxt">The only way to solve the problem is to code for the hardware directly</p>
                                                                        </div>
                                                                        <div class="btn-group dropend cus-dropdown">
                                                                            <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                            </button>
                                                                            <ul class="dropdown-menu p-4 pt-2">
                                                                                <li>
                                                                                    <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                        <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                        <span>Hide Comments</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                        <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                                        <span>Report Comments</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <ul class="like-share d-flex gap-6 mt-2">
                                                                        <li class="d-center">
                                                                            <button class="mdtxt">Like</button>
                                                                        </li>
                                                                        <li class="d-center flex-column">
                                                                            <button class="mdtxt reply-btn">Reply</button>
                                                                        </li>
                                                                        <li class="d-center">
                                                                            <button class="mdtxt">Share</button>
                                                                        </li>
                                                                    </ul>
                                                                    <form action="#" class="comment-form">
                                                                        <div class="d-flex gap-3">
                                                                            <input placeholder="Write a comment.." class="py-3" />
                                                                            <button class="cmn-btn px-2 px-sm-5 px-lg-6">
                                                                                <i class="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div class="sibling-comment comment-item-nested single-comment-area mt-7 ms-13 ms-sm-15">
                                                                <div class="d-flex gap-2 gap-sm-4 align-items-baseline">
                                                                    <div class="avatar-item">
                                                                        <img class="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar" />
                                                                    </div>
                                                                    <div class="info-item">
                                                                        <div class="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                                            <div class="title-area">
                                                                                <h6 class="m-0 mb-3"><a href="public-profile-post.html">Alexa</a></h6>
                                                                                <p class="mdtxt">The only way to solve the</p>
                                                                            </div>
                                                                            <div class="btn-group dropend cus-dropdown">
                                                                                <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                                </button>
                                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                                    <li>
                                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                            <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                            <span>Hide Comments</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                            <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                                            <span>Report Comments</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <ul class="like-share d-flex gap-6 mt-2">
                                                                            <li class="d-center">
                                                                                <button class="mdtxt">Like</button>
                                                                            </li>
                                                                            <li class="d-center flex-column">
                                                                                <button class="mdtxt reply-btn">Reply</button>
                                                                            </li>
                                                                            <li class="d-center">
                                                                                <button class="mdtxt">Share</button>
                                                                            </li>
                                                                        </ul>
                                                                        <form action="#" class="comment-form">
                                                                            <div class="d-flex gap-3">
                                                                                <input placeholder="Write a comment.." class="py-3" />
                                                                                <button class="cmn-btn px-2 px-sm-5 px-lg-6">
                                                                                    <i class="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                                                </button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="single-comment-area comment-item-nested mt-7 ms-13 ms-sm-15">
                                                                <div class="d-flex gap-2 gap-sm-4 align-items-baseline">
                                                                    <div class="avatar-item">
                                                                        <img class="avatar-img max-un" src="/src/assets/images/avatar-7.png" alt="avatar" />
                                                                    </div>
                                                                    <div class="info-item">
                                                                        <div class="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                                            <div class="title-area">
                                                                                <h6 class="m-0 mb-3"><a href="public-profile-post.html">Haplika</a></h6>
                                                                                <p class="mdtxt">The only way to solve the</p>
                                                                            </div>
                                                                            <div class="btn-group dropend cus-dropdown">
                                                                                <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                                </button>
                                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                                    <li>
                                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                            <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                            <span>Hide Comments</span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                            <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                                            <span>Report Comments</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <ul class="like-share d-flex gap-6 mt-2">
                                                                            <li class="d-center">
                                                                                <button class="mdtxt">Like</button>
                                                                            </li>
                                                                            <li class="d-center flex-column">
                                                                                <button class="mdtxt reply-btn">Reply</button>
                                                                            </li>
                                                                            <li class="d-center">
                                                                                <button class="mdtxt">Share</button>
                                                                            </li>
                                                                        </ul>
                                                                        <form action="#" class="comment-form">
                                                                            <div class="d-flex gap-3">
                                                                                <input placeholder="Write a comment.." class="py-3" />
                                                                                <button class="cmn-btn px-2 px-sm-5 px-lg-6">
                                                                                    <i class="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                                                </button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="comments-area mt-5">
                                                        <div class="single-comment-area ms-1 ms-xxl-15">
                                                            <div class="d-flex gap-4">
                                                                <div class="avatar-item d-center align-items-baseline">
                                                                    <img class="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar" />
                                                                </div>
                                                                <div class="info-item w-100">
                                                                    <div class="top-area px-4 py-3 d-flex gap-3 align-items-start justify-content-between">
                                                                        <div class="title-area">
                                                                            <h6 class="m-0 mb-3"><a href="public-profile-post.html">Marlio</a></h6>
                                                                            <div class="post-img">
                                                                                <img src="/src/assets/images/icon/emoji-love-2.png" alt="icon" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="btn-group dropend cus-dropdown">
                                                                            <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                            </button>
                                                                            <ul class="dropdown-menu p-4 pt-2">
                                                                                <li>
                                                                                    <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                        <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                        <span>Hide Comments</span>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                        <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                                        <span>Report Comments</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <ul class="like-share d-flex gap-6 mt-2">
                                                                        <li class="d-center">
                                                                            <button class="mdtxt">Like</button>
                                                                        </li>
                                                                        <li class="d-center flex-column">
                                                                            <button class="mdtxt reply-btn">Reply</button>
                                                                        </li>
                                                                        <li class="d-center">
                                                                            <button class="mdtxt">Share</button>
                                                                        </li>
                                                                    </ul>
                                                                    <form action="#" class="comment-form">
                                                                        <div class="d-flex gap-3">
                                                                            <input placeholder="Write a comment.." class="py-3" />
                                                                            <button class="cmn-btn px-2 px-sm-5 px-lg-6">
                                                                                <i class="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post-single-box p-3 p-sm-5">
                                                    <div class="top-area pb-5">
                                                        <div class="profile-area d-center justify-content-between">
                                                            <div class="avatar-item d-flex gap-3 align-items-center">
                                                                <div class="avatar position-relative">
                                                                    <img class="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
                                                                </div>
                                                                <div class="info-area">
                                                                    <h6 class="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                                    <span class="mdtxt status">Active</span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-group cus-dropdown">
                                                                <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> bookmark_add </i>
                                                                            <span>Saved Post</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                            <span>Unfollow</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                            <span>Hide Post</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> lock </i>
                                                                            <span>Block</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                            <span>Report Post</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="py-4">
                                                            <p class="description">My Travel Video</p>
                                                            <p class="hastag d-flex gap-2">
                                                                <a href="#">#Viral</a>
                                                                <a href="#">#travel</a>
                                                            </p>
                                                        </div>
                                                        <div className="post-img">
                                                            <iframe width="100%" height="347" src="https://www.youtube.com/embed/lRsaDQtYqAo?si=Xm3HMZgbP-LYZieJ"></iframe>
                                                        </div>
                                                    </div>
                                                    <div class="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                                        <div class="friends-list d-flex gap-3 align-items-center text-center">
                                                            <ul class="d-flex align-items-center justify-content-center">
                                                                <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
                                                                <li><span class="mdtxt d-center">8+</span></li>
                                                            </ul>
                                                        </div>
                                                        <div class="react-list d-flex flex-wrap gap-6 align-items-center text-center">
                                                            <button class="mdtxt">4 Comments</button>
                                                            <button class="mdtxt">1 Shares</button>
                                                        </div>
                                                    </div>
                                                    <div class="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> favorite </i>
                                                            Like
                                                        </button>
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> chat </i>
                                                            Comment
                                                        </button>
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                            Share
                                                        </button>
                                                    </div>
                                                    <form action="#">
                                                        <div class="d-flex mt-5 gap-3">
                                                            <div class="profile-box d-none d-xxl-block">
                                                                <a href="#"><img src="/src/assets/images/add-post-avatar.png" class="max-un" alt="icon" /></a>
                                                            </div>
                                                            <div class="form-content input-area py-1 d-flex gap-2 align-items-center w-100">
                                                                <input placeholder="Write a comment.." />
                                                                <div class="file-input d-flex gap-1 gap-md-2">
                                                                    <div class="file-upload">
                                                                        <label class="file">
                                                                            <input type="file" />
                                                                            <span class="file-custom border-0 d-grid text-center">
                                                                                <span class="material-symbols-outlined mat-icon m-0 xxltxt"> gif_box </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="file-upload">
                                                                        <label class="file">
                                                                            <input type="file" />
                                                                            <span class="file-custom border-0 d-grid text-center">
                                                                                <span class="material-symbols-outlined mat-icon m-0 xxltxt"> perm_media </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <span class="mood-area">
                                                                        <span class="material-symbols-outlined mat-icon m-0 xxltxt"> mood </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-area d-flex">
                                                                <button class="cmn-btn px-2 px-sm-5 px-lg-6">
                                                                    <i class="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="post-single-box p-3 p-sm-5">
                                                    <div class="top-area pb-5">
                                                        <div class="profile-area d-center justify-content-between">
                                                            <div class="avatar-item d-flex gap-3 align-items-center">
                                                                <div class="avatar position-relative">
                                                                    <img class="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
                                                                </div>
                                                                <div class="info-area">
                                                                    <h6 class="m-0"><a href="public-profile-post.html">Lori Cortez</a></h6>
                                                                    <span class="mdtxt status">Active</span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-group cus-dropdown">
                                                                <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> bookmark_add </i>
                                                                            <span>Saved Post</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                            <span>Unfollow</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                            <span>Hide Post</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> lock </i>
                                                                            <span>Block</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                            <span>Report Post</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="py-4">
                                                            <p class="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                                        </div>
                                                        <div class="post-img">
                                                            <img src="/src/assets/images/post-img-1.png" class="w-100" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="total-react-share pb-4 d-center gap-2 flex-wrap justify-content-between">
                                                        <div class="friends-list d-flex gap-3 align-items-center text-center">
                                                            <ul class="d-flex align-items-center justify-content-center">
                                                                <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                                                <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
                                                                <li><span class="mdtxt d-center">8+</span></li>
                                                            </ul>
                                                        </div>
                                                        <div class="react-list d-flex flex-wrap gap-6 align-items-center text-center">
                                                            <button class="mdtxt">4 Comments</button>
                                                            <button class="mdtxt">1 Shares</button>
                                                        </div>
                                                    </div>
                                                    <div class="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> favorite </i>
                                                            Like
                                                        </button>
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> chat </i>
                                                            Comment
                                                        </button>
                                                        <button class="d-center gap-1 gap-sm-2 mdtxt">
                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                            Share
                                                        </button>
                                                    </div>
                                                    <form action="#">
                                                        <div class="d-flex mt-5 gap-3">
                                                            <div class="profile-box d-none d-xxl-block">
                                                                <a href="#"><img src="/src/assets/images/add-post-avatar.png" class="max-un" alt="icon" /></a>
                                                            </div>
                                                            <div class="form-content input-area py-1 d-flex gap-2 align-items-center w-100">
                                                                <input placeholder="Write a comment.." />
                                                                <div class="file-input d-flex gap-1 gap-md-2">
                                                                    <div class="file-upload">
                                                                        <label class="file">
                                                                            <input type="file" />
                                                                            <span class="file-custom border-0 d-grid text-center">
                                                                                <span class="material-symbols-outlined mat-icon m-0 xxltxt"> gif_box </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="file-upload">
                                                                        <label class="file">
                                                                            <input type="file" />
                                                                            <span class="file-custom border-0 d-grid text-center">
                                                                                <span class="material-symbols-outlined mat-icon m-0 xxltxt"> perm_media </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <span class="mood-area">
                                                                        <span class="material-symbols-outlined mat-icon m-0 xxltxt"> mood </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="btn-area d-flex">
                                                                <button class="cmn-btn px-2 px-sm-5 px-lg-6">
                                                                    <i class="material-symbols-outlined mat-icon m-0 fs-xxl"> near_me </i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-xl-4 col-lg-10 mt-5 mt-xl-0">
                                            <div class="cus-scrollbar">
                                                <div class="sidebar-wrapper d-flex al-item flex-wrap justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
                                                    <div class="sidebar-area p-5">
                                                        <div class="mb-3">
                                                            <h6 class="d-inline-flex">
                                                                About
                                                            </h6>
                                                        </div>
                                                        <p class="mdtxt descript">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
                                                        <ul class="d-grid gap-2 mt-5">
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span class="mdtxt">Always</span>
                                                            </li>
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                <span class="mdtxt">31k Member</span>
                                                            </li>
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> language </i>
                                                                <span class="mdtxt">Public</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="about-tab-pane" role="tabpanel" aria-labelledby="about-tab" tabindex="0">
                                    <div class="row">
                                        <div class="col-xxl-8 col-xl-7">
                                            <div class="single-box p-3 p-sm-5">
                                                <div class="head-area text-start">
                                                    <h6>Bio</h6>
                                                    <p class="mdtxt mt-6">“Lorem ipsum dolor sit amet consectetur. Nec donec vestibulum eleifend lectus ipsum ultrices et dictum”.</p>
                                                </div>
                                                <ul class="d-grid gap-3 mt-4">
                                                    <li class="d-center gap-3 justify-content-between">
                                                        <div class="info-area d-flex align-items-center gap-2">
                                                            <i class="material-symbols-outlined mat-icon"> integration_instructions </i>
                                                            <span class="mdtxt">Developer</span>
                                                        </div>
                                                        <div class="input-item d-center text-start">
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-3 m-0"> public </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="d-center gap-3 justify-content-between">
                                                        <div class="info-area d-flex align-items-center gap-2">
                                                            <i class="material-symbols-outlined mat-icon"> school </i>
                                                            <span class="mdtxt">Master's degree</span>
                                                        </div>
                                                        <div class="input-item d-center text-start">
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-3 m-0"> public </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="d-center gap-3 justify-content-between">
                                                        <div class="info-area d-flex align-items-center gap-2">
                                                            <i class="material-symbols-outlined mat-icon"> flag </i>
                                                            <span class="mdtxt link"><a href="https://pixner.net/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="681c0d1b1c2805090104460b0705">[email&#160;protected]</a></span>
                                                        </div>
                                                        <div class="input-item d-center text-start">
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-3 m-0"> public </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="d-center gap-3 justify-content-between">
                                                        <div class="info-area d-flex align-items-center gap-2">
                                                            <i class="material-symbols-outlined mat-icon"> language </i>
                                                            <span class="mdtxt link">www.wisoky.com</span>
                                                        </div>
                                                        <div class="input-item d-center text-start">
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-3 m-0"> public </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="d-center gap-3 justify-content-between">
                                                        <div class="info-area d-flex align-items-center gap-2">
                                                            <i class="material-symbols-outlined mat-icon"> call </i>
                                                            <span class="mdtxt">(316) 555-0116</span>
                                                        </div>
                                                        <div class="input-item d-center text-start">
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-3 m-0"> public </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="d-center gap-3 justify-content-between">
                                                        <div class="info-area d-flex align-items-center gap-2">
                                                            <i class="material-symbols-outlined mat-icon"> pin_drop </i>
                                                            <span class="mdtxt">USA</span>
                                                        </div>
                                                        <div class="input-item d-center text-start">
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-3 m-0"> public </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> delete </i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="d-center gap-3 justify-content-between">
                                                        <div class="info-area d-flex align-items-center gap-2">
                                                            <i class="material-symbols-outlined mat-icon"> house </i>
                                                            <span class="mdtxt">775 Rolling Green Rd.</span>
                                                        </div>
                                                        <div class="input-item d-center text-start">
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-3 m-0"> public </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> public </i>
                                                                            <span>Public</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> person </i>
                                                                            <span>Only me</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> share </i>
                                                                            <span>Share</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="group-btn cus-dropdown dropend">
                                                                <button type="button" class="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                </button>
                                                                <ul class="dropdown-menu p-4 pt-2">
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> edit </i>
                                                                            <span>Edit</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                            <i class="material-symbols-outlined mat-icon"> delete </i>
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
                                        <div class="col-xxl-4 col-xl-5 col-lg-10 mt-5 mt-xl-0">
                                            <div class="cus-scrollbar">
                                                <div class="sidebar-wrapper d-flex al-item flex-wrap justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
                                                    <div class="sidebar-area p-5">
                                                        <div class="mb-3">
                                                            <h6 class="d-inline-flex">
                                                                About
                                                            </h6>
                                                        </div>
                                                        <p class="mdtxt">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
                                                        <ul class="d-grid gap-2 mt-5">
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span class="mdtxt">Always</span>
                                                            </li>
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                <span class="mdtxt">31k Member</span>
                                                            </li>
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> language </i>
                                                                <span class="mdtxt">Public</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="connections-tab-pane" role="tabpanel" aria-labelledby="connections-tab" tabindex="0">
                                    <div class="row">
                                        <div class="col-xxl-8">
                                            <div class="single-box p-5">
                                                <ul class="nav flex-wrap gap-2 tab-area" role="tablist">
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link d-center active" id="followers-tab" data-bs-toggle="tab" data-bs-target="#followers-tab-pane" type="button" role="tab" aria-controls="followers-tab-pane" aria-selected="true">followers</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="following-tab" data-bs-toggle="tab" data-bs-target="#following-tab-pane" type="button" role="tab" aria-controls="following-tab-pane" aria-selected="false" tabindex="-1">following</button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="tab-content">
                                                <div class="tab-pane fade show active" id="followers-tab-pane" role="tabpanel" aria-labelledby="followers-tab" tabindex="0">
                                                    <div class="search-area d-center my-7 flex-wrap gap-2 justify-content-between">
                                                        <div class="total-followers">
                                                            <h6>30k Followers</h6>
                                                        </div>
                                                        <form action="#" class="d-flex align-items-stretch justify-content-between gap-4">
                                                            <div class="input-area py-2 w-100 gap-2 d-flex align-items-center">
                                                                <i class="material-symbols-outlined mat-icon">search</i>
                                                                <input type="text" placeholder="Search" autocomplete="off" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-1.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Cameron Williamson</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-2.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Esther Howard</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-3.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Brooklyn Simmons</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-4.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Courtney Henry</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-5.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Eleanor Pena</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-6.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Arlene McCoy</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-7.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Devon Lane</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-8.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Ronald Richards</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-9.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Kathryn Murphy</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-10.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="#">Darrell Steward</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-11.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Guy Hawkins</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-12.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="#">Floyd Miles</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-13.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Cameron Williamson</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-14.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Wade Warren</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 my-5 text-center">
                                                            <button class="cmn-btn alt third fw-600">Load More</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="following-tab-pane" role="tabpanel" aria-labelledby="following-tab" tabindex="0">
                                                    <div class="search-area d-center my-7 flex-wrap gap-2 justify-content-between">
                                                        <div class="total-followers">
                                                            <h6>30k Followers</h6>
                                                        </div>
                                                        <form action="#" class="d-flex align-items-stretch justify-content-between gap-4">
                                                            <div class="input-area py-2 w-100 gap-2 d-flex align-items-center">
                                                                <i class="material-symbols-outlined mat-icon">search</i>
                                                                <input type="text" placeholder="Search" autocomplete="off" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-6.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Arlene McCoy</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-7.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Devon Lane</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-8.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Ronald Richards</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-9.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Kathryn Murphy</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-3.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Brooklyn Simmons</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-13.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Cameron Williamson</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="single-box member-single p-3">
                                                                <div class="profile-area d-center justify-content-between">
                                                                    <div class="avatar-item d-flex gap-3 align-items-center">
                                                                        <div class="avatar-item">
                                                                            <img class="avatar-img max-un" src="/src/assets/images/followers-img-14.png" alt="avatar" />
                                                                        </div>
                                                                        <div class="info-area text-start">
                                                                            <h6 class="m-0"><a href="public-profile-post.html">Wade Warren</a></h6>
                                                                            <p class="mdtxt status">10 Mutual Friends</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="group-btn cus-dropdown">
                                                                        <button type="button" class="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                                                        </button>
                                                                        <ul class="dropdown-menu p-4 pt-2">
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> person_remove </i>
                                                                                    <span>Unfollow</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="droplist d-flex align-items-center gap-2" href="#">
                                                                                    <i class="material-symbols-outlined mat-icon"> hide_source </i>
                                                                                    <span>Hide Contact</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 my-5 text-center">
                                                            <button class="cmn-btn alt third fw-600">Load More</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-lg-10 mt-5 mt-xl-0">
                                            <div class="cus-scrollbar">
                                                <div class="sidebar-wrapper d-flex al-item flex-wrap justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
                                                    <div class="sidebar-area p-5">
                                                        <div class="mb-3">
                                                            <h6 class="d-inline-flex">
                                                                About
                                                            </h6>
                                                        </div>
                                                        <p class="mdtxt">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
                                                        <ul class="d-grid gap-2 mt-5">
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span class="mdtxt">Always</span>
                                                            </li>
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                <span class="mdtxt">31k Member</span>
                                                            </li>
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> language </i>
                                                                <span class="mdtxt">Public</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="media-tab-pane" role="tabpanel" aria-labelledby="media-tab" tabindex="0">
                                    <div class="row">
                                        <div class="col-xxl-8">
                                            <div class="single-box p-5">
                                                <div class="row cus-mar">
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-1.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-2.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-3.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-4.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-5.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-6.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-7.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-8.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-9.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-10.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-11.png" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-6">
                                                        <div class="single-box">
                                                            <img class="w-100" src="/src/assets/images/photo-gallery-12.png" alt="image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-lg-10 mt-5 mt-xl-0">
                                            <div class="cus-scrollbar">
                                                <div class="sidebar-wrapper d-flex al-item flex-wrap justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
                                                    <div class="sidebar-area p-5">
                                                        <div class="mb-3">
                                                            <h6 class="d-inline-flex">
                                                                About
                                                            </h6>
                                                        </div>
                                                        <p class="mdtxt">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
                                                        <ul class="d-grid gap-2 mt-5">
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span class="mdtxt">Always</span>
                                                            </li>
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                <span class="mdtxt">31k Member</span>
                                                            </li>
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> language </i>
                                                                <span class="mdtxt">Public</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="videos-tab-pane" role="tabpanel" aria-labelledby="videos-tab" tabindex="0">
                                    <div class="row">
                                        <div class="col-xxl-8 col-xl-8">
                                            <div class="single-box p-5">
                                                <div class="row cus-mar">
                                                    <div class="col-md-6">
                                                        <div class="single-box">
                                                            <div class="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div class="bg-area w-100">
                                                                    <img class="bg-item w-100" src="/src/assets/images/video-bg-1.png" alt="image" />
                                                                </div>
                                                                <div class="content-area text-center position-absolute d-flex align-items-center justify-content-center">
                                                                    <div class="content-box">
                                                                        <a class="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i class="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="single-box">
                                                            <div class="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div class="bg-area w-100">
                                                                    <img class="bg-item w-100" src="/src/assets/images/video-bg-2.png" alt="image" />
                                                                </div>
                                                                <div class="content-area text-center position-absolute d-flex align-items-center justify-content-center">
                                                                    <div class="content-box">
                                                                        <a class="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i class="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="single-box">
                                                            <div class="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div class="bg-area w-100">
                                                                    <img class="bg-item w-100" src="/src/assets/images/video-bg-3.png" alt="image" />
                                                                </div>
                                                                <div class="content-area text-center position-absolute d-flex align-items-center justify-content-center">
                                                                    <div class="content-box">
                                                                        <a class="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i class="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="single-box">
                                                            <div class="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div class="bg-area w-100">
                                                                    <img class="bg-item w-100" src="/src/assets/images/video-bg-4.png" alt="image" />
                                                                </div>
                                                                <div class="content-area text-center position-absolute d-flex align-items-center justify-content-center">
                                                                    <div class="content-box">
                                                                        <a class="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i class="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="single-box">
                                                            <div class="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div class="bg-area w-100">
                                                                    <img class="bg-item w-100" src="/src/assets/images/video-bg-5.png" alt="image" />
                                                                </div>
                                                                <div class="content-area text-center position-absolute d-flex align-items-center justify-content-center">
                                                                    <div class="content-box">
                                                                        <a class="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i class="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="single-box">
                                                            <div class="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                                <div class="bg-area w-100">
                                                                    <img class="bg-item w-100" src="/src/assets/images/video-bg-6.png" alt="image" />
                                                                </div>
                                                                <div class="content-area text-center position-absolute d-flex align-items-center justify-content-center">
                                                                    <div class="content-box">
                                                                        <a class="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                                            <i class="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-lg-10 mt-5 mt-xl-0">
                                            <div class="cus-scrollbar">
                                                <div class="sidebar-wrapper d-flex al-item flex-wrap justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column flex gap-6">
                                                    <div class="sidebar-area p-5">
                                                        <div class="mb-3">
                                                            <h6 class="d-inline-flex">
                                                                About
                                                            </h6>
                                                        </div>
                                                        <p class="mdtxt">Lorem ipsum dolor sit amet cons all Ofectetur. Pellentesque ipsum necat  congue pretium cursus orci. It Commodo donec tellus lacus pellentesque sagittis habitant quam amet praesent. </p>
                                                        <ul class="d-grid gap-2 mt-5">
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> schedule </i>
                                                                <span class="mdtxt">Always</span>
                                                            </li>
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> flag </i>
                                                                <span class="mdtxt">31k Member</span>
                                                            </li>
                                                            <li class="d-flex align-items-center gap-2">
                                                                <i class="material-symbols-outlined mat-icon"> language </i>
                                                                <span class="mdtxt">Public</span>
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
