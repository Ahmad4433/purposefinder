import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Join.css'
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/Images/3D PurposeFindr@1-1900x1035 2.png'
import Profile from '../assets/Images/profile.png'
import Mail from '../assets/Images/mail.png'
import Drop from '../assets/Images/dropdown.png'
import Group from '../assets/Images/Group2.svg'

const Join = () => {

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
            <div className="background-container">
                <img src={Group} alt="" className='grp_img_join' />
                <div className="switch-container">
          <div className="logo_container">
            <img className="header_logo" src={logo} alt="" />
            <span onClick={()=>navigate('/')} className="header_logo_text">PurposeFindr</span>
          </div>

          {/* <button
            className="join_btn_navbar d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block"
            onClick={() => navigate("/join")}
          >
            Join Waitlist
          </button> */}

          {/* <IoReorderThreeOutline
            className="menu_opnen_icon"
            onClick={handleShow}
          /> */}
        </div>
                {/* <div className='switch-container' style={{ paddingTop: "40px" }}>
                    <div className='d-flex logo_style gap-2' onClick={() => navigate('/')}>
                        <img src={logo} alt="" />
                        PurposeFindr
                    </div>
                    <label className="switch d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                        <input type="checkbox" onClick={handleSwitch} />
                        <div className="sliders">
                            <span className={`${isIndividualActive ? "label_text" : "label_textone"}`}>Individuals</span>
                            <span className={`${isIndividualActive ? "label_textone" : "label_text"}`}>Recruiters</span>
                        </div>
                    </label>
                    <div className='d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block'>
                        <ul className="link_style">
                            <li className="link-item">
                                <NavLink className="link-style">Features</NavLink>
                            </li>
                            <li className="link-item">
                                <NavLink className="link-style">How it works</NavLink>
                            </li>
                            <li className="link-item">
                                <NavLink className="link-style">Support</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Button className='d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none' onClick={handleShow}><IoReorderThreeOutline /></Button>
                </div> */}
                <div className="container pb-4">
                    <div className="row">
                        <div className="col">
                            <div className='d-flex justify-content-center'>
                                <p className='join_title'>
                                    Be one of the first users of <span style={{ color: "#CB6CE6" }}>PurposeFindr'</span>s AI-enabled
                                    Software that redefines job hunting and recruitment
                                </p>
                            </div>
                            <div className='d-flex justify-content-center join_input'>
                                <form action="">
                                    <label htmlFor="" className='label_style'>Full name</label>
                                    <div className='position-relative'>
                                        <span className='icon_style'>
                                            <img src={Profile} alt="" style={{ color: "667185" }} />
                                        </span>
                                        <input type="text" placeholder='Enter your full name' className='name_input' />
                                    </div>
                                    <label htmlFor="" className='label_style input_label_body'>Email address</label>
                                    <div className='position-relative'>
                                        <span className='icon_style'>
                                            <img src={Mail} alt="" />
                                        </span>
                                        <input type="text" placeholder='Enter your email address' className='name_input' />
                                    </div>
                                    <label htmlFor="" className='label_style input_label_body'>Select Profession</label>
                                    <div className='position-relative'>
                                        <span className='icon_styles'>
                                            <img src={Drop} alt="" />
                                        </span>
                                        <input type="text" className='select_style' placeholder='What do you do for work?' />
                                    </div>
                                    <label htmlFor="" className='label_style input_label_body'>Comment/Suggestion <span style={{ color: "#888888" }}>(optional)</span></label>
                                    <textarea className="select_styles"></textarea>
                                    <button className='joins_waitlist_btn' onClick={() => navigate('/refer')}>
                                        Join Waitlist
                                    </button>
                                  
                                </form>
                            </div>
                            <p className='footer_copyright m-0' style={{ paddingTop: "56px", fontSize: "12px" }}>©️ 2023 PurposeFindr Inc - All rights reserved </p>
                        </div>
                    </div>
                </div>
            </div>

            <Offcanvas show={show} onHide={handleClose} placement='top' style={{ background: "black" }}>
                <div className='d-flex justify-content-end pe-3'>
                    <button type="button" className='close_btn' onClick={handleClose}><IoIosClose /></button>
                </div>
                <ul className="link_style gap-3 pb-3">
                    <li className="link-item">
                        <NavLink className="link-style">Features</NavLink>
                    </li>
                    <li className="link-item">
                        <NavLink className="link-style">How it works</NavLink>
                    </li>
                    <li className="link-item">
                        <NavLink className="link-style">Support</NavLink>
                    </li>
                </ul>
            </Offcanvas>
        </>
    )
}

export default Join