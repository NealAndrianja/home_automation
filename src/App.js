import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Component/SideBar/Sidebar";
import { Home } from "./Pages/Home/Home";
import "./App.css"

const socket = io.connect("http://192.168.1.25:3001");
function App() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    socket.emit("sent_message", { message });
  };

  useEffect(() => {
    socket.on("mqtt", (data) => {
      setMessage(data);
      console.log(data);
    });
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
