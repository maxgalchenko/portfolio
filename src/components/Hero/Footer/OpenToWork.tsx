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
  font-size: ${({ theme }) => theme.vw.d(32)};
  line-height: 1.5;
  font-weight: 400;
  text-transform: uppercase;
  white-space: nowrap;
  animation: ${fadeInAnimation} 1s ease-in forwards;
`;

const SubTitleStyled = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.vw.d(16)};
  line-height: 1.5;
  font-weight: 400;
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
        <ReactSpinner width={theme.vw.d(20)} animation={rotateAnimation} animationDuration="5s" />
      </TitleContainerStyled>
      <SubTitleStyled>Based in Canada, Vancouver</SubTitleStyled>
    </div>
  );
};

export default OpenToWork;
