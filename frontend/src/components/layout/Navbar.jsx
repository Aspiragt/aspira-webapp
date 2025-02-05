import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
  transition: all 0.3s ease;
  background: ${props => props.$isScrolled ? props.theme.colors.forest : props.theme.colors.overlay.forest};
  box-shadow: ${props => props.$isScrolled ? props.theme.shadows.md : 'none'};
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontFamily.display};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s ease;
  margin-right: auto;
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.terra};
  }
`;

const LogoText = styled.span`
  display: block;
  line-height: 1;
  position: absolute;
  top: 24px;
`;

const MenuButton = styled.button`
  display: none;
  color: ${({ theme }) => theme.colors.sand};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-left: auto;
  justify-content: flex-end;
  position: relative;
  top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${props => !props.$isOpen && css`
      display: none;
    `}
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.forest};
    padding: ${({ theme }) => theme.spacing.lg};
    box-shadow: ${({ theme }) => theme.shadows.md};
    margin-left: 0;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  position: relative;
  transition: color 0.3s ease;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  line-height: 1;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.terra : 'transparent'};
    transition: background-color 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.terra};
  }

  &:hover::after {
    background: ${({ theme }) => theme.colors.terra};
  }
`;

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav $isScrolled={isScrolled}>
      <NavContainer>
        <Logo to="/">
          <LogoText>Aspira</LogoText>
        </Logo>
        <MenuButton
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </MenuButton>
        <NavLinks $isOpen={isMenuOpen}>
          <NavLink
            to="/"
            $isActive={location.pathname === '/'}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/experiences"
            $isActive={location.pathname === '/experiences'}
          >
            Experiencias
          </NavLink>
          <NavLink
            to="/how-it-works"
            $isActive={location.pathname === '/how-it-works'}
          >
            ¿Cómo funciona?
          </NavLink>
          <NavLink
            to="/about"
            $isActive={location.pathname === '/about'}
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/contact"
            $isActive={location.pathname === '/contact'}
          >
            Contacto
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};
