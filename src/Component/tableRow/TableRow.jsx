import React, { useState } from "react";
import "./tableRow.css";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { EditDeviceModal } from "../Modals/editDevice/EditDeviceModal";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export const TableRow = ({ device }) => {
  const [checked, setChecked] = useState(true);
  const [editModal, setEditModal] = useState(false)

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  return (
    <>
      <tr>
        <td>{device.name}</td>
        <td>{device.brand}</td>
        <td>{device.model}</td>
        <td>{device.serialNumber}</td>
        <td>
          <div className="device-control">
            <span className="control-state">
              {checked ? "Active" : "Inactive"}
            </span>
            <IOSSwitch
              sx={{ m: 1 }}
              defaultChecked
              checked={checked}
              onChange={handleChange}
            />
          </div>
          <div className="device-menu">
            <EditIcon className="edit-icon device-menu-item" onClick={toggleEditModal}/>
            <HighlightOffIcon className="delete-icon device-menu-item"/>
          </div>
        </td>
      </tr>
      {
        editModal && <EditDeviceModal toggleEditModal={toggleEditModal}/>
      }
    </>
  );
};
