import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import NavProfile from "../../components/NavProfile.jsx";
import ProfileContact from "../../components/ProfileContact.jsx";


export default function About() {
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header  />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <NavProfile active="2" />
                    <div className="row">
                        <div className="col-xxl-9 col-xl-8 col-lg-7">
                            <div className="p-3 single-box p-sm-5">
                                <div className="head-area text-start">
                                    <h6>Bio</h6>
                                    <p className="mt-6 mdtxt">“Lorem ipsum dolor sit amet consectetur. Nec donec vestibulum eleifend lectus ipsum ultrices et dictum”.</p>
                                </div>
                                <ul className="gap-3 mt-4 d-grid">
                                    <li className="gap-3 d-center justify-content-between">
                                        <div className="gap-2 info-area d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> integration_instructions </i>
                                            <span className="mdtxt">Developer</span>
                                        </div>
                                        <div className="input-item d-center text-start">
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                            <span>Public</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                            <span>Only me</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                            <span>Share</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="gap-3 d-center justify-content-between">
                                        <div className="gap-2 info-area d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> school </i>
                                            <span className="mdtxt">Master's degree</span>
                                        </div>
                                        <div className="input-item d-center text-start">
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                            <span>Public</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                            <span>Only me</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                            <span>Share</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="gap-3 d-center justify-content-between">
                                        <div className="gap-2 info-area d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> flag </i>
                                            <span className="mdtxt link"><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8efaebfdfacee3efe7e2a0ede1e3">[email&#160;protected]</a></span>
                                        </div>
                                        <div className="input-item d-center text-start">
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                            <span>Public</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                            <span>Only me</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                            <span>Share</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="gap-3 d-center justify-content-between">
                                        <div className="gap-2 info-area d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> language </i>
                                            <span className="mdtxt link">www.wisoky.com</span>
                                        </div>
                                        <div className="input-item d-center text-start">
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                            <span>Public</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                            <span>Only me</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                            <span>Share</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="gap-3 d-center justify-content-between">
                                        <div className="gap-2 info-area d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> call </i>
                                            <span className="mdtxt">(316) 555-0116</span>
                                        </div>
                                        <div className="input-item d-center text-start">
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                            <span>Public</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                            <span>Only me</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                            <span>Share</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="gap-3 d-center justify-content-between">
                                        <div className="gap-2 info-area d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> pin_drop </i>
                                            <span className="mdtxt">USA</span>
                                        </div>
                                        <div className="input-item d-center text-start">
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                            <span>Public</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                            <span>Only me</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                            <span>Share</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="gap-3 d-center justify-content-between">
                                        <div className="gap-2 info-area d-flex align-items-center">
                                            <i className="material-symbols-outlined mat-icon"> house </i>
                                            <span className="mdtxt">775 Rolling Green Rd.</span>
                                        </div>
                                        <div className="input-item d-center text-start">
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-3"> public </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> public </i>
                                                            <span>Public</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> person </i>
                                                            <span>Only me</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> share </i>
                                                            <span>Share</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="group-btn cus-dropdown dropend">
                                                <button type="button" className="dropdown-btn d-center ps-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                </button>
                                                <ul className="p-4 pt-2 dropdown-menu">
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> edit </i>
                                                            <span>Edit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                            <i className="material-symbols-outlined mat-icon"> delete </i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                       <ProfileContact/>
                    </div>
                </div>
            </main>
        </div>
    )
}
