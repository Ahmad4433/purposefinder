import React from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import whitebanner from "../assets/icons/white-banner.svg";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className={props.class}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
