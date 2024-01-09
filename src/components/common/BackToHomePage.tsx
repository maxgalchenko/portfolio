import styled from '@emotion/styled';
import { a, config, useSpring } from '@react-spring/web';
import { useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link)`
  line-height: 1.5;
  color: ${({ theme }) => theme.color.white};
  position: relative;
  white-space: nowrap;

  ${({ theme }) => theme.media.d} {
    width: ${({ theme }) => theme.vw.d(250)};
    font-size: ${({ theme }) => theme.vw.d(24)};
    gap: ${({ theme }) => theme.vw.d(20)};
    ${({ theme }) => theme.flex.between};
  }

  ${({ theme }) => theme.media.m} {
    width: 100%;
    gap: ${({ theme }) => theme.vw.m(20)};
    font-size: ${({ theme }) => theme.vw.m(20)};
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const ArrowRightContainer = styled.div`
  ${({ theme }) => theme.flex.center};

  ${({ theme }) => theme.media.d} {
    width: ${({ theme }) => theme.vw.d(25)};
    height: ${({ theme }) => theme.vw.d(25)};
  }

  ${({ theme }) => theme.media.m} {
    width: ${({ theme }) => theme.vw.m(25)};
    height: ${({ theme }) => theme.vw.m(25)};
  }
`;

const BackToHomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverSpring = useSpring({
    from: { width: '0%' },
    to: { width: isHovered ? '100%' : '0%' },
    config: config.stiff,
  });

  return (
    <a.div style={hoverSpring}>
      <LinkStyled
        to="/"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ArrowRightContainer>
          <GoArrowLeft />
        </ArrowRightContainer>
        <p>Go back to home page</p>
      </LinkStyled>
    </a.div>
  );
};

export default BackToHomePage;
