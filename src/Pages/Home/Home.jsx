import React, { useState } from "react";
import "./home.css";
import { Welcome } from "../../Component/Welcome/Welcome";
import { Control } from "../../Component/Control/Control";
import { MuiSelect } from "../../Component/mui_component/MuiSelect";
import { TempGauge } from "../../Component/mui_component/TempGauge";
import { Monitoring } from "../../Component/Monitor/Monitoring";
import socket from "../../socketFile";

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
            </div>
            <div className="room-section-bottom">
              <Monitoring
                monitoredData={"power"}
                type={{ title: "Socket Monitoring", type: "Power", unit: "W", topic: "home/esp32/power" }}
                width={800}
              />
            </div>
          </div>
        </div>
        <div className="home-grid-right">
          <Monitoring
            monitoredData={"voltage"}
            type={{ title: "Power Monitoring", type: "Voltage", unit: "V", topic: "home/esp32/voltage" }}
            width={350}
          />
        </div>
      </div>
    </div>
  );
};
