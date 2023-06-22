import React from "react";
import { NavLink } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar"

const Home = () => {
    return (
        <div>
            Home
            <section>
                <NavLink to="/">Landing</NavLink>;
                <NavLink to="/pay">PayView</NavLink>;
            </section>
            <Calendar/>
        </div>
    );
};

export default Home;
