import {
  Box,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const ProfessionalSkills = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mb={20}
    >
      <Heading
        textAlign={"center"}
        fontFamily={"Long Cang"}
        fontSize={["2rem", "2.4rem", "3rem", "4rem"]}
        data-aos="fade-out"
        data-aos-duration="2000"
      >
        Professional Skills
      </Heading>
      <Box
        bgColor={"#fccb06"}
        padding={4}
        color={"black"}
        rounded={10}
        data-aos="flip-right"
        data-aos-delay="50"
        width={["100%", "50%"]}
      >
        <Text fontSize="lg" fontWeight="bold">
          Version Control
        </Text>
        <UnorderedList color={"gray"}>
          <SimpleGrid columns={1}>
            <ListItem>Communication</ListItem>
            <ListItem>Adaptability</ListItem>
            <ListItem>Time Management</ListItem>
            <ListItem>Problem-Solving</ListItem>
          </SimpleGrid>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default ProfessionalSkills;
