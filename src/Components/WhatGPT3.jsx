import React from "react";

import {
  Box,
  VStack,
  Text,
  Flex,
  Link,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Feat from "./Feat";

const Top = () => {
  return (
    <Flex
      alignItems="flex-start"
      flexDirection={{
        base: "column",
        xl: "row",
      }}
    >
      <Feat text="What is GPT-3" />

      <Text flex={3} color="#81AFDD" fontSize="md" lineHeight="30px">
        We so opinion friends me message as delight. Whole front do of plate
        heard oh ought. His defective nor convinced residence own. Connection
        has put impossible own apartments boisterous. At jointure ladyship an
        insisted so humanity he. Friendly bachelor entrance to on by.
      </Text>
    </Flex>
  );
};
const Mid = () => {
  return (
    <Flex
    justifyContent="space-between"
      flexDirection={{
        base: "column",
        xl: "row",
      }}
    >
      <Heading  as="h1"  className=" gradient__text" fontSize={{
        base:"1.5rem",
        md:"2rem",
        xl:"2.5rem"
      }} >
        The possibilities are beyond
        <br/>
        your imagination
      </Heading>
      <Link mt="15px" color="#FF8A71">
        Explore The Library
      </Link>
    </Flex>
  );
};

const Bot = () => {
  return (
    <Box>
      <SimpleGrid minChildWidth="300px" spacing="40px">
        <VStack alignItems="flex-start" spacing={12}>
          <Feat text="Chatbots" />
          <Text color="#81AFDD" w="300px">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </Text>
        </VStack>
        <VStack alignItems="flex-start" spacing={12}>
          <Feat text="Knowledgebase" />
          <Text color="#81AFDD">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </Text>
        </VStack>
        <VStack alignItems="flex-start" spacing={12}>
          <Feat text="Education" />
          <Text color="#81AFDD">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

const WhatGPT3 = () => {
  return (
    <Box p="6vw"  className="Sec__bg " pt >
      <Flex
        gap="100px"
        flexDirection="column"
        p="4vw"
        bg="radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)"
      >
        <Top />
        <Mid />
        <Bot />
      </Flex>
    </Box>
  );
};
export default WhatGPT3;
