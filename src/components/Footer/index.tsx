import React from 'react';
import GetInTouch from './GetInTouch';
import styled from '@emotion/styled';
import MyLinks from '../MyLinks';

const FooterStyled = styled.footer`
  ${({ theme }) => theme.flex.between};
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
