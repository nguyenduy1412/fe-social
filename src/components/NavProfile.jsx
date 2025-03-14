import React from 'react'
import { Link } from 'react-router-dom'

export default function NavProfile({user, active}) {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-5 banner-area pages-create">
                        <div className="p-5 single-box">
                            <div className="avatar-area">
                                <img className="avatar-img w-100" src="src/assets/images/profile-cover-img.png" alt="image" />
                            </div>
                            <div className="flex-wrap gap-3 py-4 top-area d-center justify-content-between align-items-start">
                                <div className="gap-3 d-flex align-items-center">
                                    <div className="avatar-item p">
                                        <img className="avatar-img max-un" src="src/assets/images/avatar-14.png" alt="avatar" />
                                    </div>
                                    <div className="text-area text-start">
                                        <h4 className="m-0 mb-2">{user.fullName}</h4>
                                        <div className="flex-wrap gap-2 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-3.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-2.png" alt="image" /></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image" /></li>
                                            </ul>
                                            <span className="mdtxt d-center">{user.follower_count == null ? 0 :user.follower_count } Followers</span>
                                            <span className="mdtxt d-center following">{user.following_count == null ? 0 :user.following_count } Following</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="gap-3 btn-item d-center">
                                    <a href="#" className="gap-1 cmn-btn d-center">
                                        <i className="material-symbols-outlined mat-icon fs-4"> person_add </i>
                                        Follow
                                    </a>
                                    <a href="#" className="gap-1 cmn-btn d-center">
                                        <i className="material-symbols-outlined mat-icon fs-4"> send </i>
                                        Message
                                    </a>
                                    <div className="btn-group cus-dropdown dropend">
                                        <button type="button" className="px-2 dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                        </button>
                                        <ul className="p-4 pt-2 dropdown-menu">
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
                            </div>
                            <div className="page-details">
                                <ul className="flex-wrap gap-2 pt-4 mt-5 nav tab-area">
                                    <li className="nav-item" role="presentation">
                                        <Link to="/my-profile" className={`nav-link d-center ${active==1 ?'active':''}`}>Post</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to="/my-about" className={`nav-link d-center ${active==2 ?'active':''}`}>About</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to="/my-photo" className={`nav-link d-center ${active==3 ?'active':''}`}>Photos</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to="/my-video" className={`nav-link d-center ${active==4 ?'active':''}`}>Video</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to="/my-group" className={`nav-link d-center ${active==5 ?'active':''}`}>Groups</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to="/my-connection" className={`nav-link d-center ${active==6 ?'active':''}`}>Connections</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to="/my-event" className={`nav-link d-center ${active==7 ?'active':''}`}>Events</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
