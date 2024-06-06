import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./welcome.css";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import CloudIcon from "@mui/icons-material/Cloud";

const socket = io.connect("http://192.168.1.25:3001");
const now = new Date(Date.now());
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsFull = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const Welcome = () => {
  const [date, setDate] = useState(now);

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date(Date.now()));
    }, 1000);
  }, [date]);

  const formatTime = (time) => {
    return String(time).padStart(2, "0");
  };

  return (
    <div className="welcome-container">
      <video
        className="welcomeVideo"
        src="https://cdn.pixabay.com/video/2018/09/24/18390-291585321_large.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="welcome-left">
        <h1 className="hello">Hello, User1</h1>
        <p className="air-quality">
          Welcome Back! Enjoy the beautiful weather today, the air is fresh and
          clean!
        </p>
        <div className="weather">
          <div className="tempDiv">
            <ThermostatIcon style={{ fontSize: "2em" }} />
            <span className="desc">+25°C</span>
          </div>
          <div className="weatherStateDiv">
            <CloudIcon style={{ fontSize: "2em" }} />
            <span className="desc">Fuzzy cloud</span>
          </div>
        </div>
      </div>
      <div className="welcome-right">
        <div className="time">
          <span className="hours">{formatTime(date.getHours())}</span>
          <span className="column"> : </span>
          <span className="minutes">{formatTime(date.getMinutes())}</span>
        </div>
        <div className="date">
          {`${days[date.getDay()]}, ${formatTime(date.getDate())} ${
            monthsFull[date.getMonth()]
          } `}
        </div>
      </div>
    </div>
  );
};
