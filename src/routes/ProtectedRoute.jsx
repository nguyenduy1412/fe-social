import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("accessToken"); // Kiểm tra token trong localStorage

    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;