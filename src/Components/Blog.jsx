import {
  Grid,
  GridItem,
  Box,
  Image,
  Heading,
  VStack,
  Text,
  Link,
} from "@chakra-ui/react";

// ... (previous imports)

const BlogItem = ({ imageSrc }) => {
  return (
    <GridItem borderTopLeftRadius="50px" colSpan={1} bg="#042C54">
      <Image src={imageSrc}  />
      <VStack
        justifyContent="space-between"
        p="20px"
        alignItems="flex-start"
        spacing={4}
        color="#FFFFFF"
      >
        <Box>
          <Text fontWeight="700" fontSize="10px">
            Sep 26, 2021
          </Text>
          <Heading fontWeight="600" fontSize="lg" mt="10px">
            GPT-3 and Open AI is the future. Let us explore how it is?
          </Heading>
        </Box>
        <Link fontWeight="700" fontSize="10px">
          Read Full Article
        </Link>
      </VStack>
    </GridItem>
  );
};

const Blog = () => {
  return (
    <Box px="6vw" pb="200px" className="section__padding">
      <Heading className="gradient__text">
        A lot is happening, We are blogging about it.
      </Heading>
      <Grid
        mt="70px"
        templateRows="repeat(auto-fill, minmax(300px, 1fr))"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 400px)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={12}
        color="#ffffff"
      >
        <GridItem borderTopLeftRadius="50px" colSpan={1} rowSpan={2} bg="#042C54">
          <Image src="/src/assets/blog01.png" />
          <VStack
            justifyContent="space-between"
            p="20px"
            alignItems="flex-start"
            spacing={4}
            color="#FFFFFF"
          >
            <Box>
              <Text fontWeight="700" fontSize="10px">
                Sep 26, 2021
              </Text>
              <Heading fontWeight="600" fontSize="lg" mt="10px">
                GPT-3 and Open AI is the future. Let us explore how it is?
              </Heading>
            </Box>
            <Link fontWeight="700" fontSize="10px">
              Read Full Article
            </Link>
          </VStack>
        </GridItem>
        <BlogItem imageSrc="/src/assets/blog02.png" />
        <BlogItem imageSrc="/src/assets/blog03.png" />
        <BlogItem imageSrc="/src/assets/blog04.png" />
        <BlogItem imageSrc="/src/assets/blog05.png" />
      </Grid>
    </Box>
  );
};

export default Blog;
