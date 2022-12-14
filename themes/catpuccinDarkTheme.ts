import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
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

theme = responsiveFontSizes(theme);

export default theme;
