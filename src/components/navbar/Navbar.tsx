import { Box, ListItem, UnorderedList, Tooltip } from "@chakra-ui/react";
import { FaHome, FaUser } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const iconList = [
  { icon: <FaHome />, label: "Home", path: "/" },
  { icon: <FaUser />, label: "About Me", path: "about" },
  { icon: <AiFillProject />, label: "Projects", path: "projects" },
  { icon: <FaMessage />, label: "Contact", path: "contact" },
];

const listItemStyles = {
  cursor: "pointer",
  fontSize: "1.4rem",
  transition: "transform 0.2s ease-in",
  _hover: {
    transform: "scale(1.4)",
  },
  _active: {
    transform: "scale(1)",
  },
};

const Navbar = () => {
  return (
    <Box
      color="white"
      padding={2}
      position="fixed"
      width={["70vw", "50vw", "40vw", "30vw", "20vw"]}
      top={["90%"]}
      transform="translateX(-50%)"
      left={"50%"}
      zIndex={1000}
    >
      <UnorderedList
        listStyleType="none"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
        padding={3}
        rounded={50}
        className="navbar"
      >
        {iconList.map((item, index) => (
          <Tooltip key={index} label={item.label} hasArrow>
            <NavLink to={item.path}>
              <ListItem {...listItemStyles}>{item.icon}</ListItem>
            </NavLink>
          </Tooltip>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Navbar;
