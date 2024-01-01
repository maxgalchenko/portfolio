import React from 'react';
import styled from '@emotion/styled';
import { a, config, useSpring } from '@react-spring/web';

const Hr = styled(a.hr)`
  opacity: 1;
  color: transparent;
  margin: 0;
  height: 0;
  opacity: 0.2;
  border-top: 1px solid ${({ theme }) => theme.color.white};
`;

type Props = {
  runAnimation: boolean;
};

const Separator = ({ runAnimation }: Props) => {
  const separatorSpring = useSpring({
    config: config.molasses,
    from: { width: "0%" },
    to: { width: runAnimation ? '100%' : '0%' },
    delay: 500,
  });

  return <Hr style={separatorSpring} />;
};

export default Separator;
