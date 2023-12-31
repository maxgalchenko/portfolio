import React from 'react';
import styled from '@emotion/styled';
import Company from './Company';
import Separator from './Separator';
import conexiomImg from './assets/conexiom.webp';
import magnificodeImg from './assets/magnificode.webp';
import mrkterImg from './assets/mrkter.webp';
import upworkImg from './assets/upwork.webp';
import zipsaleImg from './assets/zipsale.webp';

const Container = styled.ul`
  margin-bottom: ${({ theme }) => theme.vw.d(140)};
`;

const companies = [
  {
    id: 1,
    projectName: 'Conexiom',
    link: 'https://conexiom.com/',
    imgSrc: conexiomImg,
  },
  {
    id: 2,
    projectName: 'Mrkter',
    link: 'https://mrkter.io/',
    imgSrc: mrkterImg,
  },
  {
    id: 3,
    projectName: 'Magnificode',
    link: 'https://magnificode.net/',
    imgSrc: magnificodeImg,
  },
  {
    id: 4,
    projectName: 'Upwork',
    link: 'https://www.upwork.com/',
    imgSrc: upworkImg,
  },
  {
    id: 5,
    projectName: 'Zipsale',
    link: 'https://www.zipsale.co.uk/',
    imgSrc: zipsaleImg,
  },
];

const CompaniesList = () => {
  return (
    <Container>
      <Separator />
      {companies.map(({ id, projectName, link, imgSrc }) => (
        <Company key={id} projectName={projectName} link={link} imgSrc={imgSrc} />
      ))}
    </Container>
  );
};

export default CompaniesList;
