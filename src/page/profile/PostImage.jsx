import Masonry from "react-masonry-css";
import "../../components/App.css"; // Import file CSS để tùy chỉnh giao diện

export default function PostImages({ image }) {
    if (!image || image.length === 0) return null;

    const maxVisibleImages = 4; // Số ảnh tối đa hiển thị
    const extraImages = image.length - maxVisibleImages; // Số ảnh bị ẩn

    const visibleImages = image.slice(0, maxVisibleImages); // Lấy 4 ảnh đầu

    const breakpointColumnsObj = {
        default: 2, // 2 cột trên màn hình lớn
        768: 2,
        480: 1,
    };

    return (
        <div className="relative post-img">
            {image.length === 1 ? (
                // Nếu chỉ có 1 ảnh, hiển thị ảnh đó với toàn bộ chiều rộng
                <div className="single-image">
                    <img src={image[0]} className="post-image" alt="single-image" />
                </div>
            ) : image.length === 3 ? (
                // Nếu có 3 ảnh, hiển thị theo bố cục 1 ảnh lớn + 2 ảnh nhỏ bên dưới
                <div className="three-images-grid">
                    {visibleImages.map((img, index) => (
                        <div key={index} className="grid-item">
                            <img src={img} className="post-image" alt={`image-${index}`} />
                        </div>
                    ))}
                </div>
            ) : (
                // Các trường hợp còn lại (2, 4, hoặc nhiều hơn)
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                >
                    {visibleImages.map((img, index) => (
                        <div key={index} className="relative">
                            <img src={img} className="post-image" alt={`image-${index}`} />
                            {index === maxVisibleImages - 1 && extraImages > 0 && (
                                <div className="overlay">+{extraImages}</div>
                            )}
                        </div>
                    ))}
                </Masonry>
            )}


        </div>
    );
}