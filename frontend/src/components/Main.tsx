import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  CssBaseline,
  Paper,
  Grid,
} from "@mui/material";

const leftDrawerWidth = 240;
const rightDrawerWidth = 240;
const headerHeight = 60;
const footerHeight = 30;

export default function Main() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        mt: `${headerHeight}px`,
        mb: `${footerHeight}px`,
        p: 0,
        minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper sx={{ p: 3, height: `100%` }} square>
        <Typography variant="h4" gutterBottom>
          Content
        </Typography>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6}>1</Grid>
          <Grid size={6}>2</Grid>
          <Grid size={6}>3</Grid>
          <Grid size={6}>4</Grid>
        </Grid>
        <Typography>Main Content</Typography>
      </Paper>
    </Box>
  );
}
