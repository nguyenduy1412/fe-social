import React from 'react'
import Header from '../components/Header'
import BottomMenuStart from '../components/BottomMenuStart'

export default function Notification() {
  return (
    <div >
      <Header  />
      <BottomMenuStart/>
      <main className="main-content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xxl-12">
                    <div className="pb-6 head-area">
                        <h5>Notifications</h5>
                    </div>
                    <div className="gap-5 d-grid">
                        <div className="single-box">
                            <div className="gap-5 p-5 notification-single d-center justify-content-between">
                                <div className="gap-3 d-flex top-review-wrapper align-items-center">
                                    <div className="avatar-item">
                                        <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar"/>
                                    </div>
                                    <div className="text-area text-start">
                                        <h6 className="m-0 mb-1"><a href="public-profile-post.html">Lori Ferguson</a> <span>Comment on your post</span></h6>
                                        <span className="mdtxt time-schedule">Just now</span>
                                    </div>
                                </div>
                                <div className="gap-3 btn-area d-flex">
                                    <button className="p-2 cmn-btn alt p-sm-3">
                                        <i className="material-symbols-outlined mat-icon"> delete </i>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-wrap gap-5 p-5 notification-single d-center justify-content-between">
                                <div className="gap-3 d-flex top-review-wrapper align-items-center">
                                    <div className="avatar-item">
                                        <img className="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar"/>
                                    </div>
                                    <div className="text-area text-start">
                                        <h6 className="m-0 mb-1"><a href="public-profile-post.html">Jacob Jones</a> <span>Sent you a request</span></h6>
                                        <span className="mdtxt time-schedule">Just now</span>
                                    </div>
                                </div>
                                <div className="gap-3 btn-area d-flex">
                                    <button className="py-1 cmn-btn">
                                        Accept
                                    </button>
                                    <button className="py-1 cmn-btn alt">
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <div className="gap-5 p-5 notification-single d-center justify-content-between">
                                <div className="gap-3 d-flex top-review-wrapper align-items-center">
                                    <div className="avatar-item">
                                        <img className="avatar-img max-un" src="/src/assets/images/avatar-5.png" alt="avatar"/>
                                    </div>
                                    <div className="text-area text-start">
                                        <h6 className="m-0 mb-1"><a href="public-profile-post.html">Piter Maio</a><span>Comment on your post</span></h6>
                                        <span className="mdtxt time-schedule">Just now</span>
                                    </div>
                                </div>
                                <div className="gap-3 btn-area d-flex">
                                    <button className="p-2 cmn-btn alt p-sm-3">
                                        <i className="material-symbols-outlined mat-icon"> delete </i>
                                    </button>
                                </div>
                            </div>
                            <div className="gap-5 p-5 notification-single d-center justify-content-between">
                                <div className="gap-3 d-flex top-review-wrapper align-items-center">
                                    <div className="avatar-item">
                                        <img className="avatar-img max-un" src="/src/assets/images/avatar-7.png" alt="avatar"/>
                                    </div>
                                    <div className="text-area text-start">
                                        <h6 className="m-0 mb-1"><a href="public-profile-post.html">Piter Ferguson</a> <span>Share apost</span></h6>
                                        <span className="mdtxt time-schedule">Just now</span>
                                    </div>
                                </div>
                                <div className="gap-3 btn-area d-flex">
                                    <button className="p-2 cmn-btn alt p-sm-3">
                                        <i className="material-symbols-outlined mat-icon"> delete </i>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-wrap gap-5 p-5 notification-single d-center justify-content-between">
                                <div className="gap-3 d-flex top-review-wrapper align-items-center">
                                    <div className="avatar-item">
                                        <img className="avatar-img max-un" src="/src/assets/images/avatar-6.png" alt="avatar"/>
                                    </div>
                                    <div className="text-area text-start">
                                        <h6 className="m-0 mb-1"><a href="public-profile-post.html">Jacob Jones</a> <span>Sent you a request</span></h6>
                                        <span className="mdtxt time-schedule">Just now</span>
                                    </div>
                                </div>
                                <div className="gap-3 btn-area d-flex">
                                    <button className="py-1 cmn-btn">
                                        Accept
                                    </button>
                                    <button className="py-1 cmn-btn alt">
                                        Delete
                                    </button>
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
