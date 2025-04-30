import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavPage from "../components/NavPage";
import AppNav from "../components/AppNav";

const HomePage = () => {
  return (
    <div>
      <NavPage />
      <AppNav />
      <h1>Worldwise</h1>
      <NavLink to="/app">Go to the app</NavLink>
    </div>
  );
};

export default HomePage;
