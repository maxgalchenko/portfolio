import styled from '@emotion/styled';
import MyLinks from '../MyLinks';
import GetInTouch from './GetInTouch';

const FooterStyled = styled.footer`
  display: flex;
  gap: ${({ theme }) => theme.vw.d(100)};
`;

const Footer = () => {
  return (
    <FooterStyled>
      <GetInTouch />
      <MyLinks />
    </FooterStyled>
  );
};

export default Footer;
