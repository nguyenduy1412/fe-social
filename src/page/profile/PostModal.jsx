import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PRIVACY_OPTIONS = [
    { label: "🔒 Chỉ mình tôi", value: 0 },
    { label: "👥 Bạn bè", value: 1 },
    { label: "🌍 Công khai", value: 2 },
];


export default function PostModal({ isOpen, onClose, onSubmit ,user}) {
    const [visibility, setVisibility] = useState(PRIVACY_OPTIONS[0]);
    const [content, setContent] = useState("");
    const [images, setImages] = useState([]);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [placeholder,setPlaceholder] = useState(true)
    // Xử lý chọn ảnh
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    };
    // đóng modal
    const handleCloseModal = () => {
        setImages([]); // Xóa ảnh đã chọn
        setContent('')
        onClose(); // Đóng modal
    };
    // Gửi dữ liệu khi nhấn "Đăng"
    const handleSubmit = () => {
        const postData = {
            visibility: visibility.value, // Giá trị số
            contents: content,
            files: images,
        };

        onSubmit(postData); // Gửi dữ liệu lên MyProfile
        setImages([]); // Xóa ảnh đã chọn
        setContent('')
        onClose(); // Đóng modal
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            className="bg-white w-[500px] p-4 rounded-lg shadow-lg relative z-[9999]"
            overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9998]"
        >
            <div className="flex items-center justify-between pb-2 border-b">
                <h2 className="text-lg font-semibold">Tạo bài viết</h2>
                <button onClick={handleCloseModal} className="text-xl">✖</button>
            </div>

            {/* Avatar + Tên + Quyền riêng tư */}
            <div className="relative flex items-center gap-2 mt-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                    <p className="font-medium">{user.fullName}</p>
                    <button
                        className="relative px-2 py-1 text-sm text-gray-500 border rounded"
                        onClick={() => {
                            setIsPrivacyOpen(!isPrivacyOpen)
                            setPlaceholder(!placeholder)
                        } }
                    >
                        {visibility.label}
                    </button>

                    {isPrivacyOpen && (
                        <div
                            className="absolute left-0 w-40 mt-2 bg-white border rounded shadow-md"
                            onMouseDown={(e) => e.preventDefault()} // Ngăn dropdown làm mất focus
                        >
                            {PRIVACY_OPTIONS.map((option) => (
                                <button
                                    key={option.value}
                                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                                    onClick={() => {
                                        setVisibility(option);
                                        setIsPrivacyOpen(false); // Đóng dropdown sau khi chọn
                                        setPlaceholder(true)
                                    }}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}

                </div>
            </div>

            {/* Ô nhập nội dung */}
            <textarea
                className="w-full p-2 mt-3 border rounded"
                rows="3"
                placeholder={placeholder ?"Bạn đang nghĩ gì" : ""}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>

            {/* Xem trước ảnh */}
            {images.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mt-3">
                    {images.slice(0, 3).map((image, index) => (
                        <img
                            key={index}
                            src={URL.createObjectURL(image)}
                            className="object-cover w-full h-24 rounded-md"
                            alt="preview"
                        />
                    ))}
                    {images.length > 3 && (
                        <div className="flex items-center justify-center w-full h-24 text-lg font-bold bg-gray-200 rounded-md">
                            +{images.length - 3}
                        </div>
                    )}
                </div>
            )}

            {/* Nút chọn ảnh */}
            <label className="block mt-3 cursor-pointer">
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleImageChange}
                />
                <div className="flex justify-between w-full px-2 py-2 text-center text-black border rounded">
                <div className="">
                    Thêm Ảnh/Video
                </div>
                <div>
                    📷 
                </div>
                </div>
                
            </label>

            {/* Nút Đăng */}
            <button
                className="w-full py-2 mt-3 text-white bg-blue-600 rounded"
                onClick={handleSubmit}
            >
                Đăng
            </button>
        </Modal>
    );
}
