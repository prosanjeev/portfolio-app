import { Box, Text } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import WhatIDo from "../components/WhatIDo";
import HardcodedCard from "./components/portfolio/components/PortfolioCard";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/contactForm/ContactSection";
import Copyright from "../components/copyright/Copyright";
import { skills } from "./components/skill/components/data";
import Section from "./components/pageSection/Section";
import Skills from "./components/skill/Skills";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import { social_handles } from "./components/heroSection/components/data";

const Home = ({ data }) => {
  const { about, services, projects, testimonials } =
    data.user;

  return (
    <Box bg="#F2EDE6">
      <Section title=' Software Developer' component={   <HeroSection about={about} social_handles={social_handles} /> } />
      <Section title='Services' component={  <WhatIDo services={services} /> } />
      <Section title='Skills' component={ <Skills skills={ skills } />} />
      <Section title='Portfolio' component={ <PortfolioSection projects={projects} />} />
      <Section title='Testimonials' component={ <Testimonials testimonials={testimonials} />} />
      <Section title='Contact' component={  <ContactSection/>} />

      <Copyright/>
    </Box>
  );
};

export default Home;
