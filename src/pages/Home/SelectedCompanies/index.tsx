import styled from '@emotion/styled';
import { a, config, useInView, useSpring } from '@react-spring/web';
import Spinner from '../../../components/common/Spinner';
import CompaniesList from './CompaniesList';

const Container = styled.section`
  overflow: hidden;
  padding: 0 2.5%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;

  ${({ theme }) => theme.media.d} {
    gap: ${({ theme }) => theme.vw.d(20)};
    margin-bottom: ${({ theme }) => theme.vw.d(100)};
    height: ${({ theme }) => theme.vw.d(35)};
  }

  ${({ theme }) => theme.media.m} {
    gap: ${({ theme }) => theme.vw.m(20)};
    margin-bottom: ${({ theme }) => theme.vw.m(30)};
    height: ${({ theme }) => theme.vw.m(25)};
  }
`;

const SpinnerContainer = styled(a.div)`
  ${({ theme }) => theme.media.d} {
    width: ${({ theme }) => theme.vw.d(35)};
    height: ${({ theme }) => theme.vw.d(35)};
  }

  ${({ theme }) => theme.media.m} {
    width: ${({ theme }) => theme.vw.m(25)};
    height: ${({ theme }) => theme.vw.m(25)};
  }
`;

const Title = styled(a.h2)`
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  font-weight: 300;

  ${({ theme }) => theme.media.d} {
    font-size: ${({ theme }) => theme.vw.d(20)};
  }

  ${({ theme }) => theme.media.m} {
    font-size: ${({ theme }) => theme.vw.m(16)};
  }
`;

// Todo add sections and h1-h6 tags to all main sections
// Todo check all animations
// Todo do mobile version

const SelectedCompanies = () => {
  const [ref, inView] = useInView(
    () => ({
      config: config.molasses,
      from: { y: '100%' },
      to: { y: '0%' },
    }),
    {
      once: true,
      rootMargin: '-30% 0%',
    }
  );

  const spinnerSpring = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <Container>
      <TitleContainer>
        <SpinnerContainer style={spinnerSpring}>
          <Spinner animationDuration={5000} animationDirection="forward" />
        </SpinnerContainer>
        <Title ref={ref} style={inView}>
          Selected Companies
        </Title>
      </TitleContainer>
      <CompaniesList />
    </Container>
  );
};

export default SelectedCompanies;
