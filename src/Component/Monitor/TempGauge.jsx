import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./gauge.css";

export const TempGauge = () => {
  const [temperature, setTemperature] = useState(0);
  const minTemp = 0;
  const maxTemp = 50;
  const percentage = ((temperature - minTemp) / (maxTemp - minTemp)) * 100;

  const majorTicks = [0, 25, 50];
  const minorTicks = Array.from({ length: 25 }, (_, i) => i * 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(Math.floor(Math.random() * (maxTemp - minTemp + 1)));
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const getColor = (temp) => {

    if (temp <= 15) {
      // b = 255+100 - Math.floor((temp / 15) * (255-100)); // Blue decreases from 255 to 0 
      return `rgb(0, 254, 254)`
    } else if (temp <= 25 && temp > 15) {
      // g = 100 + Math.floor(((temp - 10) / 10) * (255-100)); // Green increases from 0 to 255
      return `rgb(40, 252, 160)`
    } else if (temp <= 50 && temp > 25) {
      // r = 100 + Math.floor(((temp - 30) / 30) * (255-100)); // Red increases from 0 to 255
      return `rgb(251, 36, 3)`
    }
  };

  return (
    <div className="gauge-container">
      <div className="gauge">
        <CircularProgressbar
          value={percentage}
          text={`${temperature}°C`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 0.625,
            pathColor: getColor(temperature),
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
      <div className="ticks">
        {majorTicks.map((tick, index) => (
          <div
            key={index}
            className="tick major"
            style={{ transform: `rotate(${(tick / maxTemp) * 270 - 135}deg)` }}
          >
            <span>{tick}°C</span>
          </div>
        ))}
        {minorTicks.map((tick, index) => (
          <div
            key={index}
            className="tick minor"
            style={{ transform: `rotate(${(tick / maxTemp) * 270 - 135}deg)` }}
          />
        ))}
      </div>
    </div>
  );
};
