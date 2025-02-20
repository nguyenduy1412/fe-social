import React from 'react'

export default function BottomMenuStart() {
  return (
    <>
        <div className="bottom-0 py-3 header-menu d-block d-lg-none position-fixed w-100 cus-z">
        <div className="gap-3 right-area position-relative d-flex justify-content-around gap-xxl-6 align-items-center">
            <div className="single-item messages-area">
                <div className="messages-btn cmn-head">
                    <div className="icon-area d-center position-relative">
                        <i className="material-symbols-outlined mat-icon">mail</i>
                        <span className="abs-area position-absolute d-center mdtxt">4</span>
                    </div>
                </div>
                <div className="p-5 main-area messages-content">
                    <h5 className="mb-8">Messages</h5>
                    <div className="p-0 single-box mb-7">
                        <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                            <div className="avatar">
                                <img className="avatar-img max-un" src="src/assets/images/avatar-7.png" alt="avatar"/>
                            </div>
                            <div className="text-area">
                                <div className="title-area position-relative d-inline-flex align-items-center">
                                    <h6 className="m-0 d-inline-flex">Piter Maio</h6>
                                    <span className="abs-area position-absolute d-center mdtxt">3</span>
                                </div>
                                <p className="mdtxt sms">Amet minim mollit non....</p>
                            </div>
                        </a>
                    </div>
                    <div  className="p-0 single-box mb-7">
                        <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                            <div className="avatar">
                                <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar"/>
                            </div>
                            <div className="text-area">
                                <h6 className="m-0 mb-1">Annette Black</h6>
                                <p className="mdtxt">You: consequat sunt</p>
                            </div>
                        </a>
                    </div>
                    <div  className="p-0 single-box mb-7">
                        <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                            <div className="avatar">
                                <img className="avatar-img max-un" src="src/assets/images/avatar-2.png" alt="avatar"/>
                            </div>
                            <div className="text-area">
                                <h6 className="m-0 mb-1">Ralph Edwards</h6>
                                <p className="mdtxt sms">Amet minim mollit non....</p>
                            </div>
                        </a>
                    </div>
                    <div  className="p-0 single-box mb-7">
                        <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                            <div className="avatar">
                                <img className="avatar-img max-un" src="src/assets/images/avatar-3.png" alt="avatar"/>
                            </div>
                            <div className="text-area">
                                <h6 className="m-0 mb-1">Darrell Steward</h6>
                                <p className="mdtxt">You: consequat sunt</p>
                            </div>
                        </a>
                    </div>
                    <div  className="p-0 single-box mb-7">
                        <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                            <div className="avatar">
                                <img className="avatar-img max-un" src="src/assets/images/avatar-4.png" alt="avatar"/>
                            </div>
                            <div className="text-area">
                                <h6 className="m-0 mb-1">Wade Warren</h6>
                                <p className="mdtxt">You: consequat sunt</p>
                            </div>
                        </a>
                    </div>
                    <div  className="p-0 single-box mb-7">
                        <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                            <div className="avatar">
                                <img className="avatar-img max-un" src="src/assets/images/avatar-5.png" alt="avatar"/>
                            </div>
                            <div className="text-area">
                                <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                                <p className="mdtxt">You: consequat sunt</p>
                            </div>
                        </a>
                    </div>
                    <div className="p-0 single-box mb-7">
                        <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                            <div className="avatar">
                                <img className="avatar-img max-un" src="src/assets/images/avatar-6.png" alt="avatar"/>
                            </div>
                            <div className="text-area">
                                <h6 className="m-0 mb-1">Jacob Jones</h6>
                                <p className="mdtxt">You: consequat sunt</p>
                            </div>
                        </a>
                    </div>
                    <div className="btn-area">
                        <a href="profile-chat.html">See all inbox</a>
                    </div>
                </div>
            </div>
            <div className="single-item messages-area notification-area">
                <div className="notification-btn cmn-head position-relative">
                    <div className="icon-area d-center position-relative">
                        <i className="material-symbols-outlined mat-icon">notifications</i>
                        <span className="abs-area position-absolute d-center mdtxt">3</span>
                    </div>
                </div>
                <div className="p-5 main-area notification-content">
                    <h5 className="mb-8">Notification</h5>
                    <div className="p-0 single-box mb-7">
                        <a href="profile-notification.html" className="d-flex justify-content-between align-items-center">
                            <div className="gap-3 left-item position-relative d-inline-flex">
                                <div className="avatar position-relative d-inline-flex">
                                    <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar"/>
                                    <img className="abs-item position-absolute max-un" src="src/assets/images/icon/speech-bubble.png" alt="icon"/>
                                </div>
                                <div className="text-area">
                                    <h6 className="m-0 mb-1">Piter Maio</h6>
                                    <p className="mdtxt">Comment on your post</p>
                                </div>
                            </div>
                            <div className="time-remaining">
                                <p className="mdtxt">Just now</p>
                            </div>
                        </a>
                    </div>
                    <div className="p-0 single-box mb-7">
                        <a href="profile-notification.html" className="d-flex justify-content-between align-items-center">
                            <div className="gap-3 left-item position-relative d-inline-flex">
                                <div className="avatar position-relative d-inline-flex">
                                    <img className="avatar-img max-un" src="src/assets/images/avatar-2.png" alt="avatar"/>
                                    <img className="abs-item position-absolute max-un" src="src/assets/images/icon/emoji-love.png" alt="icon"/>
                                </div>
                                <div className="text-area">
                                    <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                                    <p className="mdtxt">Like your photo</p>
                                </div>
                            </div>
                            <div className="time-remaining">
                                <p className="mdtxt">2min</p>
                            </div>
                        </a>
                    </div>
                    <div className="p-0 single-box mb-7">
                        <a href="profile-notification.html" className="d-flex justify-content-between align-items-center">
                            <div className="gap-3 left-item position-relative d-inline-flex">
                                <div className="avatar position-relative d-inline-flex">
                                    <img className="avatar-img max-un" src="src/assets/images/avatar-3.png" alt="avatar"/>
                                    <img className="abs-item position-absolute max-un" src="src/assets/images/icon/emoji-love.png" alt="icon"/>
                                </div>
                                <div className="text-area">
                                    <h6 className="m-0 mb-1">Jacob Jones</h6>
                                    <p className="mdtxt">Sent you a request</p>
                                </div>
                            </div>
                            <div className="time-remaining">
                                <p className="mdtxt">1hr</p>
                            </div>
                        </a>
                        <div className="gap-3 mt-4 d-flex">
                            <button className="cmn-btn">Accept</button>
                            <button className="cmn-btn alt">Delete</button>
                        </div>
                    </div>                             
                    <div className="p-0 single-box mb-7">
                        <a href="profile-notification.html" className="d-flex justify-content-between align-items-center">
                            <div className="gap-3 left-item position-relative d-inline-flex">
                                <div className="avatar position-relative d-inline-flex">
                                    <img className="avatar-img max-un" src="src/assets/images/avatar-4.png" alt="avatar"/>
                                    <img className="abs-item position-absolute max-un" src="src/assets/images/icon/emoji-love.png" alt="icon"/>
                                </div>
                                <div className="text-area">
                                    <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                                    <p className="mdtxt">officia consequat duis enim...</p>
                                </div>
                            </div>
                            <div className="time-remaining">
                                <p className="mdtxt">2hr</p>
                            </div>
                        </a>
                    </div>
                    <div className="btn-area">
                        <a href="profile-notification.html">See all notification</a>
                    </div>
                </div>
            </div>
            <div className="single-item profile-area position-relative">
                <div className="profile-pic d-flex align-items-center">
                    <span className="avatar cmn-head active-status">
                        <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar"/>
                    </span>
                </div>
                <div className="p-5 main-area profile-content">
                    <div className="head-area">
                        <div className="gap-3 d-flex align-items-center">
                            <div className="avatar-item">
                                <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar"/>
                            </div>
                            <div className="text-area">
                                <h6 className="m-0 mb-1">Lori Ferguson</h6>
                                <p className="mdtxt">Web Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 view-profile">
                        <a href="profile-post.html" className="py-2 text-center mdtxt w-100">View profile</a>
                    </div>
                    <ul>
                        <li>
                            <a href="profile-edit.html" className="mdtxt">
                                <i className="material-symbols-outlined mat-icon"> settings </i>
                                Settings & Privacy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mdtxt">
                                <i className="material-symbols-outlined mat-icon"> power_settings_new </i>
                                Sign Out
                            </a>
                        </li>
                    </ul>
                    <div className="gap-1 mt-4 switch-wrapper d-flex align-items-center">
                        <i className="mat-icon material-symbols-outlined sun icon"> light_mode </i>
                        <label className="switch">
                            <input type="checkbox" className="checkbox"/>
                            <span className="slider"></span>
                        </label>
                        <i className="mat-icon material-symbols-outlined moon icon"> dark_mode </i>
                        <span className="mdtxt ms-2">Dark mode</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
