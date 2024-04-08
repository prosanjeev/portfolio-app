import { Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";

const InfoGrid = () => {
  const lists = [
    {
      title: "Admin",
      text: "Available Right Now",
    },
    {
      title: "Email",
      text: "portfolio3@gmail.com",
    },
    {
      title: "Phone",
      text: "+91-9212321321      ",
    },
    {
      title: "Address",
      text: "Los Angeles, America ",
    },
  ];

  return (
    <Stack
      fontWeight="700"
      w={{ lg: "500px", base: "100%" }}
      spacing={6}
      p={6}
      gap={9}  zIndex={10}
    >
      {lists.map((list) => (
        <HStack key={list.title} align="start" spacing={1} >
          <Flex align='center'>
          <Box
            boxSize={14}
            border="2px solid "
            borderRadius="100%"
            padding={3}
          />
           <Box h='2px' w={10} bg='black' mr={10} />
          </Flex>
          <Stack spacing={1}>
            <Text fontSize="24px" fontFamily="caveat" fontWeight='900'>{list.title}</Text>
            <Text
              fontSize="16px"
              fontWeight={400}
              w={{ lg: "300px", base: "240px" }}
            >
              {list.text}
            </Text>
          </Stack>
        </HStack>
      ))}
    </Stack>
  );
};

export default InfoGrid;
