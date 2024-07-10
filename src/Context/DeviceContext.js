import React, { createContext, useReducer } from "react";

export const DeviceContext = createContext();

export const ACTIONS = {
  SET_DEVICES: "SET_DEVICES",
  ADD_DEVICE: "ADD_DEVICE",
  DELETE_DEVICE: "DELETE_DEVICE",
  EDIT_DEVICE: "EDIT_DEVICE",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_CURRENT_DEVICE: "SET_CURRENT_DEVICE",
  TOGGLE_ACTIVE: "TOGGLE_ACTIVE",
};

const initialState = {
  devices: [],
  showModal: false,
  modalType: null,
  currentDevice: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DEVICES:
      return { ...state, devices: action.payload };
    case ACTIONS.ADD_DEVICE:
      return { ...state, devices: [...state.devices, action.payload] };
    case ACTIONS.DELETE_DEVICE:
      return {
        ...state,
        devices: state.devices.filter(
          (device) => device.serialNumber !== action.payload
        ),
      };
    case ACTIONS.EDIT_DEVICE:
      return {
        ...state,
        devices: state.devices.map((device) =>
          device.serialNumber === action.payload.serialNumber
            ? action.payload
            : device
        ),
      };
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
        modalType: action.payload.modalType,
        currentDevice: action.payload.device || null,
      };
    case ACTIONS.TOGGLE_ACTIVE:
      return {
        ...state,
        devices: state.devices.map((device) =>
          device.serialNumber === action.payload.serialNumber
            ? { ...device, isActive: !device.isActive }
            : device
        ),
      };
    default:
      return state;
  }
};

export const DeviceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DeviceContext.Provider value={{ state, dispatch }}>
      {children}
    </DeviceContext.Provider>
  );
};
