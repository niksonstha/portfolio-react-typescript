import { Box, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";

const Experience = () => {
  const MotionBox = motion(Box);

  const experiences = [
    {
      role: "Front-End Developer",
      date: "APR 2023 - MAY 2025",
      company: "IT Himalaya",
      details: [
        "Built and maintained responsive, high-performance web applications using React.js, Tailwind CSS, ensuring cross-browser compatibility and mobile responsiveness.",
        "Translated complex UI/UX wireframes into reusable React components, improving code modularity and development speed.",
        "Managed application state effectively using React Hooks and Redux, enhancing maintainability and user experience across dynamic features.",
        "Integrated RESTful APIs with Axios, implementing robust asynchronous data handling and error management.",
        "Collaborated with cross-functional teams and participated in code reviews, following modern front-end best practices and version control with Git and Webpack.",
      ],
    },
    {
      role: "Frontend Development Intern",
      date: "FEB 2023 - APR 2023",
      company: "IT Himalaya",
      details: [
        "Developed responsive web pages using HTML, CSS, JavaScript, and React.js.",
        "Collaborated with designers to implement user-friendly UI based on Figma prototypes.",
        "Integrated APIs and managed dynamic data rendering for interactive features.",
        "Debugged and optimized code for performance, accessibility, and cross-browser compatibility.",
      ],
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Box py={10} px={[4, 8]} maxW="800px" mx="auto" height={"100vh"}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading
          fontSize={["3xl", "5xl"]}
          textAlign="center"
          mb={10}
          fontFamily="Long Cang"
        >
          Experience
        </Heading>
      </motion.div>

      <VStack spacing={8} align="stretch">
        {experiences.map((exp, index) => (
          <MotionBox
            key={index}
            p={6}
            rounded="2xl"
            shadow="md"
            whileHover={{ scale: 1.02 }}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={cardVariants}
            bgColor={"#fccb06"}
          >
            <HStack spacing={4} mb={2}>
              <Icon as={MdWork} boxSize={6} color="yellow.700" />
              <Box>
                <Text fontWeight="bold" fontSize="lg" color="gray.700">
                  {exp.role}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {exp.date}
                </Text>
              </Box>
            </HStack>
            <Text fontWeight="semibold" color="yellow.700" mb={3}>
              {exp.company}
            </Text>
            <VStack align="start" spacing={2}>
              {exp.details.map((point, i) => (
                <Text
                  key={i}
                  fontSize="sm"
                  lineHeight="2"
                  textAlign={"justify"}
                  color="gray.700"
                >
                  • {point}
                </Text>
              ))}
            </VStack>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
