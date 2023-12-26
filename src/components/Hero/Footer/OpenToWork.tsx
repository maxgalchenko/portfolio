import styled from '@emotion/styled';
import React from 'react';
import ReactSpinner from '../../common/ReactSpinner';
import { fadeInAnimation, rotateAnimation, slideDownAnimation } from '../../../styles/Animations';
import { useTheme } from '@emotion/react';

const TitleContainerStyled = styled.div`
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
  animation: ${fadeInAnimation} 1s ease-in forwards;
  margin-right: ${({ theme }) => theme.vw.d(10)};
`;

const SpinnerContainerStyled = styled.div`
  width: ${({ theme }) => theme.vw.d(35)};
  height: ${({ theme }) => theme.vw.d(35)};
`;

const SubTitleStyled = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.vw.d(20)};
  line-height: 1.5;
  font-weight: 300;
  margin-left: ${({ theme }) => theme.vw.d(3)};
  opacity: 0;
  animation: ${slideDownAnimation} 0.5s 0.5s ease-in-out forwards;
`;

const OpenToWork = () => {
  const theme = useTheme();

  return (
    <div>
      <TitleContainerStyled>
        <TitleStyled>open to work</TitleStyled>
        <SpinnerContainerStyled>
          <ReactSpinner animationDirection="forward" animationDuration={5000} />
        </SpinnerContainerStyled>
      </TitleContainerStyled>
      <SubTitleStyled>Based in Canada, Vancouver</SubTitleStyled>
    </div>
  );
};

export default OpenToWork;
