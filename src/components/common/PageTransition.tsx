import styled from '@emotion/styled';
import { a, config, useTransition } from '@react-spring/web';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SlideIn = styled(a.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.color.white};
  transform: scaleY(0) translateZ(0px);
`;

type Props = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
          <SlideIn style={style} />
        </>
      ))}
    </>
  );
};

export default PageTransition;
