import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import MyProfile from "../../components/MyProfile.jsx";


export default function DetailEvent() {
    return (
        <>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <div className="row">
                        <MyProfile hide={true} index={3} />
                        <div className="col-xl-9 col-lg-8">
                            <div className="mb-5 banner-area">
                                <div className="single-box">
                                    <div className="avatar-box position-relative">
                                        <img className="avatar-img w-100" src="src/assets/images/event-cover-img.png" alt="image" />
                                        <div className="top-0 p-3 abs-area position-absolute p-lg-5 p-xl-10">
                                            <span className="date-area mdtxt">2 DEC 2022</span>
                                        </div>
                                        <div className="bottom-0 p-3 pb-3 abs-area position-absolute p-lg-5 p-xl-10 pb-lg-5 pb-xl-8">
                                            <h4>Martio Music Event I Biggest Music Festival</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 mb-5 details-area">
                                <div className="flex-wrap gap-3 pb-6 mb-6 top-area d-center justify-content-between">
                                    <ul className="flex-wrap gap-2 nav tab-area" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link d-center active" id="about-tab" data-bs-toggle="tab" data-bs-target="#about-tab-pane"
                                                type="button" role="tab" aria-controls="about-tab-pane" aria-selected="true">about</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link d-center" id="discussion-tab" data-bs-toggle="tab" data-bs-target="#discussion-tab-pane"
                                                type="button" role="tab" aria-controls="discussion-tab-pane" aria-selected="false">discussion</button>
                                        </li>
                                    </ul>
                                    <div className="flex-wrap gap-3 btn-item d-center">
                                        <a href="#" className="gap-1 cmn-btn d-center third">
                                            <i className="material-symbols-outlined mat-icon fs-xl"> grade </i>
                                            Interested
                                        </a>
                                        <a href="#" className="gap-1 cmn-btn third">
                                            <i className="material-symbols-outlined mat-icon fs-xl"> add_box </i>
                                            Invite
                                        </a>
                                        <a href="#" className="gap-1 cmn-btn third">
                                            <i className="material-symbols-outlined mat-icon fs-xl"> google_plus_reshare </i>
                                            Share
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
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="about-tab-pane" role="tabpanel" aria-labelledby="about-tab" tabindex="0">
                                        <div className="gap-5 row gap-xl-0">
                                            <div className="col-xl-7">
                                                <div className="gap-3 text-center friends-list d-flex align-items-center">
                                                    <ul className="d-flex align-items-center justify-content-center">
                                                        <li><img src="src/assets/images/avatar-2.png" alt="image" /></li>
                                                        <li><img src="src/assets/images/avatar-3.png" alt="image" /></li>
                                                        <li><img src="src/assets/images/avatar-4.png" alt="image" /></li>
                                                    </ul>
                                                    <span className="mdtxt d-center">476 People Going</span>
                                                </div>
                                                <ul className="gap-2 my-5 d-grid">
                                                    <li className="gap-2 d-flex align-items-center">
                                                        <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                        <span className="mdtxt">6 Day</span>
                                                    </li>
                                                    <li className="gap-2 d-flex align-items-center">
                                                        <i className="material-symbols-outlined mat-icon"> flag </i>
                                                        <span className="mdtxt">Event by PLM (People Love Music)</span>
                                                    </li>
                                                    <li className="gap-2 d-flex align-items-center">
                                                        <i className="material-symbols-outlined mat-icon"> language </i>
                                                        <span className="mdtxt">Public</span>
                                                    </li>
                                                </ul>
                                                <h5 className="time-schedule">DEC 2, 2022 AT 10:30 - 7:30 PM</h5>
                                                <div className="mt-4 description-box">
                                                    <p className="mdtxt">Are you missing the festive vibe toward the end of the year? ITCRC is thrilled to announce that it has organized the year's largest online event, Kings Outfit Presents "TechnoGaze 1.0" powered by UVTR So sharpen your skills and prepare to be a part of this event while also enjoying the festive atmosphere.</p>
                                                    <div className="segment-area mt-7">
                                                        <p className="mdtxt">The event will have some amazing segments:</p>
                                                        <ul className="mdtxt">
                                                            <li>Programming contest</li>
                                                            <li>Graphics Design</li>
                                                            <li>Gaming (Brawlhalla)</li>
                                                            <li>Tech Quiz & IT Olympiad</li>
                                                            <li>PowerPoint Presentation.</li>
                                                        </ul>
                                                        <p className="mdtxt">Wants to energize the vibe?</p>
                                                        <p className="mdtxt">Winners will be given certificate, crests & many more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5">
                                                <div className="p-5 find-tickets">
                                                    <h6 className="head-area">Tickets</h6>
                                                    <a href="#" className="gap-1 mt-5 mb-4 cmn-btn w-100 d-center">
                                                        <i className="material-symbols-outlined mat-icon"> add </i>
                                                        Find Tickets
                                                    </a>
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142723.46117209745!2d-122.36259993497053!3d37.7719269407752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1677037248094!5m2!1sen!2sbd"></iframe>
                                                    <p className="mdtxt">"International Convention City, (ICCB)"</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="discussion-tab-pane" role="tabpanel" aria-labelledby="discussion-tab" tabindex="0">
                                        <div className="gap-5 post-item d-flex flex-column gap-md-7" id="news-feed">
                                            <div className="post-single-box">
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
                                            <div className="post-single-box">
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
                                            <div className="post-single-box">
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
                                </div>
                            </div>
                            <div className="row cus-mar friend-request">
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="src/assets/images/event-img-5.png" alt="avatar" />
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-between">
                                                <span className="date-area mdtxt">2 DEC 2022</span>
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
                                        <a href="event-details.html"><h6 className="m-0 mt-4">Martio Music Event I Biggest Music Festival </h6></a>
                                        <span className="smtxt city-area">Alaska,CA</span>
                                        <div className="gap-2 mt-4 d-center">
                                            <button className="cmn-btn">interested</button>
                                            <button className="cmn-btn alt third">Share</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="src/assets/images/event-img-6.png" alt="avatar" />
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-between">
                                                <span className="date-area mdtxt">2 DEC 2022</span>
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
                                        <a href="event-details.html"><h6 className="m-0 mt-4">Martio Music Event I Biggest Music Festival </h6></a>
                                        <span className="smtxt city-area">Alaska,CA</span>
                                        <div className="gap-2 mt-4 d-center">
                                            <button className="cmn-btn">interested</button>
                                            <button className="cmn-btn alt third">Share</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="src/assets/images/event-img-7.png" alt="avatar" />
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-between">
                                                <span className="date-area mdtxt">2 DEC 2022</span>
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
                                        <a href="event-details.html"><h6 className="m-0 mt-4">Martio Music Event I Biggest Music Festival </h6></a>
                                        <span className="smtxt city-area">Alaska,CA</span>
                                        <div className="gap-2 mt-4 d-center">
                                            <button className="cmn-btn">interested</button>
                                            <button className="cmn-btn alt third">Share</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
