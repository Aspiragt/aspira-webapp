import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const StyledContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default StyledContainer;
