import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import HeroSectionCard from "./HeroSectionCard";

const HeroSection = ({about, social_handles}) => {
    console.log(about)
  return (
    <Box>
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
        <HeroSectionCard about={about} social_handles={social_handles}/>
        <Box as="div">
          <Image
            src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k"
            h="760px"
            w="700px"
            borderRadius="290px"
          />
        </Box>

        <Flex
          position="absolute"
          bottom='240px' right='550px'
          border="2px solid black" borderRadius='50px'
          align="center"
          gap={5} bg='white'
          py={2}
          px={10}
          boxShadow="4px 4px 8px rgba(0, 0, 0, 0.25)" // Add shadow to the bottom-right
        >
          <Flex fontSize="37px" fontWeight='700' gap={3} align='center'>
            <Text >5</Text>
            <Text color='#29A587'>+</Text>
          </Flex>
          <Stack spacing={0} fontSize="13px" fontWeight='700'>
            <Text >YEARS OF</Text>
            <Text color='#29A587'>EXPERIENCE</Text>
          </Stack>
        </Flex>
        <Flex
          position="absolute"
          bottom='190px' right='150px'
          border="2px solid black" borderRadius='50px'
          align="center"
          gap={5} bg='white'
          py={2}
          px={10}
          boxShadow="4px 4px 8px rgba(0, 0, 0, 0.25)" // Add shadow to the bottom-right
        >
          <Flex fontSize="37px" fontWeight='700' gap={3} align='center'>
            <Text >90</Text>
            {/* <Text color='#29A587'>+</Text> */}
          </Flex>
          <Stack spacing={0} fontSize="13px" fontWeight='700'>
            <Text >COMPLETED </Text>
            <Text color='#29A587'>PROJECTS</Text>
          </Stack>
        </Flex>
      </HStack>
    </Box>
  );
};

export default HeroSection;
