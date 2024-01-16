import { Box, Heading, Progress, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getRepo } from "../../api/api";
import { Link } from "react-router-dom";
import "./projectCard.css";

interface Repo {
  id: number;
  name: string;
  language: string;
  visibility: string;
  html_url: string;
}

const ProjectsCard = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const filterPublicRepo = async () => {
    try {
      const datas = await getRepo();
      const filteredRepo = datas.filter((data: Repo) => {
        return data.visibility === "public";
      });

      setTimeout(() => {
        setRepos(filteredRepo);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterPublicRepo();
  }, []);
  return (
    <Box>
      {loading ? (
        <Box textAlign={"center"} mt={"200px"}>
          <Progress
            size="xs"
            isIndeterminate
            bgColor="#fccb06"
            position="fixed"
            top="0"
            left="0"
            right="0"
          />
        </Box>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={5} mt={4}>
          {repos.map((repo) => (
            <Box
              key={repo.id}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              bgColor={"#fccb06"}
              height={"200px"}
              rounded={10}
              cursor={"pointer"}
              transition={"transform 0.3s ease-in"}
              _hover={{
                transform: "scale(1.04)",
              }}
            >
              <Heading
                fontFamily={"Long Cang"}
                color={"black"}
                textAlign={"center"}
                fontSize={["2rem", "2.3rem"]}
              >
                {repo.name}
              </Heading>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
                color={"black"}
              >
                <Text>Language: {repo.language}</Text>
                <Box display={"flex"} gap={2}>
                  <Text color={"blue"} fontWeight={"bold"}>
                    <Link to={repo.html_url}>Go through GitHub</Link>
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default ProjectsCard;
