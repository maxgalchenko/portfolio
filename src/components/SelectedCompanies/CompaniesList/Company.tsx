import styled from '@emotion/styled';
import React from 'react';
import Separator from './Separator';

const Container = styled.li``;

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
`;

type Props = {
  projectName: string;
  link: string;
  imgSrc: string;
};

const Company = ({ projectName, link, imgSrc }: Props) => {
  return (
    <Container>
      <Link href={link}>
        <Title>{projectName}</Title>
        <Image src={imgSrc} alt={projectName} />
      </Link>
      <Separator />
    </Container>
  );
};

export default Company;
