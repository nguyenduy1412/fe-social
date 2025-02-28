import React, { useState } from "react";
import { Card, CardContent } from "../../../utils/components/ui/card";
import { Button } from "../../../utils/components/ui/button";
import { Input } from "../../../utils/components/ui/input";
import { useNavigate } from "react-router-dom";
import validate from './../../../utils/Validate';

import { toast } from "react-toastify";

import axios from "axios";
const URL = import.meta.env.VITE_API_URL
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const handleLogin = async () => {

    let check1 = true;
    let check2 = true;
    // email không hợp lệ
    if (!validate.email(email)) {
      setErrorEmail("Email không đúng định dạng")
      check1 = false;
    } else {
      setErrorEmail("")
      check1 = true;
    }
    // mật khẩu không hợp lệ
    if (!validate.password(password)) {
      setErrorPassword("Mật khẩu phải lớn hơn 6 ký tự")
      check2 = false;
    } else {
      setErrorPassword("")
      check2 = true
    }

    if (!check1 || !check2)
      return;
    let formData = {
      email: email,
      password: password,
    }

    axios.post(`${URL}auth/login`, formData)
      .then((response) => {
        if (response.status === 200) {
          // ✅ Lấy token từ response trước khi lưu
          localStorage.setItem("accessToken", response.data.data.accessToken);
          localStorage.setItem("refreshToken", response.data.data.refreshToken);
          toast.success(response.data.message)
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err);

        // ✅ Kiểm tra nếu có response từ server thì lấy message, ngược lại hiển thị lỗi mặc định
        const errorMessage = err.response?.data?.message || "Có lỗi xảy ra!";
    
        toast.error(errorMessage);
      });
  };
  const register = () => {
    navigate("/register");
  }
  return (
    <div className="flex items-center justify-center h-screen px-4 bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-4xl md:flex-row">
        {/* Bên trái - Logo và mô tả */}
        <div className="flex-1 mb-10 text-center md:text-left md:mb-0">
          <h1 className="text-5xl font-bold text-blue-600">facebook</h1>
          <p className="mt-4 text-lg text-gray-700">
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
          </p>
        </div>

        {/* Bên phải - Form đăng nhập */}
        <Card className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
          <CardContent>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errorEmail && <p className="mb-2 text-red-500">{errorEmail}</p>}

            <Input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errorPassword && <p className="text-red-500 ">{errorPassword}</p>}

            <Button
              onClick={handleLogin}
              className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Đăng nhập
            </Button>

            <div className="mt-3 text-center">
              <a href="#" className="text-sm text-blue-500">Quên mật khẩu?</a>
            </div>

            <hr className="my-4" />

            <Button
              onClick={register}
              className="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600"
            >
              Tạo tài khoản mới
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginScreen;
