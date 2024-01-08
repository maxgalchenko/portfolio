import styled from '@emotion/styled';
import Advantage from './Advantage';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.vw.d(150)};
  margin-bottom: ${({ theme }) => theme.vw.d(200)};
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
