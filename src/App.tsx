import { Box } from "@chakra-ui/react";
import Home from "./screens/Home";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Aboutme from "./screens/Aboutme";
import Project from "./screens/Project";
import Contact from "./screens/Contact";

function App() {
  return (
    <Box>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}

export default App;
