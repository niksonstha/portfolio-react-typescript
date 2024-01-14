import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { MdHome, MdContactPage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";

const iconList = [
  { icon: <MdHome />, label: "Home" },
  { icon: <FaUser />, label: "User" },
  { icon: <MdContactPage />, label: "Contact" },
  { icon: <AiFillProject />, label: "Projects" },
];

const listItemStyles = {
  cursor: "pointer",
  fontSize: "1.4rem",
  transition: "transform 0.2s ease-in",
  _hover: {
    transform: "scale(1.2)",
  },
};

const SideBar = () => {
  return (
    <Box
      color="#ae9dcc"
      padding={2}
      position="fixed"
      width={["70vw", "50vw", "40vw", "30vw", "25vw"]}
      top={["90%"]}
      transform="translateX(-50%)"
      left={"50%"}
    >
      <UnorderedList
        bgColor="#251B37"
        listStyleType="none"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
        padding={3}
        rounded={50}
        boxShadow=" 7px 7px 14px #30243f,
        -7px -7px 14px #3e2e51"
      >
        {iconList.map((item, index) => (
          <ListItem key={index} {...listItemStyles}>
            {item.icon}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default SideBar;
