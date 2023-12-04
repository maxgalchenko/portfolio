import styled from '@emotion/styled';
import { textAnimationStyles } from '../../../styles/Animations';

const StyledNav = styled.nav`
  padding: ${({ theme }) => `${theme.vw.d(30)} ${theme.vw.d(60)}`};
  font-size: ${({ theme }) => theme.vw.d(40)};
`;

type StyledLetterProps = {
  index: number;
};

const StyledLetter = styled.span<StyledLetterProps>`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.vw.d(40)};
  line-height: 1.5;
  font-weight: 400;

  ${({ index }) => textAnimationStyles(index)}
`;

const name = 'Max';
const surname = 'Galchenko';

const TopNav = () => {
  return (
    <StyledNav>
      <a href="/">
        {name.split('').map((char, index) => (
          <StyledLetter key={index} index={index}>
            {char}
          </StyledLetter>
        ))}
        <span> </span>
        {surname.split('').map((char, index) => (
          <StyledLetter key={index} index={index}>
            {char}
          </StyledLetter>
        ))}
      </a>
    </StyledNav>
  );
};

export default TopNav;
