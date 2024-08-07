import React, { useEffect, useState } from "react";
import MuiSlider from "../mui_component/MuiSlider";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import socket from "../../socketFile";

export const ControlSlide = ({ title, type, topic }) => {
  const [brightness, setBrightness] = useState(30);

  useEffect(() => {
    socket.emitMessage(`${topic}`, brightness);
    // Listen for 'IO broadcast' event from server
    socket.socket.on(`${topic} broadcast`, (data) => {
      setBrightness(data);
      console.log("Broadcast received: " + data);
    });

    // Clean up listener on component unmount
    return () => {
      socket.socket.off(`${topic} broadcast`);
    };
  }, [brightness]);

  const handleChange = (event, newValue) => {
    setBrightness(newValue);
  };
  return (
    <div className="slide-container control-container">
      <div className="control-slide-left">
        <div className="control-slide-value">{brightness}%</div>
        <div className="control-icon">
          <WbIncandescentIcon
            style={{
              fontSize: "50px",
              opacity: 1 - brightness / 100,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <WbIncandescentIcon
            style={{
              fontSize: "50px",
              opacity: brightness / 100,
              color: "FFD900",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>
      <MuiSlider brightness={brightness} handleChange={handleChange} />
    </div>
  );
};
