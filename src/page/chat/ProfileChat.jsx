import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";


export default function ProfileChat() {
  return (
    <>
      <Header  />
      
      <main className="main-content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-4 pe-0">
                    <div className="d-block d-lg-none">
                        <button className="gap-2 mb-4 button profile-active mb-lg-0 d-flex align-items-center">
                            <i className="material-symbols-outlined mat-icon"> tune </i>
                            <span>Chat List</span>
                        </button>
                    </div>
                    <div className="profile-sidebar">
                        <div className="top-0 d-block d-lg-none position-absolute end-0">
                            <button className="button profile-close">
                                <i className="material-symbols-outlined mat-icon fs-xl"> close </i>
                            </button>
                        </div>
                        <div className="chat-area">
                            <aside>
                                <div className="p-5 chat-top">
                                    <div className="profile-area d-center justify-content-between">
                                        <div className="gap-3 mb-4 avatar-item d-flex align-items-center">
                                            <div className="avatar-item">
                                                <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar"/>
                                            </div>
                                            <div className="info-area">
                                                <h6 className="m-0">Chat</h6>
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
                                    <form action="#" className="py-2 input-area d-flex align-items-center">
                                        <i className="material-symbols-outlined mat-icon">search</i>
                                        <input type="text" placeholder="Search" autocomplete="off"/>
                                    </form>
                                </div>
                                <div className="header-menu cus-scrollbar">
                                    <div className="pb-5 single-item messages-area">
                                        <div className="p-4 mb-2 text-start d-flex justify-content-between chat-single active">
                                            <div className="gap-2 d-flex align-items-center">
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
                                        <div className="p-4 mb-2 text-start d-flex justify-content-between chat-single">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="avatar">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area">
                                                    <h6 className="m-0 mb-1">Annette Black</h6>
                                                    <p className="mdtxt">You: consequat sunt</p>
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
                                        <div className="p-4 mb-2 text-start d-flex justify-content-between chat-single">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="avatar">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-2.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area">
                                                    <h6 className="m-0 mb-1">Ralph Edwards</h6>
                                                    <p className="mdtxt sms">Amet minim mollit non....</p>
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
                                        <div className="p-4 mb-2 text-start d-flex justify-content-between chat-single">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="avatar">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-3.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area">
                                                    <h6 className="m-0 mb-1"><a href="#">Darrell Steward</a></h6>
                                                    <p className="mdtxt">You: consequat sunt</p>
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
                                        <div className="p-4 mb-2 text-start d-flex justify-content-between chat-single">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="avatar">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-4.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area">
                                                    <h6 className="m-0 mb-1">Wade Warren</h6>
                                                    <p className="mdtxt">You: consequat sunt</p>
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
                                        <div className="p-4 mb-2 text-start d-flex justify-content-between chat-single">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="avatar">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-5.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area">
                                                    <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                                                    <p className="mdtxt">You: consequat sunt</p>
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
                                        <div className="p-4 mb-2 text-start d-flex justify-content-between chat-single">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="avatar">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-6.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area">
                                                    <h6 className="m-0 mb-1">Jacob Jones</h6>
                                                    <p className="mdtxt">You: consequat sunt</p>
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
                                        <div className="p-4 mb-2 text-start d-flex justify-content-between chat-single">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="avatar">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-3.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area">
                                                    <h6 className="m-0 mb-1"><a href="#">Darrell Steward</a></h6>
                                                    <p className="mdtxt">You: consequat sunt</p>
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
                                        <div className="p-4 mb-2 text-start d-flex justify-content-between chat-single">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="avatar">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-4.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area">
                                                    <h6 className="m-0 mb-1">Wade Warren</h6>
                                                    <p className="mdtxt">You: consequat sunt</p>
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
                                        <div className="p-4 mb-2 text-start d-flex justify-content-between chat-single">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="avatar">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-5.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area">
                                                    <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                                                    <p className="mdtxt">You: consequat sunt</p>
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
                                        <div className="p-4 mb-2 text-start d-flex justify-content-between chat-single">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="avatar">
                                                    <img className="avatar-img max-un" src="src/assets/images/avatar-6.png" alt="avatar"/>
                                                </div>
                                                <div className="text-area">
                                                    <h6 className="m-0 mb-1">Jacob Jones</h6>
                                                    <p className="mdtxt">You: consequat sunt</p>
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
                            </aside>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-8 ps-4 ps-lg-0 d-flex flex-column gap-7">
                    <div className="chat-area">
                        <div className="main">
                            <div className="px-5 py-4 chat-head d-center justify-content-between">
                                <div className="gap-4 d-flex align-items-center">
                                    <img src="src/assets/images/avatar-2.png" alt="image"/>
                                    <div className="profile-status">
                                        <h5 className="m-0"><a href="public-profile-post.html" className="m-0">Piter Maio</a></h5>
                                        <span className="mdtxt">online</span>
                                    </div>
                                </div>
                                <div className="gap-3 d-flex align-items-center">
                                    <a href="#"><i className="material-symbols-outlined mat-icon fw-600"> call </i></a>
                                    <a href="#"><i className="material-symbols-outlined mat-icon"> videocam </i></a>
                                </div>
                            </div>
                            <ul className="bottom-0 px-5 py-4 cus-scrollbar main-chat-box">
                                <li className="you">
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-2.png" alt="image"/>
                                    </div>
                                    <div className="message">
                                        <p>Hello! Have you seen my backpack anywhere in office?</p>
                                        <span className="mdtxt">10:42</span>
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="message">
                                        <p>No, There is no backpack in office.</p>
                                        <span className="mdtxt">10:43</span>
                                    </div>
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-1.png" alt="image"/>
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="message">
                                        <p>Thank you for work, see you!</p>
                                        <span className="mdtxt">10:43</span>
                                    </div>
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-1.png" alt="image"/>
                                    </div>
                                </li>
                                <li className="you">
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-2.png" alt="image"/>
                                    </div>
                                    <div className="message">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <span className="mdtxt">10:44</span>
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="message">
                                        <p>Many desktop publishing packages and web page editors now</p>
                                        <span className="mdtxt">10:45</span>
                                    </div>
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-1.png" alt="image"/>
                                    </div>
                                </li>
                                <li className="you">
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-2.png" alt="image"/>
                                    </div>
                                    <div className="message">
                                        <p>A page when looking at its layout.</p>
                                        <span className="mdtxt">10:46</span>
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="message">
                                        <p>It was nice talking to you</p>
                                        <span className="mdtxt">10:47</span>
                                    </div>
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-1.png" alt="image"/>
                                    </div>
                                </li>
                                <li className="you">
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-2.png" alt="image"/>
                                    </div>
                                    <div className="message">
                                        <p>What time is it?</p>
                                        <span className="mdtxt">10:48</span>
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="message">
                                        <p>It is 11 o'clock</p>
                                        <span className="mdtxt">11:00</span>
                                    </div>
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-1.png" alt="image"/>
                                    </div>
                                </li>
                                <li className="you">
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-2.png" alt="image"/>
                                    </div>
                                    <div className="message">
                                        <p>I am late</p>
                                        <span className="mdtxt">11:42</span>
                                    </div>
                                </li>
                                <li className="me">
                                    <div className="message">
                                        <p>I have to go now</p>
                                        <span className="mdtxt">11:45</span>
                                    </div>
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-1.png" alt="image"/>
                                    </div>
                                </li>
                                <li className="you">
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-2.png" alt="image"/>
                                    </div>
                                    <div className="message">
                                        <p>Are you okay?</p>
                                        <span className="mdtxt">10:48</span>
                                    </div>
                                </li>
                                <li className="you">
                                    <div className="entete">
                                        <img src="src/assets/images/avatar-2.png" alt="image"/>
                                    </div>
                                    <div className="message">
                                        <p>Can I help you?</p>
                                        <span className="mdtxt">10:49</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="text-end chat-footer">
                                <form action="#" className="px-5 py-2 pt-1">
                                    <div className="gap-3 mt-2 d-flex align-items-sm-center align-items-end flex-column flex-sm-row">
                                        <div className="gap-2 p-0 form-content d-flex align-items-center w-100">
                                            <div className="gap-1 file-input d-flex gap-md-2">
                                                <div className="file-upload">
                                                    <label className="file">
                                                        <input type="file"/>
                                                        <span className="text-center border-0 file-custom d-grid">
                                                            <span className="material-symbols-outlined rotateInDownLeft mat-icon fs-xxl"> attachment </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="file-upload">
                                                    <label className="file">
                                                        <input type="file"/>
                                                        <span className="text-center border-0 file-custom d-grid">
                                                            <span className="material-symbols-outlined mat-icon fs-xxl"> perm_media </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="file-upload">
                                                    <label className="file">
                                                        <input type="file"/>
                                                        <span className="text-center border-0 file-custom d-grid">
                                                            <span className="material-symbols-outlined mat-icon fs-xxl"> gif_box </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <input className="py-2" placeholder="Type your message here.."/>
                                        </div>
                                        <div className="btn-area">
                                            <button className="px-2 cmn-btn px-sm-5 px-lg-6">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}
