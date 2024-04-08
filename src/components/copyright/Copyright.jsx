import { Box, Text, Link } from "@chakra-ui/react";

function Copyright() {
  return (
    <Box
      as="footer"
      textAlign="center"
      py={4}
      bg="gray.800"
      color="white"
    >
      <Text>
        © {new Date().getFullYear()} LUIQUE. ALL RIGHTS RESERVED
      </Text>
      <Text>
        DEVELOPED BY <Link color="blue.400">BSLTHEMES</Link>
      </Text>
    </Box>
  );
}

export default Copyright;
