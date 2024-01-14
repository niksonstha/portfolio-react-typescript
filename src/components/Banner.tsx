import { Box } from "@chakra-ui/react";

type BannerProps = {
  color: string;
};

const Banner = ({ color }: BannerProps) => {
  return <Box height={"100vh"} backgroundColor={color}></Box>;
};

export default Banner;
