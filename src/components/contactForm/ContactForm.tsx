import { Box, Button, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xayrnpvw");
  const toast = useToast();
  const navigate = useNavigate();
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message has been sent",
        description: "Thank you",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    }
  }, [navigate, state.succeeded, toast]);

  return (
    <Box width={["90vw", "50vw"]} mx={"auto"} color={"#fccb06"}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box>
          <FormLabel htmlFor="fullname">Fullname</FormLabel>
          <Input id="fullname" type="text" name="fullname" />
        </Box>
        <Box>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Box>

        <Box>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </Box>

        <Button
          type="submit"
          disabled={state.submitting}
          width={["20vw", "10vw"]}
          alignSelf={"center"}
          bgColor={"#fccb06"}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;
