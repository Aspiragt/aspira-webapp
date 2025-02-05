import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/layout/Container';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  margin-top: 80px;
  background: ${({ theme }) => theme.colors.sand};
  min-height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
  color: ${({ theme }) => theme.colors.forest};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const PathSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PathOption = styled.button`
  background: ${({ theme, $active }) => $active ? theme.colors.terra : theme.colors.white};
  color: ${({ theme, $active }) => $active ? theme.colors.white : theme.colors.forest};
  border: 2px solid ${({ theme }) => theme.colors.terra};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  width: 300px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  svg {
    width: 40px;
    height: 40px;
    fill: ${({ theme, $active }) => $active ? theme.colors.white : theme.colors.terra};
  }
`;

const PathIcon = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const JourneyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Step = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.5s ease forwards;
  animation-delay: ${props => props.$index * 0.1}s;

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.terra};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  flex-grow: 1;
`;

const StepTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  color: ${({ theme }) => theme.colors.forest};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.forest};
  line-height: 1.6;
`;

const journeyPaths = {
  personal: {
    title: 'Comprar para mí',
    icon: () => (
      <svg viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    steps: [
      {
        title: 'Explora el catálogo',
        description: 'Descubre experiencias únicas en Guatemala que se ajusten a tus intereses y nivel de aventura.'
      },
      {
        title: 'Selecciona fecha y personas',
        description: 'Elige el día perfecto y con cuántas personas compartirás esta experiencia.'
      },
      {
        title: 'Realiza tu reserva',
        description: 'Completa tu reserva de forma segura y recibe la confirmación instantánea.'
      },
      {
        title: 'Prepárate',
        description: 'Recibe una guía detallada con todo lo que necesitas saber y llevar para tu experiencia.'
      }
    ]
  },
  gift: {
    title: 'Regalar una experiencia',
    icon: () => (
      <svg viewBox="0 0 24 24">
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
      </svg>
    ),
    steps: [
      {
        title: 'Elige la experiencia perfecta',
        description: 'Selecciona una experiencia que sabes que encantará a esa persona especial.'
      },
      {
        title: 'Personaliza el regalo',
        description: 'Añade un mensaje personal y elige cómo quieres que reciban la sorpresa.'
      },
      {
        title: 'Envía el regalo',
        description: 'Decide si quieres que reciban la notificación ahora o en una fecha especial.'
      },
      {
        title: 'Ellos eligen la fecha',
        description: 'La persona que recibe el regalo podrá elegir la fecha que mejor le convenga.'
      }
    ]
  },
  redeem: {
    title: 'Recibí un regalo',
    icon: () => (
      <svg viewBox="0 0 24 24">
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
      </svg>
    ),
    steps: [
      {
        title: 'Activa tu regalo',
        description: 'Ingresa el código que recibiste para ver los detalles de tu experiencia.'
      },
      {
        title: 'Explora los detalles',
        description: 'Conoce todo sobre la experiencia que te han regalado y qué esperar.'
      },
      {
        title: 'Elige tu fecha',
        description: 'Selecciona el día que mejor te convenga para vivir tu experiencia.'
      },
      {
        title: 'Prepárate para la aventura',
        description: 'Recibe toda la información necesaria para aprovechar al máximo tu regalo.'
      }
    ]
  }
};

export const HowItWorks = () => {
  const [selectedPath, setSelectedPath] = useState('personal');

  return (
    <Section>
      <Container>
        <Title>¿Cómo quieres empezar?</Title>
        
        <PathSelector>
          {Object.entries(journeyPaths).map(([key, path]) => (
            <PathOption
              key={key}
              $active={selectedPath === key}
              onClick={() => setSelectedPath(key)}
            >
              <PathIcon>{path.icon()}</PathIcon>
              {path.title}
            </PathOption>
          ))}
        </PathSelector>

        <JourneyContainer>
          {journeyPaths[selectedPath].steps.map((step, index) => (
            <Step key={index} $index={index}>
              <StepNumber>{(index + 1).toString().padStart(2, '0')}</StepNumber>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </Step>
          ))}
        </JourneyContainer>
      </Container>
    </Section>
  );
};
