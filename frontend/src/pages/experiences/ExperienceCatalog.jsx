import React from 'react';
import styled from 'styled-components';
import Container from '../../components/layout/Container';
import { ExperienceCard } from '../../components/experiences/ExperienceCard';

const Section = styled.section`
  padding: calc(70px + ${({ theme }) => theme.spacing.xl}) 0 ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.sand};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
  color: ${({ theme }) => theme.colors.content.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.content.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const experiences = [
  {
    id: 1,
    title: "Aventura en Volcán Pacaya",
    description: "Sube uno de los volcanes más activos de Guatemala y disfruta de vistas impresionantes.",
    image: "https://images.pexels.com/photos/17201126/pexels-photo-17201126.jpeg",
    category: "Aventura",
    location: "San Vicente Pacaya, Escuintla",
    price: 299,
    duration: "6 horas",
    rating: 4.8
  },
  {
    id: 2,
    title: "Tour de Café en Antigua",
    description: "Aprende sobre el proceso del café, desde el grano hasta la taza, en una finca tradicional.",
    image: "https://images.pexels.com/photos/16784067/pexels-photo-16784067.jpeg",
    category: "Gastronomía",
    location: "Antigua Guatemala",
    price: 199,
    duration: "4 horas",
    rating: 4.9
  },
  {
    id: 3,
    title: "Kayak en Lago Atitlán",
    description: "Navega las tranquilas aguas del lago más hermoso del mundo rodeado de volcanes.",
    image: "https://images.pexels.com/photos/13397444/pexels-photo-13397444.jpeg",
    category: "Aventura",
    location: "Panajachel, Sololá",
    price: 249,
    duration: "3 horas",
    rating: 4.7
  },
  {
    id: 4,
    title: "Clase de Cocina Maya",
    description: "Aprende a preparar platillos tradicionales mayas con ingredientes locales.",
    image: "https://images.pexels.com/photos/6248942/pexels-photo-6248942.jpeg",
    category: "Gastronomía",
    location: "San Pedro La Laguna",
    price: 179,
    duration: "4 horas",
    rating: 4.9
  },
  {
    id: 5,
    title: "Mercado de Chichicastenango",
    description: "Explora uno de los mercados indígenas más grandes de América Latina.",
    image: "https://images.pexels.com/photos/2933265/pexels-photo-2933265.jpeg",
    category: "Cultura",
    location: "Chichicastenango, Quiché",
    price: 149,
    duration: "8 horas",
    rating: 4.6
  },
  {
    id: 6,
    title: "Retiro de Meditación",
    description: "Encuentra paz interior en un retiro espiritual con vista al Lago Atitlán.",
    image: "https://images.pexels.com/photos/4325472/pexels-photo-4325472.jpeg",
    category: "Bienestar",
    location: "Santa Cruz La Laguna",
    price: 399,
    duration: "2 días",
    rating: 4.8
  }
];

export const ExperienceCatalog = () => {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Experiencias en Guatemala</Title>
          <Description>
            Descubre experiencias únicas y auténticas en Guatemala. Desde aventuras
            emocionantes hasta momentos de relajación y cultura.
          </Description>
        </Header>
        <Grid>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
