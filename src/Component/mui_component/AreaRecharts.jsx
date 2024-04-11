import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  
} from "recharts";

const electricityData = [
    {
      date: new Date(2024, 3, 16), // Today's date (assuming April 16, 2024)
      consumption: 1.2, // Consumption in kWh or other relevant unit
    },
    {
      date: new Date(2024, 3, 15), // Yesterday's date
      consumption: 1.5,
    },
    {
      date: new Date(2024, 3, 14), // Day before yesterday
      consumption: 0.8,
    },
    {
      date: new Date(2024, 3, 13), // Two days before yesterday
      consumption: 1.0,
    },
    {
      date: new Date(2024, 3, 12), // Three days before yesterday
      consumption: 0.9,
    },
  ];

  for (let i = 3; i < 20; i++) {
    electricityData.push({
      date: new Date(2024, 2, 28 - i), // Dates from March 27th backward
      consumption: Math.random() * 1.7, // Random value between 0 and 1.7 kWh
    });
  }

  const data = electricityData.map(ed => ({...ed, day: `${ed.date.getDate()}/${ed.date.getMonth()}`})).sort((a,b) => (a.date-b.date))

export const AreaRecharts = () => {
  return (
      <AreaChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="consumption" stroke="#70AE6E" fill="#70AE6E" />
      </AreaChart>
  );
};
