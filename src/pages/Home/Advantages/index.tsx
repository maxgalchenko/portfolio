import styled from '@emotion/styled';
import Advantage from './Advantage';

const Container = styled.ul`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.d} {
    gap: ${({ theme }) => theme.vw.d(120)};
    margin-bottom: ${({ theme }) => theme.vw.d(100)};
  }

  ${({ theme }) => theme.media.m} {
    gap: ${({ theme }) => theme.vw.m(40)};
    margin-bottom: ${({ theme }) => theme.vw.m(110)};
  }
`;

const advantages = [
  'Micro-Frontend Architecture & Module Federation',
  'Design Systems & Component Libraries',
  'Enterprise-Scale React & TypeScript',
  '95+ Lighthouse Scores & Core Web Vitals',
  'Technical Leadership & Team Mentorship',
  'Accessibility-First Development (WCAG)',
  'Test-Driven Development & CI/CD Pipelines',
  'Top 3% on Upwork for Client Satisfaction',
];

const Advantages = () => {
  return (
    <Container>
      {advantages.map((title) => (
        <li key={title}>
          <Advantage title={title} />
        </li>
      ))}
    </Container>
  );
};

export default Advantages;
