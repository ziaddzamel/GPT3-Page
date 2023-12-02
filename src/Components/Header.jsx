
import {
  SimpleGrid,
  Box,
  Input,
  Image,
  Heading,
  HStack,
  Text,
  Button,
  Flex,
  Center,
} from "@chakra-ui/react";

const HeadrtText = () => {
  return (
    <Flex
      templateRows="repeat(auto-fill, minmax(300px, 1fr))"
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(1, 400px)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      direction="column"
      alignItems="center"
      gap="30px"
    >
      <Heading
        as="h1"
        fontSize={{
          base: "6vw",
          xl: "3.2vw",
          md: "7vw",
          lg: "6vw",
          sm: "8vw",
        }}
        className="gradient__text"
        alignItems="center"
      >
        {" "}
        Let’s Build Something amazing with GPT-3 OpenAI
      </Heading>
      <Text
        fontSize={{
          base: "4vw",
          md: "3vw",
          lg: "3vw",
          sm: "4vw",
          xl: "1.4vw",
        }}
        color="#81AFDD"
        lineHeight="27px"
      >
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </Text>
      <Flex alignSelf="flex-start">
        <Input
          paddingLeft="30px"
          placeholder="Yore Email Adress"
          color="#81AFDD"
          size="lg"
          focusBorderColor="none"
          outline="none"
          border="none"
          background=" #052D56"
          w={{
            base: "60vw",
            lg: "50vw",
            xl: "30vw",
          }}
          h="10h"
          borderTopRightRadius="0"
          borderBottomRightRadius="0"
        />
        <Button
          p="4.5vh 3vw "
          h="0"
          colorScheme=""
          bg="#FF4820"
          borderTopLeftRadius="0"
          borderBottomLeftRadius="0"
        >
          Get Started
        </Button>
      </Flex>
      <HStack alignItems="center" alignSelf="flex-start" spacing={18}>
        <Image src="/src/assets/people.png" width="180px" h="36px"></Image>
        <Text
          color="#81AFDD"
          fontSize={{
            base: ".6rem",
            md: "1rem",
            lg: ".8rem",
            xl: ".6rem",
          }}
        >
          1,600 people requested access a visit in last 24 hours
        </Text>
      </HStack>
    </Flex>
  );
};

const HeaderImage = () => {
  return (
    <Box>
      <Image
        src="/src/assets/ai.png"
        alt="Dan Abramov"
        width={{
          xl: "500px",
          lg: "500px",
        }}
        h={{
          xl: "500px",
          lg: "500px",
        }}
        marginTop={{
          xl: "-100px",
          sm: "-50px",
        }}
        color="#0F6BCD"
      />
    </Box>
  );
};
const HeaderLogos = () => {
  return (
    <Center pt="8rem">
      <HStack spacing={8}>
        <Box>
          <Image src="/src/assets/google.png" />
        </Box>
        <Box>
          <Image src="/src/assets/slack.png" />
        </Box>
        <Box>
          <Image src="/src/assets/atlassian.png" />
        </Box>
        <Box>
          <Image src="/src/assets/dropbox.png" />
        </Box>
        <Box>
          <Image src="/src/assets/shopify.png" />
        </Box>
      </HStack>
    </Center>
  );
};
const Header = () => {
  return (
    <Box className="section__padding gradient__bg ">
      <Center>
        <SimpleGrid minChildWidth="300px" spacing="100px">
          <HeadrtText />
          <HeaderImage />
        </SimpleGrid>
      </Center>
      <HeaderLogos />
    </Box>
  );
};

export default Header;
