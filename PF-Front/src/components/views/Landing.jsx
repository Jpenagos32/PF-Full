import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            Landing
            <section>
                <NavLink to="/home">home</NavLink>;
                <NavLink to="/pay">PayView</NavLink>;
            </section>
        </div>
    );
};

export default Landing;
