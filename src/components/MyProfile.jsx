
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MyProfile = ({user,hide,index}) => {
    const [active,setActive]=useState(false)
    const showProfile=()=>{
        setActive(!active)
    }
    return (
        <>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
                <div className={`d-inline-block ${hide ? 'd-none':''}`}>
                    <button className="gap-2 mb-4 button profile-active mb-lg-0 d-flex align-items-center" onClick={showProfile}>
                        <i className="material-symbols-outlined mat-icon"> tune </i>
                        <span>My profile</span>
                    </button>
                </div>
                <div className={`p-5 profile-sidebar cus-scrollbar ${active ? 'active' :'' } `}>
                    <div className="top-0 d-block d-lg-none position-absolute end-0">
                        <button className="button profile-close">
                            <i className="material-symbols-outlined mat-icon fs-xl"> close </i>
                        </button>
                    </div>
                    <div className="gap-2 profile-pic d-flex align-items-center">
                        <div className="avatar position-relative">
                            <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
                        </div>
                        <div className="text-area">
                            <h6 className="m-0 mb-1"><a href="profile-post.html">{user.full_name}</a></h6>
                            <p className="mdtxt">{user.email}</p>
                        </div>
                    </div>
                    <ul className="profile-link mt-7 mb-7 pb-7">
                        <li>
                            <Link to="/" className={`gap-4 d-flex ${index==1 ? 'active':''} `}>
                                <i className="material-symbols-outlined mat-icon"> home </i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/friend-request" className={`gap-4 d-flex ${index==2 ? 'active':''} `}>
                                <i className="material-symbols-outlined mat-icon"> person </i>
                                <span>People</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/event" className={`gap-4 d-flex ${index==3 ? 'active':''} `}>
                                <i className="material-symbols-outlined mat-icon"> workspace_premium </i>
                                <span>Event</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/page" className={`gap-4 d-flex ${index==4 ? 'active':''} `}>
                                <i className="material-symbols-outlined mat-icon"> perm_media </i>
                                <span>Pages</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/group" className={`gap-4 d-flex ${index== 5? 'active':''} `}>
                                <i className="material-symbols-outlined mat-icon"> workspaces </i>
                                <span>Group</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/save-post" className={`gap-4 d-flex ${index==7 ? 'active':''} `}>
                                <i className="material-symbols-outlined mat-icon"> sync_saved_locally </i>
                                <span>Saved</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/favorite" className={`gap-4 d-flex ${index==8 ? 'active':''} `}>
                                <i className="material-symbols-outlined mat-icon"> bookmark_add </i>
                                <span>Favorites</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/setting" className={`gap-4 d-flex ${index==9 ? 'active':''} `}>
                                <i className="material-symbols-outlined mat-icon"> settings </i>
                                <span>Settings</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="your-shortcuts">
                        <h6>Your shortcuts</h6>
                        <ul>
                            <li>
                                <a href="public-profile-post.html" className="gap-3 d-flex align-items-center">
                                    <img src="/src/assets/images/shortcuts-1.png" alt="icon"/>
                                        <span>Game Community</span>
                                </a>
                            </li>
                            <li>
                                <a href="public-profile-post.html" className="gap-3 d-flex align-items-center">
                                    <img src="/src/assets/images/shortcuts-2.png" alt="icon"/>
                                        <span>Pixel Think (Member)</span>
                                </a>
                            </li>
                            <li>
                                <a href="public-profile-post.html" className="gap-3 d-flex align-items-center">
                                    <img src="/src/assets/images/shortcuts-3.png" alt="icon"/>
                                        <span>8 Ball Pool</span>
                                </a>
                            </li>
                            <li>
                                <a href="public-profile-post.html" className="gap-3 d-flex align-items-center">
                                    <img src="/src/assets/images/shortcuts-4.png" alt="icon"/>
                                        <span>Gembio</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyProfile

