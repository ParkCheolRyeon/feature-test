import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  breakpoints: {
    values: {
      xs: 0,
      // xsm: 360,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      // mobile: 0,
      // tablet: 728,
      // desktop: 984,
    },
  },
});

export default theme;
