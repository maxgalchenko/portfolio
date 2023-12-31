import React from 'react';
import styled from '@emotion/styled';

const Hr = styled.hr`
  opacity: 1;
  width: 100%;
  color: transparent;
  margin: 0;
  height: 0;
  opacity: 0.2;
  border-top: 1px solid ${({ theme }) => theme.color.white};
`;

const Separator = () => {
  return <Hr />;
};

export default Separator;
