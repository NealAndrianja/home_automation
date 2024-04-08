import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./welcome.css"

const socket = io.connect("http://192.168.1.25:3001");
export const Welcome = () => {

    const [isEnabled, setIsEnabled] = useState(false); // Initial state: false

  const handleChange = (event) => {
    setIsEnabled(event.target.checked);
    sendMessage()
  };

  const sendMessage = () => {
    socket.emit("IO", { isEnabled });
  };

    
  return (
    <div className='welcome-container'>
        <h1 className="hello">Hello, User1</h1>
        <p className="air-quality">Welcome Back! Enjoy the beautiful weather today, the air is fresh and clean!</p>
        <label htmlFor="toggleSwitch">Enable Notifications</label>
      <input
        type="checkbox"
        id="toggleSwitch"
        name="notifications"
        value={isEnabled} // Set value to current state
        onChange={handleChange}
      />
    </div>
  )
}
