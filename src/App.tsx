import { Box } from "@chakra-ui/react";
import Home from "./screens/Home";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Box height={"100vh"}>
      <SideBar />
      <Home />
    </Box>
  );
}

export default App;
