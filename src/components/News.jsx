
import React, { useState } from 'react'

const News = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const stories = [

        { image: "src/assets/images/story-slider-1.png", text: "Alen Lio", avatar: "src/assets/images/avatar-1.png" },
        { image: "src/assets/images/story-slider-2.png", text: "Josep", avatar: "src/assets/images/avatar-2.png" },
        { image: "src/assets/images/story-slider-3.png", text: "Jessica", avatar: "src/assets/images/avatar-3.png" },
        { image: "src/assets/images/story-slider-4.png", text: "Alen", avatar: "src/assets/images/avatar-4.png" },
        { image: "src/assets/images/story-slider-4.png", text: "Jacob Jones", avatar: "src/assets/images/avatar-5.png" },
    ];

    // Chuyển slide sang trái
    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    };
    const goToNext = () => {
        // Cập nhật currentIndex để chuyển sang nhóm tiếp theo
        setCurrentIndex((prevIndex) => (prevIndex === stories.length - 3 ? prevIndex : prevIndex + 1));
    };
    return (
        <>
            <div className="mt-0 col-xxl-5 col-xl-6 col-lg-8 d-flex flex-column gap-7 mt-lg-12 mt-xl-0">
                <div className="story-carousel">
                    <div className="carousel-container">
                        {/* Các phần tử carousel */}
                        <div className="carousel-items" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                            <div class="single-item">
                                <div class="single-slide">
                                    <a href="#" class="position-relative d-center">
                                        <img class="bg-img" src="src/assets/images/story-slider-owner.png" alt="icon" />
                                        <div class="abs-area d-grid p-3 position-absolute bottom-0">
                                            <div class="icon-box m-auto d-center mb-3">
                                                <i class="material-symbols-outlined text-center mat-icon"> add </i>
                                            </div>
                                            <span class="mdtxt">Add Story</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {stories.map((story, index) => (
                                <div className="single-item" key={index}>
                                    <div className="single-slide">
                                        <a href="#" className="position-relative d-flex">
                                            <img className="bg-img" src={story.image} alt="icon" />
                                            <div className="bottom-0 p-3 abs-area position-absolute">

                                                {story.avatar ? (
                                                    <img src={story.avatar} alt="avatar" />
                                                ) : (
                                                    <i className="text-center material-symbols-outlined mat-icon"> add </i>
                                                )}

                                                <span className="mdtxt">{story.text}</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nút chuyển slide */}
                    <div className="carousel-controls">

                        <button type="button" className="arafat-prev cmn-btn pull-left slick-arrow " onClick={goToPrev} >
                            <i className="material-symbols-outlined mat-icon" aria-hidden="true">chevron_left</i>
                        </button>
                        <button type="button" className="arafat-next cmn-btn pull-right slick-arrow" onClick={goToNext} >
                            <i className="material-symbols-outlined mat-icon" aria-hidden="true">chevron_left</i>
                        </button>
                    </div>
                </div>
                <div className="gap-3 p-3 share-post d-flex gap-sm-5 p-sm-5">

                    <form action="#" className="w-100 position-relative">
                        <div className="flex justify-between align-items-center">
                            <a href="#"><img src="src/assets/images/add-post-avatar.png" className="pr-3 max-un" alt="icon" /></a>
                            <textarea cols="10" rows="1" placeholder="Write something to Lerio.."></textarea>
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
                <div className="gap-5 post-item d-flex flex-column gap-md-7">
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
        </>
    )
}

export default News
