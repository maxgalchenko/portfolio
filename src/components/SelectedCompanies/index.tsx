import React from 'react';
import styled from '@emotion/styled';
import Spinner from '../common/Spinner';
import CompaniesList from './CompaniesList';
import { a, config, useSpring } from '@react-spring/web';
import { useTheme } from '@emotion/react';

const Container = styled.section`
  overflow: hidden;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.vw.d(20)};
  margin-bottom: ${({ theme }) => theme.vw.d(100)};
  overflow: hidden;
  height: ${({ theme }) => theme.vw.d(35)};
`;

const SpinnerContainer = styled(a.div)`
  width: ${({ theme }) => theme.vw.d(35)};
  height: ${({ theme }) => theme.vw.d(35)};
`;

const Title = styled(a.h2)`
  font-size: ${({ theme }) => theme.vw.d(20)};
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  font-weight: 300;
`;

// Todo add sections and h1-h6 tags to all main sections
// Todo check all animations
// Todo do mobile version

const SelectedCompanies = () => {
  const theme = useTheme();
  const titleSpring = useSpring({
    config: config.slow,
    from: { y: theme.vw.d(50) },
    to: { y: theme.vw.d(0) },
    delay: 500,
  });

  const spinnerSpring = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <Container>
      <TitleContainer>
        <SpinnerContainer style={spinnerSpring}>
          <Spinner animationDuration={5000} animationDirection="forward" />
        </SpinnerContainer>
        <Title style={titleSpring}>Selected Companies</Title>
      </TitleContainer>
      <CompaniesList />
    </Container>
  );
};

export default SelectedCompanies;
