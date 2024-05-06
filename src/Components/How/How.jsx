import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./How.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Pink from "../../assets/Images/pink.png";
import Groupone from "../../assets/Images/Group1.svg";
import Complete from "../../assets/Images/31.svg";
import Search from "../../assets/Images/24.svg";
import Go from "../../assets/Images/Theme.svg";
import Message from "../../assets/Images/46.svg";
import joinButton from "../../assets/Images/join-button.png";

const How = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  const handleButtonClick = () => {
    navigate("/join");
  };

  return (
    <>
      <div className="container-fluid card_body how_top how_bottom">
        <div className="container">
          <div className="row hows_top">
            <div className="col" data-aos="fade-down">
              <p className="hows_title m-0">How it works</p>
              <div className="d-flex justify-content-center">
                <p className="how_subheader m-0">
                  Let us take you through the ‘HOW’ of our mobile app, if you
                  would like to see a demo you can book one below.
                </p>
              </div>
            </div>
          </div>
          <div className="row how_subbody">
            <div className="col d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
              <div  className="row box_content">
                <div className="col-lg-6" data-aos="fade-top">
                  <p className="how_title m-0">
                    1. Create your profile & set preferences
                  </p>
                  <p className="how_subtitle m-0 pt-2">
                    <ul className="m-0 ps-4">
                      <li>Discover tailored opportunities</li>
                    </ul>
                  </p>
                  <p className="how_subtitle m-0 pt-2">
                    <ul className="m-0 ps-4">
                      <li>Get matched swiftly & apply</li>
                    </ul>
                  </p>
                  <p className="how_subtitle m-0 pt-2">
                    <ul className="m-0 ps-4">
                      <li>Track progress & land your role</li>
                    </ul>{" "}
                  </p>
                </div>
                <div className="col-lg-6 box_three">
                  <div
                    className="how_box position-relative"
                    data-aos="fade-down"
                  >
                    <img src={Pink} alt="" className="pink_style" />
                    <img src={Complete} alt="" className="com_img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
              <div className="row box_content">
                <div className="col-lg-6 box_three">
                  <div
                    className="how_box position-relative"
                    data-aos="fade-down"
                  >
                    <img src={Pink} alt="" className="pink_style" />
                    <img src={Complete} alt="" className="com_img" />
                  </div>
                </div>
                <div className="col-lg-6 box_how" data-aos="fade-top">
                  <div className="hows_builets">
                    <p className="how_title m-0">
                      1. Create your profile & set preferences
                    </p>
                    <p className="how_subtitle m-0 pt-2">
                      <ul className="m-0 ps-4">
                        <li>Discover tailored opportunities</li>
                      </ul>{" "}
                    </p>
                    <p className="how_subtitle m-0 pt-2">
                      <ul className="m-0 ps-4">
                        <li>Get matched swiftly & apply</li>
                      </ul>{" "}
                    </p>
                    <p className="how_subtitle m-0 pt-2">
                      <ul className="m-0 ps-4">
                        <li>Track progress & land your role</li>
                      </ul>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row how_subbody">
            <div className="col">
              <div className="row box_content">
                <div className="col-lg-6 hows">
                  <div className="how_box" data-aos="fade-down">
                    <img src={Pink} alt="" className="pink_style" />
                    <img src={Search} alt="" className="how_img" />
                  </div>
                </div>
                <div className="col-lg-6 search_content" data-aos="fade-top">
                  <div className="hows_builetss">
                    <p className="how_subtitle m-0">
                      <ul className="m-0 ps-4">
                        <li>Create your profile & set preferences</li>
                      </ul>{" "}
                    </p>
                    <p className="how_title m-0 pt-2">
                      2. Discover tailored opportunities
                    </p>
                    <p className="how_subtitle m-0 pt-2">
                      <ul className="m-0 ps-4">
                        <li>Get matched swiftly & apply</li>
                      </ul>{" "}
                    </p>
                    <p className="how_subtitle m-0 pt-2">
                      <ul className="m-0 ps-4">
                        <li>Track progress & land your role</li>
                      </ul>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row how_subbody">
            <div className="col d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
              <div className="row box_content">
                <div className="col-lg-6" data-aos="fade-top">
                  <p className="how_subtitle m-0">
                    <ul className="m-0 ps-4">
                      <li>Create your profile & set preferences</li>
                    </ul>{" "}
                  </p>
                  <p className="how_subtitle m-0">
                    <ul className="m-0 ps-4">
                      <li>Discover tailored opportunities</li>
                    </ul>{" "}
                  </p>
                  <p className="how_title m-0">
                    3. Get matched swiftly & apply
                  </p>
                  <p className="how_subtitle m-0">
                    <ul className="m-0 ps-4">
                      <li>Track progress & land your role</li>
                    </ul>{" "}
                  </p>
                </div>
                <div className="col-lg-6 box_three">
                  <div className="how_box" data-aos="fade-down">
                    <img src={Pink} alt="" className="pink_style" />
                    <img src={Go} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
              <div className="row box_content">
                <div className="col-lg-6 box_three">
                  <div className="how_box" data-aos="fade-down">
                    <img src={Pink} alt="" className="pink_style" />
                    <img src={Go} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 search_content" data-aos="fade-top">
                  <div className="third_how_box">
                    <p className="how_subtitle m-0">
                      <ul className="m-0 ps-4">
                        <li>Create your profile & set preferences</li>
                      </ul>{" "}
                    </p>
                    <p className="how_subtitle m-0 pt-2">
                      <ul className="m-0 ps-4">
                        <li>Discover tailored opportunities</li>
                      </ul>{" "}
                    </p>
                    <p className="how_title m-0 pt-2">
                      3. Get matched swiftly & apply
                    </p>
                    <p className="how_subtitle m-0 pt-2">
                      <ul className="m-0 ps-4">
                        <li>Track progress & land your role</li>
                      </ul>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row how_subbody">
            <div className="col">
              <div className="row box_content">
                <div className="col-lg-6 hows">
                  <div className="how_box" data-aos="fade-down">
                    <img src={Pink} alt="" className="pink_style" />
                    <img src={Message} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 search_content" data-aos="fade-top">
                  <div className="four_how_box">
                    <p className="how_subtitle m-0">
                      <ul className="m-0 ps-4">
                        <li>Create your profile & set preferences</li>
                      </ul>{" "}
                    </p>
                    <p className="how_subtitle m-0 pt-2">
                      <ul className="m-0 ps-4">
                        <li>Discover tailored opportunities</li>
                      </ul>{" "}
                    </p>
                    <p className="how_subtitle m-0 pt-2">
                      <ul className="m-0 ps-4">
                        <li>Get matched swiftly & apply</li>
                      </ul>{" "}
                    </p>
                    <p className="how_title m-0 pt-2">
                      4. Track progress & land your role
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <div className="be_style position-relative">
              <img
                src={Groupone}
                alt=""
                className="bg_be_img d-block d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none"
              />
              <p className="be_title m-0">
                Join purposefindr's pioneering AI-driven platform designed to
                connect you with your dream job abroad, revolutionizing the job
                search and recruitment process!
              </p>
              <button
                className="join_how_btn"
                style={{ cursor: "pointer" }}
                onClick={handleButtonClick}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How;
