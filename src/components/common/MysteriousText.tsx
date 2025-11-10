import { a, useSpring } from '@react-spring/web';

type Props = {
  children: string;
};

const MysteriousText = ({ children, ...props }: Props) => {
  const animation = () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: Math.random() * 2500,
    });

  return (
    <p>
      {children.split('').map((item, index) => (
        <a.span
          key={index}
          style={{ ...animation(), color: 'white' }}
          {...props}
        >
          {item}
        </a.span>
      ))}
    </p>
  );
};

export default MysteriousText;
