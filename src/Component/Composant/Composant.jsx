import React, { useEffect, useState } from 'react'
import io from "socket.io-client";

import "./composant.css"

const socket = io.connect("http://192.168.1.25:3001");

export const Composant = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        socket.on("mqtt", (data) => {
          setMessage(data);
          console.log(data);
        });
      }, [socket]);
    
  return (
    <div className='composant-container'>
        
        <div className="graph">
            
        </div>
    </div>
  )
}
