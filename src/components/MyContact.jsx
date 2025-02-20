
import React, { useState } from 'react'

const MyContact = () => {
    const [active, setActive] = useState(false)
    const showContact = () => {
        setActive(!active)
    }
    return (
        <>
            <div className="mt-5 col-xxl-3 col-xl-3 col-lg-4 col-6 mt-xl-0">    
                    <div className={`cus-scrollbar contact-sidebar ${active ? 'active' : ''} `}>
                        <div className="flex gap-6 sidebar-wrapper d-flex al-item justify-content-end justify-content-xl-center flex-column flex-md-row flex-xl-column">
                            <div className="top-0 d-block d-lg-none position-absolute end-0">
                                <button className="button contact-close">
                                    <i className="material-symbols-outlined mat-icon fs-xl"> close </i>
                                </button>
                            </div>
                            <div className={`p-5 sidebar-area  ${active? 'd-none':''}`}>
                                <div className="mb-4 ">
                                    <h6 className="d-inline-flex position-relative">
                                        Request
                                        <span className="mdtxt abs-area d-center position-absolute">2</span>
                                    </h6>
                                </div>
                                <div className="gap-6 d-grid">
                                    <div className="single-single">
                                        <div className="gap-3 profile-pic d-flex align-items-center">
                                            <div className="avatar">
                                                <img className="avatar-img max-un" src="src/assets/images/avatar-4.png" alt="avatar" />
                                            </div>
                                            <div className="text-area">
                                                <a href="public-profile-post.html"><h6 className="m-0">Lerio Mao</h6></a>
                                                <div className="gap-3 text-center friends-list d-flex align-items-center">
                                                    <ul className="d-flex align-items-center justify-content-center">
                                                        <li><img src="src/assets/images/avatar-2.png" alt="image" /></li>
                                                        <li><img src="src/assets/images/avatar-3.png" alt="image" /></li>
                                                        <li><img src="src/assets/images/avatar-4.png" alt="image" /></li>
                                                    </ul>
                                                    <span className="mdtxt d-center">10 mutual friends</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gap-3 mt-4 d-flex">
                                            <button className="cmn-btn">Confirm</button>
                                            <button className="cmn-btn alt">Delete</button>
                                        </div>
                                    </div>
                                    <div className="single-single">
                                        <div className="gap-3 profile-pic d-flex align-items-center">
                                            <div className="avatar">
                                                <img className="avatar-img max-un" src="src/assets/images/avatar-5.png" alt="avatar" />
                                            </div>
                                            <div className="text-area">
                                                <h6 className="m-0"><a href="public-profile-post.html">Marinez</a></h6>
                                                <div className="gap-3 text-center friends-list d-flex align-items-center">
                                                    <ul className="d-flex align-items-center justify-content-center">
                                                        <li><img src="src/assets/images/avatar-2.png" alt="image" /></li>
                                                        <li><img src="src/assets/images/avatar-3.png" alt="image" /></li>
                                                        <li><img src="src/assets/images/avatar-4.png" alt="image" /></li>
                                                    </ul>
                                                    <span className="mdtxt d-center">10 mutual friends</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gap-3 mt-4 d-flex">
                                            <button className="cmn-btn">Confirm</button>
                                            <button className="cmn-btn alt">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 sidebar-area">
                                <div className="title-bar">
                                    <h6 className="mb-4">Contact</h6>
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
        </>
    )
}

export default MyContact

