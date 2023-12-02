import React from "react";
import {
  Box,
  Heading,
} from "@chakra-ui/react";
const Feat = ({ text,size}) => {
  return (
    <Box flex={1} position="relative">
      <Heading
        as="h3"
        fontSize={size || "2xl"}
        color="#FFF"
        _before={{ content:  '""', position:"absolute", w:"40px", h:"3px", background: "linear-gradient(to right, #AE67FA 0%, #F49867 100%)", left:"-4px", top:"-12px" }}
      >
        {text}
      </Heading>
    </Box>
  );
};

export default Feat;
