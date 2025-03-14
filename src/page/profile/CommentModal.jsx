import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { X } from "lucide-react";
import PostImages from "./PostImage";
import { formatDistanceStrict, formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import api from "../../routes/AxiosInstance";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

Modal.setAppElement("#root");

const CommentModal = ({ isOpen, onClose, post }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [stompClient, setStompClient] = useState(null);
    const [content,setContent] = useState('');
    useEffect(() => {
        if (isOpen) {
            fetchComments();
            console.log("Socket")
            connectWebSocket();
        } else {
            disconnectWebSocket();
        }
        return () => disconnectWebSocket();
    }, [isOpen]);

    const fetchComments = async () => {
        setLoading(true);
        try {
            const response = await api.post("comment/get-comment", {
                postId: post.id,
                sort: 0,
                page: 0,
                size: 10
            });
            if(response.status===201){
                setContent('')
            }
        } catch (error) {
            console.error("Lỗi khi lấy bình luận:", error);
        } finally {
            setLoading(false);
        }
    };
    const sendComment = async()=>{
        setLoading(true);
        try {
            const response = await api.post("comment", {
                content:content,
                parentId:"",
                postId:post.id,
                type:0,
                status:1,
                replier:""
            });
           if(response.status===201)
            console.log("Gửi cmt thành công");
        } catch (error) {
            console.error("Lỗi khi lấy bình luận:", error);
        } finally {
            setLoading(false);
        }
    }
    const connectWebSocket = () => {
        const socket = new SockJS("http://localhost:8080/ws");
        console.log("Alo");
        
        const client = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            onConnect: () => {
                console.log("WebSocket connected");
                client.subscribe(`/topic/comments/${post.id}`, (message) => {
                    const newComment = JSON.parse(message.body);
                    setComments((prev) => [newComment, ...prev]);
                });
            },
            onDisconnect: () => {
                console.log("WebSocket disconnected");
            },
            onStompError: (frame) => {
                console.error("STOMP error:", frame);
            }
        });
    
        client.activate(); 
    };
    

    const disconnectWebSocket = () => {
        if (stompClient) {
            stompClient.deactivate();
            setStompClient(null);
        }
    };

    if (!isOpen) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="relative p-4 rounded-lg z-[9999] flex flex-col w-[600px] max-h-[90vh] bg-white shadow-lg"
            overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9998]"
        >
            {/* Header */}
            <div className="relative flex items-center justify-center p-4 border-b">
                <h2 className="text-xl font-semibold">Bài viết của {post.createdBy.fullName}</h2>
                <button className="absolute right-4 top-4" onClick={onClose}>
                    <X size={24} />
                </button>
            </div>

            {/* Nội dung chính */}
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="profile-area d-center justify-content-between">
                    <div className="gap-3 avatar-item d-flex align-items-center">
                        <div className="avatar position-relative">
                            <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar" />
                        </div>
                        <div className="info-area">
                            <h6 className="m-0"><a href="public-profile-post.html">{post.createdBy.fullName}</a></h6>
                            <span className="mdtxt status">{formatDistanceToNow(post.createdAt, { addSuffix: true, locale: vi })}</span>
                        </div>
                    </div>
                </div>
                <p className="text-gray-700">{post.contents}</p>
                <PostImages image={post.image} />
                <div className="h-[1px] bg-gray-300 w-full"></div>

                {/* Danh sách bình luận */}
                <div className="pt-4 border-t">
                    <h3 className="mb-3 text-lg font-semibold">Bình luận</h3>
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment.id} className="mb-4">
                                <div className="flex items-start gap-3">
                                    <img
                                        src="src/assets/images/avatar-1.png"
                                        alt="avatar"
                                        className="object-cover w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <div className="p-3 bg-gray-100 rounded-2xl">
                                            <p className="text-sm font-semibold">{comment.createdBy.fullName}</p>
                                            <p className="text-sm text-gray-800">{comment.content}</p>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                                            <span>{formatDistanceStrict(comment.createdAt, new Date(), { locale: vi })}</span>
                                            <button className="font-semibold">Thích</button>
                                            <button className="font-semibold">Phản hồi</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Chưa có bình luận nào.</p>
                    )}
                </div>
            </div>

            {/* Form nhập bình luận */}
            <div className="p-4 bg-white border-t">
                <div className="flex gap-3">
                    <div className="profile-box d-none d-xxl-block">
                        <a href="#"><img src="src/assets/images/add-post-avatar.png" className="max-un" alt="icon" /></a>
                    </div>
                    <div className="flex items-center w-full gap-2">
                        <input className="flex-1 p-2 border rounded-lg"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                         placeholder="Viết bình luận..." />
                        <button className="px-2 cmn-btn" onClick={sendComment}>
                            <i className="material-symbols-outlined mat-icon fs-xxl">near_me</i>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default CommentModal;
