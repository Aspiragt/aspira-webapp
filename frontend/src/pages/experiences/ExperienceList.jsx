import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import ExperienceCard from '../../components/experiences/ExperienceCard'

// Datos de ejemplo - Esto vendrá de la API
const experiences = [
  {
    id: 1,
    title: 'Volcán Acatenango',
    description: 'Camping y amanecer en el volcán',
    price: 899,
    image: '/images/experiences/acatenango.jpg',
    category: 'Aventura',
  },
  {
    id: 2,
    title: 'Masaje Maya',
    description: 'Ritual de sanación ancestral',
    price: 450,
    image: '/images/experiences/jade-massage.jpg',
    category: 'Wellness',
  },
  // ... más experiencias
]

function ExperienceList() {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Heading mb={8}>Experiencias</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default ExperienceList
