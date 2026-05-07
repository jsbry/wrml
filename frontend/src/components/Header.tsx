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

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: `${headerHeight}px`,
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
