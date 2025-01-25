import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import MenuIcon from "../../assets/hamburger-menu.png";
import { Link } from "react-router-dom";

const MenuSlider: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div>
      <IconButton
        onClick={() => toggleDrawer(true)}
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <img
          style={{ width: "30px", height: "30px" }}
          src={MenuIcon}
          alt="MenuIcon"
        />
      </IconButton>

      <Drawer anchor="left" open={isOpen} onClose={() => toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "10px",
            }}
          >
            <IconButton onClick={() => toggleDrawer(false)}>
              <p style={{ fontSize: "20px", color: "#fff" }}>X</p>
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            sx={{
              padding: "10px",
              color: "#fff",
              borderBottom: "1px solid #838287",
              fontWeight: "bold",
            }}
          >
            Menu
          </Typography>
          <List>
            <ListItem
              onClick={() => toggleDrawer(false)}
              component={Link}
              to="/dashboard"
              sx={{
                "&:hover": {
                  backgroundColor: "#838287",
                },
                padding: "10px 20px",
              }}
            >
              <ListItemText
                primary="Dashboard"
                primaryTypographyProps={{
                  fontSize: "16px",
                  color: "#fff",
                }}
              />
            </ListItem>
            <ListItem
              onClick={() => toggleDrawer(false)}
              component={Link}
              to="/overview"
              sx={{
                "&:hover": {
                  backgroundColor: "#838287",
                },
                padding: "10px 20px",
              }}
            >
              <ListItemText
                primary="Overview"
                primaryTypographyProps={{
                  fontSize: "16px",
                  color: "#fff",
                }}
              />
            </ListItem>
            <ListItem
              onClick={() => toggleDrawer(false)}
              component={Link}
              to="/history"
              sx={{
                "&:hover": {
                  backgroundColor: "#838287",
                },
                padding: "10px 20px",
              }}
            >
              <ListItemText
                primary="History"
                primaryTypographyProps={{
                  fontSize: "16px",
                  color: "#fff",
                }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default MenuSlider;
