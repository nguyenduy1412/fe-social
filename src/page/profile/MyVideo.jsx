import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import NavProfile from "../../components/NavProfile.jsx";
import ProfileContact from "../../components/ProfileContact.jsx";


export default function MyVideo() {
  return (
    <div>
    <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
    <Header />
    <BottomMenuStart />
    <main className="main-content">
        <div className="container-fluid">
            <NavProfile active="4" />
            <div className="row">
            <div className="col-xxl-9 col-xl-8">
                    <div className="p-5 single-box">
                        <div className="row cus-mar">
                            <div className="col-md-6">
                                <div className="single-box">
                                    <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                        <div className="bg-area w-100">
                                            <img className="bg-item w-100" src="src/assets/images/video-bg-1.png" alt="image"/>
                                        </div>
                                        <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                            <div className="content-box">
                                                <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box">
                                    <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                        <div className="bg-area w-100">
                                            <img className="bg-item w-100" src="src/assets/images/video-bg-2.png" alt="image"/>
                                        </div>
                                        <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                            <div className="content-box">
                                                <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box">
                                    <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                        <div className="bg-area w-100">
                                            <img className="bg-item w-100" src="src/assets/images/video-bg-3.png" alt="image"/>
                                        </div>
                                        <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                            <div className="content-box">
                                                <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box">
                                    <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                        <div className="bg-area w-100">
                                            <img className="bg-item w-100" src="src/assets/images/video-bg-4.png" alt="image"/>
                                        </div>
                                        <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                            <div className="content-box">
                                                <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box">
                                    <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                        <div className="bg-area w-100">
                                            <img className="bg-item w-100" src="src/assets/images/video-bg-5.png" alt="image"/>
                                        </div>
                                        <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                            <div className="content-box">
                                                <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box">
                                    <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                        <div className="bg-area w-100">
                                            <img className="bg-item w-100" src="src/assets/images/video-bg-6.png" alt="image"/>
                                        </div>
                                        <div className="text-center content-area position-absolute d-flex align-items-center justify-content-center">
                                            <div className="content-box">
                                                <a className="mfp-iframe popupvideo d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                                    <i className="material-symbols-outlined mat-icon fs-1"> play_arrow </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <ProfileContact/>
            </div>
        </div>
    </main>
</div>
  )
}
