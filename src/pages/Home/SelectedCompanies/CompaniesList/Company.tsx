import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { a, config, useSpring } from '@react-spring/web';
import { Link } from 'react-router-dom';

const Container = styled(a.li)``;

const LinkStyled = styled(Link)`
  ${({ theme }) => theme.flex.between};

  ${({ theme }) => theme.media.d} {
    height: ${({ theme }) => theme.vw.d(200)};
  }

  ${({ theme }) => theme.media.m} {
    height: ${({ theme }) => theme.vw.m(90)};
  }
`;

const Title = styled(a.h3)`
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1.5;

  ${({ theme }) => theme.media.d} {
    font-size: ${({ theme }) => theme.vw.d(60)};
  }

  ${({ theme }) => theme.media.m} {
    font-size: ${({ theme }) => theme.vw.m(30)};
  }
`;

const ImageContainer = styled.div`
  ${({ theme }) => theme.flex.center};

  ${({ theme }) => theme.media.d} {
    width: ${({ theme }) => theme.vw.d(400)};
  }

  ${({ theme }) => theme.media.m} {
    opacity: 0;
  }
`;

const Image = styled(a.img)`
  width: auto;
  opacity: 0;

  ${({ theme }) => theme.media.d} {
    height: ${({ theme }) => theme.vw.d(100)};
  }

  ${({ theme }) => theme.media.m} {
    opacity: 0;
  }
`;

type Props = {
  projectName: string;
  link: string;
  imgSrc: string;
  runAnimation: boolean;
};

const Company = ({ projectName, link, imgSrc, runAnimation }: Props) => {
  const theme = useTheme();
  const companySpring = useSpring({
    config: config.molasses,
    from: { x: '-200%', opacity: 0 },
    to: { x: runAnimation ? '0' : '-200%', opacity: runAnimation ? 1 : 0 },
    delay: 500,
  });

  const imgSpring = useSpring({
    config: config.slow,
    from: { opacity: 0, height: theme.vw.d(100) },
    delay: 500,
  });

  const titleHoverSpring = useSpring({
    config: config.slow,
    from: { x: '0vw' },
    delay: 500,
  });

  return (
    <Container
      style={companySpring}
      onMouseEnter={() => {
        titleHoverSpring.x.start({ to: '3vw' });
        imgSpring.opacity.start({ to: 1 });
        imgSpring.height.start({ to: theme.vw.d(200) });
      }}
      onMouseLeave={() => {
        titleHoverSpring.x.start({ to: "0vw" });
        imgSpring.opacity.start({ to: 0 });
        imgSpring.height.start({ to: theme.vw.d(100) });
      }}
    >
      <LinkStyled to={link}>
        <Title style={titleHoverSpring}>{projectName}</Title>
        <ImageContainer>
          <Image style={imgSpring} src={imgSrc} alt='' />
        </ImageContainer>
      </LinkStyled>
    </Container>
  );
};

export default Company;
