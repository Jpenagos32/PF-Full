import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Admin from "../../components/Deshboard/admin";
import User from "../../components/Deshboard/user";

const MyAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.loginStatus.user);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            dispatch(setUser(storedUser));
        }
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(
                    "https://pf-back-production-6a7d.up.railway.app/users",
                    {
                        params: {
                            email: user,
                        },
                    }
                );
                const filteredUser = response.data.find(
                    (userData) => userData.user_email === user
                );
                setUserData(filteredUser);
            } catch (error) {
                console.error("Error al obtener los datos del usuario:", error);
            }
        };

        if (user) {
            fetchUserData();
        }
    }, [user]);

    const logout = () => {
        localStorage.removeItem("user");
        dispatch(setUser(null));
    };

    const handleLogout = () => {
        logout();
        navigate("/home");
    };

    return (
        <div>
            {userData && userData.user_type.includes("admin") ? (
                <Admin userData={userData} />
            ) : null}
            {userData && userData.user_type.includes("user") ? (
                <User userData={userData} />
            ) : null}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default MyAccount;
