import React from 'react';
import styled from '@emotion/styled';

const LinkStyled = styled.a`
  font-size: ${({ theme }) => theme.vw.d(30)};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.white};
`;

const Link = () => {
  return (
    <LinkStyled href="github.com" target="_blank" rel="noopener noreferrer">
      Github
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Arrow / Arrow_Up_Right_LG">
          <path
            id="Vector"
            d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    </LinkStyled>
  );
};

export default Link;
