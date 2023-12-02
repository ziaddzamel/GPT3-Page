import { CgMenuRightAlt } from "react-icons/cg";
import {
  HStack,
  Link,
  Button,
  Box,
  Flex,
  useMediaQuery,
  MenuList,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const NaveLinks = () => {
  return (
    <HStack spacing={8} color="#FFFFFF" fontSize="1rem">
      <Link>Home</Link>
      <Link>What is GPT</Link>
      <Link>Open Ai</Link>
      <Link>Cace Studies</Link>
      <Link>Library</Link>
    </HStack>
  );
};
const MobileMenu = () => {
  return (
    <Menu>
      <MenuButton
        
        as={IconButton}
        aria-label="Options"
        icon={<CgMenuRightAlt />}
        variant="outline"
        bg="#ffffff"
      />
      <MenuList>
        <MenuItem>
          <Link>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link>What is GPT</Link>
        </MenuItem>
        <MenuItem>
          <Link>Open Ai</Link>
        </MenuItem>
        <MenuItem>
          <Link>Cace Studies</Link>
        </MenuItem>
        <MenuItem>
          <Link>Library</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
const NaveButtons = () => {
  return (
    <HStack spacing={4} color="#FFFFFF">
      <Button p="0" bg="none" color="#FFFFFF" variant="unstyled">
        Sign up
      </Button>
      <Button color="#FFFFFF" bg="#FF4820" p="2vw 3vw " colorScheme="">
        Sign up
      </Button>
    </HStack>
  );
};

const Navebar = () => {
  const [isLargerThan400] = useMediaQuery("(min-width: 401px)");
  const [isLargerThan866] = useMediaQuery("(max-width: 866px)");
  return (
    <Flex
      justifyContent="space-between"
      px="7vw"
      pt="75px"
      className="gradient__bg section__padding"
      alignItems="center"

    >
      <HStack spacing={10}>
        <Box>
          <Image src="/src/assets/logo.svg" alt="Dan Abramov" width="62px" />
        </Box>
        {isLargerThan866 ? null : <NaveLinks />}
      </HStack>
      {isLargerThan866 ? null : <NaveButtons />}
      {isLargerThan400 && isLargerThan866 ? (
        <HStack>
          <NaveButtons />
          <MobileMenu />
        </HStack>
      ) : (
        null
      )}
      {!isLargerThan400 ? <MobileMenu /> : null}
    </Flex>
  );
};

export default Navebar;
