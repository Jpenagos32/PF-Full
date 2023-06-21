import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import PayView from "./views/Payview/PayView";
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
                        path="/pay"
                        element={<PayView />}
                    />
                </Routes>
            </section>
        </>
    );
};

export default App;
