import { Flex, Stack, Text } from "@chakra-ui/react";

const HeadingWithSubtitle = ({title, textOne, textTwo}) => {
  return (
    <Stack w="100vw" align="center" fontWeight="700" gap={0}>
      <Text fontSize="44px"> {title} </Text>
      <Flex align='baseline' gap={4}>
        <Text fontSize="14px" lineHeight="26px" color="#29A587">
          {textOne}
        </Text>
        <Text fontSize="30px" lineHeight="51px" fontFamily="caveat">
          {textTwo}
        </Text>
      </Flex>
    </Stack>
  );
};

export default HeadingWithSubtitle;
