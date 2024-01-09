import styled from '@emotion/styled';
import { a, useInView } from '@react-spring/web';
import Company from './Company';
import Separator from './Separator';
import conexiomImg from './assets/conexiom.webp';
import magnificodeImg from './assets/magnificode.webp';
import mrkterImg from './assets/mrkter.webp';
import upworkImg from './assets/upwork.webp';
import zipsaleImg from './assets/zipsale.webp';

const Container = styled(a.ul)`
  ${({ theme }) => theme.media.d} {
    margin-bottom: ${({ theme }) => theme.vw.d(140)};
  }

  ${({ theme }) => theme.media.m} {
    margin-bottom: ${({ theme }) => theme.vw.m(140)};
  }
`;

const companies = [
  {
    id: 1,
    projectName: 'Conexiom',
    link: '/conexiom',
    imgSrc: conexiomImg,
  },
  {
    id: 2,
    projectName: 'Mrkter',
    link: 'mrkter',
    imgSrc: mrkterImg,
  },
  {
    id: 3,
    projectName: 'Magnificode',
    link: 'magnificode',
    imgSrc: magnificodeImg,
  },
  {
    id: 4,
    projectName: 'Upwork',
    link: 'upwork',
    imgSrc: upworkImg,
  },
  {
    id: 5,
    projectName: 'Zipsale',
    link: 'zipsale',
    imgSrc: zipsaleImg,
  },
];

const CompaniesList = () => {
  const [ref, inView] = useInView({
    rootMargin: '-20% 0%',
    once: true,
  });

  return (
    <Container ref={ref}>
      <Separator runAnimation={inView} />
      {companies.map(({ id, projectName, link, imgSrc }) => (
        <li key={id}>
          <Company projectName={projectName} link={link} imgSrc={imgSrc} runAnimation={inView} />
          <Separator runAnimation={inView} />
        </li>
      ))}
    </Container>
  );
};

export default CompaniesList;
