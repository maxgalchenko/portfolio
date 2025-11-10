import styled from '@emotion/styled';
import { a, useSpring } from '@react-spring/web';
import { useState, useEffect } from 'react';
import Spinner from '../../../../../components/common/Spinner';
import RoundText from './roundText.svg?react';

const ContainerStyled = styled.div`
  position: relative;

  ${({ theme }) => theme.media.d} {
    width: ${({ theme }) => theme.vw.d(130)};
    height: ${({ theme }) => theme.vw.d(130)};
  }

  ${({ theme }) => theme.media.m} {
    width: ${({ theme }) => theme.vw.m(100)};
    height: ${({ theme }) => theme.vw.m(100)};
  }
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
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const outerSpring = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 15000 },
    pause: !hasStarted,
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
