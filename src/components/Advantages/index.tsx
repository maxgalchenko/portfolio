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
    title: 'Frontend Addict',
  },
  {
    id: 2,
    title: 'Pixel perfect',
  },
  {
    id: 3,
    title: 'Responsive',
  },
  {
    id: 4,
    title: 'GSAP',
  },
  {
    id: 5,
    title: 'Creative coder',
  },
  {
    id: 6,
    title: 'I love discovering new creative worlds',
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
