import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Hero/Header';
import Hero from './components/Hero';
import { a, useSpring } from '@react-spring/web';

const AppStyled = styled(a.div)`
  animation: moveUp 0.3s ease-out forwards;
  background-color: ${({ theme }) => theme.color.black2};
  min-height: 100vh;
  padding: ${({ theme }) => `0 ${theme.vw.d(60)}`};
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  const appSpring = useSpring({
    config: { friction: 50 },
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
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
