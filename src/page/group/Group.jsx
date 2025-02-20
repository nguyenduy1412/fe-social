import React from 'react'
import Header from '../../components/Header'
import BottomMenuStart from '../../components/BottomMenuStart'
import MyProfile from '../../components/MyProfile'
import { Link } from 'react-router-dom'

export default function Group() {
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <div className="row">
                        <MyProfile hide={true} index={5} />
                        <div className="col-xl-9 col-lg-8">
                    <div className="mb-5 head-area">
                        <h6>Group</h6>
                    </div>
                    <div className="flex-wrap gap-3 mb-5 popular-area d-center justify-content-between">
                        <ul className="flex-wrap gap-2 nav tab-area" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link d-center active" id="popular-tab" data-bs-toggle="tab" data-bs-target="#popular-tab-pane"
                                    type="button" role="tab" aria-controls="popular-tab-pane" aria-selected="true">popular</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link d-center" id="most-member-tab" data-bs-toggle="tab" data-bs-target="#most-member-tab-pane"
                                    type="button" role="tab" aria-controls="most-member-tab-pane" aria-selected="false">most-member</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link d-center" id="suggested-group-tab" data-bs-toggle="tab" data-bs-target="#suggested-group-tab-pane"
                                    type="button" role="tab" aria-controls="suggested-group-tab-pane" aria-selected="false">suggested-group</button>
                            </li>
                        </ul>
                        <div className="btn-item">
                            <a href="#" className="gap-1 cmn-btn">
                                <i className="material-symbols-outlined mat-icon"> add </i>
                                Create Group
                            </a>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="popular-tab-pane" role="tabpanel" aria-labelledby="popular-tab" tabindex="0">
                            <div className="row cus-mar friend-request">
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-1.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-1.png" alt="avatar"/>
                                        </div>
                                        <Link to="detail"><h6 className="m-0 mt-3 mb-2">Travel Moon</h6></Link>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-2.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-2.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Car Legend Community</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-3.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-3.png" alt="avatar"/>
                                        </div>
                                        <Link to="detail"><h6 className="m-0 mt-3 mb-2">Travel World</h6></Link>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-4.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-4.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Beatty Community</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-5.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-5.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Event Group</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-6.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-6.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Fun Make Society</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-7.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-7.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Travel Africa</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-8.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-8.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">World Travel Community</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-9.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-9.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Fashion Hop</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="most-member-tab-pane" role="tabpanel" aria-labelledby="most-member-tab" tabindex="0">
                            <div className="row cus-mar friend-request">
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-7.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-7.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Travel Africa</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-8.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-8.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">World Travel Community</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-9.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-9.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Fashion Hop</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-2.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-2.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Car Legend Community</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-3.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-3.png" alt="avatar"/>
                                        </div>
                                        <Link to="detail"><h6 className="m-0 mt-3 mb-2">Travel World</h6></Link>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-4.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-4.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Beatty Community</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="suggested-group-tab-pane" role="tabpanel" aria-labelledby="suggested-group-tab" tabindex="0">
                            <div className="row cus-mar friend-request">
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-4.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-4.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Beatty Community</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-5.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-5.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Event Group</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-6.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-6.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Fun Make Society</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-1.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-1.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Travel Moon</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-2.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-2.png" alt="avatar"/>
                                        </div>
                                        <a href="detail"><h6 className="m-0 mt-3 mb-2">Car Legend Community</h6></a>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-box position-relative">
                                            <img className="avatar-img w-100" src="/src/assets/images/group-img-3.png" alt="avatar"/>
                                            <div className="top-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
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
                                        <div className="abs-avatar-item">
                                            <img className="avatar-img max-un" src="/src/assets/images/group-avatar-3.png" alt="avatar"/>
                                        </div>
                                        <Link to="detail"><h6 className="m-0 mt-3 mb-2">Travel World</h6></Link>
                                        <p className="smtxt public-group">Public Group</p>
                                        <div className="gap-1 mt-3 text-center friends-list d-center">
                                            <ul className="d-center">
                                                <li><img src="/src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="/src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="m-0 smtxt">30k Member</span>
                                        </div>
                                        <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                            <button className="cmn-btn fourth">Joined</button>
                                            <button className="cmn-btn alt third">Invite</button>
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
