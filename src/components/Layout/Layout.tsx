import { Box } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box height={"100vh"}>
      <Link style={{ width: "100%" }} to={"/"}>
        Home
      </Link>
      <div>Layout</div>
      <Outlet />
    </Box>
  );
};
