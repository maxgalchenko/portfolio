import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { a, useTrail } from '@react-spring/web';
import { useEffect, useState } from 'react';

const TitleStyled = styled.h1`
  ${({ theme }) => theme.media.d} {
    transform: translateY(${({ theme }) => theme.vw.d(-30)});
  }
`;

const WordStyled = styled(a.span)`
  color: ${({ theme }) => theme.color.white};
  line-height: 1;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  will-change: transform, opacity;

  ${({ theme }) => theme.media.d} {
    font-size: ${({ theme }) => theme.vw.d(165)};
  }

  ${({ theme }) => theme.media.m} {
    font-size: ${({ theme }) => theme.vw.m(40)};
  }
`;

const BottomWordContainerStyled = styled(WordStyled)`
  overflow: hidden;

  ${({ theme }) => theme.media.d} {
    max-height: ${({ theme }) => theme.vw.d(140)};
  }

  ${({ theme }) => theme.media.m} {
    max-height: ${({ theme }) => theme.vw.m(38)};
  }
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
    topWord: 'Front-end',
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

const Title = () => {
  const theme = useTheme();
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

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
