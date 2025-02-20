import React from 'react'
import Header from '../../components/Header'
import BottomMenuStart from '../../components/BottomMenuStart'
import MyProfile from '../../components/MyProfile'

export default function Setting() {
  return (
    <div>
            <div>
                <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
                <Header />
                <BottomMenuStart />
                <main className="main-content">
                    <div className="container-fluid">
                        <div className="row">
                            <MyProfile hide={true} index={9} />
                            <div class="col-xl-9 col-lg-8 cus-mar setting-row">
                    <div class="head-area mb-6 text-start">
                        <h5>Settings</h5>
                    </div>
                    <div class="single-box p-sm-5 p-3">
                        <div class="row gap-6">
                            <div class="col-xxl-2 col-md-3 col-sm-5 col-6 pe-0">
                                <div class="upload-single">
                                    <div class="head-area mb-2 text-start">
                                        <h6>Profile Image</h6>
                                    </div>
                                    <div class="profile-picture text-start">
                                        <img class="preview-image w-100" src="/src/assets/images/profile-picture.png" alt="Preview Image"/>
                                    </div>
                                    <div class="file-upload">
                                        <label class="file text-start mt-2">
                                            <input type="file"/>
                                            <span class="cmn-btn">Change Profile</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="upload-single cover-img">
                                    <div class="head-area mb-2 text-start">
                                        <h6>Cover Image</h6>
                                    </div>
                                    <div class="profile-picture text-start">
                                        <img class="preview-image w-100" src="/src/assets/images/profile-cover.png" alt="Preview Image"/>
                                    </div>
                                    <div class="file-upload">
                                        <label class="file text-start mt-2">
                                            <input type="file"/>
                                            <span class="cmn-btn">Change Cover photo</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-box text-start p-sm-5 p-3">
                        <div class="head-area mb-6">
                            <h6>General Information </h6>
                        </div>
                        <form action="#" class="text-center d-grid gap-4">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="single-input text-start">
                                        <label for="name">Name</label>
                                        <div class="input-area second">
                                            <input type="text" value="Java World Group" placeholder="Type name" autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="single-input text-start">
                                        <label for="number">Number</label>
                                        <div class="input-area second">
                                            <input type="text" value="(316) 555-0116" placeholder="Number" autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="single-input text-start">
                                        <label for="Email">Email</label>
                                        <div class="input-area second">
                                            <input type="text" value="test@mail.com" placeholder="Email" autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-7 col-9 mt-4">
                                    <div class="single-input text-start">
                                        <h6>Bio</h6>
                                        <p class="mdtxt mt-6">“Lorem ipsum dolor sit amet consectetur. Nec donec vestibulum eleifend lectus ipsum ultrices et dictum”.</p>
                                    </div>
                                </div>
                                <div class="col-sm-5 col-3 mt-4 d-center justify-content-end">
                                    <div class="single-input d-center text-start">
                                        <div class="group-btn cus-dropdown dropend">
                                            <button type="button" class="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="material-symbols-outlined fs-3 m-0"> public </i>
                                            </button>
                                            <ul class="dropdown-menu p-4 pt-2">
                                                <li>
                                                    <a class="droplist d-flex align-items-center gap-2" href="#">
                                                        <i class="material-symbols-outlined mat-icon"> public </i>
                                                        <span>Public</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="droplist d-flex align-items-center gap-2" href="#">
                                                        <i class="material-symbols-outlined mat-icon"> person </i>
                                                        <span>Only me</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="droplist d-flex align-items-center gap-2" href="#">
                                                        <i class="material-symbols-outlined mat-icon"> share </i>
                                                        <span>Share</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="group-btn cus-dropdown dropend">
                                            <button type="button" class="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="material-symbols-outlined fs-xxl m-0"> more_horiz </i>
                                            </button>
                                            <ul class="dropdown-menu p-4 pt-2">
                                                <li>
                                                    <a class="droplist d-flex align-items-center gap-2" href="#">
                                                        <i class="material-symbols-outlined mat-icon"> edit </i>
                                                        <span>Edit</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="droplist d-flex align-items-center gap-2" href="#">
                                                        <i class="material-symbols-outlined mat-icon"> delete </i>
                                                        <span>Delete</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 mt-4">
                                    <div class="btn-area text-end">
                                        <button class="cmn-btn">Saved Change</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>
  )
}
