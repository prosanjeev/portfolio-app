import { Box, Text } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import WhatIDo from "../components/WhatIDo";
import Skills from "../components/Skills";
import HardcodedCard from "../components/PortfolioCard";
import PortfolioSection from "../components/PortfolioSection";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/contactForm/ContactSection";
import Copyright from "../components/copyright/Copyright";

const Home = ({ data }) => {
  const { about, social_handles, services, skills, projects, testimonials } =
    data.user;

  console.log("servi", services);
  return (
    <Box>
      <Box bg="#F2EDE6" position="relative" height="100vh" fontFamily="jost">
        <Box position="absolute" width="100%" bottom="0">
          {/* Text as background */}
          <Text
            color="gray.200"
            fontSize="265px"
            fontWeight="800"
            textAlign="center"
            fontFamily="caveat"
            lineHeight="1"
            
          >
            Software Developer
          </Text>
        </Box>

        {/* Content */}
        <Box>
          <HeroSection about={about} social_handles={social_handles} />
        </Box>
      </Box>

      <Box bg="#F2EDE6" position="relative" height="100vh" fontFamily="jost">
        <Box position="absolute" width="100%" bottom="0">
          {/* Text as background */}
          <Text
            color="gray.200"
            fontSize="290px"
            fontWeight="800"
            textAlign="center"
            fontFamily="caveat"
            lineHeight="1"
            transform="rotate(-0deg)"
          >
            Services
          </Text>
        </Box>

        {/* Content */}
        <Box>
          <WhatIDo services={services} />
        </Box>
      </Box>

      <Box bg="#F2EDE6" position="relative" fontFamily="jost">
        <Box position="absolute" width="100%" bottom="0">
          {/* Text as background */}
          <Text
            color="gray.200"
            fontSize="290px"
            fontWeight="800"
            textAlign="center"
            fontFamily="caveat"
            lineHeight="1"
            transform="rotate(-0deg)"
          >
            Skills
          </Text>
        </Box>

        {/* Content */}
        <Box>
          <Skills skills={skills} />
        </Box>
      </Box>

      <Box bg="#F2EDE6" position="relative" fontFamily="jost">
        <Box position="absolute" width="100%" bottom='0px' zIndex={0}>
          {/* Text as background */}
          <Text
            color="gray.200"
            fontSize="290px"
            fontWeight="800"
            textAlign="center"
            fontFamily="caveat"
            lineHeight="1"
          
          >
            Portfolio
          </Text>
        </Box>

        {/* Content */}
        <Box>
          <PortfolioSection projects={projects} />
        </Box>
      </Box>
      <Box bg="#F2EDE6" position="relative" fontFamily="jost">
        <Box position="absolute" width="100%" bottom="0" zIndex={0}>
          {/* Text as background */}
          <Text
            color="gray.200"
            fontSize="290px"
            fontWeight="800"
            textAlign="center"
            fontFamily="caveat"
            lineHeight="1"
            transform="rotate(-0deg)"
          >
            Portfolio
          </Text>
        </Box>

        {/* Content */}
        <Box>
          <Testimonials testimonials={testimonials} />
        </Box>
      </Box>
      <Box bg="#F2EDE6" position="relative" fontFamily="jost">
        <Box position="absolute" width="100%" bottom="0" zIndex={0}>
          {/* Text as background */}
          <Text
            color="gray.200"
            fontSize="290px"
            fontWeight="800"
            textAlign="center"
            fontFamily="caveat"
            lineHeight="1"
            transform="rotate(-0deg)"
          >
            Contact
          </Text>
        </Box>

        {/* Content */}
        <Box>
          <ContactSection/>
        </Box>
      </Box>
      <Copyright/>
    </Box>
  );
};

export default Home;
