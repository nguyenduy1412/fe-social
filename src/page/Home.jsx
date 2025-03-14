
import Header from '../components/Header'
import MyProfile from '../components/MyProfile'
import News from '../components/News'
import MyContact from '../components/MyContact'
import validate from '@/Validate';
import { useEffect, useState } from 'react';
import api from '../routes/axiosInstance';
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("user/get-current-user");
        setUser(response.data);
      } catch (err) {
        console.error("Lỗi khi gọi API:", err);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p>Đang tải dữ liệu người dùng...</p>;
  }
  return (
    <>
      <Header user={user}  />
        <main className="main-content sidebar-content">
        <div className="container-fluid">
            <div className="row justify-content-between">
              <MyProfile user={user} hide={false} index={1} /> 
              <News/>
              <MyContact/>
            </div>
        </div>
        </main>
    </>
  )
}
