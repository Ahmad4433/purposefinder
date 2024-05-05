import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Unique.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Star from "../../assets/Images/Vector 51.png";
import Dust from "../../assets/Images/dust.png";
import Laptop from "../../assets/Images/laptop.png";
import Camera from "../../assets/Images/camera.png";
import Link from "../../assets/Images/link.png";
import Skills from "../../assets/Images/skill.png";
import Network from "../../assets/Images/network.png";
import Customize from "../../assets/Images/1.svg";
import Management from "../../assets/Images/2.svg";
import Employment from "../../assets/Images/3.svg";
import Design from "../../assets/Images/4.svg";
import Skill from "../../assets/Images/5.svg";
import Networking from "../../assets/Images/6.svg";

const Unique = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="container-fluid unique_body">
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="d-flex justify-content-center"
                data-aos="fade-down"
              >
                <button
                  className="unique_joins_btn"
                  onClick={() => navigate("/join")}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
          <div className="row unique_subbody position-relative">
            <img src={Star} alt="" className="star_img" data-aos="fade-down" />
            <p className="about_title uniquess m-0" data-aos="fade-down">
              Unique features for you
            </p>
            <div className="d-flex justify-content-center" data-aos="fade-down">
              <p className="unique_subheader m-0">
                Our uniquely designed interface comprises of features that help
                you achieve your goal seamlessly and quickly.
              </p>
            </div>
          </div>
          <div className="row unique_subbody">
            <div className="col-lg-6 unique_boxes pe-4">
              <div className="custome_box" data-aos="fade-down">
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingTop: "38px" }}
                >
                  <img
                    src={Customize}
                    alt=""
                    style={{ width: "208px", height: "120px" }}
                  />
                </div>
                <div className="">
                  <p className="unique_title m-0">
                    <img src={Dust} alt="" /> Customizable
                  </p>
                  <p className="unique_subtitle m-0">
                    Customize settings to align with your unique job-seeking
                    needs, while prioritizing comfort.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 unique_box ps-4">
              <div className="custome_box" data-aos="fade-down">
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingTop: "38px" }}
                >
                  <img src={Management} alt="" style={{ width: "85%" }} />
                </div>
                <div className="">
                  <p className="unique_title m-0">
                    <img src={Laptop} alt="" /> Management
                  </p>
                  <p className="unique_subtitle m-0">
                    You can effortlessly track applications, metrics, postings
                    and decisions, all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-6 unique_boxes pe-4">
              <div className="custome_box" data-aos="fade-down">
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingTop: "38px" }}
                >
                  <img src={Employment} alt="" style={{ width: "80%" }} />
                </div>
                <div className="">
                  <p className="unique_title m-0">
                    <img src={Camera} alt="" /> Personalization
                  </p>
                  <p className="unique_subtitle m-0">
                    Our AI algorithms adapt to your preferences, increasing the
                    chances of finding your right fit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 unique_box ps-4">
              <div className="custome_box" data-aos="fade-down">
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingTop: "38px" }}
                >
                  <img src={Design} alt="" style={{ width: "85%" }} />
                </div>
                <div className="">
                  <p className="unique_title m-0">
                    <img src={Link} alt="" /> Optimization
                  </p>
                  <p className="unique_subtitle m-0">
                    Smart filters enable you to refine your searches for the
                    most relevant matches.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-6 unique_boxes pe-4">
              <div className="custome_box" data-aos="fade-down">
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingTop: "38px" }}
                >
                  <img src={Skill} alt="" style={{ width: "85%" }} />
                </div>
                <div style={{ paddingTop: "25px" }}>
                  <p className="unique_title m-0">
                    <img src={Skills} alt="" /> Skill-profiling
                  </p>
                  <p className="unique_subtitle m-0">
                    Our AI makes sure you are always in front of recruiters who
                    desire your skill-set
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 unique_box ps-4">
              <div className="custome_box" data-aos="fade-down">
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingTop: "38px" }}
                >
                  <img src={Networking} alt="" style={{ width: "100%" }} />
                </div>
                <div style={{ paddingTop: "30px" }}>
                  <p className="unique_title m-0">
                    <img src={Network} alt="" /> Networking
                  </p>
                  <p className="unique_subtitle m-0">
                    Our platform provides the tools to build connections between
                    you and recruiters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unique;
