import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const AreaRecharts = ({ data }) => {
  if (!data) {
    return <div>Loading data...</div>; // Display loading message while data fetches
  }
  const electricityData = data.map((ed) => ({
    ...ed,
    voltage: Number(ed._value),
    date: `${new Date(ed._time).getHours()}:${new Date(ed._time).getMinutes()}`,
  }));
  return (
    <AreaChart
      width={400}
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
