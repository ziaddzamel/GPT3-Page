import React from "react";
import {
  Box,
  VStack,
  HStack,
  Stack,
  Text,
  Flex,
  Link,
  Heading,
  SimpleGrid,
  Image,
  Button
} from "@chakra-ui/react";

const PossibilityImage = () => {
  return <Image w="500px" h="500px" src="assets/possibility.png" />;
};
const PossibilityText = () => {
  return (
    <VStack
      alignItems="flex-start"
      spacing={8}
      mt={{
        base: "50px",
        xl: "130px",
      }}
    >
      <Link color="#71E5FF">Request Early Access to Get Started</Link>
      <Heading className="gradient__text" as="h2">
        The possibilities are beyond your imagination
      </Heading>
      <Text color="#81AFDD">
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </Text>
      <Link color="#FF8A71">Request Early Access to Get Started</Link>
    </VStack>
  );
};

const Possibility = () => {
  return (
    <Box className=" gradient__bg" px="6vw">
      <Flex
        px={{
          base: "0",
          xl: "3vw",
        }}
        gap="40px"
        alignItems={{
          base: "flex-start",
          xl: "center",
        }}
        flexDirection={{
          base: "column",
          xl: "row",
        }}
      >
        <PossibilityImage />
        <PossibilityText />
      </Flex>
      <Box
        mt="100px"
        width="100%"
        bg="linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%) "
        p="3VW"
        borderRadius="10px"
      >
        <Link color="#0E0E0E" fontSize="12px">
          Request Early Access to Get Started
        </Link>
        <Stack alignItems="center" justifyContent="space-between" direction={{
          base:"column",
          lg:"row"
        }}> 
          <Heading color="#0E0E0E" as="h4" fontSize="xl" mt={{
            base:"10px",
            lg:"0"
          }}>
            Register today & start exploring the endless possiblities.
          </Heading>
          <Button colorScheme="" bg="black" color="white" borderRadius="40px" p="30px 40px" mt={{
            base:"20px",
            lg:"0"
          }}>Get Started</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Possibility;
