import Advantage from './Advantage';
import styled from '@emotion/styled';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.vw.d(150)};
  margin-bottom: ${({ theme }) => theme.vw.d(200)};
`;

const advantages = [
  {
    id: 1,
    title: 'Frontend Focused',
  },
  {
    id: 2,
    title: 'Business oriented',
  },
  {
    id: 3,
    title: 'Business oriented',
  },
  {
    id: 4,
    title: 'SCRUM master',
  },
  {
    id: 5,
    title: 'Responsiveness and accessibility expertise',
  },
  {
    id: 6,
    title: 'Optimization is a key',
  },

  {
    id: 7,
    title: 'accessible',
  },
  {
    id: 8,
    title: 'seo',
  },
];

const Advantages = () => {
  return (
    <Container>
      {advantages.map(({ id, title }) => (
        <li key={id}>
          <Advantage title={title} />
        </li>
      ))}
    </Container>
  );
};

export default Advantages;
