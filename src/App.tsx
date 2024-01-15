import { Box } from "@chakra-ui/react";
import Home from "./screens/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
    </Box>
  );
}

export default App;
