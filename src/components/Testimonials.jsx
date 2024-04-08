import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import { Box } from "@chakra-ui/react";
import HeadingWithSubtitle from "./HeadingWithSubtitle";
import TestimonialCard from "./TestimonialCard";

const Testimonials = ({ testimonials }) => {
  return (
    <Box py={40} zIndex={50}>
      <HeadingWithSubtitle
        title="TESTIMONIALS"
        textOne="WHAT"
        textTwo="Customers Say"
      />
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        style={{ width: '72vw', margin: 'auto', paddingTop: '10px' }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
