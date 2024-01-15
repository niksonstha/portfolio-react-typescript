import { Box } from "@chakra-ui/react";
import Banner from "../components/banner/Banner";
import Aboutme from "./Aboutme";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <Box id="home">
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<Aboutme />} />
      </Routes>
    </Box>
  );
};

export default Home;
