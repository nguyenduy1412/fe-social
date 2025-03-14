import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const WebSocketTest = () => {
  const [messages,setMessages] =useState([]);
  const [message, setMessage] = useState(''); // Tin nhắn để gửi
  const [sender, setSender] = useState(''); // Danh sách tin nhắn nhận được
  const [stompClient, setStompClient] = useState(null); // STOMP client

  // Kết nối WebSocket khi component được mount
  useEffect(() => {
    const socket = new SockJS('http://localhost:9000/ws'); // Địa chỉ WebSocket server
    const client = Stomp.over(socket);

    client.connect({}, () => {
      client.subscribe('/topic/messages', (message) => {
        const newMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });
    });

    setStompClient(client);

    // Ngắt kết nối khi component unmount
    return () => {
        client.disconnect();
    };
  }, []);

  const handleSenderChange= (e) =>{
    setSender(e.target.value);
  }

  const handleMessageChange = (e) =>{
    setMessage(e.target.value);
  }
  // Gửi tin nhắn qua WebSocket
  const sendMessage = () => {
    if (message.trim()) {
      const chatMessage = {
        sender: sender,
        roomId: '67cfaabf259a865554be2abb',
        type: 0,
        message: message
      };
      stompClient.send('/app/chat',{},JSON.stringify(chatMessage));
      setMessage(''); // Xóa nội dung tin nhắn sau khi gửi
    } 
  };

  return (
    <div>
      
      {messages.map((msg,index)=>(
        <ListItem key={index}>
            <Avatar>{msg.sender.fullName}</Avatar>
            <ListItemText
            primary={<Typography variant='subtitle' gutterBottom>{msg.sender.fullName}</Typography>}
            secondary={msg.content} />
        </ListItem>
        ))
      }
      
    </div>
  );
};

export default WebSocketTest;