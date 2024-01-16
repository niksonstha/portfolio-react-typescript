import { Box, Heading } from "@chakra-ui/react";
import ContactForm from "../components/contactForm/ContactForm";

const Contact = () => {
  return (
    <Box>
      <Heading
        fontFamily={"Long Cang"}
        textAlign={"center"}
        fontSize={"4rem"}
        color={"#fccb06"}
      >
        Let's Connect
      </Heading>
      <ContactForm />
    </Box>
  );
};

export default Contact;
