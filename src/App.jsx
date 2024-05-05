import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Pages/Landing";
import Join from "./Pages/Join";
import Refer from "./Pages/Refer";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/join" element={<Join />} />
            <Route path="/refer" element={<Refer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
