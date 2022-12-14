import {
  DarkModeOutlined,
  LightModeOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUiState,
  toggleSidebar,
  toggleUiState,
} from "../../redux/reducers/ui";

export const Navbar = () => {
  const { ui } = useSelector(selectUiState);
  const { theme } = ui;
  const dispatch = useDispatch();

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          gap: 2,
        }}
      >
        <IconButton
          onClick={() => dispatch(toggleSidebar())}
          size="large"
          edge="start"
        >
          <MenuOutlined
            sx={{
              color: `${theme ? "#f5f5f5" : "#000"}`,
            }}
          />
        </IconButton>
        <Typography>OpenJira</Typography>
        <IconButton
          size="large"
          edge="start"
          onClick={() => dispatch(toggleUiState())}
        >
          {theme ? (
            <LightModeOutlined
              sx={{
                color: `#f5f5f5`,
              }}
            />
          ) : (
            <DarkModeOutlined
              sx={{
                color: "#000",
              }}
            />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
