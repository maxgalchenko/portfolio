import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
  font-size: ${({ theme }) => theme.vw.d(60)};
  color: ${({ theme }) => theme.color.white};
  line-height: 1.5;
  text-align: center;
  padding: ${({ theme }) => `${theme.vw.d(10)} ${theme.vw.d(40)}`};
  text-transform: uppercase;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 9999px;
`;

const GetInTouch = () => {
  return <Link href="mailto:galchenko.maksym@gmail.com">Get in touch</Link>;
};

export default GetInTouch;
