import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Pay from "./views/Pay/Pay";
import Detail from "./views/Detail/Detail";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import DashboardAdmin from "./views/DashboardAdmin/DashboardAdmin";
import Error from "./components/Error/Error";
import NavBar from "./components/NavBar/NavBar";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ManagerBooking from "./components/ManagerBooking/ManagerBooking";

const App = () => {
  const location = useLocation();
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
          <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
          <Route path="/managerBooking" element={<ManagerBooking />} /> *
          <Route path="*" element={<Error />} /> *
        </Routes>
      </section>
    </>
  );
};

export default App;
