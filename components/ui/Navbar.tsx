import { MenuOutlined } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUiState, toggleSidebar } from "../../redux/reducers";

export const Navbar = () => {
  const { theme: isDarkTheme } = useSelector(selectUiState);
  const dispatch = useDispatch();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          onClick={() => dispatch(toggleSidebar())}
          size="large"
          edge="start"
        >
          <MenuOutlined
            sx={{
              color: `${isDarkTheme ? "#f5f5f5" : "#000"}`,
            }}
          />
        </IconButton>
        <Typography>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
