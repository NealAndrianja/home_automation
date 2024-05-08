import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Component/SideBar/Sidebar";
import { Home } from "./Pages/Home/Home";
import "./App.css";
import socket from './socketFile'

function App() {
  const [message, setMessage] = useState("");
  const topics = [
    "home/esp32/voltage",
    "home/esp32/current",
    "home/esp32/power",
    "home/esp32/energy",
    "home/esp32/frequency",
    "home/esp32/pf",
  ];

  useEffect(() => {
    socket.connectAll()
  }, [socket]);
  return (
    <div className="app-container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
