import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import SiderBarFriend from "../../components/SiderBarFriend.jsx";


export default function BlockList() {
  return (
    <div>
      <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
      <Header />
      <BottomMenuStart />
      <main className="main-content">
        <div className="container-fluid">
          <div className="row">
            <SiderBarFriend active="4" />
            <div className="col-xl-9 col-lg-8">
                    <div className="row cus-mar friend-request">
                        <div className="col-xl-12">
                            <div className="p-5 single-box text-start">
                                <div className="table-responsive">
                                    <div className="mb-3 title-area">
                                        <h6>Blocked Member</h6>
                                    </div>
                                    <table className="table m-0">
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div className="gap-3 d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar"/>
                                                        </div>
                                                        <a href="public-profile-post.html" className="text-area">
                                                            <p className="m-0">Jerome Bell</p>
                                                        </a>
                                                    </div>
                                                </th>
                                                <td><p className="blocked">Blocked 27/08/2022</p></td>
                                                <td>
                                                    <div className="gap-3 btn-area d-flex justify-content-end">
                                                        <button className="cmn-btn">Unblock</button>
                                                        <button className="px-2 d-center cmn-btn alt">
                                                            <i className="material-symbols-outlined"> delete </i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="gap-3 d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-2.png" alt="avatar"/>
                                                        </div>
                                                        <a href="public-profile-post.html" className="text-area">
                                                            <p className="m-0">Piter Maio</p>
                                                        </a>
                                                    </div>
                                                </th>
                                                <td><p className="blocked">Blocked 26/08/2022</p></td>
                                                <td>
                                                    <div className="gap-3 btn-area d-flex justify-content-end">
                                                        <button className="cmn-btn">Unblock</button>
                                                        <button className="px-2 d-center cmn-btn alt">
                                                            <i className="material-symbols-outlined"> delete </i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="gap-3 d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-3.png" alt="avatar"/>
                                                        </div>
                                                        <a href="public-profile-post.html" className="text-area">
                                                            <p className="m-0">Floyd Miles</p>
                                                        </a>
                                                    </div>
                                                </th>
                                                <td><p className="blocked">Blocked 26/08/2022</p></td>
                                                <td>
                                                    <div className="gap-3 btn-area d-flex justify-content-end">
                                                        <button className="cmn-btn">Unblock</button>
                                                        <button className="px-2 d-center cmn-btn alt">
                                                            <i className="material-symbols-outlined"> delete </i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="gap-3 d-flex align-items-center">
                                                        <div className="avatar-item">
                                                            <img className="avatar-img max-un" src="src/assets/images/avatar-4.png" alt="avatar"/>
                                                        </div>
                                                        <a href="public-profile-post.html" className="text-area">
                                                            <p className="m-0">Devon Lane</p>
                                                        </a>
                                                    </div>
                                                </th>
                                                <td><p className="blocked">Blocked 26/08/2022</p></td>
                                                <td>
                                                    <div className="gap-3 btn-area d-flex justify-content-end">
                                                        <button className="cmn-btn">Unblock</button>
                                                        <button className="px-2 d-center cmn-btn alt">
                                                            <i className="material-symbols-outlined"> delete </i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
