import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Box p={4} w='40vw'>
      <VStack as="form" spacing={4} onSubmit={handleSubmit} align="stretch"  >
        <Flex gap={6}>
        <FormControl isRequired>
          <FormLabel htmlFor="fullName">Your Full Name</FormLabel>
          <Input
            id="fullName" border='2px solid' borderRadius='40px' p={7}
            name="fullName"
            type="text"v
            value={formData.fullName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="email">Your Email Address</FormLabel>
          <Input
            id="email" border='2px solid' borderRadius='40px' p={7}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        </Flex>
       

        <FormControl isRequired>
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Input
            id="subject" border='2px solid' borderRadius='40px' p={7}
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="message">Your Message</FormLabel>
          <Textarea
            id="message"    border='2px solid' borderRadius='40px' rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </FormControl>

       

      <Flex w='100%' justifyContent='end'>
      <Button type="submit" variant='outline'  fontSize='14px'  border='2px solid' borderRadius='40px' px={10} py={6}>
          SEND MESSAGE
        </Button>
      </Flex>
      </VStack>
    </Box>
  );
}

export default ContactForm;
