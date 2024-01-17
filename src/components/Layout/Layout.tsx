import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box height={"100vh"}>
      <div>Layout</div>
      <Outlet />
    </Box>
  );
};
