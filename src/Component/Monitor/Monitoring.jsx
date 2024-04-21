import React, { useEffect, useState } from "react";
import "./monitor.css";
import { AreaRecharts } from "../mui_component/AreaRecharts";
import BoltIcon from '@mui/icons-material/Bolt';
import { MuiSelect } from "../mui_component/MuiSelect";
import axios from 'axios';

import io from "socket.io-client";
const socket = io.connect("http://192.168.1.25:3001");

const periodName = ["Year", "Month", "Week", "Day", "Hour"]

export const Monitoring = () => {
  const [period, setPeriod] = useState("")
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.25:3001/data.json');
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    
    console.log(data)
      socket.on("mqtt", mqttData => {
        fetchData();
        setMessage(mqttData);
      });
    }, [socket]);
  return (
    <div className="monitoring-container">
      <div className="monitoring-top">
        <h1 className="monitoring-title">Power Consumed</h1>
        <MuiSelect name="Period" list={periodName} selection={period} onSelectChange={setPeriod}/>
      </div>
      <div className="monitoring-block">
        <div className="monitoring-block-top">
          <div className="monitoring-block-desc">
            <BoltIcon style={{fontSize: "1.5em", color:"#E7DC15"}}/>
            <h2 className="monitoring-desc">Electricity consumed</h2>
          </div>
          <span className="value">{message} V</span>
        </div>
        <AreaRecharts data={data}/>
      </div>
    </div>
  );
};
