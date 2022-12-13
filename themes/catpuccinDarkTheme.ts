import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c6a0f6",
    },
    error: {
      main: "#ed8796",
    },
    success: {
      main: "#a6da95",
    },
    info: {
      main: "#8aadf4",
    },
    background: {
      default: "#24273a",
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
          backgroundColor: "#c6a0f6",
          color: "#000",
        },
      },
    },
  },
});

export default theme;
