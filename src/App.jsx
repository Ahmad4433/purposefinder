import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Pages/Landing';
import Join from './Pages/Join';
import Refer from './Pages/Refer';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/join" element={<Join />} />
            <Route path="/refer" element={<Refer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
