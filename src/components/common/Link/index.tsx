import styled from '@emotion/styled';
import { a, config, useSpring } from '@react-spring/web';
import { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const LinkStyled = styled.a`
  font-size: ${({ theme }) => theme.vw.d(24)};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.white};
  width: ${({ theme }) => theme.vw.d(250)};
  ${({ theme }) => theme.flex.between};
  position: relative;

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
};

const Link = ({ link, title }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverSpring = useSpring({
    from: { width: '0%' },
    to: { width: isHovered ? '100%' : '0%' },
    config: config.stiff,
  });

  return (
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
  );
};

export default Link;
