import { Box, Image, Text, Button, Stack } from "@chakra-ui/react";


const TestimonialCard = ({testimonial}) => {
  return (
    <Stack maxW="sm" borderWidth="1px" borderRadius="20px" overflow="hidden" px={6} pt={6} bg='white' gap='150px' position='relative'>
    <Image
      src={testimonial.image.url}
      borderRadius="20px" h='200px'
      alt="Placeholder Image"
    />
       
      <Text fontSize="16px" color="gray.500" mb='260px'>
        {testimonial.review}
      </Text>

     <Stack my='40px'  position='absolute' bottom={0}>
        <Text fontSize='21px' fontWeight='bold'>{testimonial.name}</Text>
        <Text>{testimonial.position}</Text>
     </Stack>
        <Image src="/pat.png" position='absolute' h='120px' w='120px' bottom={-4} right={-4} />
  </Stack>
  )
}

export default TestimonialCard