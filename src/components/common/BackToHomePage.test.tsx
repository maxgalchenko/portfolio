import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import BackToHomePage from './BackToHomePage';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    div: ({ children, style, ...props }: any) => (
      <div style={style} {...props}>
        {children}
      </div>
    ),
  },
  useSpring: () => ({
    scale: 1,
  }),
  config: {
    stiff: {},
  },
}));

describe('BackToHomePage', () => {
  it('should render the back to home page link', () => {
    render(<BackToHomePage />);
    const link = screen.getByRole('link', { name: /go back to home page/i });
    expect(link).toBeInTheDocument();
  });

  it('should link to the home page', () => {
    render(<BackToHomePage />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });

  it('should display the correct text', () => {
    render(<BackToHomePage />);
    expect(screen.getByText('Go back to home page')).toBeInTheDocument();
  });

  it('should render back arrow icon', () => {
    const { container } = render(<BackToHomePage />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should handle hover state', async () => {
    const user = userEvent.setup();
    render(<BackToHomePage />);
    const link = screen.getByRole('link');

    await user.hover(link);
    expect(link).toBeInTheDocument();

    await user.unhover(link);
    expect(link).toBeInTheDocument();
  });

  it('should be accessible', () => {
    render(<BackToHomePage />);
    const link = screen.getByRole('link', { name: /go back to home page/i });
    expect(link).toBeInTheDocument();
  });
});
