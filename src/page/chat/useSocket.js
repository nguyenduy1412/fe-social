import { useCallback, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const useSocket = () => {
  const [connected, setConnected] = useState(false);
  const [stompClient, setStompClient] = useState(null);

  const connectSocket = useCallback((topic, handleReceivedData) => {
    if (stompClient) return; // Tránh kết nối nhiều lần

    const socket = new SockJS(`http://localhost:8888/ws`);
    const client = Stomp.over(socket);

    client.connect(
      {},
      (frame) => {
        console.log("Connected: " + frame);
        setConnected(true);
        setStompClient(client);

        client.subscribe(topic, (message) => {
          const data = JSON.parse(message.body);
          console.log(data);
          handleReceivedData(data);
        });
      },
      (error) => {
        console.error("Error connecting to WebSocket", error);
        setConnected(false);
      }
    );
  }, [stompClient]);

  const disconnectSocket = useCallback(() => {
    if (stompClient) {
      stompClient.disconnect(() => {
        setConnected(false);
        setStompClient(null);
        console.log("Disconnected");
      });
    }
  }, [stompClient]);

  return { connected, connectSocket, disconnectSocket };
};

export default useSocket;
