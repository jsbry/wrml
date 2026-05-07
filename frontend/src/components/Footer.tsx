import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  CssBaseline,
  Paper,
} from "@mui/material";

const leftDrawerWidth = 240;
const rightDrawerWidth = 240;
const headerHeight = 60;
const footerHeight = 30;

export default function Footer() {
  return (
    <AppBar
      component="footer"
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        zIndex: (theme) => theme.zIndex.drawer + 2,
        height: `${footerHeight}px`,
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Typography variant="body1" noWrap component="div">
          Footer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
