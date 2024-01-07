import React from 'react';
import styled from '@emotion/styled';
import { a, config, useInView, useSpring } from '@react-spring/web';
import { useTheme } from '@emotion/react';

const Link = styled(a.a)`
  font-size: ${({ theme }) => theme.vw.d(60)};
  color: ${({ theme }) => theme.color.white};
  line-height: 1.5;
  text-align: center;
  padding: ${({ theme }) => `${theme.vw.d(10)} ${theme.vw.d(40)}`};
  text-transform: uppercase;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 9999px;
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
