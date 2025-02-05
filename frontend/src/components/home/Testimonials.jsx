import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import Container from '../layout/Container';

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${theme.colors.base.secondary};
`;

const Title = styled.h2`
  font-family: ${theme.typography.fontFamily.display};
  font-size: ${theme.typography.fontSize.xxl};
  color: ${theme.colors.content.primary};
  text-align: center;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background-color: ${theme.colors.base.primary};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${theme.shadows.sm};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.md};
  }
`;

const Quote = styled.blockquote`
  color: ${theme.colors.content.primary};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  position: relative;

  &::before {
    content: '"';
    font-family: ${theme.typography.fontFamily.display};
    font-size: 4rem;
    color: ${theme.colors.accent.primary};
    position: absolute;
    top: -1rem;
    left: -1rem;
    opacity: 0.2;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  color: ${theme.colors.content.primary};
  font-weight: 600;
`;

const Role = styled.span`
  color: ${theme.colors.content.secondary};
  font-size: ${theme.typography.fontSize.sm};
`;

const Rating = styled.div`
  color: ${theme.colors.accent.primary};
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: 1rem;
`;

export const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Una experiencia increíble. El equipo de Aspira hizo que todo fuera perfecto desde el inicio hasta el final.',
      author: 'María González',
      role: 'Aventurera',
      avatar: '/images/testimonials/maria.jpg',
      rating: 5
    },
    {
      quote: 'La mejor manera de descubrir Guatemala. Las experiencias son únicas y el servicio es excelente.',
      author: 'Carlos Ramírez',
      role: 'Fotógrafo',
      avatar: '/images/testimonials/carlos.jpg',
      rating: 5
    },
    {
      quote: 'Regalé una experiencia a mi pareja y fue el mejor regalo que pude haber elegido. ¡Momentos inolvidables!',
      author: 'Ana Morales',
      role: 'Emprendedora',
      avatar: '/images/testimonials/ana.jpg',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <Section>
      <Container>
        <Title>Lo que dicen nuestros clientes</Title>
        <Grid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Rating>{renderStars(testimonial.rating)}</Rating>
              <Quote>{testimonial.quote}</Quote>
              <Author>
                <Avatar src={testimonial.avatar} alt={testimonial.author} />
                <AuthorInfo>
                  <Name>{testimonial.author}</Name>
                  <Role>{testimonial.role}</Role>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
