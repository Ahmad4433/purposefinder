import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Refer.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/Images/3D PurposeFindr@1-1900x1035 2.png";
import Decroation from "../assets/Images/image7.png";
import Bell from "../assets/Images/bell.png";
import Group from "../assets/Images/Group.svg";

const Refer = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className=" background-container refer_body">
        <img src={Group} alt="" className="grp_img" />
        <div className="switch-container">
          <div className="logo_container">
            <img className="header_logo" src={logo} alt="" />
            <span onClick={() => navigate("/")} className="header_logo_text">
              PurposeFindr
            </span>
          </div>
        </div>
        <div className="refer_container ">
          <img src={Bell} alt="" className="grp_imges" />
          <p className="refer_title">
            Thank you for joining our waitlist as an individual. Keep an eye on
            your inbox, You will be the first to know when we launch. 🥳
          </p>
        </div>
      </div>
    </>
  );
};

export default Refer;

// container-fluid background-container
