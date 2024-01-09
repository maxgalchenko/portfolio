import styled from '@emotion/styled';

import OpenToWork from './OpenToWork';
import ScrollDownIcon from './ScrollDownIcon';

const FooterStyled = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  ${({ theme }) => theme.media.d} {
    bottom: ${({ theme }) => theme.vw.d(80)};
  }

  ${({ theme }) => theme.media.m} {
    bottom: ${({ theme }) => theme.vw.m(40)};
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <ScrollDownIcon />
      <OpenToWork />
    </FooterStyled>
  );
};

export default Footer;
