import React from 'react';
import { Box } from '@chakra-ui/react';
import { Hero } from '../components/home/Hero';
import { HowItWorks } from '../components/home/HowItWorks';
import { FeaturedExperiences } from '../components/home/FeaturedExperiences';
import { Testimonials } from '../components/home/Testimonials';

export const Home = () => {
  return (
    <Box as="main">
      <Hero />
      <HowItWorks />
      <FeaturedExperiences />
      <Testimonials />
    </Box>
  );
};
