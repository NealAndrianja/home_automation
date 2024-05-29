import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const AreaRecharts = ({ data, monitoredData, width }) => {
  if (!data) {
    return <div>Loading data...</div>; // Display loading message while data fetches
  }
  const electricityData = data.map((ed) => ({
    ...ed,
    key: "voltage",
    voltage: Number(ed._value),
    date: `${(new Date(ed._time).getHours().toString()).padStart(2,'0')}:${new Date(ed._time).getMinutes().toString().padStart(2,'0')}`,
  }));
  return (
    <AreaChart
      width={width}
      height={200}
      data={electricityData}
      margin={{
        top: 30,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="voltage" stroke="#70AE6E" fill="#70AE6E" />
    </AreaChart>
  );
};
