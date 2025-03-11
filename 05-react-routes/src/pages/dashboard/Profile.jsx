import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../../App.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <nav className="vertical-nav">
        <NavLink to="fans" activeClassName="active-link">
          粉丝
        </NavLink>
        <NavLink to="follow" activeClassName="active-link">
          关注
        </NavLink>
      </nav>
      <div className="data-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
