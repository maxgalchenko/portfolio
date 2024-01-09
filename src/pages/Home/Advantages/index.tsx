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
  'Frontend Focused',
  'Business-Centric Approach',
  'Leadership and Team Collaboration',
  'Expertise in Responsiveness and Accessibility',
  'Optimization Proficiency',
  'SEO Integration',
  'Agile Mastery',
  'Accessibility Advocacy',
  'Innovative Problem-Solving',
];

const Advantages = () => {
  return (
    <Container>
      {advantages.map((title, index) => (
        <li key={index}>
          <Advantage title={title} />
        </li>
      ))}
    </Container>
  );
};

export default Advantages;
