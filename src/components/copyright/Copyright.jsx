import { Box, Text, Link, Flex } from "@chakra-ui/react";

function Copyright() {
  return (
    <Box as="footer" py={20} borderTop="1px solid gray">
      <Flex justify="end" w="80vw" gap={60} fontWeight="bold">
        <Text>© {new Date().getFullYear()} PROSANJEEV. ALL RIGHTS RESERVED</Text>
        <Text>
          DEVELOPED BY <Link color="blue.400">PROSANJEEV</Link>
        </Text>
      </Flex>
    </Box>
  );
}

export default Copyright;
