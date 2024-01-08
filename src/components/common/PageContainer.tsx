import styled from '@emotion/styled';
import React from 'react';
import Header from '../../pages/Home/Hero/Header';

const Container = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => `0 ${theme.vw.d(80)} ${theme.vw.d(200)} ${theme.vw.d(80)}`};
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.black2};
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
