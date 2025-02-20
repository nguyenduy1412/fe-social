import React from 'react'
import { Link } from 'react-router-dom'

export default function SiderBarFriend({active}) {
    return (
        <div className="col-xl-3 col-lg-4">
            
            <div className="p-5 profile-sidebar cus-scrollbar">
                
                <div className="gap-2 profile-pic d-flex align-items-center">
                    <div className="avatar position-relative">
                        <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar"/>
                    </div>
                    <div className="text-area">
                        <h6 className="m-0 mb-1"><a href="profile-post.html">Lerio Mao</a></h6>
                        <p className="mdtxt">@maolio</p>
                    </div>
                </div>
                <ul className="profile-link mt-7 mb-7 pb-7">
                    <li>
                        <Link to="/friend-request" className={`gap-4 d-flex ${active==1 ? 'active':''} `}>
                            <i className="material-symbols-outlined mat-icon"> person </i>
                            <span>Friend Request</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/suggestion" className={`gap-4 d-flex ${active==2 ? 'active':''} `}>
                            <i className="material-symbols-outlined mat-icon"> person_add </i>
                            <span>Suggestions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/all-friend" className={`gap-4 d-flex ${active==3 ? 'active':''} `}>
                            <i className="material-symbols-outlined mat-icon"> person </i>
                            <span>All Friend</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/block-list" className={`gap-4 d-flex ${active==4 ? 'active':''} `}>
                            <i className="material-symbols-outlined mat-icon"> lock </i>
                            <span>Block List</span>
                        </Link>
                    </li>
                </ul>
                <div className="mb-4">
                    <h6 className="d-inline-flex">
                        Contact
                    </h6>
                </div>
                <div className="gap-6 d-flex flex-column">
                    <div className="profile-area d-center justify-content-between">
                        <div className="gap-3 avatar-item d-flex align-items-center">
                            <div className="avatar-item">
                                <img className="avatar-img max-un" src="src/assets/images/avatar-9.png" alt="avatar"/>
                            </div>
                            <div className="info-area">
                                <h6 className="m-0"><a href="public-profile-post.html" className="mdtxt">Piter Maio</a></h6>
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
                                <img className="avatar-img max-un" src="src/assets/images/avatar-7.png" alt="avatar"/>
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
                                <img className="avatar-img max-un" src="src/assets/images/avatar-8.png" alt="avatar"/>
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
                                <img className="avatar-img max-un" src="src/assets/images/avatar-2.png" alt="avatar"/>
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
                                <img className="avatar-img max-un" src="src/assets/images/avatar-3.png" alt="avatar"/>
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
                                <img className="avatar-img max-un" src="src/assets/images/avatar-4.png" alt="avatar"/>
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
                                <img className="avatar-img max-un" src="src/assets/images/avatar-9.png" alt="avatar"/>
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
                                <img className="avatar-img max-un" src="src/assets/images/avatar-10.png" alt="avatar"/>
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
                                <img className="avatar-img max-un" src="src/assets/images/avatar-11.png" alt="avatar"/>
                            </div>
                            <div className="info-area">
                                <h6 className="m-0"><a href="public-profile-post.html">Guy Hawkins</a></h6>
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
    )
}
