import { Box, Heading } from "@chakra-ui/react";
import ProjectsCard from "../components/project-card/ProjectsCard";
import { useEffect } from "react";
import { getRepo } from "../api/api";

const Project = () => {
  useEffect(() => {
    getRepo();
  }, []);
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
      <Box padding={3}>
        <ProjectsCard />
      </Box>
    </Box>
  );
};

export default Project;
