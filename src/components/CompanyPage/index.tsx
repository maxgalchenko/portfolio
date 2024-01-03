import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../Hero/Header';
import { a, config, useSpring, useTransition } from '@react-spring/web';

const Container = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => `0 ${theme.vw.d(80)} ${theme.vw.d(200)} ${theme.vw.d(80)}`};
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.black2};
`;

const SlideIn = styled(a.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.color.white};
  transform: scaleY(0) translateZ(0px);
`;

// !Todo mouse pointer animation?

const CompanyPage = () => {
  //   const slideInSpring = useSpring({
  //     config: config.molasses,
  //     from: { y: '0' },
  //     to: { y: '-100%' },
  //   });

  const [isVisible, setVisible] = useState(true);
  const transitions = useTransition(isVisible, {
    from: { x: 0 },
    enter: { x: 50 },
    leave: { x: 100 },
  });

  const handleClick = () => {
    if (isVisible) {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000); // delay of 1 second
    } else {
      setVisible(true);
    }
  };

  return (
    <Container>
      <Header />
      {/* <button style={{ paddingTop: 300 }} onClick={handleClick}>
        click
      </button> */}
      {/* <SlideIn style={slideInSpring} /> */}
      {/* {transitions(
        (style, item) => item && <a.h1 style={{ ...style, color: 'red' }}>{item.toString()}</a.h1>
      )} */}
    </Container>
  );
};

export default CompanyPage;
