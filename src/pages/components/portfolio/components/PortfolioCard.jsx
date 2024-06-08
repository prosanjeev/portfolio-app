import { Box, Image, Text, Button } from "@chakra-ui/react";

function HardcodedCard({project}) {
  console.log("pr", project)
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="20px" overflow="hidden" px={6} pt={6} bg='white' zIndex={10}>
      <Image
        src={project.image}
        borderRadius="20px"
        alt="Placeholder Image"
      />
      <Box p="6">
        <Text fontWeight="bold" mb="2" color="#29A587" fontSize="13px">
         {project.techStack.join(", ").toUpperCase()}
        </Text>
        <Text fontWeight="bold" fontSize="24px" mb="2">
          {project.title}
        </Text>
        <Text fontSize="16px" color="gray.500">
          {project.description}
        </Text>

        <Button mt="4" variant="unstyled" ontWeight="bold" fontSize="16px">
          See project
        </Button>
      </Box>
    </Box>
  );
}

export default HardcodedCard;
