import React from 'react';
import styled from 'styled-components';
import Container from '../components/layout/Container';

const Section = styled.section`
  margin-top: 80px;
`;

const Hero = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.forest};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/hero-pattern.svg') repeat;
    opacity: 0.1;
    animation: moveBackground 60s linear infinite;
  }

  @keyframes moveBackground {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${({ theme }) => theme.colors.terra};
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
`;

const ContentSection = styled.div`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: ${props => props.$alternate ? props.theme.colors.sand : props.theme.colors.white};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.terra}20,
      ${({ theme }) => theme.colors.terra},
      ${({ theme }) => theme.colors.terra}20
    );
  }
`;

const SectionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: clamp(2rem, 4vw, 3rem);
  color: ${({ theme }) => theme.colors.forest};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${({ theme }) => theme.colors.terra};
  }
`;

const SectionText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.forest};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-top: ${({ theme }) => theme.spacing.xxxl};
  padding: 0 ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const ValueCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.terra};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ValueIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.terra};
  }
`;

const ValueTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.forest};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.forest};
  line-height: 1.6;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`;

const values = [
  {
    title: 'Autenticidad',
    description: 'Creemos en experiencias genuinas que reflejen la verdadera esencia de Guatemala y su gente.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    )
  },
  {
    title: 'Comunidad',
    description: 'Conectamos viajeros con comunidades locales para crear un impacto positivo y duradero.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    )
  },
  {
    title: 'Sostenibilidad',
    description: 'Promovemos un turismo responsable que preserve y celebre el patrimonio natural y cultural de Guatemala.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5z"/>
      </svg>
    )
  }
];

export const About = () => {
  return (
    <Section>
      <Hero>
        <HeroContent>
          <Title>Inspirando aventuras auténticas en Guatemala</Title>
          <Subtitle>
            Conectamos viajeros con experiencias únicas que celebran la riqueza
            cultural y natural de nuestro país.
          </Subtitle>
        </HeroContent>
      </Hero>

      <ContentSection>
        <Container>
          <SectionContent>
            <SectionTitle>Nuestra Historia</SectionTitle>
            <SectionText>
              Aspira nació de un sueño compartido: mostrar la verdadera esencia de Guatemala
              al mundo. Nos dimos cuenta de que los viajeros buscaban más que simples
              tours turísticos; anhelaban conexiones auténticas, momentos significativos
              y experiencias que transformaran su manera de ver el mundo.
            </SectionText>
            <SectionText>
              Comenzamos colaborando con comunidades locales, artesanos y guías
              apasionados que compartían nuestra visión. Juntos, hemos creado una
              plataforma que no solo ofrece aventuras inolvidables, sino que también
              contribuye al desarrollo sostenible de las comunidades guatemaltecas.
            </SectionText>
          </SectionContent>
        </Container>
      </ContentSection>

      <ContentSection $alternate>
        <Container>
          <SectionTitle>Nuestros Valores</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Container>
      </ContentSection>

      <ContentSection>
        <Container>
          <SectionContent>
            <SectionTitle>Nuestro Propósito</SectionTitle>
            <SectionText>
              En Aspira, creemos que cada viaje tiene el poder de transformar vidas.
              No solo las de nuestros viajeros, sino también las de las comunidades
              que los reciben. Trabajamos para crear un modelo de turismo que genere
              un impacto positivo y duradero.
            </SectionText>
            <SectionText>
              Nuestra misión es revelar la Guatemala auténtica: sus tradiciones
              milenarias, su biodiversidad única, su rica cultura y, sobre todo,
              la calidez de su gente. Queremos que cada experiencia no solo sea
              memorable, sino que también contribuya a preservar y celebrar el
              patrimonio de nuestro país.
            </SectionText>
          </SectionContent>
        </Container>
      </ContentSection>
    </Section>
  );
};
