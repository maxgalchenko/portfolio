import styled from '@emotion/styled';
import React from 'react';
import Separator from './Separator';
import { a, config, useSpring } from '@react-spring/web';

const Container = styled(a.li)``;

const Link = styled.a`
  ${({ theme }) => theme.flex.between};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.vw.d(60)};
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1.5;
`;

const Image = styled.img`
  width: auto;
  height: ${({ theme }) => theme.vw.d(200)};
  opacity: 0;
`;

type Props = {
  projectName: string;
  link: string;
  imgSrc: string;
  runAnimation: boolean;
};

const Company = ({ projectName, link, imgSrc, runAnimation }: Props) => {
  const companySpring = useSpring({
    config: config.molasses,
    from: { x: -500, opacity: 0 },
    to: { x: runAnimation ? 0 : -500, opacity: runAnimation ? 1 : 0 },
    delay: 500,
  });

  return (
    <Container style={companySpring}>
      <Link href={link}>
        <Title>{projectName}</Title>
        <Image src={imgSrc} alt={projectName} />
      </Link>
    </Container>
  );
};

export default Company;
