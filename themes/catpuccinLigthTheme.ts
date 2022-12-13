import { createTheme } from "@mui/material";

const theme = createTheme({
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
  typography: {
    h1: {
      fontSize: "2.5rem",
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

export default theme;
