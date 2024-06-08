import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import HeroSectionCard from "./HeroSectionCard";

const HeroSection = ({ about, social_handles }) => {
  console.log(about);
  return (
    <Box display={{md:"block", base:"none"}}>
      <HStack
        gap="180px"
        w="84vw"
        h="100vh"
        p={40}
        mx="auto"
        alignContent="center"
        fontFamily="Jost"
        position="relative"
      >
        <HeroSectionCard about={about} social_handles={social_handles} />
        <Box as="div">
          <Image
            src="/sanjeev.jpg"
            h={{ md: "700px", base: "300px" }}
            w={{ md: "630px", base: "300px" }}
            borderRadius="45%"
            transform="scaleX(-1)"
          />
        </Box>
          <Image src="/pat.png" position="absolute"  bottom="155px"
          right="690px" boxSize='157px' />
        <Flex
          position="absolute"
          bottom="260px"
          right="510px"
          border="2px solid black"
          borderRadius="50px"
          align="center"
          gap={5}
          bg="white"
          py={2}
          px={10}
          boxShadow="4px 4px 8px rgba(0, 0, 0, 0.25)" // Add shadow to the bottom-right
        >
          <Flex fontSize="37px" fontWeight="700" gap={3} align="center">
            <Text>1</Text>
            <Text color="#29A587">+</Text>
          </Flex>
          <Stack spacing={0} fontSize="13px" fontWeight="700">
            <Text>YEARS OF</Text>
            <Text color="#29A587">EXPERIENCE</Text>
          </Stack>
        </Flex>
        <Image src="/pat.png" position="absolute"   bottom="110px"
          right="90px" boxSize='150px' />
        <Flex
          position="absolute"
          bottom="190px"
          right="150px"
          border="2px solid black"
          borderRadius="50px"
          align="center"
          gap={5}
          bg="white"
          py={2}
          px={10}
          boxShadow="4px 4px 8px rgba(0, 0, 0, 0.25)" // Add shadow to the bottom-right
        >
          <Flex fontSize="37px" fontWeight="700" gap={3} align="center">
            <Text>40</Text>
            {/* <Text color='#29A587'>+</Text> */}
          </Flex>
          <Stack spacing={0} fontSize="13px" fontWeight="700">
            <Text>COMPLETED </Text>
            <Text color="#29A587">PROJECTS</Text>
          </Stack>
        </Flex>
      </HStack>
    </Box>
  );
};

export default HeroSection;
