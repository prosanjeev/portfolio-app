import { Box } from "@chakra-ui/react";
import HeadingWithSubtitle from "./HeadingWithSubtitle";
import SwiperSlider from "./Swiper";

const WhatIDo = (service) => {
  return (
    <Box  h="100vh" py={40}>
      <HeadingWithSubtitle
        title="WHAT I DO"   
        textOne='MY' textTwo='Services'
      />
      <SwiperSlider service={service} />
    </Box>
  );
};

export default WhatIDo;
