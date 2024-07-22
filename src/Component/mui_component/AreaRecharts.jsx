import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const AreaRecharts = ({ data, type, width, period, screenWidth }) => {
  if (!data) {
    return <div>Loading data...</div>; // Display loading message while data fetches
  }

  const chartWidth = screenWidth < 768 ? 300 : width; // Adjust based on screen width
  // Adjust margins based on screen width
  const margin = {
    top: 30,
    right: screenWidth < 768 ? 5 : 0,
    left: screenWidth < 768 ? 10 : 0,
    bottom: 0,
  };

  const formatDate = (date) => {
    const d = new Date(date);
    switch (period) {
      case "Minute":
        return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
      case "Hour":
        return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
      case "Day":
        return `${d.getHours().toString().padStart(2, '0')}`;
      case "Week":
        return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}`;
      case "Month":
        return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}`;
      default:
        return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
    }
  };

  const chartData = data.map((ed) => ({
    ...ed,
    key: `${type}`,
    [type]: Number(ed._value),
    date: formatDate(ed._time)
  }));
  return (
    <AreaChart
      width={chartWidth}
      height={200}
      data={chartData}
      margin={margin}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey={`${type}`} stroke="#C97B84" fill="#C97B84" />
    </AreaChart>
  );
};
