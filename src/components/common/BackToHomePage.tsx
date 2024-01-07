import React, { useState } from 'react';
import styled from '@emotion/styled';
import { GoArrowLeft } from "react-icons/go";
import { a, config, useSpring } from '@react-spring/web';
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link)`
  font-size: ${({ theme }) => theme.vw.d(24)};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.white};
  width: ${({ theme }) => theme.vw.d(250)};
  ${({ theme }) => theme.flex.between};
  position: relative;
  white-space: nowrap;
  width: min-content;
  gap: ${({ theme }) => theme.vw.d(20)};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ArrowRightContainer = styled.div`
  width: ${({ theme }) => theme.vw.d(25)};
  height: ${({ theme }) => theme.vw.d(25)};
  ${({ theme }) => theme.flex.center};
`;

const BackToHomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverSpring = useSpring({
    from: { width: '0%' },
    to: { width: isHovered ? '100%' : '0%' },
    config: config.stiff,
  });

  return (
    <LinkStyled
      to="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ArrowRightContainer>
        <GoArrowLeft size={20} />
      </ArrowRightContainer>
      <p>Go back to home page</p>
    </LinkStyled>
  );
};

export default BackToHomePage;
