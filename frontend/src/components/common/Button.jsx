import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  gap: 0.5rem;

  ${props => props.$variant === 'primary' && css`
    background-color: ${({ theme }) => theme.colors.terra};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => `${theme.colors.terra}dd`};
    }

    &:disabled {
      background-color: ${({ theme }) => `${theme.colors.terra}77`};
      cursor: not-allowed;
    }
  `}

  ${props => props.$variant === 'secondary' && css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.terra};
    border: 2px solid ${({ theme }) => theme.colors.terra};

    &:hover {
      background-color: ${({ theme }) => `${theme.colors.terra}11`};
    }

    &:disabled {
      border-color: ${({ theme }) => `${theme.colors.terra}77`};
      color: ${({ theme }) => `${theme.colors.terra}77`};
      cursor: not-allowed;
    }
  `}

  ${props => props.$variant === 'text' && css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.terra};
    padding: 0.5rem;

    &:hover {
      background-color: ${({ theme }) => `${theme.colors.terra}11`};
    }

    &:disabled {
      color: ${({ theme }) => `${theme.colors.terra}77`};
      cursor: not-allowed;
    }
  `}

  ${props => props.fullWidth && css`
    width: 100%;
  `}

  ${props => props.size === 'small' && css`
    padding: 0.5rem 1rem;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  `}

  ${props => props.size === 'large' && css`
    padding: 1rem 2rem;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.terra}40;
  }
`;
