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
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

const leftDrawerWidth = 240;
const rightDrawerWidth = 240;
const headerHeight = 60;
const footerHeight = 30;

export default function LeftSidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: leftDrawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: leftDrawerWidth,
          boxSizing: "border-box",
          top: `${headerHeight}px`,
          height: `calc(100% - ${headerHeight}px - ${footerHeight}px)`,
          bgcolor: "#e7e7e7",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Left Sidebar</Typography>
        <SimpleTreeView>
          <TreeItem itemId="grid" label="Data Grid">
            <TreeItem itemId="grid-1" label="grid-1" />
            <TreeItem itemId="grid-2" label="grid-2" />
          </TreeItem>
          <TreeItem itemId="sample" label="Data Sample">
            <TreeItem itemId="sample-1" label="sample-1" />
            <TreeItem itemId="sample-2" label="sample-2" />
          </TreeItem>
        </SimpleTreeView>
      </Box>
    </Drawer>
  );
}
