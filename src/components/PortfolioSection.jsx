import { Box, Flex } from "@chakra-ui/react";
import HardcodedCard from "./PortfolioCard";
import HeadingWithSubtitle from "./HeadingWithSubtitle";

const PortfolioSection = ({ projects }) => {
  return (
    <Box py={40}>
      <HeadingWithSubtitle title="PORTFOLIO" textOne="MY" textTwo="Cases" />
      <Flex flexWrap="wrap" gap={10} w="72vw" mx="auto">
        {projects.map((project, index) => (
          <HardcodedCard key={index} project={project} />
        ))}
      </Flex>
    </Box>
  );
};

export default PortfolioSection;
