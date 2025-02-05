import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../components/layout/Container';
import { Button } from '../../components/common/Button';
import { createBooking } from '../../services/bookingService';
import { toast } from 'react-toastify';
import { experienceData } from '../../data/experienceData';

const PageContainer = styled.div`
  padding-top: 0;
`;

const Section = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.sand};
`;

const HeroImage = styled.div`
  position: relative;
  height: 60vh;
  min-height: 400px;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.6)
    );
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: -100px;
  position: relative;
  z-index: 1;
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.xxxl};
  color: ${({ theme }) => theme.colors.forest};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.2;
`;

const Category = styled.span`
  display: inline-block;
  background: ${({ theme }) => `${theme.colors.terra}20`};
  color: ${({ theme }) => theme.colors.terra};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Description = styled.div`
  color: ${({ theme }) => theme.colors.forest};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  div {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.forest};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.forest};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  display: flex;
  align-items: center;
  
  &:before {
    content: "✓";
    color: ${({ theme }) => theme.colors.terra};
    margin-right: ${({ theme }) => theme.spacing.sm};
    font-weight: bold;
  }
`;

const RequirementItem = styled(ListItem)`
  &:before {
    content: "•";
  }
`;

const Location = styled.div`
  color: ${({ theme }) => theme.colors.forest};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:before {
    content: "📍";
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const BookingCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: sticky;
  top: ${({ theme }) => theme.spacing.xl};
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  color: ${({ theme }) => theme.colors.forest};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  span {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.forest};
    opacity: 0.8;
  }
`;

const Duration = styled.div`
  color: ${({ theme }) => theme.colors.forest};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.forest};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => `${theme.colors.forest}30`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.forest};
  background: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.terra};
  }
`;

const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => `${theme.colors.forest}30`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.forest};
  background: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.terra};
  }
`;

const BookButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => `${theme.colors.forest}20`};
  
  span {
    color: ${({ theme }) => theme.colors.forest};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
`;

export const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [participants, setParticipants] = useState(1);
  const [isGift, setIsGift] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const experience = experienceData[id];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!experience) {
    return (
      <PageContainer>
        <Section>
          <Container>
            <Title>Experiencia no encontrada</Title>
          </Container>
        </Section>
      </PageContainer>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const bookingData = {
        experienceId: id,
        date: selectedDate,
        participants,
        isGift,
        total: experience.price * participants
      };

      await createBooking(bookingData);
      
      toast.success('¡Reserva realizada con éxito! Te enviaremos un correo con los detalles.');
      navigate('/bookings');
    } catch (err) {
      console.error('Error al crear la reserva:', err);
      setError(err.message || 'Error al procesar la reserva. Por favor intenta de nuevo.');
      toast.error('No se pudo procesar la reserva. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);

  return (
    <PageContainer>
      <Section>
        <HeroImage $backgroundImage={experience.image} />
        <Container>
          <ContentWrapper>
            <MainContent>
              <Category>{experience.category}</Category>
              <Title>{experience.title}</Title>
              <Location>{experience.location}</Location>
              <Description>
                {experience.description.split('\n\n').map((paragraph, index) => (
                  <div key={index}>{paragraph}</div>
                ))}
              </Description>

              <SectionTitle>¿Qué incluye?</SectionTitle>
              <List>
                {experience.includes.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>

              <SectionTitle>Requisitos</SectionTitle>
              <List>
                {experience.requirements.map((item, index) => (
                  <RequirementItem key={index}>{item}</RequirementItem>
                ))}
              </List>
            </MainContent>

            <BookingCard>
              {isLoading && (
                <LoadingOverlay>
                  <span>Procesando reserva...</span>
                </LoadingOverlay>
              )}
              <Price>
                Q{experience.price} <span>por persona</span>
              </Price>
              <Duration>{experience.duration}</Duration>
              
              <BookingForm onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="date">Fecha</Label>
                  <Input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    min={today.toISOString().split('T')[0]}
                    max={maxDate.toISOString().split('T')[0]}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="participants">Número de personas</Label>
                  <Select
                    id="participants"
                    value={participants}
                    onChange={(e) => setParticipants(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                    ))}
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label>
                    <Input
                      type="checkbox"
                      checked={isGift}
                      onChange={(e) => setIsGift(e.target.checked)}
                    />
                    Comprar como regalo
                  </Label>
                </FormGroup>

                <Total>
                  <span>Total</span>
                  <span>Q{experience.price * participants}</span>
                </Total>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <BookButton 
                  $variant="primary"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Procesando...' : 'Reservar ahora'}
                </BookButton>
              </BookingForm>
            </BookingCard>
          </ContentWrapper>
        </Container>
      </Section>
    </PageContainer>
  );
};
