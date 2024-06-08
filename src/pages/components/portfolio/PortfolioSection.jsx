import { Box, Flex } from "@chakra-ui/react";
import HeadingWithSubtitle from "../../../components/HeadingWithSubtitle";
import HardcodedCard from "./components/PortfolioCard";
import { portfolioData } from "./components/data";

const PortfolioSection = ({ projects }) => {
  return (
    <Box py={40}>
      <HeadingWithSubtitle title="PORTFOLIO" textOne="MY" textTwo="Cases" />
      <Flex flexWrap="wrap" gap={10} w="72vw" mx="auto" justify='center'>
        {portfolioData.map((project, index) => (
          <HardcodedCard key={index} project={project} />
        ))}
      </Flex>
    </Box>
  );
};

export default PortfolioSection;
