import styled from '@emotion/styled';
import Footer from './Footer';
import Title from './Title';

const HeroStyled = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  position: relative;
  margin-bottom: ${({ theme }) => theme.vw.d(200)};
`;

const Hero = () => {
  return (
    <HeroStyled>
      <Title />
      <Footer />
    </HeroStyled>
  );
};

export default Hero;
