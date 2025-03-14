import React, { useState } from "react";
import { Card, CardContent } from "../../../utils/components/ui/card";
import { Button } from "../../../utils/components/ui/button";
import { Input } from "../../../utils/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../utils/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import validate from "@/Validate";
const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState({ day: "01", month: "Jan", year: "2003" });
    const [gender, setGender] = useState("1");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorDate, setErrorDate] = useState("");
    const [errorFirstName, setErrorFirstName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const navigate = useNavigate();
    const handRegister = async () => {
        let check1=true,check2=true,check3=true,check4=true,check5=true;
        const monthMap = {
            Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
            Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
        };
        if (!dob.day || !dob.month || !dob.year) {
            toast.error("Vui lòng chọn đầy đủ ngày, tháng, năm sinh!");
            return;
        }
        const formattedDate = `${dob.day.padStart(2, "0")}/${monthMap[dob.month]}/${dob.year}`;
        if(!validate.date(formattedDate)){
            setErrorDate("Ngày sinh không hợp lệ")
            check1=false;
        }
        if(!validate.email(email)){
            setErrorEmail("Email không hợp lệ")
            check2=false
        }
        if(!validate.password(password)){
            setErrorPassword("Mật khẩu có ít nhất 6 ký tự")
            check3-false
        }
        if(!firstName){
            setErrorFirstName("Không được để trống")
            check4=false
        }
        if(!lastName){
            setErrorLastName("Không được để trống")
            check5=false
        }
        if( !check1 || !check2 || !check3 || !check4 || !check5)
            return
        let formData = {
            first_name: firstName,
            last_name: lastName,
            birthday: formattedDate,
            gender: Number(gender),
            password: password,
            email: email
        }
        axios.post(`${import.meta.env.VITE_API_URL}auth/register`, formData)
            .then((response) => {
                if (response.status === 200) {
                    // ✅ Lấy token từ response trước khi lưu

                    toast.success(response.data.message)
                    navigate("/login");
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
    }
    return (
        <div className="flex items-center justify-center h-screen px-4 bg-gray-100">
            <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <CardContent>
                    <h2 className="mb-4 text-2xl font-bold text-center">Tạo tài khoản mới</h2>
                    <p className="mb-4 text-center text-gray-600">Nhanh chóng và dễ dàng.</p>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                        <div>
                            <Input 
                                placeholder="Họ" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                            />
                            {errorFirstName && <p className="mt-1 text-sm text-red-500">{errorFirstName}</p>}
                        </div>
                        <div>
                            <Input 
                                placeholder="Tên" 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                            />
                            {errorLastName && <p className="mt-1 text-sm text-red-500">{errorLastName}</p>}
                        </div>
                        
                        
                    </div>
                    <label>Ngày sinh</label>
                    <div className="flex justify-between mb-2 space-x-2">
                        <select
                            className="px-5 py-2 border rounded"
                            value={dob.day}
                            onChange={(e) => setDob({ ...dob, day: e.target.value })}
                        >
                            {[...Array(31).keys()].map((day) => (
                                <option key={day} value={day + 1}>
                                    {day + 1}
                                </option>
                            ))}
                        </select>

                        <select
                            className="px-5 py-2 border rounded"
                            value={dob.month}
                            onChange={(e) => setDob({ ...dob, month: e.target.value })}
                        >
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                                (month, index) => (
                                    <option key={index} value={month}>
                                        {month}
                                    </option>
                                )
                            )}
                        </select>

                        <select
                            className="px-5 py-2 border rounded"
                            value={dob.year}
                            onChange={(e) => setDob({ ...dob, year: e.target.value })}
                        >
                            {[...Array(100).keys()].map((y) => (
                                <option key={y} value={2025 - y}>
                                    {2025 - y}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errorDate && <p className="mt-1 text-sm text-red-500">{errorDate}</p>}
                    <label>Giới tính</label>
                    <div className="flex justify-between mb-3 space-x-4">
                        <label className="flex items-center px-4 py-1 space-x-1 border rounded">
                            <span className="pr-24">Nam</span>
                            <input
                                type="radio"
                                name="gender"
                                value="1"
                                checked={gender === "1"} // ✅ Kiểm tra nếu giá trị hiện tại là "1"
                                onChange={(e) => setGender(e.target.value)}
                            />
                        </label>
                        <label className="flex items-center px-4 py-1 space-x-1 border rounded">
                            <span className="pr-24">Nữ</span>
                            <input
                                type="radio"
                                name="gender"
                                value="0"
                                checked={gender === "0"} // ✅ Kiểm tra nếu giá trị hiện tại là "0"
                                onChange={(e) => setGender(e.target.value)}
                            />
                        </label>
                    </div>

                    <Input className="mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errorEmail && <p className="mt-1 text-sm text-red-500">{errorEmail}</p>}
                    <Input className="mb-3" type="password" placeholder="Mật khẩu mới" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errorPassword && <p className="mt-1 text-sm text-red-500">{errorPassword}</p>}
                    <Button onClick={handRegister} className="w-full px-4 py-2 mt-4 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600">Đăng ký</Button>
                    <p className="mt-4 text-center text-blue-500 cursor-pointer" onClick={() => navigate("/login")}>Bạn đã có tài khoản?</p>
                </CardContent>
            </Card>
        </div>
    );
};
export default Register;