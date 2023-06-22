import React from "react";
import { NavLink } from "react-router-dom";

const PayView = () => {
    return (
        <div>
            Pay View
            <section>
                <NavLink to="/home">home</NavLink>;
                <NavLink to="/">Landing</NavLink>;
            </section>
        </div>
    );
};

export default PayView;
