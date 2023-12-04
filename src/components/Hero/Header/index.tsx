import styled from '@emotion/styled';
import TopNav from './TopNav';

const HeaderStyled = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <TopNav />
    </HeaderStyled>
  );
};

export default Header;
