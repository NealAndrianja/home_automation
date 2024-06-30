import { useEffect, useState } from "react";
import axios from 'axios';
import "./welcome.css";
import ThermostatIcon from "@mui/icons-material/Thermostat";

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
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get('http://192.168.1.198:3001/weather/');
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Failed to fetch weather data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date(Date.now()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            <span className="desc">
              {!loading ? `${weatherData?.current?.temp_c}°C` : "Loading weather data..."}
            </span>
          </div>
          <div className="weatherStateDiv">
            {!loading ? (
              <>
                <img src={weatherData?.current?.condition?.icon} alt="weather icon" />
                <span className="desc">{weatherData?.current?.condition?.text}</span>
              </>
            ) : (
              "Loading weather data..."
            )}
          </div>
        </div>
        {error && <p className="error">{error}</p>}
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
