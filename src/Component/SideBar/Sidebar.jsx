import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="nav-menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecoration: "none" }}
        >
          <div className="nav">Home</div>
        </NavLink>
        <NavLink
          to="/Room"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecoration: "none" }}
        >
          <div className="nav">Room</div>
        </NavLink>
        <NavLink
          to="/Automation"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecoration: "none" }}
        >
          <div className="nav">Automation</div>
        </NavLink>
        <NavLink
          to="/Device"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecoration: "none" }}
        >
          <div className="nav">Device</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
