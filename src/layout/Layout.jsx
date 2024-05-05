import React from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import whitebanner from "../assets/icons/white-banner.svg";


const Layout = (props) => {
  return (
    <div className={props.class}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
