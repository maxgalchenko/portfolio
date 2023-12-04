import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useTrail, a } from '@react-spring/web';
import { useTheme } from '@emotion/react';

const WordStyled = styled(a.span)`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.vw.d(150)};
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

const topWords = ['Frontend', 'Web', 'React', 'Next', 'JS/TS'];
const bottomWords = ['Developer', 'Programmer', 'Engineer'];

const Title = () => {
  const theme = useTheme();
  const [topWord, setTopWord] = useState(topWords[0]);
  const [bottomWord, setBottomWord] = useState(bottomWords[0]);

  const topWordTrail = useTrail(topWord.length, {
    config: { tension: 0, friction: 0 },
    from: { y: theme.vw.d(10), opacity: 0 },
    to: { y: theme.vw.d(0), opacity: 1 },
    delay: 100,
  });

  const bottomWordTrail = useTrail(bottomWord.length, {
    config: { tension: 0, friction: 0 },
    from: { y: theme.vw.d(50), opacity: 0 },
    to: { y: theme.vw.d(0), opacity: 1 },
    delay: 100,
  });

  // Top word
  useEffect(() => {
    const interval1 = setInterval(() => {
      setTopWord(() => {
        const filteredList = topWords.filter((prev) => prev !== topWord);
        const randomIndex = Math.floor(Math.random() * filteredList.length);
        return filteredList[randomIndex];
      });
    }, 2500);

    return () => clearInterval(interval1);
  }, [topWord]);
  // Bottom word
  useEffect(() => {
    const interval2 = setInterval(() => {
      setBottomWord(() => {
        const filteredList = bottomWords.filter((prev) => prev !== bottomWord);
        const randomIndex = Math.floor(Math.random() * filteredList.length);
        return filteredList[randomIndex];
      });
    }, 5000);

    return () => clearInterval(interval2);
  }, [bottomWord]);

  return (
    <h1>
      {topWordTrail.map((props, index) => (
        <WordStyled style={{ ...props }} key={index + topWord}>
          {topWord[index]}
        </WordStyled>
      ))}
      <br />
      <SpaceStyled />
      <BottomWordContainerStyled>
        {bottomWordTrail.map((props, index) => (
          <WordStyled style={props} key={index + bottomWord}>
            {bottomWord[index]}
          </WordStyled>
        ))}
      </BottomWordContainerStyled>
    </h1>
  );
};

export default Title;
