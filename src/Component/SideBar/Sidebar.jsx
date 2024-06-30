import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
          <div className="nav-menu">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <div className="nav">
                <HomeIcon className="nav-icon" />
                Home
              </div>
            </NavLink>
            <NavLink
              to="/Room"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <div className="nav">
                <MeetingRoomIcon className="nav-icon" />
                Room
              </div>
            </NavLink>
            <NavLink
              to="/Automation"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <div className="nav">
                <SettingsSuggestIcon className="nav-icon" />
                Automation
              </div>
            </NavLink>
            <NavLink
              to="/Device"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <div className="nav">
                <DevicesOtherIcon className="nav-icon" />
                Device
              </div>
            </NavLink>
          </div>
          <button className="cancel-toggle" onClick={closeSidebar}>
            ✖
          </button>
        </div>
      ) : (
        <div className="bottom-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <div className="bottom-nav-item">
              <HomeIcon />
              <span className="nav-label">Home</span>
            </div>
          </NavLink>
          <NavLink
            to="/Room"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <div className="bottom-nav-item">
              <MeetingRoomIcon />
              <span className="nav-label">Room</span>
            </div>
          </NavLink>
          <NavLink
            to="/Automation"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <div className="bottom-nav-item">
              <SettingsSuggestIcon />
              <span className="nav-label">Automation</span>
            </div>
          </NavLink>
          <NavLink
            to="/Device"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <div className="bottom-nav-item">
              <DevicesOtherIcon />
              <span className="nav-label">Device</span>
            </div>
          </NavLink>
        </div>
      )}
      {!isMobile && (
        <button className={`menu-toggle ${isOpen ? "hide" : ""}`} onClick={toggleSidebar}>
          ☰
        </button>
      )}
    </>
  );
};

export default Sidebar;
