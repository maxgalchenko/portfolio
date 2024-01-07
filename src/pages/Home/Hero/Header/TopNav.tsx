import styled from '@emotion/styled';
import { a, useTrail, config } from '@react-spring/web';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  padding: ${({ theme }) => `${theme.vw.d(40)} ${theme.vw.d(80)}`};
  font-size: ${({ theme }) => theme.vw.d(40)};
`;

const StyledLetter = styled(a.span)`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.vw.d(40)};
  line-height: 1.5;
  font-weight: 300;
  display: inline-block;
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

  return (
    <StyledNav>
      <Link to="/">
        {fullNameTrail.map((props, index) => (
          <StyledLetter style={props} key={index + fullName}>
            {fullName[index] === ' ' ? '\u00A0' : fullName[index]}
          </StyledLetter>
        ))}
      </Link>
    </StyledNav>
  );
};

export default TopNav;
