import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-image: linear-gradient(
    to bottom,
    rgba(44, 74, 59, 0.8),
    rgba(44, 74, 59, 0.9)
  ), url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg');
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};
`;

const Subtitle = styled.p`
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.white};
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.terra};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.forest};
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Content>
          <Title>
            Descubre Guatemala<br />de una manera única
          </Title>
          <Subtitle>
            Experiencias auténticas que conectan con la naturaleza y cultura de nuestro país
          </Subtitle>
          <CTAButton to="/experiences">
            Explorar Experiencias
          </CTAButton>
        </Content>
      </Container>
    </HeroSection>
  );
};

export default Hero;
