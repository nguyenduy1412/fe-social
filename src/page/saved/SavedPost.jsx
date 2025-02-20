import React from 'react'
import Header from '../../components/Header'
import BottomMenuStart from '../../components/BottomMenuStart'
import MyProfile from '../../components/MyProfile'

export default function SavedPost() {
  return (
    <div>
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <div className="row">
                        <MyProfile hide={true} index={7} />
                        <div className="col-xl-9 col-lg-8 cus-mar">
                    <div className="mb-6 filter-head d-center justify-content-between">
                        <h5>All</h5>
                        <button className="d-center">
                            <i className="material-symbols-outlined mat-icon"> tune </i>
                        </button>
                    </div>
                    <div className="gap-4 p-5 single-box filter-single-box text-start p-md-3 d-grid d-xl-flex align-items-center">
                        <div className="avatar-area">
                            <a href="#"><img src="/src/assets/images/save-post-avatar-1.png" className="max-un" alt="icon"/></a>
                        </div>
                        <div className="title-area">
                            <h5><a href="saved-post-details.html">Shuttle is a transport-tech company making daily commutes convenient and affordable for the middle-income people ...</a></h5>
                            <div className="pt-3 pb-4 inside-profile">
                                <div className="gap-3 avatar-area d-flex align-items-center">
                                    <a href="#"><img src="/src/assets/images/avatar-5.png" className="max-un" alt="icon"/></a>
                                    <p className="mdtxt">Saved from Atikur Rahman's post in UI/UX DESIGN COMMUNITY</p>
                                </div>
                            </div>
                            <div className="gap-3 btn-item d-flex">
                                <a href="#" className="cmn-btn">
                                    Collection
                                </a>
                                <a href="#" className="gap-1 cmn-btn third">
                                    <i className="material-symbols-outlined mat-icon fs-xl"> google_plus_reshare </i>
                                    Share
                                </a>
                                <div className="group-btn cus-dropdown d-flex dropend">
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
                    </div>
                    <div className="gap-4 p-5 single-box filter-single-box text-start p-md-3 d-grid d-xl-flex align-items-center">
                        <div className="avatar-area">
                            <a href="#"><img src="/src/assets/images/save-post-avatar-2.png" className="max-un" alt="icon"/></a>
                        </div>
                        <div className="title-area">
                            <h5><a href="saved-post-details.html">Integer condimentum scelerisque rhoncus. Integer sit amet rutrum libero. Donec ultrices urna vitae diam gravida ...</a></h5>
                            <div className="pt-3 pb-4 inside-profile">
                                <div className="gap-3 avatar-area d-flex align-items-center">
                                    <a href="#"><img src="/src/assets/images/avatar-2.png" className="max-un" alt="icon"/></a>
                                    <p className="mdtxt">Saved from Atikur Rahman's post in UI/UX DESIGN COMMUNITY</p>
                                </div>
                            </div>
                            <div className="gap-3 btn-item d-flex">
                                <a href="#" className="cmn-btn">
                                    Collection
                                </a>
                                <a href="#" className="gap-1 cmn-btn third">
                                    <i className="material-symbols-outlined mat-icon fs-xl"> google_plus_reshare </i>
                                    Share
                                </a>
                                <div className="group-btn cus-dropdown d-flex dropend">
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
                    </div>
                    <div className="gap-4 p-5 single-box filter-single-box text-start p-md-3 d-grid d-xl-flex align-items-center">
                        <div className="avatar-area">
                            <a href="#"><img src="/src/assets/images/save-post-avatar-3.png" className="max-un" alt="icon"/></a>
                        </div>
                        <div className="title-area">
                            <h5><a href="saved-post-details.html">Aenean interdum tristique malesuada. Vivamus in leo iaculis, lobortis magna eu, lobortis turpis. Vivamus vitae...</a></h5>
                            <div className="pt-3 pb-4 inside-profile">
                                <div className="gap-3 avatar-area d-flex align-items-center">
                                    <a href="#"><img src="/src/assets/images/avatar-3.png" className="max-un" alt="icon"/></a>
                                    <p className="mdtxt">Saved from Atikur Rahman's post in UI/UX DESIGN COMMUNITY</p>
                                </div>
                            </div>
                            <div className="gap-3 btn-item d-flex">
                                <a href="#" className="cmn-btn">
                                    Collection
                                </a>
                                <a href="#" className="gap-1 cmn-btn third">
                                    <i className="material-symbols-outlined mat-icon fs-xl"> google_plus_reshare </i>
                                    Share
                                </a>
                                <div className="group-btn cus-dropdown d-flex dropend">
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
                    </div>
                    <div className="gap-4 p-5 single-box filter-single-box text-start p-md-3 d-grid d-xl-flex align-items-center">
                        <div className="avatar-area">
                            <a href="#"><img src="/src/assets/images/save-post-avatar-4.png" className="max-un" alt="icon"/></a>
                        </div>
                        <div className="title-area">
                            <h5><a href="saved-post-details.html">Nam auctor nibh lacus, ac aliquam nulla aliquam id. Vestibulum ac quam non est porttitor mollis...</a></h5>
                            <div className="pt-3 pb-4 inside-profile">
                                <div className="gap-3 avatar-area d-flex align-items-center">
                                    <a href="#"><img src="/src/assets/images/avatar-9.png" className="max-un" alt="icon"/></a>
                                    <p className="mdtxt">Saved from Atikur Rahman's post in UI/UX DESIGN COMMUNITY</p>
                                </div>
                            </div>
                            <div className="gap-3 btn-item d-flex">
                                <a href="#" className="cmn-btn">
                                    Collection
                                </a>
                                <a href="#" className="gap-1 cmn-btn third">
                                    <i className="material-symbols-outlined mat-icon fs-xl"> google_plus_reshare </i>
                                    Share
                                </a>
                                <div className="group-btn cus-dropdown d-flex dropend">
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
                    </div>
                    <div className="gap-4 p-5 single-box filter-single-box text-start p-md-3 d-grid d-xl-flex align-items-center">
                        <div className="avatar-area">
                            <a href="#"><img src="/src/assets/images/save-post-avatar-5.png" className="max-un" alt="icon"/></a>
                        </div>
                        <div className="title-area">
                            <h5><a href="saved-post-details.html">Nulla nec efficitur elit. Aenean leo nisl, sodales et sagittis et, fermentum id mi. Nunc blandit...</a></h5>
                            <div className="pt-3 pb-4 inside-profile">
                                <div className="gap-3 avatar-area d-flex align-items-center">
                                    <a href="#"><img src="/src/assets/images/avatar-4.png" className="max-un" alt="icon"/></a>
                                    <p className="mdtxt">Saved from Atikur Rahman's post in UI/UX DESIGN COMMUNITY</p>
                                </div>
                            </div>
                            <div className="gap-3 btn-item d-flex">
                                <a href="#" className="cmn-btn">
                                    Collection
                                </a>
                                <a href="#" className="gap-1 cmn-btn third">
                                    <i className="material-symbols-outlined mat-icon fs-xl"> google_plus_reshare </i>
                                    Share
                                </a>
                                <div className="group-btn cus-dropdown d-flex dropend">
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
                    </div>
                </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}
