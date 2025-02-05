import { Box } from "@chakra-ui/react";
import { HowItWorks } from "../components/home/HowItWorks";
import { FeaturedExperiences } from "../components/home/FeaturedExperiences";
import { Hero } from "../components/home/Hero";

export const Home = () => {
  return (
    <Box as="main">
      <Hero />
      <HowItWorks />
      <FeaturedExperiences />
    </Box>
  );
};
