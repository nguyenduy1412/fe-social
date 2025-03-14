import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL:import.meta.env.VITE_API_URL ,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const errorMessage = error.response?.data?.message || "Có lỗi xảy ra!";

    if (status === 401) {
      toast.error("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại!");
      localStorage.removeItem("accessToken");
      window.location.href = "/login"; // Chuyển hướng ngay lập tức
    } else if (status === 403) {
      toast.error("Bạn không có quyền truy cập!");
      window.location.href = "/login";
    } else {
      toast.error(errorMessage);
    }

    return Promise.reject(error);
  }
);

export default api;
