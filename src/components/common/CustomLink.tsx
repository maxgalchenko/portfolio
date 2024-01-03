import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

type Props = {
  dest: string;
  children: React.ReactNode
};

const CustomLink = ({ dest, children }: Props) => {
  const navigate = useNavigate();

  const handleDelayedLinkClick =
    (to: string, delay: number) => (event: { preventDefault: () => void }) => {
      event.preventDefault();
      setTimeout(() => {
        navigate(to);
      }, delay);
    };

  return (
    <div className="link" onClick={handleDelayedLinkClick(dest, 1000)}>
      {children}
    </div>
  );
};

export default CustomLink;
