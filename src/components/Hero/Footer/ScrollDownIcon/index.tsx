import styled from '@emotion/styled';
import React from 'react';
import Spinner from '../../../common/Spinner';
import { a, useSpring } from '@react-spring/web';
import { ReactComponent as RoundText } from './roundText.svg';

const ContainerStyled = styled.div`
  position: relative;
  width: ${({ theme }) => theme.vw.d(130)};
  height: ${({ theme }) => theme.vw.d(130)};
`;

const OuterTextStyled = styled(a.div)`
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const InnerElementStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 20%;
`;

const ScrollDownIcon = () => {
  const outerSpring = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 15000 },
    delay: 1000,
  });

  return (
    <ContainerStyled>
      <OuterTextStyled style={outerSpring}>
        <RoundText />
      </OuterTextStyled>

      <InnerElementStyled>
        <Spinner animationDuration={10000} animationDirection="backward" />
      </InnerElementStyled>
    </ContainerStyled>
  );
};

export default ScrollDownIcon;
