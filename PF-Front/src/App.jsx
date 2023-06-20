import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/views/Landing";
import Home from "./components/views/Home";
import PayView from "./components/views/PayView";
import { useDispatch, useSelector } from "react-redux";
import roomsSlice from "./redux/store.js";

const App = () => {
    const location = useLocation();
    const path = location.pathname;
    const rooms = useSelector((state) => state.rooms);
    return (
        <>
            <h3>Reservas PRO</h3>
            <section>
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
