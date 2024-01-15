import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const Education = () => {
  return (
    <Box
      id="education"
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mt={5}
      mb={20}
    >
      <Heading
        fontFamily={"Long Cang"}
        fontSize={["2rem", "2.4rem", "3rem", "4rem"]}
        textAlign={"center"}
        data-aos="fade-out"
        data-aos-duration="2000"
      >
        Education
      </Heading>

      <SimpleGrid width={["90vw", "50vw"]} spacing={4} columns={1}>
        <Box
          bgColor={"#fccb06"}
          padding={4}
          color={"black"}
          rounded={10}
          data-aos="flip-right"
          data-aos-delay="50"
          width={"100%"}
        >
          <Text fontSize="lg" fontWeight="bold">
            plus two
          </Text>
          <Text>Global college of management</Text>
          <Text fontSize="sm" color="gray.500">
            2017 - 2019
          </Text>
        </Box>

        <Box
          bgColor={"#fccb06"}
          padding={4}
          color={"black"}
          rounded={10}
          data-aos="flip-left"
          data-aos-delay="100"
          width={"100%"}
        >
          <Text fontSize="lg" fontWeight="bold">
            Bachelor of Computer Application
          </Text>
          <Text>Prime College</Text>
          <Text fontSize="sm" color="gray.500">
            2019 - Current
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Education;
