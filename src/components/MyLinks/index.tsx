import React from 'react';
import Link from './Link';
import styled from '@emotion/styled';

const LinksList = styled.ul`
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
  return (
    <LinksList>
      {links.map(({ id, link, title }) => (
        <Link key={id} link={link} title={title} />
      ))}
    </LinksList>
  );
};

export default MyLinks;
