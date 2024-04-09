import React from "react";
import "./home.css";
import { Welcome } from "../../Component/Welcome/Welcome";
import { Composant } from "../../Component/Composant/Composant";
import { Control } from "../../Component/Control/Control";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-grid">
        <div className="home-grid-left">
          <Welcome />
          <Control/>
          <Control/>
          <Control/>
          <Control/>
        </div>
        <div className="home-grid-right">
        </div>
      </div>
    </div>
  );
};
