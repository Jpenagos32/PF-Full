import React from "react";
import Sidebar from "../Sidebar";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <section>
        <Sidebar />
        <NavLink to="/">Landing</NavLink>;<NavLink to="/pay">PayView</NavLink>;
      </section>
    </div>
  );
};

export default Home;
