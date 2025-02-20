import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import NavProfile from "../../components/NavProfile.jsx";
import ProfileContact from "../../components/ProfileContact.jsx";


export default function Photo() {
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header  />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <NavProfile active="3" />
                    <div className="row">
                        <div className="col-xxl-9 col-xl-8">
                            <div className="p-5 single-box">
                                <div className="row cus-mar">
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-1.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-2.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-3.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-4.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-5.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-6.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-7.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-8.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-9.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-10.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-11.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="single-box">
                                            <img className="w-100" src="src/assets/images/photo-gallery-12.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProfileContact />
                    </div>
                </div>
            </main>
        </div>
    )
}
