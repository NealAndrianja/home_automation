import React, { useEffect, useState } from "react";
import "./monitor.css";
import { AreaRecharts } from "../mui_component/AreaRecharts";
import BoltIcon from "@mui/icons-material/Bolt";
import { MuiSelect } from "../mui_component/MuiSelect";
import axios from "axios";
import socket from "../../socketFile";

// import io from "socket.io-client";
// const socket = io.connect("http://192.168.1.25:3001");

const periodName = ["Year", "Month", "Week", "Day", "Hour", "Minute"];

export const Monitoring = ({ monitoredData, type, width }) => {
  const [period, setPeriod] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const abstractPeriod = () => {
    switch (period) {
      case "Minute":
        return "m";
        break;
      case "Hour":
        return "h";
        break;
      case "Day":
        return "d";
        break;
      case "Week":
        return "w";
        break;
      default:
        return "m";
        break;
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.25:3001/data/socket/${monitoredData}/-1${abstractPeriod()}`
      );
      setData(response.data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
    socket.socket.on(type.topic, mqttData => {
      setMessage(mqttData);
      console.log(mqttData)
    })
  }, [message]);
  return (
    <div className="monitoring-container">
      <div className="monitoring-top">
        <h1 className="monitoring-title">{type.title}</h1>
        <MuiSelect
          name="Period"
          list={periodName}
          selection={period}
          onSelectChange={setPeriod}
        />
      </div>
      <div className="monitoring-block">
        <div className="monitoring-block-top">
          <div className="monitoring-block-desc">
            <BoltIcon style={{ fontSize: "1.5em", color: "#E7DC15" }} />
            <h2 className="monitoring-desc">{type.type}</h2>
          </div>
          <span className="value">{message} {type.unit}</span>
        </div>
        <AreaRecharts data={data} type={monitoredData} width={width} />
      </div>
    </div>
  );
};
