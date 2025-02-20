import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import MyProfile from "../../components/MyProfile.jsx";
import {Link} from "react-router-dom";


export default function Page() {
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <div className="row">
                        <MyProfile hide={true} index={4} />
                        <div className="col-xl-9 col-lg-8">
                    <div className="mb-5 head-area">
                        <h6>Pages</h6>
                    </div>
                    <div className="flex-wrap gap-3 mb-5 top-area d-center justify-content-between">
                        <ul className="flex-wrap gap-2 nav tab-area" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link d-center active" id="liked-tab" data-bs-toggle="tab" data-bs-target="#liked-tab-pane"
                                    type="button" role="tab" aria-controls="liked-tab-pane" aria-selected="true">liked</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link d-center" id="populer-tab" data-bs-toggle="tab" data-bs-target="#populer-tab-pane"
                                    type="button" role="tab" aria-controls="populer-tab-pane" aria-selected="false">popular</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link d-center" id="suggested-tab" data-bs-toggle="tab" data-bs-target="#suggested-tab-pane"
                                    type="button" role="tab" aria-controls="suggested-tab-pane" aria-selected="false">suggested pages</button>
                            </li>
                        </ul>
                        <div className="btn-item">
                            <Link to="create" className="gap-1 cmn-btn">
                                <i className="material-symbols-outlined mat-icon"> add </i>
                                Create Pages
                            </Link>
                        </div>
                    </div>
                    <div className="tab-content pages-create">
                        <div className="tab-pane fade show active" id="liked-tab-pane" role="tabpanel" aria-labelledby="liked-tab" tabindex="0">
                            <div className="row cus-mar friend-request">
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-1.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-1.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><Link to="detail">Travel Moon</Link></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-2.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-2.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Boyseberry</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-3.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-3.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Cempedak</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-4.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-4.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Acai</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-5.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-5.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Citron</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-6.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-6.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Canistel</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-7.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-7.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Citron</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-8.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-8.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Apricot</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-9.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-9.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Acerola</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="populer-tab-pane" role="tabpanel" aria-labelledby="populer-tab" tabindex="0">
                            <div className="row cus-mar friend-request">
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-3.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-3.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Cempedak</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-4.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-4.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Acai</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-5.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-5.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Citron</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-6.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-6.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Canistel</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-1.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-1.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Travel Moon</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-2.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-2.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Boyseberry</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-7.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-7.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Citron</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-8.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-8.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Apricot</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-9.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-9.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Acerola</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="suggested-tab-pane" role="tabpanel" aria-labelledby="suggested-tab" tabindex="0">
                            <div className="row cus-mar friend-request">
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-6.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-6.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><Link to="/page/detail">Canistel</Link></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-2.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-2.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Boyseberry</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-3.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-3.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Cempedak</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-4.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-4.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Acai</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-5.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-5.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Citron</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-7.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-7.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Citron</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-8.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-8.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Apricot</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-9.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-9.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Acerola</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-8">
                                    <div className="p-5 single-box">
                                        <div className="avatar-area">
                                            <img className="avatar-img w-100" src="src/assets/images/page-img-1.png" alt="avatar"/>
                                        </div>
                                        <div className="my-5 head-area d-flex justify-content-between">
                                            <div className="gap-3 d-flex align-items-center">
                                                <div className="avatar-item">
                                                    <img className="avatar-img max-un" src="src/assets/images/page-avatar-1.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area text-start">
                                                    <h6 className="m-0 mb-1"><a href="pages-details.html">Travel Moon</a></h6>
                                                    <p className="mdtxt">Zara</p>
                                                </div>
                                            </div>
                                            <div className="bg-transparent btn-group cus-dropdown dropend">
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
                                        <div className="gap-3 text-center friends-list d-flex align-items-center">
                                            <ul className="d-flex align-items-center justify-content-center">
                                                <li><img src="src/assets/images/avatar-2.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-3.png" alt="image"/></li>
                                                <li><img src="src/assets/images/avatar-4.png" alt="image"/></li>
                                            </ul>
                                            <span className="smtxt d-center">30k Like</span>
                                        </div>
                                        <div className="mt-4 btn-area">
                                            <button className="gap-1 cmn-btn justify-content-center w-100">
                                                <i className="material-symbols-outlined mat-icon"> thumb_up </i>
                                                Liked
                                            </button>
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
