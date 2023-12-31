import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { a, config, useSpring } from '@react-spring/web';
import { useTheme } from '@emotion/react';

const Title = styled(a.p)`
  font-size: ${({ theme }) => theme.vw.d(140)};
  line-height: 1.2;
  background: linear-gradient(to right, rgb(255, 255, 255) 50%, rgb(37, 37, 37) 50%);
  color: transparent;
  text-transform: uppercase;
  font-weight: 700;
  width: 80%;
  text-align: right;
  background-size: 200% 100%;
  background-clip: text;
  margin-left: auto;
`;

type Props = {
  title: string;
};

const Advantage = ({ title }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const theme = useTheme();

  const [isInView, setInView] = useState(false);
  const spring = useSpring({
    to: { backgroundPositionX: isInView ? '0%' : '100%' },
    config: config.slow,
  });

  const checkInView = () => {
    const element = ref.current;
    if (element) {
      const { top } = element.getBoundingClientRect();
      if (top < 300) setInView(true);
      else setInView(false);
    }
  };

  useEffect(() => {
    checkInView();
    window.addEventListener('scroll', checkInView);

    return () => {
      window.removeEventListener('scroll', checkInView);
    };
  }, []);

  return (
    <Title ref={ref} style={spring}>
      {title}
    </Title>
  );
};

export default Advantage;
