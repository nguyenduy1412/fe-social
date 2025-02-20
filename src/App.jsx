
import './components/App.css'
import Home from './page/Home';
import ProfilePost from './page/profile/ProfilePost';
import ProfileEdit from './page/profile/ProfileEdit';
import ProfileChat from "./page/chat/ProfileChat.jsx";
import Notification from "./page/Notification.jsx";
import {Route, Routes} from "react-router-dom";
import MyVideo from "./page/profile/MyVideo.jsx";
import ProfileGroup from "./page/profile/ProfileGroup.jsx";
import ProfileConnection from "./page/profile/ProfileConnection.jsx";
import Photo from "./page/profile/Photo.jsx";
import About from "./page/profile/About.jsx";
import FriendRequest from "./page/friends/FriendRequest.jsx";
import Suggestion from "./page/friends/Suggestion.jsx";
import ProfileEvent from "./page/profile/ProfileEvent.jsx";
import BlockList from "./page/friends/BlockList.jsx";
import Event from "./page/event/Event.jsx";
import AllFriend from "./page/friends/AllFriend.jsx";
import DetailEvent from "./page/event/DetailEvent.jsx";
import Page from "./page/pages/Page.jsx";
import PageCreate from "./page/pages/PageCreate.jsx";
import PageDetail from "./page/pages/PageDetail.jsx";
import Group from './page/group/Group.jsx';
import GroupDetail from './page/group/GroupDetail.jsx';
import SavedPost from './page/saved/SavedPost.jsx';
import Favorite from './page/favorite/Favorite.jsx';
import Setting from './page/setting/Setting.jsx';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-chat" element={<ProfileChat />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/my-profile" element={<ProfilePost />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/my-about" element={<About />} />
        <Route path="/my-photo" element={<Photo />} />
        <Route path="/my-video" element={<MyVideo />} />
        <Route path="/my-group" element={<ProfileGroup />} />
        <Route path="/my-connection" element={<ProfileConnection />} />
        <Route path="/my-event" element={<ProfileEvent />} />
        <Route path="/friend-request" element={<FriendRequest />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/all-friend" element={<AllFriend />} />
        <Route path="/block-list" element={<BlockList />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event-detail" element={<DetailEvent />} />
        <Route path="/page" element={<Page />} />
        <Route path="/page/create" element={<PageCreate />} />
        <Route path="/page/detail" element={<PageDetail />} />
        <Route path="/group" element={<Group />} />
        <Route path="/group/detail" element={<GroupDetail />} />
        <Route path="/save-post" element={<SavedPost />} />
        <Route path="/save-post/detail" element={<SavedPost />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App
