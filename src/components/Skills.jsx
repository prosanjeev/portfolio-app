import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import HeadingWithSubtitle from "./HeadingWithSubtitle";
import SkillCard from "./SkillCard";

const Skills = ({ skills }) => {
  return (
    <Box py={40}>
      <HeadingWithSubtitle title="PROFESSIONAL SKILLS" textOne="MY" textTwo="Talent" />
      <Flex w="76vw" mx="auto" my={20} flexWrap="wrap" gap={10}>
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;
