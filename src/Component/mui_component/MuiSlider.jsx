import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const theme = createTheme({
  palette: {
    asparagus: {
      main: "#70ae6e",
      light: "#87AC7C",
      dark: "#5A9757",
    },
  },
});

export default function MuiSlider({brightness, handleChange}) {
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: 100 }}>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
          }}
          orientation="vertical"
          defaultValue={30}
          aria-label="Brightness"
          valueLabelDisplay="auto"
          onKeyDown={preventHorizontalKeyboardNavigation}
          color="asparagus"
          step={15}
          value={brightness}
          onChange={handleChange}
        />
      </Box>
    </ThemeProvider>
  );
}
