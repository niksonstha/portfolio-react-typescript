import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Education from "../components/education/Education";
import TechnicalSkills from "../components/technical-skills/TechnicalSkills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import resume from "../assets/nikson-shrestha-resume.pdf";

const Aboutme = () => {
  const handleDownloadCV = () => {
    const aTag = document.createElement("a");
    aTag.href = resume;

    const fileName = resume.split("/").pop();

    aTag.setAttribute("download", fileName || "nikson-resume.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <Box width={["90vw", "60vw"]} mx={"auto"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDir={"column"}
        justifyContent={"center"}
        height={["", "100vh"]}
        style={{
          scrollSnapAlign: "start",
        }}
      >
        <Heading
          fontSize={["4rem", "8rem"]}
          textAlign={"center"}
          fontFamily={"Long Cang"}
          data-aos="fade-up"
        >
          About me
        </Heading>
        <Text
          align="justify"
          mt={5}
          letterSpacing={2}
          color={"#fccb06"}
          data-aos="fade-up"
          data-aos-duration="2000"
          lineHeight={"2rem"}
        >
          I am a highly motivated and enthusiastic professional actively seeking
          opportunities in both frontend and backend web development. With a
          strong passion for web and a focus on creating intuitive and
          user-friendly interfaces, I am eager to contribute to a dynamic team
          and make a meaningful impact. If you are looking for a dedicated and
          results-driven individual, I am ready to bring my skills to your
          organization.
        </Text>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Button
            mt={3}
            colorScheme="yellow"
            onClick={handleDownloadCV}
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            Download cv
          </Button>
        </motion.div>
      </Box>
      <Box>
        <Education />
        <TechnicalSkills />
      </Box>
    </Box>
  );
};

export default Aboutme;
