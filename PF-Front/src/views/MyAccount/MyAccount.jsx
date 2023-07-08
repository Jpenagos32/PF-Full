import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Admin from "../../components/Deshboard/Admin/Admin";
import User from "../../components/Deshboard/User/User";

const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [decryptedUser, setDecryptedUser] = useState(null);

  const decryptData = (encodedText, secretKey) => {
    const decodedText = atob(encodedText);
    return decodedText;
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const decryptedUser = decryptData(storedUser, "secretKey");
      setDecryptedUser(decryptedUser);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (decryptedUser) {
          const response = await axios.get("/users", {
            params: {
              email: decryptedUser,
            },
          });
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, [decryptedUser]);

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
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default MyAccount;
