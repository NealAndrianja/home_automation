import React from 'react'
import "./editDevice.css"
import axios from "axios";


export const EditDeviceModal = ({toggleEditModal}) => {
  return (
    <div className="modal">
        <div className="overlay" onClick={toggleEditModal}></div>
        <div className="add-device-modal">
            <h1>Edit device</h1>
            <div className="add-device-form">
                <div className="form-element">
                    <label>Device name</label>
                    <input type="text" placeholder="example: 'John's AC'" />
                </div>
                <div className="form-element">
                    <label>Brand</label>
                    <input type="text" placeholder="example: 'Samsung'" />
                </div>
                <div className="form-element">
                    <label>Model</label>
                    <input type="text" placeholder="example: 'AC-123'" />
                </div>
                <div className="form-element">
                    <label>Serial N°</label>
                    <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
                </div>
            </div>
        </div>
    </div>
  )
}
