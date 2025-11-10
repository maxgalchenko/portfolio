import { render, screen } from '../../../test-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import GetInTouch from './GetInTouch';
import React from 'react';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    a: ({
      children,
      style,
      ...props
    }: React.PropsWithChildren<{ style?: React.CSSProperties }>) => (
      <a style={style} {...props}>
        {children}
      </a>
    ),
  },
  useSpring: () => ({
    color: '#FFFFFF',
    backgroundColor: 'transparent',
  }),
  useInView: () => [vi.fn(), { x: 0, opacity: 1 }],
  config: {
    stiff: {},
    molasses: {},
  },
}));

describe('GetInTouch', () => {
  it('should render without crashing', () => {
    render(<GetInTouch />);
    expect(screen.getByText('Get in touch')).toBeInTheDocument();
  });

  it('should render as a link', () => {
    render(<GetInTouch />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('should have correct mailto href', () => {
    render(<GetInTouch />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'mailto:galchenko.maksym@gmail.com');
  });

  it('should handle hover state', async () => {
    const user = userEvent.setup();
    render(<GetInTouch />);
    const link = screen.getByRole('link');

    await user.hover(link);
    expect(link).toBeInTheDocument();

    await user.unhover(link);
    expect(link).toBeInTheDocument();
  });

  it('should display correct text', () => {
    render(<GetInTouch />);
    expect(screen.getByText('Get in touch')).toBeInTheDocument();
  });
});
