import React, { useCallback, useContext, useEffect } from "react";
import "./device.css";
import { TableRow } from "../../Component/tableRow/TableRow";
import AddIcon from "@mui/icons-material/Add";
import { AddDeviceModal } from "../../Component/Modals/addDevice/AddDeviceModal";
import { EditDeviceModal } from "../../Component/Modals/editDevice/EditDeviceModal";
import { DeleteConfirmationModal } from "../../Component/Modals/deleteConfirmation/DeleteConfirmationModal";
import axios from "axios";
import { DeviceContext } from "../../Context/DeviceContext";
import { ACTIONS } from "../../Context/DeviceContext";

export const Device = () => {
  const { state, dispatch } = useContext(DeviceContext);
  const { devices, showModal, modalType, currentDevice } = state;

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.198:3001/data/devices"
      );
      dispatch({ type: ACTIONS.SET_DEVICES, payload: response.data });
    } catch (error) {
      console.error("Error fetching devices:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddDevice = async (newDevice) => {
    try {
      const response = await axios.post(
        "http://192.168.1.198:3001/data/devices",
        newDevice
      );
      dispatch({ type: ACTIONS.ADD_DEVICE, payload: response.data });
      fetchData()
      dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: { modalType: null } });
    } catch (error) {
      console.error("Error adding device:", error);
    }
  };

  const handleDeleteDevice = async (serialNumber) => {
    try {
      await axios.delete(
        `http://192.168.1.198:3001/data/devices/${serialNumber}`
      );
      dispatch({ type: ACTIONS.DELETE_DEVICE, payload: serialNumber });
      fetchData()
      dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: { modalType: null } });
    } catch (error) {
      console.error("Error deleting device:", error);
    }
  };

  const handleEditDevice = async (updatedDevice) => {
    try {
      const response = await axios.put(
        `http://192.168.1.198:3001/data/devices/${updatedDevice.serialNumber}`,
        updatedDevice
      );
      dispatch({ type: ACTIONS.EDIT_DEVICE, payload: response.data });
      fetchData()
      dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: { modalType: null } });
    } catch (error) {
      console.error("Error editing device:", error);
    }
  };

  const toggleModal = (modalType = null, device = null) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: { modalType, device } });
  };

  return (
    <div className="device-page">
      <div className="device-top">
        <h1 className="device-header">Devices</h1>
        <button
          className="add-device-button"
          onClick={() => toggleModal("add")}
        >
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
              <th>Action</th>
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
      {showModal && modalType === "add" && (
        <AddDeviceModal
          toggleModal={() => toggleModal()}
          onAdd={handleAddDevice}
        />
      )}
      {showModal && modalType === "edit" && (
        <EditDeviceModal
          toggleModal={() => toggleModal()}
          device={currentDevice}
          onEditDevice={handleEditDevice}
        />
      )}
      {showModal && modalType === "delete" && (
        <DeleteConfirmationModal
          toggleModal={() => toggleModal()}
          device={currentDevice}
          onDeleteConfirm={handleDeleteDevice}
        />
      )}
    </div>
  );
};
