import styled from '@emotion/styled';
import React from 'react';
import spinner from './spinner.svg';

import { a, useSpring } from '@react-spring/web';

const InnerElementStyled = styled(a.div)`
  width: 100%;
  height: 100%;
  z-index: 2;
  max-width: 100%;
  max-height: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

type Props = {
  animationDuration: number;
  animationDirection: 'forward' | 'backward';
};

const Spinner = ({ animationDuration, animationDirection }: Props) => {
  const innerSpring = useSpring({
    from: { rotate: animationDirection === 'forward' ? 0 : 360 },
    to: { rotate: animationDirection === 'forward' ? 360 : 0 },
    loop: true,
    config: { duration: animationDuration },
    delay: 1000,
  });

  return (
    <InnerElementStyled style={innerSpring}>
      <img src={spinner} alt="spinner" />
    </InnerElementStyled>
  );
};

export default Spinner;
