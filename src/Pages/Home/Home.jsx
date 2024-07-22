import React, { useContext, useState } from "react";
import "./home.css";
import { Welcome } from "../../Component/Welcome/Welcome";
import { Control } from "../../Component/Control/Control";
import { MuiSelect } from "../../Component/mui_component/MuiSelect";
import { TempGauge } from "../../Component/Monitor/TempGauge";
import { Monitoring } from "../../Component/Monitor/Monitoring";
import socket from "../../socketFile";
import { ControlSlide } from "../../Component/Control/ControlSlide";
import BoltIcon from "@mui/icons-material/Bolt";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import { DeviceContext } from "../../Context/DeviceContext";
import { topicComponentMap } from "../../topicComponentMap";

const room = ["living room", "garage", "kids room", "parent room"];

export const Home = () => {
  const { state } = useContext(DeviceContext);
  const [selectedRoom, setSelectedRoom] = useState("");
  console.table(state.devices);

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
              {state.devices.map((device) =>
                device.topics.command.map((topic) =>
                  topicComponentMap[topic]
                    ? React.createElement(topicComponentMap[topic].component, {
                        key: topic,
                        ...topicComponentMap[topic].props,
                      })
                    : null
                )
              )}

              {/* {state.devices.map((device) => {
                device.topics.command.map((topic) => {
                  return topicComponentMap[topic]
                    ? React.createElement(topicComponentMap[topic].component, {
                        key: topic,
                        ...topicComponentMap[topic].props,
                      })
                    : null;
                });
              })} */}

              {/* <ControlSlide /> */}
            </div>
            <div className="room-section-bottom">
              {state.devices.map((device) =>
                device.topics.data
                  .filter(
                    (topic) =>
                      !topic.includes("voltage") &&
                      !topic.includes("frequency") &&
                      !topic.includes("energy") &&
                      !topic.includes("current")
                  )
                  .map((topic) =>
                    topicComponentMap[topic]
                      ? React.createElement(
                          topicComponentMap[topic].component,
                          {
                            key: topic,
                            ...topicComponentMap[topic].props,
                          }
                        )
                      : null
                  )
              )}
            </div>
          </div>
        </div>
        <div className="home-grid-right">
          {state.devices.map((device) =>
            device.topics.data
              .filter((topic) => !topic.includes("power"))
              .map((topic) =>
                topicComponentMap[topic]
                  ? React.createElement(topicComponentMap[topic].component, {
                      key: topic,
                      ...topicComponentMap[topic].props,
                    })
                  : null
              )
          )}
        </div>
      </div>
    </div>
  );
};
