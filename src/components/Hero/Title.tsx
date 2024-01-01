import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useTrail, a, config } from '@react-spring/web';
import { useTheme } from '@emotion/react';

const TitleStyled = styled.h1`
  transform: translateY(${({ theme }) => theme.vw.d(-30)});
`;

const WordStyled = styled(a.span)`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.vw.d(165)};
  line-height: 0.9;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  will-change: transform, opacity;
`;

const BottomWordContainerStyled = styled(WordStyled)`
  max-height: ${({ theme }) => theme.vw.d(140)};
  overflow: hidden;
`;

const SpaceStyled = styled.span`
  margin-left: ${({ theme }) => theme.vw.d(45)};
`;

const data = [
  {
    topWord: 'Software',
    bottomWord: 'Engineer',
  },
  {
    topWord: 'Frontend',
    bottomWord: 'Developer',
  },
  {
    topWord: 'Web',
    bottomWord: 'Programmer',
  },
  {
    topWord: 'React.Js',
    bottomWord: 'hacktivist',
  },
  {
    topWord: 'JS/TS',
    bottomWord: 'cracker',
  },
  {
    topWord: 'IT',
    bottomWord: 'geek',
  },
];

// const topWords = ['Frontend', 'Web', 'React.Js', 'Next.Js', 'JS/TS', 'Software'];
// const bottomWords = ['Developer', 'Programmer', 'Engineer', 'Coder', 'Guy'];

const Title = () => {
  const theme = useTheme();
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  // const [topWord, setTopWord] = useState(data[0].topWord);
  // const [bottomWord, setBottomWord] = useState(data[0].bottomWord);

  const topWordTrail = useTrail(data[currentItemIndex].topWord.length, {
    config: { tension: 0, friction: 0 },
    from: { y: theme.vw.d(10), opacity: 0 },
    to: { y: theme.vw.d(0), opacity: 1 },
    reset: true,
    delay: 1000,
  });

  const bottomWordTrail = useTrail(data[currentItemIndex].bottomWord.length, {
    config: { tension: 0, friction: 0 },
    from: { y: theme.vw.d(50), opacity: 0 },
    to: { y: theme.vw.d(0), opacity: 1 },
    delay: 1000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((curIndex) => {
        if (curIndex === data.length - 1) return 0;
        return curIndex + 1;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <TitleStyled>
      {topWordTrail.map((props, index) => (
        <WordStyled style={props} key={index}>
          {data[currentItemIndex].topWord[index]}
        </WordStyled>
      ))}
      <br />
      <SpaceStyled />
      <BottomWordContainerStyled>
        {bottomWordTrail.map((props, index) => (
          <WordStyled style={props} key={index}>
            {data[currentItemIndex].bottomWord[index]}
          </WordStyled>
        ))}
      </BottomWordContainerStyled>
    </TitleStyled>
  );
};

export default Title;
