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

export default function RightSidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: rightDrawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: rightDrawerWidth,
          boxSizing: "border-box",
          top: `${headerHeight}px`,
          height: `calc(100% - ${headerHeight}px - ${footerHeight}px)`,
          bgcolor: "#e7e7e7",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Right Sidebar</Typography>
        <Typography variant="body2">body2</Typography>
      </Box>
    </Drawer>
  );
}
