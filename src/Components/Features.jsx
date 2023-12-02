import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Flex,
  Link,
  Heading,
} from "@chakra-ui/react";
import Feat from "./Feat";

const TheText = () => {
  return (
    <Flex
      flexDirection="column"
      gap="70px"
      mt={{
        base: "80px",
        xl: "0",
      }}
      ml={{
        xl: "120px",
      }}
    >
      <HStack gap="7vw" alignItems="flex-start">
        <Box>
          <Feat text="Improving end distrusts instantly " size="xl" />
        </Box>

        <Text color="#81AFDD" fontSize="sm">
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded.
        </Text>
      </HStack>
      <HStack gap="9vw" alignItems="flex-start">
        <Box>
          <Feat text="Become the tended active" size="xl" />
        </Box>
        <Text color="#81AFDD" fontSize="sm">
          Considered sympathize ten uncommonly occasional assistance sufficient
          not. Letter of on become he tended active enable to.
        </Text>
      </HStack>
      <HStack gap="10.5vw" alignItems="flex-start">
        <Box>
          <Feat text="Message or am nothing" size="xl" />
        </Box>
        <Text color="#81AFDD" fontSize="1rem">
          Led ask possible mistress relation elegance eat likewise debating. By
          message or am nothing amongst chiefly address.
        </Text>
      </HStack>
      <HStack gap="11vw" alignItems="flex-start">
        <Box>
          <Feat text="Really boy law county" size="xl" />
        </Box>
        <Text color="#81AFDD" fontSize="sm">
          Really boy law county she unable her sister. Feet you off its like
          like six. Among sex are leave law built now. In built table in an
          rapid blush.
        </Text>
      </HStack>
    </Flex>
  );
};

const Features = () => {
  return (
    <Box px="6vw" className="section__padding gradient__bg ">
      <Flex
        spacing="px"
        flexDirection={{
          base: "column",
          xl: "row",
        }}
      >
        <VStack alignItems="flex-start" spacing={8}>
          <Heading
            as="h2"
            className="gradient__text"
            w={{
              xl: "25vw",
            }}
            lineHeight="50px"
          >
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </Heading>
          <Link color="#FF8A71">Request Early Access to Get Started</Link>
        </VStack>
        <TheText />
      </Flex>
    </Box>
  );
};

export default Features;
