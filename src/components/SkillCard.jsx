import {
  Box,
  Flex,
  HStack,
  Image,
  Progress,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";

const SkillCard = ({skill}) => {
  return (
   <Stack>
     <Stack w="410px"  p={5} gap={5}>
      <HStack justify="space-between" align="center">
        <Flex align="center" gap={4}>
          <Image
            h="40px"
            src= {skill.image.url}
          />
          <Text fontSize="21px" fontWeight="700">
            {skill.name}
          </Text>
        </Flex>
        <Flex fontSize="16px" fontWeight="700" gap={1}>
          <Text>{skill.percentage} </Text>
          <Text color="#29A587">% </Text>
        </Flex>
      </HStack>
      <Text textAlign="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

    </Stack>
      <Slider aria-label="slider-ex-4" defaultValue=  {skill.percentage} isReadOnly>
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="black" />
        </SliderTrack>
        <SliderThumb boxSize={6} border='2px solid black' bg='#29A587'>
          <Box color="tomato" />
        </SliderThumb>
      </Slider>
   </Stack>
  );
};

export default SkillCard;
