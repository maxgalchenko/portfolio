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
    title: 'Flexible and adaptable',
  },
  {
    id: 4,
    title: 'Responsiveness and accessibility expertise',
  },
  {
    id: 5,
    title: 'Optimization is a key',
  },

  {
    id: 6,
    title: 'accessible',
  },
  {
    id: 7,
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
