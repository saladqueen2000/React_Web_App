import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./navbar";
import { Box } from "@mui/material";
import './App.css'
export default function MainLayout() {
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ marginTop: "64px" }}>
        <Outlet />
      </Box>
    </>
  );
}
