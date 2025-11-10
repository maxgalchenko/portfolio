import { render, screen } from '../../../test-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Link from './index';

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
    width: '0%',
  }),
  config: {
    stiff: {},
  },
}));

describe('Link', () => {
  it('should render external link by default', () => {
    render(<Link link="https://example.com" title="Example" />);
    const link = screen.getByRole('link', { name: /example/i });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should render internal link when sameOrigin is true', () => {
    render(<Link link="/about" title="About" sameOrigin={true} />);
    const link = screen.getByRole('link', { name: /about/i });
    expect(link).toHaveAttribute('href', '/about');
    expect(link).not.toHaveAttribute('target');
  });

  it('should display the correct title', () => {
    render(<Link link="https://example.com" title="My Title" />);
    expect(screen.getByText('My Title')).toBeInTheDocument();
  });

  it('should render arrow icon', () => {
    const { container } = render(
      <Link link="https://example.com" title="Example" />
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should be wrapped in a list item', () => {
    const { container } = render(
      <Link link="https://example.com" title="Example" />
    );
    const listItem = container.querySelector('li');
    expect(listItem).toBeInTheDocument();
  });

  it('should handle hover state for external links', async () => {
    const user = userEvent.setup();
    render(<Link link="https://example.com" title="Example" />);
    const link = screen.getByRole('link');

    await user.hover(link);
    expect(link).toBeInTheDocument();

    await user.unhover(link);
    expect(link).toBeInTheDocument();
  });

  it('should render with different URLs', () => {
    const { rerender } = render(
      <Link link="https://first.com" title="First" />
    );
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://first.com'
    );

    rerender(<Link link="https://second.com" title="Second" />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://second.com'
    );
  });

  it('should maintain accessibility with proper link structure', () => {
    render(<Link link="https://example.com" title="Accessible Link" />);
    const link = screen.getByRole('link', { name: /accessible link/i });
    expect(link).toBeInTheDocument();
  });
});
