// src/routes/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fans from "../pages/profile/Fans";
import Follow from "../pages/profile/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";
import BlogDetilas from "../components/BlogDetilas";
import Layout from "../components/Layout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book/:bookId" element={<Book />} />
          <Route path="/blog/:blogIndex" element={<BlogDetilas />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />}>
              <Route index element={<Fans />} />
              <Route path="fans" element={<Fans />} />
              <Route path="follow" element={<Follow />} />
            </Route>
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
