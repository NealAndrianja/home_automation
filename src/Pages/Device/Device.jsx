import React, { useEffect, useState } from "react";
import "./device.css";
import { TableRow } from "../../Component/tableRow/TableRow";
import AddIcon from "@mui/icons-material/Add";
import { AddDeviceModal } from "../../Component/Modals/addDevice/AddDeviceModal";
import axios from "axios";


export const Device = () => {
    const [showModal, setShowModal] = useState(false);
    const [devices, setDevices] = useState([])

    const fetchData = async () => {
      const response = await axios.get("http://192.168.1.198:3001/data/devices");
      const data = await response.data;
      setDevices(data)
    }

    useEffect(() => {
      try {
        fetchData()
      } catch (error) {
        
      }
    },[devices])

    const toggleModal = () => {
        setShowModal(!showModal);
    };

  return (
    <div className="device-page">
      <div className="device-top">
        <h1 className="device-header">Devices</h1>
        <button className="add-device-button" onClick={toggleModal}>
          <AddIcon />
          Add device
        </button>
      </div>
      <div className="device-list">
        <table>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Serial N°</th>
            <th>Status</th>
          </tr>
          {
            devices.map((device) => {
              return (
                <TableRow
                  key={device.serialNumber}
                  device={device}
                />
              );
            })
          }
        </table>
      </div>
      {showModal && <AddDeviceModal toggleModal={toggleModal} />}
    </div>
  );
};
