import styled from '@emotion/styled';
import React from 'react';
import Spinner from '../../../../components/common/Spinner';
import { useTheme } from '@emotion/react';
import { a, useSpring, config } from '@react-spring/web';

const TitleContainerStyled = styled(a.div)`
  ${({ theme }) => theme.flex.between};
  gap: ${({ theme }) => theme.vw.d(10)};
`;

const TitleStyled = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.vw.d(36)};
  line-height: 1.5;
  font-weight: 400;
  text-transform: uppercase;
  white-space: nowrap;
  margin-right: ${({ theme }) => theme.vw.d(10)};
`;

const SpinnerContainerStyled = styled.div`
  width: ${({ theme }) => theme.vw.d(35)};
  height: ${({ theme }) => theme.vw.d(35)};
`;

const SubTitleStyled = styled(a.p)`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.vw.d(20)};
  line-height: 1.5;
  font-weight: 300;
  margin-left: ${({ theme }) => theme.vw.d(3)};
`;

const OpenToWork = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: config.slow,
  });

  const props2 = useSpring({
    from: { opacity: 0, y: -20 },
    to: { opacity: 1, y: 0 },
    delay: 1400,
    config: config.slow,
  });

  return (
    <div>
      <TitleContainerStyled style={props}>
        <TitleStyled>open to work</TitleStyled>
        <SpinnerContainerStyled>
          <Spinner animationDirection="forward" animationDuration={5000} />
        </SpinnerContainerStyled>
      </TitleContainerStyled>
      <SubTitleStyled style={props2}>Based in Canada, Vancouver</SubTitleStyled>
    </div>
  );
};

export default OpenToWork;
