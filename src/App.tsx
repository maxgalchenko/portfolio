import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Hero/Header';
import Hero from './components/Hero';
import { a, config, useSpring, useSpringRef } from '@react-spring/web';
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

const Background = styled(a.div)``;

const SlideIn = styled(a.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.color.white};
  transform: scaleY(0) translateZ(0px);
`;

const SlideOut = styled(a.div)``;

function App() {
  const slideInSpring = useSpring({
    config: config.molasses,
    from: { y: '0' },
    to: { y: '-100%' },
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

      <SlideIn style={slideInSpring} />
      <SlideOut />
    </AppStyled>
  );
}

export default App;
