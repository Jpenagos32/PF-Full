import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            Home
            <section>
                <NavLink to="/">Landing</NavLink>;
                <NavLink to="/pay">PayView</NavLink>;
                <NavLink to="/detail">Detail</NavLink>;
            </section>
        </div>
    );
};

export default Home;
