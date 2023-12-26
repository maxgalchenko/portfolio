import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useTrail, a } from '@react-spring/web';
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

const topWords = ['Frontend', 'Web', 'React.Js', 'Next.Js', 'JavaScript', 'TypeScript'];
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

  useEffect(() => {
    const interval1 = setInterval(() => {
      setTopWord(() => {
        const filteredList = topWords.filter((prev) => prev !== topWord);
        const randomIndex = Math.floor(Math.random() * filteredList.length);
        const newTopWord = filteredList[randomIndex];
        return newTopWord !== undefined ? newTopWord : topWord;
      });

      setBottomWord(() => {
        const filteredList = bottomWords.filter((prev) => prev !== bottomWord);
        const randomIndex = Math.floor(Math.random() * filteredList.length);
        const newBottomWord = filteredList[randomIndex];
        return newBottomWord !== undefined ? newBottomWord : bottomWord;
      });
    }, 5000);

    return () => clearInterval(interval1);
  }, [topWord, bottomWord]);

  return (
    <TitleStyled>
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
    </TitleStyled>
  );
};

export default Title;
