import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    background-color: ${({ theme }) => theme.colors.sand};
    color: ${({ theme }) => theme.colors.white};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.display};
    color: ${({ theme }) => theme.colors.forest};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.terra};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.forest};
    }
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background-color: ${({ theme }) => theme.colors.terra};
    color: ${({ theme }) => theme.colors.sand};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.forest};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.terra};
    color: ${({ theme }) => theme.colors.sand};
  }
`;
