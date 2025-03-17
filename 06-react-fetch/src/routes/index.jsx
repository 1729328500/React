import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetial";
import CreatePost from "../pages/CreatePost";
import TianjuData from "../pages/TianjuData";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/tianju" element={<TianjuData />} />
    </Routes>
  );
};

export default AppRoutes;
