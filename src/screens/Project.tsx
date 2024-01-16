import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const Project = () => {
  return (
    <Box color={"white"} width={"80vw"} mx={"auto"} overflowX={"hidden"}>
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
          bgColor={"#fccb06"}
          height={"200px"}
          width={"100%"}
          rounded={10}
          cursor={"pointer"}
        ></Box>
        <Box
          bgColor={"#fccb06"}
          height={"200px"}
          width={"100%"}
          rounded={10}
          cursor={"pointer"}
        ></Box>
        <Box
          bgColor={"#fccb06"}
          height={"200px"}
          width={"100%"}
          rounded={10}
          cursor={"pointer"}
          data-aos-anchor-placement="center"
        ></Box>
        <Box
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
