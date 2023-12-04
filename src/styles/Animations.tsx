import { css, keyframes } from '@emotion/react';

const textAnimation1 = keyframes`
    0% {
      transform: translateY(20%) translateX(0);
      opacity: 0;
    }

    50% {
      transform: translateY(10%) translateX(0);
      opacity: 0;
    }

    100% {
      transform: translateY(0) translateX(0);
      opacity: 1;
    }
  `;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const reverseRotateAnimation = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideDownAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const textAnimationStyles = (itemNumber: number) => css`
  animation: ${textAnimation1} 1s ease-in forwards;
  animation-delay: ${itemNumber * 0.01}s;
  opacity: 0;
  display: inline-block;
`;

export {
  textAnimationStyles,
  rotateAnimation,
  fadeInAnimation,
  reverseRotateAnimation,
  slideDownAnimation,
};
