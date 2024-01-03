import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Hero/Header';
import Hero from './components/Hero';
import { a } from '@react-spring/web';
import Advantages from './components/Advantages';
import SelectedCompanies from './components/SelectedCompanies';
import Footer from './components/Footer';

const AppStyled = styled(a.div)`
  min-height: 100vh;
  padding: ${({ theme }) => `0 ${theme.vw.d(80)} ${theme.vw.d(200)} ${theme.vw.d(80)}`};
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.black2};
`;

function App() {
  return (
    <AppStyled>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <SelectedCompanies />
      </main>
      <Footer />
    </AppStyled>
  );
}

export default App;
