import React from 'react';
import styled from '@emotion/styled';
import Header from './Hero/Header';
import Hero from './Hero';
import { a } from '@react-spring/web';
import Advantages from './Advantages';
import SelectedCompanies from './SelectedCompanies';
import Footer from './Footer';
import PageContainer from '../../components/common/PageContainer';

const AppStyled = styled(a.div)`
  min-height: 100vh;
  padding: ${({ theme }) => `0 ${theme.vw.d(80)} ${theme.vw.d(200)} ${theme.vw.d(80)}`};
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.black2};
`;

function Home() {
  return (
    <PageContainer>
      <main>
        <Hero />
        <Advantages />
        <SelectedCompanies />
      </main>
      <Footer />
    </PageContainer>
  );
}

export default Home;
