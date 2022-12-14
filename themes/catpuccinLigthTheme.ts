import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8839ef",
    },
    error: {
      main: "#d20f39",
    },
    success: {
      main: "#40a02b",
    },
    info: {
      main: "#209fb5",
    },
    background: {
      default: "#eff1f5",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#8839ef",
          color: "#f5f5f5",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#f5f5f5",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
