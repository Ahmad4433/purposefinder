import React, { useEffect } from "react";
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/Images/3D.svg";
import footer from "../assets/Images/footer.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="footer_mobile_main">
        <div className="footer_logo_section">
          <img src={logo} alt="" className="footer_logo_image" />
          <p className="footer_logo_title">PurposeFindr</p>
        </div>

        <div className="footer_item_row">
          <div className="footer_item_col">
            <p className="text_bright">Products</p>
            <p className="footer_title_light">Features</p>
            <p className="footer_title_light">For recruiters</p>
            <p className="footer_title_light">For job seekers</p>
          </div>
          <div className="footer_item_col">
            <p className="text_bright">Resources</p>
            <p className="footer_title_light">Big</p>
            <p className="footer_title_light">Pricing</p>
            <p className="footer_title_light">Take Survey</p>
          </div>
        </div>
        {/* row end */}

        <div className="footer_item_row">
          <div className="footer_item_col">
            <p className="text_bright">Company</p>
            <p className="footer_title_light">Invest</p>
            <p className="footer_title_light">Join us</p>
            <p className="footer_title_light">The team</p>
          </div>
          <div className="footer_item_col">
            <p className="text_bright">Legal</p>
            <p className="footer_title_light">Cookie policy</p>
            <p className="footer_title_light">Privacy policy</p>
            <p className="footer_title_light">Terms & conditions</p>
          </div>
        </div>
        {/* row end */}

        <div className="footer_item_row">
          <div className="footer_item_col">
            <p className="text_bright">Socials</p>
            <p className="footer_title_light">LinkedIn</p>
            <p className="footer_title_light">Facebook</p>
            <p className="footer_title_light">Instagram</p>
          </div>
        </div>
        <p className="footer_copy">
          ©️ 2023 PurposeFindr Inc - All rights reserved
        </p>
      </div>

      <div className="container-fluid position-relative footer_img">
        <div className="container" style={{ paddingTop: "97px" }}>
          <div className="row">
            <div className="col">
              <img src={footer} alt="" className="footers_img" />
              <div className="d-flex logo_style gap-2">
                <img src={logo} alt="" />
                PurposeFindr
              </div>
            </div>
            <div className="col footer_section_one">
              <p className="footer_title m-0">Products</p>
              <p className="footer_subtitle m-0">Features</p>
              <p className="footer_subtitle m-0">For recruiters</p>
              <p className="footer_subtitle m-0">For job seekers</p>
            </div>
            <div className="col footer_section_two">
              <p className="footer_title m-0">Company</p>
              <p className="footer_subtitle m-0">Invest</p>
              <p className="footer_subtitle m-0">Join us</p>
              <p className="footer_subtitle m-0">The team</p>
            </div>
            <div className="col footer_section_two">
              <p className="footer_title m-0">Resources</p>
              <p className="footer_subtitle m-0">Big</p>
              <p className="footer_subtitle m-0">Pricing</p>
              <p className="footer_subtitle m-0">Take Survey</p>
            </div>
            <div className="col footer_section_two">
              <p className="footer_title m-0">Legal</p>
              <p className="footer_subtitle m-0">Cookie policy</p>
              <p className="footer_subtitle m-0">Privacy policy</p>
              <p className="footer_subtitle m-0">Terms & conditions</p>
            </div>
            <div className="col footer_section_third">
              <p className="footer_title m-0">Social</p>
              <p className="footer_subtitle m-0">LinkedIn</p>
              <p className="footer_subtitle m-0">Facebook</p>
              <p className="footer_subtitle m-0">Instagram</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="footer_copyright m-0 pb-4">
                ©️ 2023 PurposeFindr Inc - All rights reserved{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
