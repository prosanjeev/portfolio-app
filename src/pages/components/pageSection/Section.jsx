import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Section = ({ component, title }) => {
  return (
    <Box bg="#F2EDE6" position="relative" fontFamily="jost" width="100%">
      <Box position="absolute" width="100%" bottom="0">
        {/* Text as background */}
        <Text
          color="gray.5"
          opacity='.05'
          fontSize={{md:"290px", base:"60px"}}
          fontWeight="800"
          textAlign="center"
          fontFamily="caveat"
          lineHeight="1"
          transform="rotate(-0deg)"
          overflowY='hidden'
        >
          {title}
        </Text>
      </Box>

      {/* Content */}
      <Box>{component}</Box>
    </Box>
  );
};

export default Section;
