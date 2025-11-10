import { render, screen } from '../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import MyLinks from './index';
import React from 'react';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    ul: ({
      children,
      style,
      ...props
    }: React.PropsWithChildren<{ style?: React.CSSProperties }>) => (
      <ul style={style} {...props}>
        {children}
      </ul>
    ),
  },
  useInView: () => [vi.fn(), { y: '0%', opacity: 1 }],
  config: {
    molasses: {},
  },
}));

// Mock Link component
vi.mock('../../../components/common/Link', () => ({
  default: ({ title, link }: { title: string; link: string }) => (
    <li>
      <a href={link}>{title}</a>
    </li>
  ),
}));

describe('MyLinks', () => {
  it('should render without crashing', () => {
    const { container } = render(<MyLinks />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render unordered list', () => {
    const { container } = render(<MyLinks />);
    const ul = container.querySelector('ul');
    expect(ul).toBeInTheDocument();
  });

  it('should render LinkedIn link', () => {
    render(<MyLinks />);
    const link = screen.getByText('LinkedIn');
    expect(link).toBeInTheDocument();
  });

  it('should render GitHub link', () => {
    render(<MyLinks />);
    const link = screen.getByText('GitHub');
    expect(link).toBeInTheDocument();
  });

  it('should render Upwork link', () => {
    render(<MyLinks />);
    const link = screen.getByText('Upwork');
    expect(link).toBeInTheDocument();
  });

  it('should render 3 links', () => {
    render(<MyLinks />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  it('should have correct structure', () => {
    const { container } = render(<MyLinks />);
    const listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(3);
  });
});
