import styled from '@emotion/styled';
import React from 'react';
import { a, config, useSpring } from '@react-spring/web';
import { useTheme } from '@emotion/react';

const Container = styled(a.li)``;

const Link = styled.a`
  ${({ theme }) => theme.flex.between};
  height: ${({ theme }) => theme.vw.d(200)};
`;

const Title = styled(a.h3)`
  font-size: ${({ theme }) => theme.vw.d(60)};
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1.5;
`;

const ImageContainer = styled.div`
  ${({ theme }) => theme.flex.center};
  width: ${({ theme }) => theme.vw.d(400)};
`;

const Image = styled(a.img)`
  width: auto;
  height: ${({ theme }) => theme.vw.d(100)};
  opacity: 0;
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
    from: { x: theme.vw.d(-500), opacity: 0 },
    to: { x: runAnimation ? theme.vw.d(0) : theme.vw.d(-500), opacity: runAnimation ? 1 : 0 },
    delay: 500,
  });

  const imgSpring = useSpring({
    config: config.slow,
    from: { opacity: 0, height: theme.vw.d(100) },
    delay: 500,
  });

  const titleHoverSpring = useSpring({
    config: config.slow,
    from: { x: theme.vw.d(0) },
    delay: 500,
  });

  return (
    <Container
      style={companySpring}
      onMouseEnter={() => {
        titleHoverSpring.x.start({ to: theme.vw.d(50) });
        imgSpring.opacity.start({ to: 1 });
        imgSpring.height.start({ to: theme.vw.d(200) });
      }}
      onMouseLeave={() => {
        titleHoverSpring.x.start({ to: theme.vw.d(0) });
        imgSpring.opacity.start({ to: 0 });
        imgSpring.height.start({ to: theme.vw.d(100) });
      }}
    >
      <Link href={link}>
        <Title style={titleHoverSpring}>{projectName}</Title>
        <ImageContainer>
          <Image style={imgSpring} src={imgSrc} alt={projectName} />
        </ImageContainer>
      </Link>
    </Container>
  );
};

export default Company;
