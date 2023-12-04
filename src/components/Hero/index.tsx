import styled from '@emotion/styled';
import Title from './Title';
import Footer from './Footer';

const HeroStyled = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  position: relative;
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
