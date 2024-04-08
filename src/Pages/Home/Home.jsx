import React from "react";
import "./home.css";
import { Welcome } from "../../Component/Welcome/Welcome";
import { Composant } from "../../Component/Composant/Composant";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-grid">
        <div className="home-grid-left">
          <Welcome />
        </div>
        <div className="home-grid-right">
          <Composant/>
        </div>
      </div>
    </div>
  );
};
