import React, { useState, useEffect } from 'react'
import Layout from '../layout/Layout';
import About from '../Components/About/About';
import Card from '../Components/Card/Card';
import Unique from '../Components/Unique/Unique';
import How from '../Components/How/How';
import AOS from 'aos';

const Landing = () => {

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
    }, []);
    return (
        <>
            <Layout>
                <About />
                <Card />
                <Unique />
                <How />
            </Layout>

        </>
    )
}

export default Landing