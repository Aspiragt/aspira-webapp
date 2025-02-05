import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from './Container';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.forest};
  color: ${({ theme }) => theme.colors.sand};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const MainSection = styled(FooterSection)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    text-align: center;
  }
`;

const LinksSection = styled(FooterSection)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.sand};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.terra};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.sand};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  max-width: 400px;
  opacity: 0.9;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.sand};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  opacity: 0.9;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.sand};
  transition: color 0.3s ease;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  opacity: 0.9;

  &:hover {
    color: ${({ theme }) => theme.colors.terra};
    opacity: 1;
  }
`;

const BottomBar = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.sand}40;
  text-align: center;
  color: ${({ theme }) => theme.colors.sand};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  opacity: 0.8;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <MainSection>
          <Logo to="/">Aspira</Logo>
          <Description>
            Descubre experiencias únicas en Guatemala con guías locales expertos.
          </Description>
          <ContactInfo>
            <span> +502 1234-5678</span>
            <span> hola@aspira.gt</span>
          </ContactInfo>
        </MainSection>
        <LinksSection>
          <FooterSection>
            <FooterLink to="/experiences">Experiencias</FooterLink>
            <FooterLink to="/about">Nosotros</FooterLink>
            <FooterLink to="/contact">Contacto</FooterLink>
          </FooterSection>
          <FooterSection>
            <FooterLink to="/terms">Términos</FooterLink>
            <FooterLink to="/privacy">Privacidad</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
          </FooterSection>
        </LinksSection>
      </FooterContainer>
      <Container>
        <BottomBar>
          <p> {new Date().getFullYear()} Aspira. Todos los derechos reservados.</p>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
};
