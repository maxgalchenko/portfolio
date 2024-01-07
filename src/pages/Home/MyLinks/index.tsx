import React from 'react';
import Link from '../../../components/common/Link';
import styled from '@emotion/styled';
import { a, config, useInView, useSpring } from '@react-spring/web';

const LinksList = styled(a.ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.vw.d(20)};
`;

const links = [
  {
    id: 1,
    title: 'GitHub',
    link: 'https://github.com/Rainspistols',
  },
  {
    id: 2,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/galchenko-max/',
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
    <LinksList ref={ref} style={inView}>
      {links.map(({ id, link, title }) => (
        <Link key={id} link={link} title={title} />
      ))}
    </LinksList>
  );
};

export default MyLinks;
