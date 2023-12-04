import styled from '@emotion/styled';

import OpenToWork from './OpenToWork';
import ScrollDownIcon from './ScrollDownIcon';

const FooterStyled = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.vw.d(60)};
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
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
