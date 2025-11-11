import styled from '@emotion/styled';
import { a, config, useSpring } from '@react-spring/web';
import { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { Link as RouterLink } from 'react-router-dom';

const LinkStyled = styled.a`
  line-height: 1.5;
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.flex.between};
  position: relative;

  svg {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.media.d} {
    width: ${({ theme }) => theme.vw.d(250)};
    font-size: ${({ theme }) => theme.vw.d(24)};
  }

  ${({ theme }) => theme.media.m} {
    width: ${({ theme }) => theme.vw.m(250)};
    font-size: ${({ theme }) => theme.vw.m(20)};
    width: 100%;
  }
`;

const SameOriginLink = styled(RouterLink)`
  line-height: 1.5;
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.flex.between};
  position: relative;

  svg {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) => theme.media.d} {
    width: ${({ theme }) => theme.vw.d(250)};
    font-size: ${({ theme }) => theme.vw.d(24)};
  }

  ${({ theme }) => theme.media.m} {
    width: ${({ theme }) => theme.vw.m(250)};
    font-size: ${({ theme }) => theme.vw.m(20)};
    width: 100%;
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

const BorderBottom = styled(a.div)`
  height: 1px;
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  bottom: 0;
  left: 0;
`;

type Props = {
  link: string;
  title: string;
  sameOrigin?: boolean;
};

const Link = ({ link, title, sameOrigin = false }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverSpring = useSpring({
    from: { width: '0%' },
    to: { width: isHovered ? '100%' : '0%' },
    config: isHovered
      ? config.stiff
      : { tension: 280, friction: 60, clamp: false },
  });

  return (
    <li>
      {sameOrigin ? (
        <SameOriginLink to={link}>
          <p>{title}</p>
          <ArrowRightContainer>
            <GoArrowUpRight size={10} />
          </ArrowRightContainer>
          <BorderBottom style={hoverSpring} />
        </SameOriginLink>
      ) : (
        <LinkStyled
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p>{title}</p>
          <ArrowRightContainer>
            <GoArrowUpRight size={10} />
          </ArrowRightContainer>
          <BorderBottom style={hoverSpring} />
        </LinkStyled>
      )}
    </li>
  );
};

export default Link;
