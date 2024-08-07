import React, { useState, useEffect } from "react";
import "./control.css";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import socket from "../../socketFile";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export const Control = ({ title, type, topic }) => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    socket.emitMessage(`${topic}`, checked);
    // Listen for 'IO broadcast' event from server
    socket.socket.on(`${topic} broadcast`, (data) => {
      setChecked(data);
      console.log("Broadcast received: " + data);
    });

    // Clean up listener on component unmount
    return () => {
      socket.socket.off(`${topic} broadcast`);
    };
  }, [checked]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="control-container">
      <div className="control">
        <span className="control-state">{title}</span>
        <IOSSwitch
          sx={{ m: 1 }}
          defaultChecked
          checked={checked}
          onChange={handleChange}
        />
      </div>
      <div className="control-icon">
        <ElectricalServicesIcon
          style={{ fontSize: "50px", color: checked && "var(--complementary)" }}
        />
      </div>
    </div>
  );
};
