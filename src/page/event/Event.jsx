
import { Link } from 'react-router-dom'
import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import MyProfile from "../../components/MyProfile.jsx";

export default function Event() {
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
                            <div className="mt-5 mb-4 head-area mb-lg-5 mt-lg-0">
                                <h6>Discover Events</h6>
                            </div>
                            <div className="flex-wrap gap-3 mb-5 top-area d-center justify-content-between">
                                <ul className="flex-wrap gap-2 nav tab-area" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link d-center active" id="top-tab" data-bs-toggle="tab" data-bs-target="#top-tab-pane"
                                            type="button" role="tab" aria-controls="top-tab-pane" aria-selected="true">top</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link d-center" id="local-tab" data-bs-toggle="tab" data-bs-target="#local-tab-pane"
                                            type="button" role="tab" aria-controls="local-tab-pane" aria-selected="false">local</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link d-center" id="online-tab" data-bs-toggle="tab" data-bs-target="#online-tab-pane"
                                            type="button" role="tab" aria-controls="online-tab-pane" aria-selected="false">online</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link d-center" id="saved-tab" data-bs-toggle="tab" data-bs-target="#saved-tab-pane"
                                            type="button" role="tab" aria-controls="saved-tab-pane" aria-selected="false">saved</button>
                                    </li>
                                </ul>
                                <div className="btn-item">
                                    <a href="event.html" className="gap-1 cmn-btn">
                                        <i className="material-symbols-outlined mat-icon"> add </i>
                                        Create Event
                                    </a>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="top-tab-pane" role="tabpanel" aria-labelledby="top-tab" tabindex="0">
                                    <div className="row cus-mar friend-request">
                                        <div className="col-xl-4 col-sm-6 col-8">
                                            <div className="p-5 single-box">
                                                <div className="avatar-box position-relative">
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-1.png" alt="avatar" />
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
                                                <a href="event-details.html"><h6 className="m-0 mt-4">Martio Music Event I Biggest Music Festival</h6></a>
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
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-2.png" alt="avatar" />
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
                                                <Link to="/event-detail"><h6 className="m-0 mt-4">Martio Music Event I Biggest Music Festival </h6></Link>
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
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-3.png" alt="avatar" />
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
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-4.png" alt="avatar" />
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
                                        <div className="col-xl-4 col-sm-6 col-8">
                                            <div className="p-5 single-box">
                                                <div className="avatar-box position-relative">
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-8.png" alt="avatar" />
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
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-9.png" alt="avatar" />
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
                                <div className="tab-pane fade" id="local-tab-pane" role="tabpanel" aria-labelledby="local-tab" tabindex="0">
                                    <div className="row cus-mar friend-request">
                                        <div className="col-xl-4 col-sm-6 col-8">
                                            <div className="p-5 single-box">
                                                <div className="avatar-box position-relative">
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-8.png" alt="avatar" />
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
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-9.png" alt="avatar" />
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
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-3.png" alt="avatar" />
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
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-4.png" alt="avatar" />
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
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="online-tab-pane" role="tabpanel" aria-labelledby="online-tab" tabindex="0">
                                    <div className="row cus-mar friend-request">
                                        <div className="col-xl-4 col-sm-6 col-8">
                                            <div className="p-5 single-box">
                                                <div className="avatar-box position-relative">
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-4.png" alt="avatar" />
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
                                        <div className="col-xl-4 col-sm-6 col-8">
                                            <div className="p-5 single-box">
                                                <div className="avatar-box position-relative">
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-1.png" alt="avatar" />
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
                                                <a href="event-details.html"><h6 className="m-0 mt-4">Martio Music Event I Biggest Music Festival</h6></a>
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
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-2.png" alt="avatar" />
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
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-3.png" alt="avatar" />
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
                                <div className="tab-pane fade" id="saved-tab-pane" role="tabpanel" aria-labelledby="saved-tab" tabindex="0">
                                    <div className="row cus-mar friend-request">
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
                                        <div className="col-xl-4 col-sm-6 col-8">
                                            <div className="p-5 single-box">
                                                <div className="avatar-box position-relative">
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-8.png" alt="avatar" />
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
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-9.png" alt="avatar" />
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
                                                    <img className="avatar-img w-100" src="src/assets/images/event-img-4.png" alt="avatar" />
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
