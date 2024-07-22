import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./gauge.css";
import socket from "../../socketFile";
import { type } from "@testing-library/user-event/dist/type";

export const TempGauge = ({ minValue, maxValue, type }) => {
  const [data, setData] = useState(0);
  const percentage = ((data - minValue) / (maxValue - minValue)) * 100;

  const majorTicks = [minValue, (maxValue + minValue) / 2, maxValue];
  const minorTicks = Array.from(
    { length: (maxValue - minValue) / 2 },
    (_, i) => i * 2
  );

  useEffect(() => {
    socket.socket.on(type.topic, (mqttData) => {
      setData(mqttData);
    });

    return () => socket.socket.off(type.topic); // Clean up the interval on component unmount
  }, []);

  const getColor = (temp) => {
    if (temp <= (maxValue + minValue) / 3) {
      // b = 255+100 - Math.floor((temp / 15) * (255-100)); // Blue decreases from 255 to 0
      return `rgb(0, 254, 254)`;
    } else if (
      temp <= (2 * (maxValue + minValue)) / 3 &&
      temp > (maxValue + minValue) / 3
    ) {
      // g = 100 + Math.floor(((temp - 10) / 10) * (255-100)); // Green increases from 0 to 255
      return `rgb(40, 252, 160)`;
    } else if (temp <= maxValue && temp > (2 * (maxValue + minValue)) / 3) {
      // r = 100 + Math.floor(((temp - 30) / 30) * (255-100)); // Red increases from 0 to 255
      return `rgb(251, 36, 3)`;
    }
  };

  return (
    <div className="temp-gauge">
      <h1 className="gauge-title">
    {type.title}
      </h1>
      <div className="gauge-container">
        <div className="gauge">
          <CircularProgressbar
            value={percentage}
            text={`${data} ${type.unit}`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 0.625,
              pathColor: getColor(data),
              textColor: "#304C89",
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
              style={{
                transform: `rotate(${
                  (tick / (maxValue - minValue)) * 270 - 135
                }deg)`,
              }}
            >
              <span>{tick} {type.unit}</span>
            </div>
          ))}
          {minorTicks.map((tick, index) => (
            <div
              key={index}
              className="tick minor"
              style={{
                transform: `rotate(${
                  (tick / (maxValue - minValue)) * 270 - 135
                }deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
