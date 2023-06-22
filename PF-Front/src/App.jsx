import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Pay from "./views/Pay/Pay";
import Detail from "./views/Detail/Detail";
import { useDispatch, useSelector } from "react-redux";
import roomsSlice from "./redux/store.js";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    const location = useLocation();
    const path = location.pathname;
    const rooms = useSelector((state) => state.rooms);
    return (
        <>
            <section>
                {location.pathname !== "/" && <NavBar />}
                <Routes>
                    <Route
                        path="/"
                        element={<Landing />}
                    />
                    <Route
                        path="/home"
                        element={<Home />}
                    />
                    <Route
                        path="/detail"
                        element={<Detail />}
                    />
                    <Route
                        path="/pay"
                        element={<Pay />}
                    />
                </Routes>
            </section>
        </>
    );
};

export default App;
