import React from 'react';
import styled from '@emotion/styled';
import Spinner from '../common/Spinner';
import CompaniesList from './CompaniesList';

const Container = styled.section``;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.vw.d(20)};
  margin-bottom: ${({ theme }) => theme.vw.d(100)};
`;

const SpinnerContainer = styled.div`
  width: ${({ theme }) => theme.vw.d(35)};
  height: ${({ theme }) => theme.vw.d(35)};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.vw.d(20)};
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  font-weight: 300;
`;

// Todo add sections and h1-h6 tags to all main sections
// Todo check all animations
// Todo do mobile version

const SelectedCompanies = () => {
  return (
    <Container>
      <TitleContainer>
        <SpinnerContainer>
          <Spinner animationDuration={5000} animationDirection="forward" />
        </SpinnerContainer>
        <Title>Selected Companies</Title>
      </TitleContainer>
      <CompaniesList />
    </Container>
  );
};

export default SelectedCompanies;
