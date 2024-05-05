import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Arrow from "../assets/Images/Group 4.png";
import logo from "../assets/Images/3D.svg";
import Group from "../assets/Images/Group.svg";
import banner from '../assets/icons/banner-white.png'

const Navbar = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isIndividualActive, setIndividualActive] = useState(true);

  const handleSwitch = () => {
    setIndividualActive(!isIndividualActive);
  };

  return (
    <>
      <div className="sub_header">
        <span className="beta_title" >Our beta is live!!</span>

        {/* <div className="header_menu" >
        <div className="d-flex flex-column pt-3 gap-3 ps-3">
          <div className="toggle_data">For Individuals</div>
          <div className="toggle_data">For Recruiters</div>fsfds
        </div>
        </div> */}
      </div>

      <div className="container-fluid p-0 background-container">
        <img src={Group} alt="" className="grp_img" />
        <div className="switch-container">
          <div className="logo_container">
            <img className="header_logo" src={logo} alt="" />
            <span className="header_logo_text">PurposeFindr</span>
          </div>

          <button
            className="join_btn_navbar d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block"
            onClick={() => navigate("/join")}
          >
            Join Waitlist
          </button>

          <IoReorderThreeOutline
            className="menu_opnen_icon"
            onClick={handleShow}
          />
        </div>

        <div className="container hero_content">
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-center position-relative">
                <div className="hero_title">
                  AI-Powered Skill Matching to help you land your dream role!
                </div>
                <img src={Arrow} alt="" className="arrow_style" />
              </div>
              <div className="d-flex justify-content-center">
                <div className="hero_subtitle">
                  An AI technology that matches you with 1,000+ prospective
                  recruiters based on your skill-set, to get you closer to
                  landing your dream role.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        style={{ background: "black" }}
      >
        <div className="d-flex justify-content-between ps-2 pe-3">
          <div className="d-flex logo_style gap-2">
            <img src={logo} alt="" className="logo_img" />
            <span className="header_logo_text">PurposeFindr</span>
          </div>
          <button type="button" className="close_btn" onClick={handleClose}>
            <IoIosClose />
          </button>
        </div>
        <div className="d-flex flex-column pt-3 gap-3 ps-3">
          <div className="toggle_data">For Individuals</div>
          <div className="toggle_data">For Recruiters</div>
        </div>
      </Offcanvas>
    </>
  );
};

export default Navbar;
