import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "../.././App.css";

const Dashboard = () => {
  const locarion = useLocation();
  const { username, age } = locarion.state || {};

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>
        Welocme: {username},{age}
      </h3>
      <nav>
        <NavLink to="profile" activeclassName="active">
          Profile
        </NavLink>
        <NavLink to="setting" activeclassName="active">
          Setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
