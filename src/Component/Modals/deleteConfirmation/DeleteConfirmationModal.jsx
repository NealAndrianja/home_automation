import React from 'react';
import './deleteConfirmation.css';

export const DeleteConfirmationModal = ({ device, onDeleteConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={onCancel}></div>
      <div className="delete-confirmation-modal">
        <h1>Confirm Deletion</h1>
        <p>Are you sure you want to delete the device with serial number: {device.serialNumber}?</p>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={() => onDeleteConfirm(device.serialNumber)}>Delete</button>
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
