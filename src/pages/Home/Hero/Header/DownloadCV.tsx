import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { a, config, useSpring } from '@react-spring/web';
import { useState } from 'react';

const DownloadLink = styled(a.a)`
  color: ${({ theme }) => theme.color.white};
  line-height: 1.5;
  font-weight: 300;
  border: none;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 20px;

  ${({ theme }) => theme.media.d} {
    font-size: ${({ theme }) => theme.vw.d(20)};
    padding: ${({ theme }) => `${theme.vw.d(10)} ${theme.vw.d(20)}`};
  }

  ${({ theme }) => theme.media.m} {
    font-size: ${({ theme }) => theme.vw.m(14)};
    padding: ${({ theme }) => `${theme.vw.m(10)} ${theme.vw.m(40)}`};
  }
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
