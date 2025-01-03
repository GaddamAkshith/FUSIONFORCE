import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../UI/Home';
import Testimonials from '../UI/Testimonials';
import Pricing from '../UI/Pricing';
import Track from '../UI/Track';
import Login from '../UI/LogIn/Login'; // Updated path
import Signup from '../UI/LogIn/Signup'; // Updated path
import { useAuth0 } from "@auth0/auth0-react";

const AllRoutes = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<Testimonials />} />
      <Route path="/membership" element={<Pricing />} />
      <Route path="/track" element={isAuthenticated ? <Track /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;