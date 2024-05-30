import React, { useState } from "react";
import "./device.css";
import { TableRow } from "../../Component/tableRow/TableRow";
import AddIcon from "@mui/icons-material/Add";
import { AddDeviceModal } from "../../Component/Modals/addDevice/AddDeviceModal";

export const Device = () => {
    const [showModal, setShowModal] = useState(false);

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
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </table>
      </div>
      {showModal && <AddDeviceModal toggleModal={toggleModal} />}
    </div>
  );
};
