import React from 'react'
import { Route, Router, Routes } from "react-router-dom";
import Home from '../page/Home';
import NotFound from '../page/NotFound';
import Notification from '../page/Notification';
import ProfileChat from '../page/chat/ProfileChat';
import DetailEvent from '../page/event/DetailEvent';
import Event from '../page/event/Event';
import Favorite from '../page/favorite/Favorite';
import AllFriend from '../page/friends/AllFriend';
import BlockList from '../page/friends/BlockList';
import FriendRequest from '../page/friends/FriendRequest';
import Suggestion from '../page/friends/Suggestion';
import Group from '../page/group/Group';
import GroupDetail from '../page/group/GroupDetail';
import LoginScreen from '../page/login/Login';
import Register from '../page/login/Register';
import Page from '../page/pages/Page';
import PageCreate from '../page/pages/PageCreate';
import PageDetail from '../page/pages/PageDetail';
import About from '../page/profile/About';
import MyVideo from '../page/profile/MyVideo';
import Photo from '../page/profile/Photo';
import ProfileConnection from '../page/profile/ProfileConnection';
import ProfileEdit from '../page/profile/ProfileEdit';
import ProfileEvent from '../page/profile/ProfileEvent';
import ProfileGroup from '../page/profile/ProfileGroup';
import ProfilePost from '../page/profile/ProfilePost';
import SavedPost from '../page/saved/SavedPost';
import SavedPostDetail from '../page/saved/SavedPostDetail';
import Setting from '../page/setting/Setting';
import ProtectedRoute from './ProtectedRoute';
import WebSocketTest from '../page/chat/WebSocketTest';

export default function AppRoutes() {
    return (
        
            <Routes>
                <Route path="/test" element={<WebSocketTest />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/profile-chat" element={<ProfileChat />} />
                </Route>
               
                <Route path="/notification" element={<Notification />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/my-profile" element={<ProfilePost />} />
                </Route>

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
                <Route path="/save-post/detail" element={<SavedPostDetail />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
      
    )
}
