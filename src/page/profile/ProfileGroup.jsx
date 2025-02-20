import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import Header from "../../components/Header.jsx";
import NavProfile from "../../components/NavProfile.jsx";
import ProfileContact from "../../components/ProfileContact.jsx";


const groups = [
    {
        img: "src/assets/images/group-img-1.png",
        avatar: "src/assets/images/group-avatar-1.png",
        name: "Travel Moon",
        type: "Public Group",
        members: "30k Member"
    },
    {
        img: "src/assets/images/group-img-2.png",
        avatar: "src/assets/images/group-avatar-2.png",
        name: "Car Legend Community",
        type: "Public Group",
        members: "30k Member"
    },
    {
        img: "src/assets/images/group-img-3.png",
        avatar: "src/assets/images/group-avatar-3.png",
        name: "Travel World",
        type: "Public Group",
        members: "30k Member"
    },
    // Thêm các nhóm khác vào danh sách này
];

export default function ProfileGroup() {
    return (
        <div>
            <button className="scrollToTop d-none d-lg-block"><i className="mat-icon fas fa-angle-double-up"></i></button>
            <Header  />
            <BottomMenuStart />
            <main className="main-content">
                <div className="container-fluid">
                    <NavProfile active="5" />
                    <div className="row">
                        <div className="col-xxl-9 col-xl-8">
                            <div className="row cus-mar friend-request">
                                {groups.map((group, index) => (
                                    <div className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 col-8" key={index}>
                                        <div className="p-5 single-box">
                                            <div className="avatar-box position-relative">
                                                <img className="avatar-img w-100" src={group.img} alt="group avatar" />
                                            </div>
                                            <div className="abs-avatar-item">
                                                <img className="avatar-img max-un" src={group.avatar} alt="avatar" />
                                            </div>
                                            <a href="group-details.html"><h6 className="m-0 my-2">{group.name}</h6></a>
                                            <p className="smtxt public-group">{group.type}</p>
                                            <div className="gap-1 mt-3 text-center friends-list d-center">
                                                <span className="m-0 smtxt">{group.members}</span>
                                            </div>
                                            <div className="gap-2 pt-5 mt-4 d-center btn-border">
                                                <button className="cmn-btn fourth">Joined</button>
                                                <button className="cmn-btn alt third">Invite</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <ProfileContact />
                    </div>
                </div>
            </main>
        </div>
    );
}
