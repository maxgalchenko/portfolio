import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { a, config, useInView, useSpring } from '@react-spring/web';
import React from 'react';

const Link = styled(a.a)`
  color: ${({ theme }) => theme.color.white};
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 9999px;
  ${({ theme }) => theme.flex.center};

  ${({ theme }) => theme.media.d} {
    padding: ${({ theme }) => `${theme.vw.d(10)} ${theme.vw.d(40)}`};
    font-size: ${({ theme }) => theme.vw.d(60)};
    margin-right: auto;
  }

  ${({ theme }) => theme.media.m} {
    padding: ${({ theme }) => theme.vw.m(10)};
    font-size: ${({ theme }) => theme.vw.m(30)};
    ${({ theme }) => theme.flex.center};
    width: 100%;
    box-sizing: border-box;
  }
`;

const GetInTouch = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const theme = useTheme();
  const hoverSpring = useSpring({
    config: config.stiff,
    from: { color: theme.color.black2, backgroundColor: 'transparent' },
    to: {
      color: isHovered ? theme.color.black2 : theme.color.white,
      backgroundColor: isHovered ? theme.color.white : 'transparent',
    },
  });

  const [ref, inView] = useInView(
    () => ({
      config: config.molasses,
      from: { x: theme.vw.d(-80), opacity: 0 },
      to: { x: theme.vw.d(-0), opacity: 1 },
    }),
    {
      rootMargin: '-20% 0%',
      once: true,
    }
  );

  return (
    <Link
      ref={ref}
      style={{ ...hoverSpring, ...inView }}
      href="mailto:galchenko.maksym@gmail.com"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Get in touch
    </Link>
  );
};

export default GetInTouch;
