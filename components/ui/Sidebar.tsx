import {
  CloseOutlined,
  InboxOutlined,
  MailOutlineOutlined,
} from "@mui/icons-material";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectUiState, toggleSidebar } from "../../redux/reducers/ui";

const menuItems = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
  const { sidebar } = useSelector(selectUiState);
  const dispatch = useDispatch();

  return (
    <Drawer
      anchor="left"
      open={sidebar}
      onClose={() => dispatch(toggleSidebar())}
    >
      <Box
        sx={{
          width: "15rem",
        }}
      >
        <Box
          sx={{
            padding: "5px 10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h4">Menu</Typography>
          <IconButton onClick={() => dispatch(toggleSidebar())}>
            <CloseOutlined />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {menuItems.map((text, i) => (
            <ListItem onClick={() => dispatch(toggleSidebar())} button key={i}>
              <ListItemIcon>
                {i % 2 ? <InboxOutlined /> : <MailOutlineOutlined />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((text, i) => (
            <ListItem onClick={() => dispatch(toggleSidebar())} button key={i}>
              <ListItemIcon>
                {i % 2 ? <InboxOutlined /> : <MailOutlineOutlined />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
