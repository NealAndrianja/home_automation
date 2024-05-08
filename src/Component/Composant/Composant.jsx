import React, { useEffect, useState } from 'react'
import io from "socket.io-client";
import SocketInstance from './socketFile'

import "./composant.css"

const socket = new SocketInstance();

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
