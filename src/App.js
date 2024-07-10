import { Route, Routes } from "react-router-dom";
import Sidebar from "./Component/SideBar/Sidebar";
import { Home } from "./Pages/Home/Home";
import "./App.css";
import { Device } from "./Pages/Device/Device";
import { DeviceProvider } from "./Context/DeviceContext";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <DeviceProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Device" element={<Device />} />
        </Routes>
      </DeviceProvider>
    </div>
  );
}

export default App;
