
import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";


export default function ProfileEdit() {
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header  />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <div className="row profile-picture-area">
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-8">
                            <div className="p-3 single-box">
                                <div className="top-0 d-block d-lg-none position-absolute end-0">
                                    <button className="button profile-close">
                                        <i className="material-symbols-outlined mat-icon fs-xl"> close </i>
                                    </button>
                                </div>
                                <div className="upload-single">
                                    <div className="profile-picture text-start">
                                        <img className="preview-image w-100" src="src/assets/images/profile-picture.png" alt="Preview Image" />
                                    </div>
                                    <div className="file-upload">
                                        <label className="mt-4 text-center file">
                                            <input type="file" />
                                            <span className="gap-1 cmn-btn d-center">
                                                <i className="material-symbols-outlined mat-icon fs-2"> edit_note </i>
                                                Change Profile Photo
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="mb-5 head-area">
                                <h6>Edit Profile</h6>
                            </div>
                            <form action="#" className="gap-4 text-center d-grid">
                                <div className="p-5 single-box">
                                    <div className="col-md-12">
                                        <div className="upload-single cover-img">
                                            <div className="mb-2 head-area text-start">
                                                <h6>Cover Image</h6>
                                            </div>
                                            <div className="profile-picture position-relative text-start">
                                                <img className="preview-image w-100" src="src/assets/images/profile-edit-cover.png" alt="Preview Image" />
                                                <div className="bottom-0 p-4 file-upload position-absolute end-0">
                                                    <label className="mt-2 file text-start">
                                                        <input type="file" />
                                                        <span className="gap-1 cmn-btn d-center">
                                                            <i className="material-symbols-outlined mat-icon fs-2"> edit_note </i>
                                                            Change Cover Photo
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 single-box p-sm-5">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="single-input text-start">
                                                <label for="name">Name</label>
                                                <div className="input-area second">
                                                    <input type="text" value="Lerio Mao" placeholder="Type name" autocomplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="single-input text-start">
                                                <label for="number">Number</label>
                                                <div className="input-area second">
                                                    <input type="text" value="(316) 555-0116" placeholder="Number" autocomplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="single-input text-start">
                                                <label for="Email">Email</label>
                                                <div className="input-area second">
                                                    <input type="text" value="test@mail.com" placeholder="Email" autocomplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="single-input text-start">
                                                <label for="birthday">Birthday</label>
                                                <div className="input-area second">
                                                    <input type="text" value="31-12-2000" placeholder="birthday" autocomplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="single-input text-start">
                                                <label for="address">Address</label>
                                                <div className="input-area second">
                                                    <input type="text" value="775 Rolling Green Rd." placeholder="address" autocomplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="single-input text-start">
                                                <label for="country">Country</label>
                                                <div className="input-area second">
                                                    <input type="text" value="USA" placeholder="country" autocomplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="mt-5 head-area text-start">
                                                <h6>Bio</h6>
                                                <p className="mt-4 mdtxt">“Lorem ipsum dolor sit amet consectetur. Nec donec vestibulum eleifend lectus ipsum ultrices et dictum”.</p>
                                            </div>
                                            <ul className="gap-3 mt-5 d-grid">
                                                <li className="gap-3 d-center justify-content-between">
                                                    <div className="gap-2 info-area d-flex text-start align-items-center">
                                                        <i className="material-symbols-outlined mat-icon"> work </i>
                                                        <span className="mdtxt">Associate Creative Director – Experience Design</span>
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
                                                    <div className="gap-2 info-area d-flex text-start align-items-center">
                                                        <i className="material-symbols-outlined mat-icon"> work </i>
                                                        <span className="mdtxt">Former Designer at TECHTEK</span>
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
                                                    <div className="gap-2 info-area d-flex text-start align-items-center">
                                                        <i className="material-symbols-outlined mat-icon"> work </i>
                                                        <span className="mdtxt">Former Designer at Telpino</span>
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
                                                    <div className="gap-2 info-area d-flex text-start align-items-center">
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
                                                    <div className="gap-2 info-area d-flex text-start align-items-center">
                                                        <i className="material-symbols-outlined mat-icon"> school </i>
                                                        <span className="mdtxt">Honors (English)</span>
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
                                                    <div className="gap-2 info-area d-flex text-start align-items-center">
                                                        <i className="material-symbols-outlined mat-icon"> auto_awesome </i>
                                                        <span className="mdtxt">Religione</span>
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
                                                    <div className="gap-2 info-area d-flex text-start align-items-center">
                                                        <i className="material-symbols-outlined mat-icon"> favorite </i>
                                                        <span className="mdtxt">Relationship (Single)</span>
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
                                        <div className="mt-4 col-sm-12">
                                            <div className="btn-area text-end">
                                                <button className="cmn-btn">Saved Change</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
