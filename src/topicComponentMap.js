// src/Component/topicComponentMap.js
import { Monitoring } from "./Component/Monitor/Monitoring";
import { TempGauge } from "./Component/Monitor/TempGauge";
import BoltIcon from "@mui/icons-material/Bolt";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import { Control } from "./Component/Control/Control";
import { ControlSlide } from "./Component/Control/ControlSlide";

// Mapping of topics to corresponding components
export const topicComponentMap = {
  "prise/5678/command/command": {
    component: Control,
    props: {
      title: "Plug",
      type: "Plug",
      topic: "prise/5678/command/command",
    },
  },
  "prise/5678/voltage": {
    component: Monitoring,
    props: {
      monitoredData: "voltage",
      type: {
        title: "Power Monitoring",
        type: "Voltage",
        unit: "V",
        topic: "prise/5678/voltage",
      },
      Icon: ElectricMeterIcon,
      width: 350,
    },
  },
  "prise/5678/frequency": {
    component: TempGauge,
    props: {
      monitoredData: "frequency",
      minValue: 40,
      maxValue: 70,

      type: {
        title: "Frequency",
        type: "Frequency",
        unit: "Hz",
        topic: "prise/5678/frequency",
      },
      Icon: BoltIcon,
      width: 350,
    },
  },
  "prise/5678/current": {
    component: TempGauge,
    props: {
      monitoredData: "current",
      minValue: 0,
      maxValue: 15,

      type: {
        title: "Current",
        type: "Current",
        unit: "A",
        topic: "prise/5678/current",
      },
      Icon: BoltIcon,
      width: 350,
    },
  },
  "prise/5678/power": {
    component: Monitoring,
    props: {
      monitoredData: "power",
      type: {
        title: "Socket Monitoring",
        type: "Power",
        unit: "W",
        topic: "prise/5678/power",
      },
      Icon: BoltIcon,
      width: 400,
    },
  },
  "interrupteur/1234/temperature": {
    component: TempGauge,
    props: {
      monitoredData: "temperature",
      minValue: 0,
      maxValue: 50,
      type: {
        title: "Temperature ",
        type: "Temperature",
        unit: "°C",
        topic: "interrupteur/1234/temperature",
      },
      Icon: DeviceThermostatIcon,
      width: 350,
    },
  },
  "interrupteur/1234/command/relay_1": {
    component: Control,
    props: {
      title: "Relay 1",
      type: "Relay1",
      topic: "interrupteur/1234/command/relay_1",
    },
  },
  "interrupteur/1234/command/relay_2": {
    component: Control,
    props: {
      title: "Relay 2",
      type: "Relay2",
      topic: "interrupteur/1234/command/relay_2",
    },
  },
  "interrupteur/1234/command/relay_3": {
    component: Control,
    props: {
      title: "Relay 3",
      type: "Relay3",
      topic: "interrupteur/1234/command/relay_3",
    },
  },
  "interrupteur/1234/command/gradateur": {
    component: ControlSlide,
    props: {
      title: "Brightness",
      type: "Brightness",
      topic: "interrupteur/1234/command/gradateur",
    },
  },

  // Add more mappings as needed for other topics
};
