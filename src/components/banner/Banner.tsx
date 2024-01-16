import { Box, Heading } from "@chakra-ui/react";
import banner from "../../assets/banner.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <Box
      id="banner"
      height="100vh"
      backgroundImage={`url(${banner})`}
      backgroundSize="cover"
      backgroundPosition="center center"
      display="flex"
      alignItems={"center"}
      justifyContent="center"
      textAlign="center"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          userSelect: "none",
          zIndex: "10",
        }}
      >
        <Heading fontFamily={"Long Cang"} fontSize={["2rem", "4rem"]}>
          HELLO, I'm
          <br />
        </Heading>
        <Box
          color={"yellow"}
          fontFamily={"Long Cang"}
          fontSize={["2.7rem", "4rem"]}
          fontWeight={700}
        >
          <TypeAnimation
            sequence={["Nikson Shrestha", 1000, "Full Stack Developer", 1000]}
            wrapper="span"
            repeat={Infinity}
          />
        </Box>
      </motion.div>

      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
    </Box>
  );
};

export default Banner;
