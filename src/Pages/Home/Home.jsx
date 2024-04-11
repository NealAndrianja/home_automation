import React, { useState } from "react";
import "./home.css";
import { Welcome } from "../../Component/Welcome/Welcome";
import { Control } from "../../Component/Control/Control";
import { MuiSelect } from "../../Component/mui_component/MuiSelect";
import { TempGauge } from "../../Component/mui_component/TempGauge";
import { AreaRecharts } from "../../Component/mui_component/AreaRecharts";



const room = ["living room", "garage", "kids room", "parent room"];
export const Home = () => {
  const [selectedRoom, setSelectedRoom] = useState("");
  return (
    <div className="home-container">
      <div className="home-grid">
        <div className="home-grid-left">
          <Welcome />
          <div className="room-section">
            <div className="room-section-top">
              <h1 className="user-home">User1's Home</h1>
              <MuiSelect
                name="Room"
                list={room}
                selection={selectedRoom}
                onSelectChange={setSelectedRoom}
              />
            </div>
            <div className="room-section-middle">
              <Control />
              <Control />
              <Control />
              <Control />
            </div>
            <div className="room-section-bottom">
              <AreaRecharts/>
            </div>
          </div>
        </div>
        <div className="home-grid-right">

        </div>
      </div>
    </div>
  );
};
