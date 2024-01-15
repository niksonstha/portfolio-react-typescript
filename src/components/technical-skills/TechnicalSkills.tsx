import {
  Box,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const TechnicalSkills = () => {
  return (
    <Box
      mt={5}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mb={100}
    >
      <Heading
        textAlign={"center"}
        fontFamily={"Long Cang"}
        fontSize={["2rem", "2.4rem", "3rem", "4rem"]}
        data-aos="fade-out"
        data-aos-duration="2000"
      >
        Technical Skills
      </Heading>

      <SimpleGrid columns={[2, 3]} spacing={3}>
        <Box
          bgColor={"#fccb06"}
          padding={4}
          color={"black"}
          rounded={10}
          data-aos="flip-right"
          data-aos-delay="50"
        >
          <Text fontSize="lg" fontWeight="bold">
            Programming Language
          </Text>
          <UnorderedList spacing={3} color={"gray"}>
            <SimpleGrid spacing={3} columns={[1, 2]}>
              <ListItem>JavaScript</ListItem>
              <ListItem>Typescript</ListItem>
            </SimpleGrid>
          </UnorderedList>
        </Box>

        <Box
          bgColor={"#fccb06"}
          padding={4}
          color={"black"}
          rounded={10}
          data-aos="flip-right"
          data-aos-delay="50"
        >
          <Text fontSize="lg" fontWeight="bold">
            Frontend
          </Text>
          <UnorderedList color={"gray"}>
            <SimpleGrid spacing={3} columns={[1, 2]}>
              <ListItem>Html</ListItem>
              <ListItem>Css</ListItem>
              <ListItem>ChakraUI</ListItem>
              <ListItem>React JS</ListItem>
              <ListItem>AngularJS</ListItem>
            </SimpleGrid>
          </UnorderedList>
        </Box>
        <Box
          bgColor={"#fccb06"}
          padding={4}
          color={"black"}
          rounded={10}
          data-aos="flip-right"
          data-aos-delay="50"
        >
          <Text fontSize="lg" fontWeight="bold">
            Backend
          </Text>
          <UnorderedList color={"gray"}>
            <SimpleGrid spacing={3} columns={[1, 2]}>
              <ListItem>Node.js</ListItem>
              <ListItem>Express.js</ListItem>
              <ListItem>Mongoose</ListItem>
            </SimpleGrid>
          </UnorderedList>
        </Box>
        <Box
          bgColor={"#fccb06"}
          padding={4}
          color={"black"}
          rounded={10}
          data-aos="flip-right"
          data-aos-delay="50"
        >
          <Text fontSize="lg" fontWeight="bold">
            Databases
          </Text>
          <UnorderedList color={"gray"}>
            <SimpleGrid spacing={3} columns={[1, 2]}>
              <ListItem>MongoDb</ListItem>
              <ListItem>Postgresql</ListItem>
            </SimpleGrid>
          </UnorderedList>
        </Box>
        <Box
          bgColor={"#fccb06"}
          padding={4}
          color={"black"}
          rounded={10}
          data-aos="flip-right"
          data-aos-delay="50"
        >
          <Text fontSize="lg" fontWeight="bold">
            Api Integration
          </Text>
          <UnorderedList color={"gray"}>
            <SimpleGrid spacing={3} columns={2}>
              <ListItem>Restful APIs</ListItem>
            </SimpleGrid>
          </UnorderedList>
        </Box>
        <Box
          bgColor={"#fccb06"}
          padding={4}
          color={"black"}
          rounded={10}
          data-aos="flip-right"
          data-aos-delay="50"
        >
          <Text fontSize="lg" fontWeight="bold">
            Version Control
          </Text>
          <UnorderedList color={"gray"}>
            <SimpleGrid spacing={3} columns={[1, 2]}>
              <ListItem>Git and github</ListItem>
            </SimpleGrid>
          </UnorderedList>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TechnicalSkills;
