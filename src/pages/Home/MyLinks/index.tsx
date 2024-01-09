import styled from '@emotion/styled';
import { a, config, useInView } from '@react-spring/web';
import Link from '../../../components/common/Link';

const Container = styled.div`
  display: flex;

  ${({ theme }) => theme.media.d} {
    flex-direction: row;
    gap: ${({ theme }) => theme.vw.m(30)};
  }

  ${({ theme }) => theme.media.m} {
    flex-direction: column;
    gap: ${({ theme }) => theme.vw.m(30)};
  }
`;

const LinksList = styled(a.ul)`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.d} {
    gap: ${({ theme }) => theme.vw.d(20)};
  }

  ${({ theme }) => theme.media.m} {
    gap: ${({ theme }) => theme.vw.m(30)};
  }
`;

const links = [
  {
    id: 1,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/galchenko-max/',
  },
  {
    id: 2,
    title: 'GitHub',
    link: 'https://github.com/Rainspistols',
  },
  {
    id: 3,
    title: 'Upwork',
    link: 'https://www.upwork.com/freelancers/~0178b4cde2adb63163',
  },
];

const links2 = [
  {
    id: 1,
    title: 'All experience',
    link: 'https://www.linkedin.com/in/galchenko-max/details/experience/',
  },
  {
    id: 2,
    title: 'Certifications',
    link: 'https://www.linkedin.com/in/galchenko-max/details/certifications/',
  },
];

const MyLinks = () => {
  const [ref, inView] = useInView(
    () => ({
      config: config.molasses,
      from: { y: '100%', opacity: 0 },
      to: { y: '0%', opacity: 1 },
    }),
    {
      once: true,
      rootMargin: '-10% 0%',
    }
  );

  return (
    <Container>
      <LinksList ref={ref} style={inView}>
        <li>
          {links2.map(({ id, link, title }) => (
            <Link key={id} link={link} title={title} />
          ))}
        </li>
      </LinksList>
      <LinksList ref={ref} style={inView}>
        <li>
          {links.map(({ id, link, title }) => (
            <Link key={id} link={link} title={title} />
          ))}
        </li>
      </LinksList>
    </Container>
  );
};

export default MyLinks;
