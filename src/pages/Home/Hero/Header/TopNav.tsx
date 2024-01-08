import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { a, config, useSpring, useTrail } from '@react-spring/web';
import { Link } from 'react-router-dom';
import DownloadCV from './DownloadCV';

const StyledNav = styled.nav`
  padding: ${({ theme }) => `${theme.vw.d(40)} ${theme.vw.d(80)}`};
  font-size: ${({ theme }) => theme.vw.d(40)};
  ${({ theme }) => theme.flex.between};
  z-index: 2;
  position: relative;
`;

const StyledLetter = styled(a.span)`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.vw.d(40)};
  line-height: 1.5;
  font-weight: 300;
  display: inline-block;
`;

const CVContainer = styled(a.div)`
  ${({ theme }) => theme.flex.between};
  gap: ${({ theme }) => theme.vw.d(10)};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.vw.d(30)};
  line-height: 1.5;
  font-weight: 300;
`;

const fullName = 'Max Galchenko';

const TopNav = () => {
  const theme = useTheme();

  const fullNameTrail = useTrail(fullName.length, {
    config: { tension: 0, friction: 0 },
    from: { y: theme.vw.d(10), opacity: 0 },
    to: { y: theme.vw.d(0), opacity: 1 },
    delay: 1000,
  });

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: config.slow,
  });

  return (
    <StyledNav>
      <Link to="/">
        {fullNameTrail.map((props, index) => (
          <StyledLetter style={props} key={index + fullName}>
            {fullName[index] === ' ' ? '\u00A0' : fullName[index]}
          </StyledLetter>
        ))}
      </Link>

      <CVContainer style={props}>
        <Title>Download CV:</Title>
        <DownloadCV format=".pdf" href="/Maksym Galchenko Senior FE Resume.docx.pdf" />
        <DownloadCV format=".docx" href="/Maksym Galchenko Senior FE Resume.docx" />
      </CVContainer>
    </StyledNav>
  );
};

export default TopNav;
