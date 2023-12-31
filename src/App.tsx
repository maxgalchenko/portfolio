import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Hero/Header';
import Hero from './components/Hero';
import { a, config, useSpring } from '@react-spring/web';
import Advantages from './components/Advantages';
import SelectedCompanies from './components/SelectedCompanies';
import Footer from './components/Footer';

const AppStyled = styled(a.div)`
  min-height: 100vh;
  padding: ${({ theme }) => `0 ${theme.vw.d(80)} ${theme.vw.d(200)} ${theme.vw.d(80)}`};
  width: 100%;
  box-sizing: border-box;
  background-position: -100%;
  position: relative;
  z-index: 2;
`;

const Background = styled(a.div)`
  background-color: ${({ theme }) => theme.color.black2};
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

const SlideIn = styled(a.div)``;

const SlideOut = styled(a.div)``;

function App() {
  const appSpring = useSpring({
    config: config.slow,
    from: { y: '100%' },
    to: { y: '0%' },
  });

  return (
    <AppStyled>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <SelectedCompanies />
      </main>
      <Footer />

      <Background style={appSpring} />
      <SlideIn />
      <SlideOut />
    </AppStyled>
  );
}

export default App;
