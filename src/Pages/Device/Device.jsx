import React, { useEffect, useState } from "react";
import "./device.css";
import { TableRow } from "../../Component/tableRow/TableRow";
import AddIcon from "@mui/icons-material/Add";
import { AddDeviceModal } from "../../Component/Modals/addDevice/AddDeviceModal";
import axios from "axios";

export const Device = () => {
  const [showModal, setShowModal] = useState(false);
  const [devices, setDevices] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.1.198:3001/data/devices");
      setDevices(response.data);
    } catch (error) {
      console.error("Error fetching devices:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data only on component mount

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddDevice = async (newDevice) => {
    try {
      await axios.post("http://192.168.1.198:3001/data/devices", newDevice);
      fetchData(); // Fetch updated list after adding device
      toggleModal(); // Close modal after adding device
    } catch (error) {
      console.error("Error adding device:", error);
    }
  };

  const handleDeleteDevice = async (serialNumber) => {
    try {
      await axios.delete(`http://192.168.1.198:3001/data/devices/${serialNumber}`);
      fetchData(); // Fetch updated list after deleting device
    } catch (error) {
      console.error("Error deleting device:", error);
    }
  };

  const handleEditDevice = async (updatedDevice) => {
    try {
      await axios.put(`http://192.168.1.198:3001/data/devices/${updatedDevice.serialNumber}`, updatedDevice);
      fetchData(); // Fetch updated list after editing device
    } catch (error) {
      console.error("Error editing device:", error);
    }
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
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Serial N°</th>
              <th>Status</th>
              <th>Action</th> {/* Add action column for edit/delete */}
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <TableRow
                key={device.serialNumber}
                device={device}
                onDelete={handleDeleteDevice}
                onEdit={handleEditDevice}
              />
            ))}
          </tbody>
        </table>
      </div>
      {showModal && <AddDeviceModal toggleModal={toggleModal} onAdd={handleAddDevice} />}
    </div>
  );
};
