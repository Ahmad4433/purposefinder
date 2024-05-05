import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '../Pages/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router