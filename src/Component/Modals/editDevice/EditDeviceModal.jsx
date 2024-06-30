import React, { useState, useEffect } from 'react';
import './editDevice.css';
import axios from 'axios';

export const EditDeviceModal = ({ device, onEditDevice, toggleEditModal }) => {
  const [deviceData, setDeviceData] = useState({
    name: '',
    brand: '',
    model: '',
    serialNumber: ''
  });

  useEffect(() => {
    if (device) {
      setDeviceData({
        name: device.name,
        brand: device.brand,
        model: device.model,
        serialNumber: device.serialNumber
      });
    }
  }, [device]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeviceData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onEditDevice(deviceData);
    } catch (error) {
      console.error('Error editing device:', error);
    }
  };

  return (
    <div className="modal">
      <div className="overlay" onClick={toggleEditModal}></div>
      <div className="edit-device-modal">
        <h1>Edit Device</h1>
        <form className="edit-device-form" onSubmit={handleSubmit}>
          <div className="form-element">
            <label>Device Name</label>
            <input
              type="text"
              name="name"
              value={deviceData.name}
              onChange={handleChange}
              placeholder="example: 'John's AC'"
            />
          </div>
          <div className="form-element">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={deviceData.brand}
              onChange={handleChange}
              placeholder="example: 'Samsung'"
            />
          </div>
          <div className="form-element">
            <label>Model</label>
            <input
              type="text"
              name="model"
              value={deviceData.model}
              onChange={handleChange}
              placeholder="example: 'AC-123'"
            />
          </div>
          <div className="form-element">
            <label>Serial N°</label>
            <input
              type="text"
              name="serialNumber"
              value={deviceData.serialNumber}
              onChange={handleChange}
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-button">Save</button>
            <button type="button" className="cancel-button" onClick={toggleEditModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};
