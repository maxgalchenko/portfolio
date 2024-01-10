import styled from '@emotion/styled';
import React from 'react';
import Header from '../../pages/Home/Hero/Header';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.black2};

  ${({ theme }) => theme.media.d} {
    padding: ${({ theme }) => `0 ${theme.vw.d(80)} ${theme.vw.d(200)} ${theme.vw.d(80)}`};
  }

  ${({ theme }) => theme.media.m} {
    padding: ${({ theme }) => `0 ${theme.vw.m(30)} ${theme.vw.m(130)} ${theme.vw.m(30)}`};
  }
`;

type Props = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default PageContainer;
