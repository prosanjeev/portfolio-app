import { Swiper, SwiperSlide } from "swiper/react";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";

const SwiperSlider = (services) => {
  // const {services}= services.service
  console.log(services.service.services[0].name);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        <Box
          key={index}
          className={className}
          bg={index === this.realIndex ? "gray.600" : "gray.400"}
          borderRadius="full"
          w="2"
          h="2"
          mx="1"
          cursor="pointer"
        />
      );
    },
  };

  return (
    <Box my={10}>
      <Swiper
     
        spaceBetween={10}
        slidesPerView={4}
        centeredSlides={true}
        pagination={{ clickable: true }}
      >
        {services.service.services.map((service, index) => (
          <SwiperSlide key={index}>
            <Box
              w="400px"
              h="400px"
              boxShadow="md"
              bg="white"
              textAlign="center"
              position="relative"
              borderRadius="30px"
              overflow="hidden"
              _hover={{
                "& img": { opacity: 0 },
                "& .content": { opacity: 1 },
              }}
            >
              <img
                src={service.image.url}
                alt="Slide 1"
                width="100%"
                height="100%"
                objectFit="cover"
              />
              <Box
                className="content"
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity="0"
                transition="opacity 0.3s"
                bg="rgba(255,255,255,0.8)"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Stack p={10} textAlign="start" gap={20}>
                  <Box>
                    <Text mb={4} fontWeight='700' fontSize='24px' >{service.name}</Text>
                    <Text>{service.desc}</Text>
                  </Box>
                  <Text>{service.charge}</Text>
                </Stack>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box mt={2} textAlign="center">
        <HStack spacing="4" justify='center' mt={20}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Box
              key={index}
              bg={index === 0 ? "gray.600" : "gray.400"}
              borderRadius="full"
              w="4"
              h="4"
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default SwiperSlider;
