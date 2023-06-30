import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Pay from "./views/Payment/Pay";
import Detail from "./views/Detail/Detail";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Error from "./components/Error/Error";
import NavBar from "./components/NavBar/NavBar";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ManagerBooking from "./components/ManagerBooking/ManagerBooking";
import MyAccount from "./views/MyAccount/MyAccount";
import { useEffect } from "react";
import { setUser } from "./redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const rooms = useSelector((state) => state.rooms);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  return (
    <>
      <section>
        {location.pathname !== "/" && <NavBar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/detail/:room_type" element={<Detail />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/managerBooking" element={<ManagerBooking />} /> *
          <Route path="/myaccount" element={<MyAccount />} /> *
          <Route path="*" element={<Error />} /> *
        </Routes>
      </section>
    </>
  );
};

export default App;
