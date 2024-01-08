import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { a, config, useSpring } from '@react-spring/web';

const DownloadLink = styled(a.a)`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.vw.d(20)};
  line-height: 1.5;
  font-weight: 300;
  border: none;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 20px;
  padding: ${({ theme }) => `${theme.vw.d(10)} ${theme.vw.d(20)}`};
`;

type Props = {
  format: string;
  href: string;
};

const DownloadCV = ({ format, href }: Props) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const linkHoverSpring = useSpring({
    config: config.stiff,
    from: { color: theme.color.black2, backgroundColor: 'transparent' },
    to: {
      color: isHovered ? theme.color.black2 : theme.color.white,
      backgroundColor: isHovered ? theme.color.white : 'transparent',
    },
  });

  return (
    <DownloadLink
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      style={linkHoverSpring}
      href={href}
      download
    >
      {format}
    </DownloadLink>
  );
};

export default DownloadCV;
