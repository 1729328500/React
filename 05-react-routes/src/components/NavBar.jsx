// src/components/NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Space } from "antd";
import ".././App.css";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Space>
          <NavLink to="/" activeclassName="active">
            Home
          </NavLink>
          <NavLink to="/about?name=zhangsan&age=20" activeclassName="active">
            About
          </NavLink>
          <NavLink to="/dashboard" activeclassName="active">
            DashBoard
          </NavLink>
          <NavLink to="/login" activeclassName="active">
            Login
          </NavLink>
          <NavLink to="/book/123" activeclassName="active">
            Book
          </NavLink>
        </Space>
        {user && <Typography.Text>欢迎, {user.username}</Typography.Text>}
      </nav>
    </div>
  );
};

export default NavBar;
