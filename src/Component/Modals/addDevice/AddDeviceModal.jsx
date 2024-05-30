import React from "react";
import "./addDeviceModal.css";

export const AddDeviceModal = ({ toggleModal }) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}></div>
      <div className="add-device-modal">
        <h1>Add device</h1>
        <div className="add-device-form">
          <div className="form-element">
            <label>Device name</label>
            <input type="text" placeholder="example: 'John's AC'" />
          </div>
          <div className="form-element">
            <label>Device brand</label>
            <input type="text" placeholder="Enter device brand" />
          </div>
          <div className="form-element">
            <label>Device model</label>
            <input type="text" placeholder="example: 'MD576YSQ'" />
          </div>
          <div className="form-element">
            <label>Serial number</label>
            <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
          </div>
        </div>
        <div className="btn-group">
          <button className="add-device-button">Add device</button>
          <button className="cancel-button" onClick={toggleModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
