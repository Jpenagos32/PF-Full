import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <CardsContainer />
      <section>
        <NavLink to="/">Landing</NavLink>;<NavLink to="/pay">PayView</NavLink>;
      </section>
    </div>
  );
};

export default Home;
