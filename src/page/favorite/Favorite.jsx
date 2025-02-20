import React from 'react'
import Header from '../../components/Header'
import BottomMenuStart from '../../components/BottomMenuStart'
import MyProfile from '../../components/MyProfile'
import MyContact from '../../components/MyContact'

export default function Favorite() {
    return (
        <div>
            <div>
                <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
                <Header />
                <BottomMenuStart />
                <main className="main-content">
                    <div className="container-fluid">
                        <div className="row">
                            <MyProfile hide={true} index={8} />
                            <div class="mt-0 col-xxl-5 col-xl-6 col-lg-8 d-flex flex-column gap-7 mt-lg-12 mt-xl-0">
                                <div class="filter-head d-center justify-content-between">
                                    <h5>Favorites</h5>
                                    <div class="d-center">
                                        <a href="#" class="cmn-btn third gap-1">
                                            <i class="material-symbols-outlined mat-icon"> add </i>
                                            Manage Favotites
                                        </a>
                                    </div>
                                </div>
                                <div class="post-item d-flex flex-column gap-5 gap-md-7">
                                    <div class="post-single-box p-3 p-sm-5">
                                        <div class="top-area pb-4">
                                            <div class="post-img">
                                                <img src="/src/assets/images/post-img-8.png" class="w-100" alt="image" />
                                            </div>
                                            <div class="pt-4">
                                                <h5 class="post-head">A New Way to Stay Up to Date With Those You Choose</h5>
                                            </div>
                                        </div>
                                        <div class="total-react-share d-center gap-2 flex-wrap justify-content-between">
                                            <div class="friends-list d-flex gap-1 align-items-center text-center">
                                                <ul class="d-flex align-items-center justify-content-center">
                                                    <li><img src="/src/assets/images/avatar-2.png" alt="image" /></li>
                                                    <li><img src="/src/assets/images/avatar-3.png" alt="image" /></li>
                                                    <li><img src="/src/assets/images/avatar-4.png" alt="image" /></li>
                                                </ul>
                                                <p class="mdtxt">200+ Favorites</p>
                                            </div>
                                            <div class="react-list text-center">
                                                <a href="#" class="mdtxt py-2 cmn-btn">Learn More</a>
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
                                                <p class="description">I created Roughly plugin to sketch crafted hand-drawn elements which can be used to any usage (diagrams/flows/decoration/etc)</p>
                                            </div>
                                            <div class="post-img">
                                                <img src="/src/assets/images/post-img-9.png" class="w-100" alt="image" />
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
                                            <button class="d-center gap-1 gap-sm-2 mdtxt active">
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
                                                    <img src="/src/assets/images/post-img-10.png" alt="image" />
                                                </div>
                                                <div class="single d-grid gap-3">
                                                    <img src="/src/assets/images/post-img-11.png" alt="image" />
                                                    <img src="/src/assets/images/post-img-12.png" alt="image" />
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
                                            <button class="d-center gap-1 gap-sm-2 mdtxt active">
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
                                </div>
                            </div>
                            <MyContact />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
