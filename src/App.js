import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Component/SideBar/Sidebar";
import { Home } from "./Pages/Home/Home";
import "./App.css";
import { Device } from "./Pages/Device/Device";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="app-container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Device" element={<Device />} />
      </Routes>
    </div>
  );
}

export default App;
