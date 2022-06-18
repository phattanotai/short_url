import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import RedirectHandler from "./pages/RedirectHandler";

const Router = () => {
  return (
    <>
      <Routes>
        {/* Base Paths */}
        <Route path="/" element={<Home />} />
        {/* All other routes */}
        <Route path="*" element={<RedirectHandler />} />
      </Routes>
    </>
  );
};

export default Router;
