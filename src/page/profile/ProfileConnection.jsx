

// Danh sách các followers
import Header from "../../components/Header.jsx";
import NavProfile from "../../components/NavProfile.jsx";
import ProfileContact from "../../components/ProfileContact.jsx";
import {useState} from "react";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";

const following = [
    {
        id: 1,
        name: "Cameron Williamson",
        avatar: "src/assets/images/followers-img-1.png",
        mutualFriends: "10 Mutual Friends",
        profileLink: "public-profile-post.html",
    },
    {
        id: 2,
        name: "Leslie Alexander",
        avatar: "src/assets/images/followers-img-2.png",
        mutualFriends: "8 Mutual Friends",
        profileLink: "public-profile-post.html",
    }
]
const follower = [
    
    {
        id: 1,
        name: "Robert Fox",
        avatar: "src/assets/images/followers-img-4.png",
        mutualFriends: "15 Mutual Friends",
        profileLink: "public-profile-post.html",
    },
    {
        id: 2,
        name: "Kristin Watson",
        avatar: "src/assets/images/followers-img-5.png",
        mutualFriends: "12 Mutual Friends",
        profileLink: "public-profile-post.html",
    },
]

export default function ProfileConnection() {
    const [active, setActive] = useState([true, false]);

    const changeActive=(index)=>{
        setActive((prevActive) =>
        prevActive.map((item, i) => (i === index ? true : false))
      );
      setMemberId('')
    }
    const [memberId,setMemberId]=useState("");
    const showInfor=(id)=>{
        
        setMemberId(memberId===id?'':id)
    }
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block">
                <i className="mat-icon fas fa-angle-double-up"></i>
            </button>
            <Header  />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <NavProfile active="6" />
                    <div className="row">
                        <div className="col-xxl-9 col-xl-8">
                            <div className="p-5 single-box">
                                <ul className="flex-wrap gap-2 nav tab-area" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button onClick={()=>changeActive(0)} className={`nav-link d-center ${active[0]?'active':''} `} id="followers-tab" data-bs-toggle="tab" data-bs-target="#followers-tab-pane" type="button" role="tab" aria-controls="followers-tab-pane" aria-selected="true">followers</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button onClick={()=>changeActive(1)} className={`nav-link ${active[1]?'active':''} `} id="following-tab" data-bs-toggle="tab" data-bs-target="#following-tab-pane" type="button" role="tab" aria-controls="following-tab-pane" aria-selected="false" tabindex="-1">following</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className={`tab-pane fade ${active[0] ? "show active":""} `} id="followers-tab-pane" role="tabpanel" aria-labelledby="followers-tab" tabindex="0">
                                    <div className="flex-wrap gap-2 search-area d-center my-7 justify-content-between">
                                        <div className="total-followers">
                                            <h6>30k Followers</h6>
                                        </div>
                                        <form action="#" className="gap-4 d-flex align-items-stretch justify-content-between">
                                            <div className="gap-2 py-2 input-area w-100 d-flex align-items-center">
                                                <i className="material-symbols-outlined mat-icon">search</i>
                                                <input type="text" placeholder="Search" autocomplete="off" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="row">
                                        {follower.map((member) => (
                                            <div className="col-md-6" key={member.id}>
                                                <div className="p-3 single-box member-single">
                                                    <div className="profile-area d-center justify-content-between">
                                                        <div className="gap-3 avatar-item d-flex align-items-center">
                                                            <div className="avatar-item">
                                                                <img
                                                                    className="avatar-img max-un"
                                                                    src={member.avatar}
                                                                    alt="avatar"
                                                                />
                                                            </div>
                                                            <div className="info-area text-start">
                                                                <h6 className="m-0">
                                                                    <a href={member.profileLink}>{member.name}</a>
                                                                </h6>
                                                                <p className="mdtxt status">{member.mutualFriends}</p>
                                                            </div>
                                                        </div>
                                                        <div className="group-btn cus-dropdown">
                                                            <button
                                                                type="button"
                                                                className="dropdown-btn"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                                onClick={()=>showInfor(member.id)}
                                                            >
                                                                <i className="m-0 material-symbols-outlined fs-xxl">
                                                                    more_horiz
                                                                </i>
                                                            </button>
                                                            <ul className={`p-4 pt-2 dropdown-menu ${memberId == member.id ?'show':''} `}>
                                                                <li>
                                                                    <a
                                                                        className="gap-2 droplist d-flex align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <i className="material-symbols-outlined mat-icon">
                                                                            person_remove
                                                                        </i>
                                                                        <span>Unfollow</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="gap-2 droplist d-flex align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <i className="material-symbols-outlined mat-icon">
                                                                            hide_source
                                                                        </i>
                                                                        <span>Hide Contact</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="my-5 text-center col-12">
                                            <button className="cmn-btn alt third fw-600">Load More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${active[1] ? "show active":""} `} id="following-tab-pane" role="tabpanel" aria-labelledby="following-tab" tabindex="0">
                                    <div className="flex-wrap gap-2 search-area d-center my-7 justify-content-between">
                                        <div className="total-followers">
                                            <h6>30k Following</h6>
                                        </div>
                                        <form action="#" className="gap-4 d-flex align-items-stretch justify-content-between">
                                            <div className="gap-2 py-2 input-area w-100 d-flex align-items-center">
                                                <i className="material-symbols-outlined mat-icon">search</i>
                                                <input type="text" placeholder="Search" autocomplete="off" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="row">
                                        {following.map((member) => (
                                            <div className="col-md-6" key={member.id}>
                                                <div className="p-3 single-box member-single">
                                                    <div className="profile-area d-center justify-content-between">
                                                        <div className="gap-3 avatar-item d-flex align-items-center">
                                                            <div className="avatar-item">
                                                                <img
                                                                    className="avatar-img max-un"
                                                                    src={member.avatar}
                                                                    alt="avatar"
                                                                />
                                                            </div>
                                                            <div className="info-area text-start">
                                                                <h6 className="m-0">
                                                                    <a href={member.profileLink}>{member.name}</a>
                                                                </h6>
                                                                <p className="mdtxt status">{member.mutualFriends}</p>
                                                            </div>
                                                        </div>
                                                        <div className="group-btn cus-dropdown">
                                                            <button
                                                                type="button"
                                                                className="dropdown-btn"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                                onClick={()=>showInfor(member.id)}
                                                            >
                                                                <i className="m-0 material-symbols-outlined fs-xxl">
                                                                    more_horiz
                                                                </i>
                                                            </button>
                                                            <ul className={`p-4 pt-2 dropdown-menu ${memberId == member.id ?'show':''} `}>
                                                                <li>
                                                                    <a
                                                                        className="gap-2 droplist d-flex align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <i className="material-symbols-outlined mat-icon">
                                                                            person_remove
                                                                        </i>
                                                                        <span>Unfollow</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="gap-2 droplist d-flex align-items-center"
                                                                        href="#"
                                                                    >
                                                                        <i className="material-symbols-outlined mat-icon">
                                                                            hide_source
                                                                        </i>
                                                                        <span>Hide Contact</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="my-5 text-center col-12">
                                            <button className="cmn-btn alt third fw-600">Load More</button>
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
    );
}
