
import {
  Box,
  VStack,
  Heading,
  Button,
  Image,
  Text,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#031B34" p={8} color="white" pt="12VW">
      <VStack textAlign="center" align="center" spacing={10}>
        <Heading className="gradient__text" fontSize="4xl">
          Do you want to step into the 
          <br />
          future before others
        </Heading>
        <Button colorScheme="teal">Request Early Access</Button>
      </VStack>
      <SimpleGrid
        mt="100px"
        px="10vw"
        minChildWidth="130px"
        spacing="100px"
        color="#ffffff"
      >
        <Box w="140px">
          <VStack alignItems="flex-start">
            <Image
              mt="-42px"
              mb="-20px"
              src="assets/logo.svg"
              boxSize="100px"
            />
            <Text fontSize="12px">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </Text>
          </VStack>
        </Box>
        <Box w="140px">
          <VStack spacing={6} alignItems="flex-start">
            <Heading fontSize="14px" as="h5">
              Links
            </Heading>
            <Link>Overons</Link>
            <Link>Social Media</Link>
            <Link>Counters</Link>
            <Link>Contact</Link>
          </VStack>
        </Box>
        <Box w="140px">
          <VStack spacing={6} alignItems="flex-start">
            <Heading fontSize="14px" as="h5">
            Company
            </Heading>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
            <Link>Contact</Link>
          </VStack>
        </Box>
        <Box w="140px">
          <VStack spacing={6} alignItems="flex-start">
            <Heading fontSize="14px" as="h5">
              Links
            </Heading>
            <Link>Crechterwoord K12 182 DK Alknjkcb</Link>
            <Link>085-132567</Link>
            <Link>info@payme.net</Link>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
