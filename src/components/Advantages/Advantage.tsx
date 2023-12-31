import React from 'react';
import styled from '@emotion/styled';
import { a, useInView, config } from '@react-spring/web';

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
  const [rightRef, inView] = useInView(
    () => ({
      from: {
        backgroundPositionX: '100%',
      },
      to: {
        backgroundPositionX: '0%',
      },
      config: config.slow,
    }),
    {
      rootMargin: '-50% 0%',
      once: true,
    }
  );

  return (
    <Title ref={rightRef} style={inView}>
      {title}
    </Title>
  );
};

export default Advantage;
