import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import HeadingWithSubtitle from "../HeadingWithSubtitle";
import ContactForm from "./ContactForm";
import InfoGrid from "./InfoGrid";

const ContactSection = () => {
  return (
    <Stack justify='center'>
      <HeadingWithSubtitle
        title="CONTACT ME"
        textOne="LET’S"
        textTwo="Talk About Ideas"
      />
      <Flex w="70vw" mx="auto" p={20}>
        <InfoGrid />
        <ContactForm />
      </Flex>
    </Stack>
  );
};

export default ContactSection;
