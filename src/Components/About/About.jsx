import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Frame from "../../assets/Images/Frame.svg";
import Arrow from "../../assets/Images/Vector 46.png";
import Backarrow from "../../assets/Images/Vector 68.png";
import Tag from "../../assets/Images/Group11.png";
import Tagone from "../../assets/Images/Group2.png";
import Tagtwo from "../../assets/Images/Group3.png";
import Tagthree from "../../assets/Images/Group4.png";
import Tagfour from "../../assets/Images/Group5.png";
import Tagfive from "../../assets/Images/Group6.png";
import Tagsix from "../../assets/Images/Group7.png";
import Tagseven from "../../assets/Images/Group8.png";
import mapFram from "../../assets/Images/map-frame.png";
import frame from '../../assets/icons/frame2.png'
import mobileFrame from '../../assets/icons/mobile-frame.png'


const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="container-fluid about_body">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center position-relative">
              <button className="joins_btn" onClick={() => navigate("/join")}>
                Join Waitlist
              </button>
              <img src={Backarrow} alt="" className="arrow_styles" />
            </div>
          </div>
        </div>
        <div className="row about_img position-relative" data-aos="fade-down">
          <div className=" frame_bg col">
            <img
              src={Tagseven}
              alt=""
              className="tag_img"
              data-aos="fade-down"
            />
            <img src={Tag} alt="" className="tagone_img" data-aos="fade-down" />
            <img
              src={Tagone}
              alt=""
              className="tagtwo_img"
              data-aos="fade-down"
            />
            <img
              src={Tagtwo}
              alt=""
              className="tagthree_img"
              data-aos="fade-down"
            />
            <img
              src={Tagthree}
              alt=""
              className="tagfour_img"
              data-aos="fade-down"
            />
            <img
              src={Tagfour}
              alt=""
              className="tagfive_img"
              data-aos="fade-down"
            />
            <img
              src={Tagfive}
              alt=""
              className="tagsix_img"
              data-aos="fade-down"
            />
            <img
              src={Tagsix}
              alt=""
              className="tagseven_img"
              data-aos="fade-down"
            />
            <img
              style={{ width: "100%", height: "100%" }}
              src={Frame}
              className="frame_image"
              alt=""
              id="big_frame"
            />
          </div>
        </div>

        <div className="row about_subbody" data-aos="fade-down">
          <div className="col position-relative">
            <p className="about_title m-0">Benefits you will love</p>
            <div className="d-flex justify-content-center position-relative">
              <img src={Arrow} alt="" className="arrow_about_img" />
              <p className="about_subtitle m-0">
                Experience a new level of recruitment excellence with features
                that match you with recruiters using unparalleled accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
