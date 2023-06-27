import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Pay from "./views/Pay/Pay";
import Detail from "./views/Detail/Detail";
import { useDispatch, useSelector } from "react-redux";
// import roomsSlice from "./redux/store.js";
import NavBar from "./components/NavBar/NavBar";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Error from "./components/Error/Error";
import ResetPassword from "./components/ResetPassword/ResetPassword";

const App = () => {
  const location = useLocation();
  const path = location.pathname;
  const rooms = useSelector((state) => state.rooms);
  return (
    <>
      <section>
        {location.pathname !== "/" && <NavBar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
<<<<<<< HEAD
        {path !== "/" &&
          path !== "/home" &&
          path !== "/pay" &&
          path !== "/signin" &&
          path !== "/signup" &&
          !path.startsWith("/detail") && <Error />}
=======
          {path !== "/" &&
                    path !== "/home" &&
                    path !== "/pay" &&
                    path !== "/signin" &&
                    path !== "/signup" &&
                    path !== "/ResetPassword" &&
                    !path.startsWith("/detail") && <Error />}
>>>>>>> ee6edb9536e3b02482ff7b483a37409108fa2e60
      </section>
    </>
  );
};

export default App;
