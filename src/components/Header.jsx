import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../routes/axiosInstance";
import { useUser } from "./UserProvider";
const Header = () => {
  const { user } = useUser();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [active, setActive] = useState([false, false, false]);
  const [activeTheme, setActiveTheme] = useState(theme == 'dark' ? true : false);
  const [isTop, setIsTop] = useState(true); // Kiểm tra nếu cuộn dưới 500px
  const [isNewsFeedActive, setIsNewsFeedActive] = useState(false); // Trạng thái active cho NewsFeed
  const scrollToTopRef = useRef(null); // Tham chiếu đến nút "Scroll to Top"
  
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_API_URL
  const handleLogout = async (e) => {
    e.preventDefault(); // Ngăn chặn load lại trang
    try {
      const response = await api.post("auth/logout");
  
      if (response.status === 200) {
        // ✅ Xóa toàn bộ dữ liệu đăng nhập
        localStorage.clear(); // Xóa toàn bộ localStorage thay vì từng item
        sessionStorage.clear(); // Xóa session nếu có
  
        toast.success("Đăng xuất thành công!");
        navigate("/login");
      }
    } catch (err) {
      console.error("Lỗi khi gọi API:", err);
  
      const status = err.response?.status;
      const errorMessage = err.response?.data?.message || "Có lỗi xảy ra khi đăng xuất!";
  
      if (status === 401 || status === 403) {
        // Nếu lỗi quyền, vẫn cần xóa token để tránh lặp vô hạn
        localStorage.clear();
        sessionStorage.clear();
        toast.warning("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại!");
        navigate("/login");
      } else {
        toast.error(errorMessage);
      }
    }
  };

  
  const handleClick = (index) => {
    setActive((prevActive) =>
      prevActive.map((item, i) => (i === index ? !item : false))
    );
  };
  const switchTheme = () => {
    setActiveTheme(!activeTheme);
    if (activeTheme) {
      localStorage.setItem("theme", "light")
      setTheme(localStorage.getItem("theme"))
    }
    else {
      localStorage.setItem("theme", "dark")
      setTheme(localStorage.getItem("theme"))
    }

  }
  useEffect(() => {
    // Cập nhật class cho HTML và Section
    if (theme === "dark") {
      document.documentElement.classList.add("dark-ui");
      document.querySelectorAll("section").forEach((section) => {
        section.classList.add("dark-ui");
      });
    } else {
      document.documentElement.classList.remove("dark-ui");
      document.querySelectorAll("section").forEach((section) => {
        section.classList.remove("dark-ui");
      });
    }
  }, [theme]);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // Hàm xử lý khi cuộn trang
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true); // Thêm class
      } else {
        setIsFixed(false); // Bỏ class
      }
    };

    // Gắn sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Gỡ bỏ sự kiện khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Chỉ chạy một lần khi component được mount


  // Xử lý khi cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 500) {
        setIsTop(true);
        setIsNewsFeedActive(false);
      } else {
        setIsTop(false);
        setIsNewsFeedActive(true);
      }
    };

    // Gắn sự kiện cuộn
    window.addEventListener("scroll", handleScroll);

    // Cleanup khi component bị hủy
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cuộn lên đầu khi nhấn vào nút
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* <div className="preloader align-items-center justify-content-center">
          <span className="loader"></span>
      </div> */}

      <button className={`scrollToTop d-none d-lg-block ${!isTop ? "active" : ""}`} ref={scrollToTopRef} onClick={scrollToTop}>
        <i className="mat-icon fas fa-angle-double-up"></i>
      </button>

      <header className={`header-section header-menu ${isFixed ? "animated fadeInDown header-fixed" : ""}`}>
        <nav className="p-0 navbar navbar-expand-lg">
          <div className={`container-fluid`}>
            <nav className="navbar w-100 navbar-expand-lg justify-content-betweenm">
              <a href="index.html" className="navbar-brand">
                <img src="/src/assets/images/logo.png" className="logo" alt="logo" />
              </a>
              <button className="button search-active d-block d-md-none">
                <i className="d-center material-symbols-outlined fs-xxl mat-icon"> search </i>
              </button>
              <div className="search-form">
                <form action="#" className="input-area d-flex align-items-center">
                  <i className="material-symbols-outlined mat-icon">search</i>
                  <input type="text" placeholder="Search Circlehubtio" autoComplete="off" />
                </form>
              </div>
              <ul className="flex-row gap-1 py-4 navbar-nav feed gap-xl-20 gap-lg-10 gap-sm-7 py-lg-0 m-lg-auto ms-auto ms-aut align-self-center">
                <li>
                  <Link to="/" className="nav-icon home active">
                    <i className="mat-icon fs-xxl material-symbols-outlined">home</i>
                  </Link>
                </li>
                <li>
                  <a href="#news-feed" className="nav-icon feed">
                    <i className="mat-icon fs-xxl material-symbols-outlined">feed</i>
                  </a>
                </li>
                <li>
                  <a href="group.html" className="nav-icon">
                    <i className="mat-icon fs-xxl material-symbols-outlined">group</i>
                  </a>
                </li>
                <li>
                  <a href="videos.html" className="nav-icon">
                    <i className="mat-icon fs-xxl material-symbols-outlined">smart_display</i>
                  </a>
                </li>
              </ul>
              <div className="gap-3 right-area position-relative d-flex gap-xxl-6 align-items-center">
                <div className={`single-item d-none d-lg-block messages-area ${active[0] ? 'active' : ''}`}>
                  <div className="messages-btn cmn-head" onClick={() => handleClick(0)}>
                    <div className="icon-area d-center position-relative">
                      <i className="material-symbols-outlined mat-icon">mail</i>
                      <span className="abs-area position-absolute d-center mdtxt">4</span>
                    </div>
                  </div>
                  <div className="p-5 main-area messages-content">
                    <h5 className="mb-8">Messages</h5>
                    <div className="p-0 single-box mb-7">
                      <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                        <div className="avatar">
                          <img className="avatar-img max-un" src="/src/assets/images/avatar-7.png" alt="avatar" />
                        </div>
                        <div className="text-area">
                          <div className="title-area position-relative d-inline-flex align-items-center">
                            <h6 className="m-0 d-inline-flex">Piter Maio</h6>
                            <span className="abs-area position-absolute d-center mdtxt">3</span>
                          </div>
                          <p className="mdtxt sms">Amet minim mollit non....</p>
                        </div>
                      </a>
                    </div>
                    <div className="p-0 single-box mb-7">
                      <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                        <div className="avatar">
                          <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
                        </div>
                        <div className="text-area">
                          <h6 className="m-0 mb-1">Annette Black</h6>
                          <p className="mdtxt">You: consequat sunt</p>
                        </div>
                      </a>
                    </div>
                    <div className="p-0 single-box mb-7">
                      <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                        <div className="avatar">
                          <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar" />
                        </div>
                        <div className="text-area">
                          <h6 className="m-0 mb-1">Darrell Steward</h6>
                          <p className="mdtxt">You: consequat sunt</p>
                        </div>
                      </a>
                    </div>
                    <div className="p-0 single-box mb-7">
                      <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                        <div className="avatar">
                          <img className="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar" />
                        </div>
                        <div className="text-area">
                          <h6 className="m-0 mb-1">Wade Warren</h6>
                          <p className="mdtxt">You: consequat sunt</p>
                        </div>
                      </a>
                    </div>
                    <div className="p-0 single-box mb-7">
                      <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                        <div className="avatar">
                          <img className="avatar-img max-un" src="/src/assets/images/avatar-5.png" alt="avatar" />
                        </div>
                        <div className="text-area">
                          <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                          <p className="mdtxt">You: consequat sunt</p>
                        </div>
                      </a>
                    </div>
                    <div className="p-0 single-box mb-7">
                      <a href="profile-chat.html" className="gap-2 d-flex align-items-center">
                        <div className="avatar">
                          <img className="avatar-img max-un" src="/src/assets/images/avatar-6.png" alt="avatar" />
                        </div>
                        <div className="text-area">
                          <h6 className="m-0 mb-1">Jacob Jones</h6>
                          <p className="mdtxt">You: consequat sunt</p>
                        </div>
                      </a>
                    </div>
                    <div className="btn-area">
                      <Link to="/profile-chat">See all inbox</Link>
                    </div>
                  </div>
                </div>
                <div className={`single-item d-none d-lg-block messages-area notification-area ${active[1] ? 'active' : ''}`}>
                  <div className="notification-btn cmn-head position-relative" onClick={() => handleClick(1)}>
                    <div className="icon-area d-center position-relative">
                      <i className="material-symbols-outlined mat-icon">notifications</i>
                      <span className="abs-area position-absolute d-center mdtxt">3</span>
                    </div>
                  </div>
                  <div className="p-5 main-area notification-content">
                    <h5 className="mb-8">Notification</h5>
                    <div className="p-0 single-box mb-7">
                      <a href="profile-notification.html" className="d-flex justify-content-between align-items-center">
                        <div className="gap-3 left-item position-relative d-inline-flex">
                          <div className="avatar position-relative d-inline-flex">
                            <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
                            <img className="abs-item position-absolute max-un" src="/src/assets/images/icon/speech-bubble.png" alt="icon" />
                          </div>
                          <div className="text-area">
                            <h6 className="m-0 mb-1">Piter Maio</h6>
                            <p className="mdtxt">Comment on your post</p>
                          </div>
                        </div>
                        <div className="time-remaining">
                          <p className="mdtxt">Just now</p>
                        </div>
                      </a>
                    </div>
                    <div className="p-0 single-box mb-7">
                      <a href="profile-notification.html" className="d-flex justify-content-between align-items-center">
                        <div className="gap-3 left-item position-relative d-inline-flex">
                          <div className="avatar position-relative d-inline-flex">
                            <img className="avatar-img max-un" src="/src/assets/images/avatar-2.png" alt="avatar" />
                            <img className="abs-item position-absolute max-un" src="/src/assets/images/icon/emoji-love.png" alt="icon" />
                          </div>
                          <div className="text-area">
                            <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                            <p className="mdtxt">Like your photo</p>
                          </div>
                        </div>
                        <div className="time-remaining">
                          <p className="mdtxt">2min</p>
                        </div>
                      </a>
                    </div>
                    <div className="p-0 single-box mb-7">
                      <a href="profile-notification.html" className="d-flex justify-content-between align-items-center">
                        <div className="gap-3 left-item position-relative d-inline-flex">
                          <div className="avatar position-relative d-inline-flex">
                            <img className="avatar-img max-un" src="/src/assets/images/avatar-3.png" alt="avatar" />
                            <img className="abs-item position-absolute max-un" src="/src/assets/images/icon/emoji-love.png" alt="icon" />
                          </div>
                          <div className="text-area">
                            <h6 className="m-0 mb-1">Jacob Jones</h6>
                            <p className="mdtxt">Sent you a request</p>
                          </div>
                        </div>
                        <div className="time-remaining">
                          <p className="mdtxt">1hr</p>
                        </div>
                      </a>
                      <div className="gap-3 mt-4 d-flex">
                        <button className="cmn-btn">Accept</button>
                        <button className="cmn-btn alt">Delete</button>
                      </div>
                    </div>
                    <div className="p-0 single-box mb-7">
                      <a href="profile-notification.html" className="d-flex justify-content-between align-items-center">
                        <div className="gap-3 left-item position-relative d-inline-flex">
                          <div className="avatar position-relative d-inline-flex">
                            <img className="avatar-img max-un" src="/src/assets/images/avatar-4.png" alt="avatar" />
                            <img className="abs-item position-absolute max-un" src="/src/assets/images/icon/emoji-love.png" alt="icon" />
                          </div>
                          <div className="text-area">
                            <h6 className="m-0 mb-1">Kathryn Murphy</h6>
                            <p className="mdtxt">officia consequat duis enim...</p>
                          </div>
                        </div>
                        <div className="time-remaining">
                          <p className="mdtxt">2hr</p>
                        </div>
                      </a>
                    </div>

                    <div className="btn-area">
                      <Link to="/notification">See all notification</Link>
                    </div>
                  </div>
                </div>
                <div className={`single-item d-none d-lg-block profile-area position-relative ${active[2] ? 'active' : ''}`}>
                  <div className="profile-pic d-flex align-items-center" >
                    <span className="avatar cmn-head active-status" onClick={() => handleClick(2)} >
                      <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
                    </span>
                  </div>
                  <div className="p-5 main-area profile-content">
                    <div className="head-area">
                      <div className="gap-3 d-flex align-items-center">
                        <div className="avatar-item">
                          <img className="avatar-img max-un" src="/src/assets/images/avatar-1.png" alt="avatar" />
                        </div>
                        <div className="text-area">
                          <h6 className="m-0 mb-1">{user?.fullName}</h6>
                          <p className="mdtxt">Web Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="my-2 view-profile">
                      <Link to="/my-profile" className="py-2 text-center mdtxt w-100">View profile</Link>
                    </div>
                    <ul>
                      <li>
                        <Link to="/profile-edit" className="mdtxt">
                          <i className="material-symbols-outlined mat-icon"> settings </i>
                          Settings & Privacy
                        </Link>
                      </li>
                      <li>
                        <a href="#" className="mdtxt" onClick={handleLogout}>
                          <i className="material-symbols-outlined mat-icon"> power_settings_new </i>
                          Sign Out
                        </a>
                      </li>
                    </ul>

                    <div className="gap-1 mt-4 switch-wrapper d-flex align-items-center" >
                      <i className={`mat-icon material-symbols-outlined sun icon ${!activeTheme ? 'active' : ''}`}> light_mode </i>
                      <label className="switch">
                        <input type="checkbox" className="checkbox" checked={activeTheme} onChange={switchTheme} />
                        <span className="slider"></span>
                      </label>
                      <i className={`mat-icon material-symbols-outlined moon icon ${activeTheme ? 'active' : ''}`}> dark_mode </i>
                      <span className="mdtxt ms-2">{activeTheme}</span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </nav>

      </header>
    </>
  );
};

export default Header;
