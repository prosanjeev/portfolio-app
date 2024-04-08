import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const HeroSectionCard = ({about, social_handles}) => {
    const {name, title, description}= about
    console.log(name)
    const firstAndLastName = name.split(" ");
  return (
    <Stack w="600px"  >
      <Stack spacing={0} gap={0}>
        <Flex
          fontSize="15px"
          fontWeight="700"
          gap={2} // Set the gap between the two Text components to 0
        >
          <Text>HELLO,</Text>
          <Text color="#29A587">MY NAME IS</Text>
        </Flex>
        <Flex
          fontSize="90px"
          fontWeight="700"
          textShadow="-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"
          gap={8} // Set the gap between the two Text components to 0
        >
          <Text color="#29A587"> {firstAndLastName[0].toUpperCase()} </Text>
          <Text color="#FFFFFF">{firstAndLastName[1].toUpperCase()}</Text>
        </Flex>
        <Flex
          align="center"
          fontWeight="700"
          gap={2} // Set the gap between the two Text components to 0
        >
          <Text fontSize="15px" lineHeight="26px" >
            I AM
          </Text>
          <Text fontSize="30px" lineHeight="51px" fontFamily="caveat">
          {title}
          </Text>
        </Flex>
      </Stack>
      <Text fontSize="18px" lineHeight="26px" >
        {description}
      </Text>
      <Flex gap={4} my={7}>
        {social_handles.map((data)=>(
            <Image
          borderRadius="100%"
          src={data.image.url}
          alt={data.platform}
          h="50px"
          w="50px"
          border="1px solid gray"
          p="5px"
        />
        )) }
             
      </Flex>
      <Flex  align="center">
      <Button
      colorScheme="black"
      variant="outline"
      border='2px'
      borderRadius="30px"
      width="200px"
      py={6}
      boxShadow="4px 4px 8px rgba(0, 0, 0, 0.25)" // Add shadow to the bottom-right
      _hover={{ bg: 'green.400' }} // Change background color to green on hover
      // Add 2px of padding inside the outline
    >
          Download CV
        </Button>
        <Box h='2px' w={10} bg='black' mr={10}></Box>
        <Text  fontSize="13px"
          fontWeight="700">MY SKILLS</Text>
      </Flex>
    </Stack>
  );
};

export default HeroSectionCard;
