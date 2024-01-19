import { Link, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const Layout = () => {
  return (
    <Box height={"100vh"}>
      <Link to={"/"}>Home</Link>
      <Outlet />
    </Box>
  );
};
