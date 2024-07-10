import React, { useState } from "react";
import "./addDeviceModal.css";
import axios from "axios";

export const AddDeviceModal = ({ toggleModal, onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    serialNumber: "",
    isActive: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onAdd(formData); // Call onAdd prop function to add new device
    } catch (error) {
      console.error("Error adding device:", error);
    }
  };

  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}></div>
      <div className="add-device-modal">
        <h1>Add device</h1>
        <div className="add-device-form">
          <div className="form-element">
            <label>Device name</label>
            <input
              type="text"
              placeholder="example: 'John's AC'"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-element">
            <label>Device brand</label>
            <input
              type="text"
              placeholder="Enter device brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>
          <div className="form-element">
            <label>Device model</label>
            <input
              type="text"
              placeholder="example: 'MD576YSQ'"
              name="model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
          <div className="form-element">
            <label>Serial number</label>
            <input
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="btn-group">
          <button className="add-device-button" onClick={handleSubmit}>
            Add device
          </button>
          <button className="cancel-button" onClick={toggleModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
