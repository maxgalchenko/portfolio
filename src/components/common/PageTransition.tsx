import styled from '@emotion/styled';
import { a, config, useTransition } from '@react-spring/web';
import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

const SlideIn = styled(a.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  background-color: ${({ theme }) => theme.color.white};
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  contain: layout style paint;
  pointer-events: none;
`;

type Props = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: Props) => {
  const transitions = useTransition(children, {
    config: config.default,
    from: { y: '0%' },
    enter: { y: '-100%' },
    leave: { y: '0%' },
    exitBeforeEnter: true,
  });

  return (
    <>
      {transitions((style, item) => (
        <>
          {item}
          <ScrollRestoration />
          <SlideIn style={style} />
        </>
      ))}
    </>
  );
};

export default PageTransition;
