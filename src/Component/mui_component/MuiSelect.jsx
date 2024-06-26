import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const MuiSelect = ({ name, list, selection, onSelectChange }) => {
  const handleChange = (event) => {
    onSelectChange(event.target.value); 
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selection}
          label={name}
          onChange={handleChange}
        >
          {list.map((element, id) => (
            <MenuItem key={id} value={element}>
              {element}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
