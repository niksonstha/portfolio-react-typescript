import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const Project = () => {
  return (
    <Box color={"white"} width={"80vw"} mx={"auto"} data-aos="fade-down">
      <Heading
        fontFamily={"Long Cang"}
        textAlign={"center"}
        fontSize={"4rem"}
        letterSpacing={3}
      >
        Projects
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={4}>
        <Box
          data-aos="slide-left"
          bgColor={"#fccb06"}
          height={"200px"}
          width={"100%"}
          rounded={10}
          cursor={"pointer"}
        ></Box>
        <Box
          data-aos="slide-right"
          bgColor={"#fccb06"}
          height={"200px"}
          width={"100%"}
          rounded={10}
          cursor={"pointer"}
        ></Box>
        <Box
          data-aos="slide-left"
          bgColor={"#fccb06"}
          height={"200px"}
          width={"100%"}
          rounded={10}
          cursor={"pointer"}
          data-aos-anchor-placement="center"
        ></Box>
        <Box
          data-aos="slide-right"
          bgColor={"#fccb06"}
          height={"200px"}
          width={"100%"}
          rounded={10}
          cursor={"pointer"}
        ></Box>
      </SimpleGrid>
    </Box>
  );
};

export default Project;
