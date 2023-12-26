import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Hero/Header';
import Hero from './components/Hero';
import { a, config, useSpring } from '@react-spring/web';

const AppStyled = styled(a.div)`
  animation: moveUp 0.3s ease-out forwards;
  background-color: ${({ theme }) => theme.color.black2};
  min-height: 100vh;
  padding: ${({ theme }) => `0 ${theme.vw.d(80)}`};
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  const appSpring = useSpring({
    config: config.default,
    from: { y: '100%' },
    to: { y: '0%' },
  });

  return (
    <AppStyled style={appSpring}>
      <Header />

      <main>
        <Hero />
      </main>
    </AppStyled>
  );
}

export default App;
