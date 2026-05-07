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

import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";
import RightSidebar from "./components/RightSidebar";
import Footer from "./components/Footer";

import "./App.css";

const leftDrawerWidth = 240;
const rightDrawerWidth = 240;
const headerHeight = 60;
const footerHeight = 30;

export default function App() {
  return (
    <div id="App">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* Header */}
        <Header />

        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <Main />

        {/* Right Sidebar */}
        <RightSidebar />

        {/* Footer */}
        <Footer />
      </Box>
    </div>
  );
}
