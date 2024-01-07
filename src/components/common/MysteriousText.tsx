import { a, useSpring } from '@react-spring/web';
import React from 'react';

type Props = {
  children: string;
};

const MysteriousText = ({ children, ...props }: Props) => {
  const animation = () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSpring({ opacity: 1, from: { opacity: 0 }, delay: Math.random() * 2500 });

  //   @ts-ignore
  return (
    <>
      {children.split('').map((item, index) => (
        // @ts-ignore
        <a.span key={index} style={{ ...animation(index), color: 'white' }} {...props}>
          {item}
        </a.span>
      ))}
    </>
  );
};

export default MysteriousText;
