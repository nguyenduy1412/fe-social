import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import { useEffect, useState } from "react";



export default function PageCreate() {
    const [color,setColor]=useState(true)
    useEffect(()=>{
        if(localStorage.getItem("theme")=='dark'){
            setColor(false)
        }else{
            setColor(true)
        }
    },[localStorage.getItem("theme")])
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="d-block d-lg-none">
                                <button className="gap-2 mb-4 button profile-active mb-lg-0 d-flex align-items-center">
                                    <i className="material-symbols-outlined mat-icon"> tune </i>
                                    <span>My Create</span>
                                </button>
                            </div>
                            <div className="p-5 profile-sidebar cus-scrollbar">
                                <div className="top-0 d-block d-lg-none position-absolute end-0">
                                    <button className="button profile-close">
                                        <i className="material-symbols-outlined mat-icon fs-xl"> close </i>
                                    </button>
                                </div>
                                <div className="mb-5 head-area">
                                    <h5>Create Page</h5>
                                </div>
                                <div className="gap-2 mb-5 profile-picture d-flex align-items-center">
                                    <div className="avatar position-relative">
                                        <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar"/>
                                    </div>
                                    <div className="text-area">
                                        <h6 className="m-0 mb-1"><a href="profile-post.html">Lerio Mao</a></h6>
                                        <p className="mdtxt">Admin</p>
                                    </div>
                                </div>
                                <form action="https://pixner.net/circlehub/main/pages-info.html" className="gap-4 text-center d-grid">
                                    <div className="input-area second">
                                        <input type="text" placeholder="Page name"/>
                                    </div>
                                    
                                    <div className="input-area second " >
                                        <select className={` ${localStorage.getItem("theme")=='light' ? '':'selected-page'}`} >
                                            <option value="0">Category</option>
                                            <option value="1">Category One</option>
                                            <option value="2">Category Two</option>
                                            <option value="3">Category Three</option>
                                        </select>
                                    </div>
                                    <div className="input-area second">
                                        <textarea cols="30" placeholder="Bio(optional)" rows="3"></textarea>
                                    </div>
                                    <div className="btn-area text-end">
                                        <button className="cmn-btn">Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="mb-5 banner-area create-group pages-create">
                                <div className="p-5 single-box">
                                    <div className="avatar-area position-relative">
                                        <img className="avatar-img w-100" src="/src/assets/images/create-page-cover.png" alt="avatar"/>
                                            <div className="bottom-0 p-3 abs-area w-100 position-absolute d-center justify-content-end">
                                                <form action="#">
                                                    <div className="file-upload">
                                                        <label className="mt-1 file">
                                                            <input type="file"/>
                                                                <span className="p-3 text-center bg-transparent border-0 file-custom d-grid">
                                                                    <p className="cmn-btn">Select Photo</p>
                                                                </span>
                                                        </label>
                                                    </div>
                                                </form>
                                            </div>
                                    </div>
                                    <div className="flex-wrap gap-3 px-5 py-4 top-area d-center justify-content-between">
                                        <div className="gap-4 d-grid align-items-center">
                                            <div className="m-0 abs-avatar-item">
                                                <form action="#">
                                                    <div className="file-upload">
                                                        <label className="mt-1 file">
                                                            <input type="file"/>
                                                                <span className="px-3 py-6 text-center border-0 file-custom d-grid">
                                                                    <span className="material-symbols-outlined mat-icon fs-xxxl"> perm_media </span>
                                                                    <span className="mdtxt">Group Profile</span>
                                                                </span>
                                                        </label>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="text-area text-start">
                                                <h5 className="m-0 mb-1">Page Name</h5>
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
