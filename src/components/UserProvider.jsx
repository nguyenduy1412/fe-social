import { createContext, useContext, useState, useEffect } from "react";
import api from "../routes/axiosInstance"

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("user/get-current-user");
                setUser(response.data);
            } catch (err) {
                console.error("Lỗi khi lấy user:", err);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
