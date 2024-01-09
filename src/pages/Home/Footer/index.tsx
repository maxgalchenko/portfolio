import styled from '@emotion/styled';
import MyLinks from '../MyLinks';
import GetInTouch from './GetInTouch';

const FooterStyled = styled.footer`
  display: flex;
  gap: ${({ theme }) => theme.vw.d(100)};

  ${({ theme }) => theme.media.d} {
    gap: ${({ theme }) => theme.vw.d(100)};
  }

  ${({ theme }) => theme.media.m} {
    flex-direction: column;
    gap: ${({ theme }) => theme.vw.m(40)};
  }
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
