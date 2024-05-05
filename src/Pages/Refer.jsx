import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Refer.css'
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/Images/3D PurposeFindr@1-1900x1035 2.png'
import Decroation from '../assets/Images/image7.png'
import Bell from '../assets/Images/bell.png'
import Group from '../assets/Images/Group.svg'

const Refer = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="container-fluid background-container refer_body">
                <img src={Group} alt="" className='grp_img' />
                {/* <div className='switch-container'>
                    <div className='d-flex logo_style gap-2' onClick={() => navigate('/')}>
                        <img src={logo} alt="" />
                        PurposeFindr
                    </div>
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
                <div className="container pb-5">
                    <div className="row">
                        <div className="col">
                            <img src={Decroation} alt="" className='grp_imge' />
                            <img src={Bell} alt="" className='grp_imges' />
                            <div className='d-flex justify-content-center'>
                                <p className='refer_title'>
                                    Thank you for joining our waitlist as an individual. Keep an eye on your inbox,
                                    You will be the first to know when we launch. 🥳
                                </p>
                            </div>
                            {/* <div className='refer_subtitle'>
                                Refer your friends too! the more the merrier, right? 🥳
                            </div> */}
                            {/* <div className='d-flex justify-content-center'>
                                <form action="">
                                    <div className='name_refer_input'>
                                        <input type="text" placeholder='http://purposefindr.com/?ref=useername' className='url_input' />
                                        <button className='copy_btn'>
                                            Copy link 🔗
                                        </button>
                                    </div>
                                    <div className='d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'>
                                        <div className='d-flex refer_btn_body gap-4'>
                                            <button className='share_btn'>
                                                Share on X/Twitter
                                            </button>
                                            <button className='linkedin_btn'>
                                                Share on LinkedIn
                                            </button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center mt-4'>
                                        <button className='share_btn d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none'>
                                            Share on X/Twitter
                                        </button>
                                    </div>
                                    <div className='d-flex justify-content-center mt-3'>
                                        <button className='linkedin_btn d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none'>
                                            Share on LinkedIn
                                        </button>
                                    </div>
                                    <p className='footer_copyright m-0' style={{ paddingTop: "115px", fontSize: "12px" }}>©️ 2023 PurposeFindr Inc - All rights reserved </p>
                                </form>
                            </div> */}
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

export default Refer