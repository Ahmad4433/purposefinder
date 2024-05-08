import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Card.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Quiz from '../../assets/Images/116.svg'
import Light from '../../assets/Images/117.svg'
import Men from '../../assets/Images/118.svg'
import TopArrow from '../../assets/Images/Vector 3.png'
import DownArrow from '../../assets/Images/Group 5.png'

const Card = () => {

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, []);

    return (
        <>
            <div className="container-fluid card_body">
                <div className="container">
                    <div className="row">
                        <div className="col d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                            <div className="row box_content">
                                <div className="col-lg-7 position-relative" data-aos="fade-top">
                                    <p className='card_title m-0'>Skill-Boosting Quizzes</p>
                                    <p className='card_subtitle m-0'>Candidates can take AI-generated quizzes to assess and improve their specific skills, optimizing their profile</p>
                                    <img src={DownArrow} alt="" className='down_img' />
                                </div>
                                <div className="col-lg-5 box" data-aos="fade-down">
                                    <div className='quiz_box'>
                                        <img src={Quiz} alt="" className='quiz_img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                            <div className="row box_content">
                                <div className="col-lg-5 box" data-aos="fade-down">
                                    <div className='quiz_box'>
                                        <img src={Quiz} alt="" className='quiz_img' />
                                    </div>
                                </div>
                                <div className="col-lg-7 position-relative card_text" data-aos="fade-top">
                                    <p className='card_title m-0'>Skill-Boosting Quizzes</p>
                                    <p className='card_subtitle m-0'>Candidates can take AI-generated quizzes to assess and improve their specific skills, optimizing their profile</p>
                                    <img src={DownArrow} alt="" className='down_img' />
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <div className="row pt-5">
                        <div className="col">
                            <div className="row box_content">
                                <div className="col-lg-6 box_two">
                                    <div className='quiz_box' data-aos="fade-down">
                                        <img src={Light} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 position-relative box_one" data-aos="fade-top">
                                    <img src={TopArrow} alt="" className='top_img' />
                                    <p className='card_title m-0'>Intelligent job matching</p>
                                    <p className='card_subtitle m-0' style={{ width: "100%" }}>Our AI-powered job matching algorithm is designed to
                                        align candidates and roles with unparalleled accuracy.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row pt-5">
                        <div className="col d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
                            <div className="row box_content">
                                <div className="col-lg-7 position-relative" data-aos="fade-top">
                                    <img src={DownArrow} alt="" className='down_image' />
                                    <p className='card_title m-0'>Personal Management</p>
                                    <p className='card_subtitle m-0'>Our intuitive home screen offers real-time tracking and insights to optimize your job-seeking process.</p>
                                </div>
                                <div className="col-lg-5 box">
                                    <div className='quiz_box' data-aos="fade-down">
                                        <img src={Men} alt="" className='men_img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
                            <div className="row box_content">
                                <div className="col-lg-5 boxes">
                                    <div className='quiz_box' data-aos="fade-down">
                                        <img src={Men} alt="" className='men_img' />
                                    </div>
                                </div>
                                <div className="col-lg-7 position-relative card_text " data-aos="fade-top">
                                    <img src={DownArrow} alt="" className='down_image' />
                                    <p className='card_title m-0'>Personal Management</p>
                                    <p className='card_subtitle m-0'>Our intuitive home screen offers real-time tracking and insights to optimize your job-seeking process.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card