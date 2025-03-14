import Header from "../../components/Header.jsx";
import BottomMenuStart from "../../components/BottomMenuStart.jsx";
import { useEffect, useState } from "react";
import api from "../../routes/AxiosInstance.jsx";
import { useUser } from "../../components/UserProvider.jsx";
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import axios from "axios";
import { format, isToday, isYesterday } from 'date-fns';
import { vi } from 'date-fns/locale';
export default function ProfileChat() {

    const API_BASE_URL = "http://192.168.1.14:9000";
    const [client, setClient] = useState(null);
    const [connectionStatus, setConnectionStatus] = useState('Disconnected');
    const [uri, setUri] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [params, setParams] = useState('page=0&&lastMessageId=null')
    const roomId = '67cfaabf259a865554be2abb'
    const sender = '67cfaa4f259a865554be2ab9'
    const receiver = '67cfaa60259a865554be2aba'
    const [load, setLoad] = useState(false)
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [lastMessageId, setLastMessageId] = useState("null");
    const { user } = useUser();
    const formatTime = (date) => {
        const messageDate = new Date(date);

        if (isToday(messageDate)) {
            // Nếu là hôm nay, chỉ hiển thị giờ phút
            return format(messageDate, "HH:mm", { locale: vi });
        } else if (isYesterday(messageDate)) {
            // Nếu là hôm qua, ghi "Hôm qua HH:mm"
            return `Hôm qua ${format(messageDate, "HH:mm", { locale: vi })}`;
        } else {
            // Nếu là ngày khác, ghi đầy đủ ngày tháng năm
            return format(messageDate, "dd/MM/yyyy HH:mm", { locale: vi });
        }
    };
    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/api/v1/chatmessage/${roomId}?${params}`)
            .then(response => {
                setMessages(prevMessages => [...response.data.content, ...prevMessages]);
                setLoad(false)
                console.log("data message ", response.data.content);
                setTotalPage(response.data.totalPages);
                setLastMessageId(response.data.content[0].id);
            })
            .catch(error => {
                console.log(error.message);
            });
    }, [params]);
    const connectStompClient = () => {
        // Ngắt kết nối cũ nếu có
        console.log("click")
        if (client) {
            client.deactivate();
        }
        setConnectionStatus('Connecting...'); // Thêm trạng thái đang kết nối 
        const socket = new SockJS(`${API_BASE_URL}/ws`);
        const stompClient = new Client({
            webSocketFactory: () => socket,
            onConnect: () => {
                console.log('Connected to WebSocket');
                setConnectionStatus('Connected');
                stompClient.subscribe(`/topic/messages/${roomId}`, (message) => {
                    const receivedMessage = JSON.parse(message.body);
                    console.log("vao")
                    setMessages((prevMessages) => [...prevMessages, receivedMessage]);
                });
            },
            onDisconnect: () => {
                console.log('Disconnected from WebSocket');
                setConnectionStatus('Disconnected');
            },
            onStompError: (frame) => {
                console.error('STOMP error:', frame.headers['message']);
                setConnectionStatus('Error');
            },
        });

        stompClient.activate();
        setClient(stompClient);
    };
    useEffect(() => {
        // Gọi kết nối khi component mount
        connectStompClient();

        // Cleanup khi component unmount
        return () => {
            if (client) {
                client.deactivate();
            }
        };
    }, [receiver]);
    const sendMessage = () => {
        console.log("Nhảy");
        if (client && connectionStatus === 'Connected') {
            if (message.trim()) {
                submitMessage(0, message.trim());
                setMessage('')
            }
        } else {
            console.log("Chưa kết nối đến STOMP server");
        }
    };
    const submitMessage = (type, message) => {
        try {
            const chatMessage = {
                sender: sender,
                roomId: roomId,
                type: type,
                message: message
            };

            if (client && client.connected) {
                client.publish({
                    destination: `/app/chat/${roomId}`,
                    body: JSON.stringify(chatMessage),
                });
            } else {
                console.error("STOMP client không được kết nối");
                // Có thể thử kết nối lại
                reconnectStompClient();
            }
        } catch (error) {
            console.error("Lỗi khi gửi tin nhắn:", error);
        }
    };

    // Chat users data
    const chatUsers = [
        {
            id: 1,
            name: "Piter Maio",
            avatar: "src/assets/images/avatar-7.png",
            message: "Amet minim mollit non....",
            unread: 3,
            active: true
        },
        {
            id: 2,
            name: "Annette Black",
            avatar: "src/assets/images/avatar-1.png",
            message: "You: consequat sunt",
            unread: 0,
            active: false
        },
        {
            id: 3,
            name: "Ralph Edwards",
            avatar: "src/assets/images/avatar-2.png",
            message: "Amet minim mollit non....",
            unread: 0,
            active: false
        },
        {
            id: 4,
            name: "Darrell Steward",
            avatar: "src/assets/images/avatar-3.png",
            message: "You: consequat sunt",
            unread: 0,
            active: false
        },
        {
            id: 5,
            name: "Wade Warren",
            avatar: "src/assets/images/avatar-4.png",
            message: "You: consequat sunt",
            unread: 0,
            active: false
        },
        {
            id: 6,
            name: "Kathryn Murphy",
            avatar: "src/assets/images/avatar-5.png",
            message: "You: consequat sunt",
            unread: 0,
            active: false
        },
        {
            id: 7,
            name: "Jacob Jones",
            avatar: "src/assets/images/avatar-6.png",
            message: "You: consequat sunt",
            unread: 0,
            active: false
        }
    ];

    // Chat messages data
    const chatMessages = [
        {
            sender: "you",
            avatar: "src/assets/images/avatar-2.png",
            message: "Hello! Have you seen my backpack anywhere in office?",
            time: "10:42"
        },
        {
            sender: "me",
            avatar: "src/assets/images/avatar-1.png",
            message: "No, There is no backpack in office.",
            time: "10:43"
        },
        {
            sender: "me",
            avatar: "src/assets/images/avatar-1.png",
            message: "Thank you for work, see you!",
            time: "10:43"
        },
        {
            sender: "you",
            avatar: "src/assets/images/avatar-2.png",
            message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            time: "10:44"
        },
        {
            sender: "me",
            avatar: "src/assets/images/avatar-1.png",
            message: "Many desktop publishing packages and web page editors now",
            time: "10:45"
        },
        {
            sender: "you",
            avatar: "src/assets/images/avatar-2.png",
            message: "A page when looking at its layout.",
            time: "10:46"
        },
        {
            sender: "me",
            avatar: "src/assets/images/avatar-1.png",
            message: "It was nice talking to you",
            time: "10:47"
        },
        {
            sender: "you",
            avatar: "src/assets/images/avatar-2.png",
            message: "What time is it?",
            time: "10:48"
        },
        {
            sender: "me",
            avatar: "src/assets/images/avatar-1.png",
            message: "It is 11 o'clock",
            time: "11:00"
        },
        {
            sender: "you",
            avatar: "src/assets/images/avatar-2.png",
            message: "I am late",
            time: "11:42"
        },
        {
            sender: "me",
            avatar: "src/assets/images/avatar-1.png",
            message: "I have to go now",
            time: "11:45"
        },
        {
            sender: "you",
            avatar: "src/assets/images/avatar-2.png",
            message: "Are you okay?",
            time: "10:48"
        },
        {
            sender: "you",
            avatar: "src/assets/images/avatar-2.png",
            message: "Can I help you?",
            time: "10:49"
        }
    ];

    return (
        <>
            <Header user={user} />
            <main className="main-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-4 pe-0">
                            <div className="d-block d-lg-none">
                                <button className="gap-2 mb-4 button profile-active mb-lg-0 d-flex align-items-center">
                                    <i className="material-symbols-outlined mat-icon"> tune </i>
                                    <span>Chat List</span>
                                </button>
                            </div>
                            <div className="profile-sidebar">
                                <div className="top-0 d-block d-lg-none position-absolute end-0">
                                    <button className="button profile-close">
                                        <i className="material-symbols-outlined mat-icon fs-xl"> close </i>
                                    </button>
                                </div>
                                <div className="chat-area">
                                    <aside>
                                        <div className="p-5 chat-top">
                                            <div className="profile-area d-center justify-content-between">
                                                <div className="gap-3 mb-4 avatar-item d-flex align-items-center">
                                                    <div className="avatar-item">
                                                        <img className="avatar-img max-un" src="src/assets/images/avatar-1.png" alt="avatar" />
                                                    </div>
                                                    <div className="info-area">
                                                        <h6 className="m-0">Chat</h6>
                                                    </div>
                                                </div>
                                                <div className="btn-group cus-dropdown dropend">
                                                    <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                    </button>
                                                    <ul className="p-4 pt-2 dropdown-menu">
                                                        <li>
                                                            <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                <span>Unfollow</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                <span>Hide Contact</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <form action="#" className="py-2 input-area d-flex align-items-center">
                                                <i className="material-symbols-outlined mat-icon">search</i>
                                                <input type="text" placeholder="Search" autoComplete="off" />
                                            </form>
                                        </div>
                                        <div className="header-menu cus-scrollbar">
                                            <div className="pb-5 single-item messages-area">
                                                {chatUsers.map((chatUser) => (
                                                    <div key={chatUser.id} className={`p-4 mb-2 text-start d-flex justify-content-between chat-single ${chatUser.active ? 'active' : ''}`}>
                                                        <div className="gap-2 d-flex align-items-center">
                                                            <div className="avatar">
                                                                <img className="avatar-img max-un" src={chatUser.avatar} alt="avatar" />
                                                            </div>
                                                            <div className="text-area">
                                                                <div className="title-area position-relative d-inline-flex align-items-center">
                                                                    <h6 className="m-0 d-inline-flex">{chatUser.name}</h6>
                                                                    {chatUser.unread > 0 && (
                                                                        <span className="abs-area position-absolute d-center mdtxt">{chatUser.unread}</span>
                                                                    )}
                                                                </div>
                                                                <p className="mdtxt sms">{chatUser.message}</p>
                                                            </div>
                                                        </div>
                                                        <div className="btn-group cus-dropdown dropend">
                                                            <button type="button" className="dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="m-0 material-symbols-outlined fs-xxl"> more_horiz </i>
                                                            </button>
                                                            <ul className="p-4 pt-2 dropdown-menu">
                                                                <li>
                                                                    <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                        <i className="material-symbols-outlined mat-icon"> person_remove </i>
                                                                        <span>Unfollow</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="gap-2 droplist d-flex align-items-center" href="#">
                                                                        <i className="material-symbols-outlined mat-icon"> hide_source </i>
                                                                        <span>Hide Contact</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-8 ps-4 ps-lg-0 d-flex flex-column gap-7">
                            <div className="chat-area">
                                <div className="main">
                                    <div className="px-5 py-4 chat-head d-center justify-content-between">
                                        <div className="gap-4 d-flex align-items-center">
                                            <img src="src/assets/images/avatar-2.png" alt="image" />
                                            <div className="profile-status">
                                                <h5 className="m-0"><a href="public-profile-post.html" className="m-0">Piter Maio</a></h5>
                                                <span className="mdtxt">online</span>
                                            </div>
                                        </div>
                                        <div className="gap-3 d-flex align-items-center">
                                            <a href="#"><i className="material-symbols-outlined mat-icon fw-600"> call </i></a>
                                            <a href="#"><i className="material-symbols-outlined mat-icon"> videocam </i></a>
                                        </div>
                                    </div>
                                    <ul className="bottom-0 px-5 py-4 cus-scrollbar main-chat-box">
                                        {messages.map((message, index) => (
                                            <li key={index} className={message.sender.id !== '67cfaa4f259a865554be2ab9' ? 'you' : 'me'}>
                                                {message.sender.id !== "67cfaa4f259a865554be2ab9" && (
                                                    <div className="entete">
                                                        <img src="src/assets/images/avatar-2.png" alt="image" />
                                                    </div>
                                                )}
                                                <div className="message">
                                                    <p>{message.message}</p>
                                                    <span className="mdtxt">{formatTime(message.timestamp)}</span>
                                                </div>
                                                {message.sender === "67cfaa4f259a865554be2ab9" && (
                                                    <div className="entete">
                                                        <img src='src/assets/images/avatar-1.png' alt="image" />
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-end chat-footer">
                                        <form action="#" className="px-5 py-2 pt-1">
                                            <div className="gap-3 mt-2 d-flex align-items-sm-center align-items-end flex-column flex-sm-row">
                                                <div className="gap-2 p-0 form-content d-flex align-items-center w-100">
                                                    <div className="gap-1 file-input d-flex gap-md-2">
                                                        <div className="file-upload">
                                                            <label className="file">
                                                                <input type="file" />
                                                                <span className="text-center border-0 file-custom d-grid">
                                                                    <span className="material-symbols-outlined rotateInDownLeft mat-icon fs-xxl"> attachment </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div className="file-upload">
                                                            <label className="file">
                                                                <input type="file" />
                                                                <span className="text-center border-0 file-custom d-grid">
                                                                    <span className="material-symbols-outlined mat-icon fs-xxl"> perm_media </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div className="file-upload">
                                                            <label className="file">
                                                                <input type="file" />
                                                                <span className="text-center border-0 file-custom d-grid">
                                                                    <span className="material-symbols-outlined mat-icon fs-xxl"> gif_box </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <input value={message}
                                                        onChange={(e) => setMessage(e.target.value)}
                                                        className="py-2" placeholder="Type your message here.." />
                                                </div>
                                                <div className="btn-area">
                                                    <button className="px-2 cmn-btn px-sm-5 px-lg-6" onClick={sendMessage}>
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <button
                                            onClick={connectStompClient}
                                            disabled={connectionStatus === 'Connected' || connectionStatus === 'Connecting...'}
                                            className="connect-button btn btn-primary"
                                        >
                                            {connectionStatus === 'Connected' ? 'Đã kết nối' :
                                                connectionStatus === 'Connecting...' ? 'Đang kết nối...' : 'Kết nối'}
                                        </button>
                                        <div className="connection-status">
                                            Trạng thái: {connectionStatus === 'Connected' ?
                                                <span style={{ color: 'green' }}>Đã kết nối</span> :
                                                <span style={{ color: 'red' }}>{connectionStatus}</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}