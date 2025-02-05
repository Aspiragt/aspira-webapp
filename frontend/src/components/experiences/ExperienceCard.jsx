import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = styled(Link)`
  display: block;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.forest};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.forest};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  opacity: 0.9;
`;

const Price = styled.p`
  color: ${({ theme }) => theme.colors.terra};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  opacity: 0.9;

  &::before {
    content: '📍';
  }
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  opacity: 0.9;

  &::before {
    content: '⏱️';
  }
`;

const Rating = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.colors.text.light};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  z-index: 2;
`;

export const ExperienceCard = ({ experience }) => {
  const { id, title, description, price, duration, location, image, rating, category } = experience;
  
  return (
    <Card to={`/experiences/${id}`}>
      <ImageContainer>
        <Image src={image} alt={title} />
        {rating && (
          <Rating>
            ⭐ {rating.toFixed(1)}
          </Rating>
        )}
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Details>
          <InfoGroup>
            {location ? (
              <Location>{location}</Location>
            ) : (
              <Location>{category}</Location>
            )}
            <Duration>{duration}</Duration>
          </InfoGroup>
          <Price>Q{price}</Price>
        </Details>
      </Content>
    </Card>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number,
    category: PropTypes.string
  }).isRequired
};
