import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import { ExperienceCard } from '../experiences/ExperienceCard';

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  background-color: ${({ theme }) => theme.colors.base.primary};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  color: ${({ theme }) => theme.colors.content.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.content.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const ExperiencesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.accent.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.hover};
  }
`;

const featuredExperiences = [
  {
    id: 1,
    title: "Tour del Café en Antigua",
    description: "Descubre el proceso del café, desde el grano hasta la taza, en una finca tradicional",
    price: 350,
    duration: "4 horas",
    location: "Antigua Guatemala",
    image: "/images/coffee-tour.jpg",
    rating: 4.8
  },
  {
    id: 2,
    title: "Aventura en Volcán Pacaya",
    description: "Sube uno de los volcanes más activos de Guatemala y disfruta de vistas espectaculares",
    price: 275,
    duration: "6 horas",
    location: "Escuintla",
    image: "/images/volcano-trek.jpg",
    rating: 4.9
  },
  {
    id: 3,
    title: "Clase de Cocina Maya",
    description: "Aprende a preparar platillos tradicionales mayas con ingredientes locales",
    price: 400,
    duration: "3 horas",
    location: "Ciudad de Guatemala",
    image: "/images/cooking-class.jpg",
    rating: 4.7
  }
];

export const FeaturedExperiences = () => {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Experiencias Destacadas</Title>
          <Description>
            Descubre algunas de nuestras experiencias más populares y mejor valoradas
          </Description>
        </Header>
        <ExperiencesGrid>
          {featuredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </ExperiencesGrid>
        <ViewAllLink to="/experiences">
          Ver Todas las Experiencias →
        </ViewAllLink>
      </Container>
    </Section>
  );
};
