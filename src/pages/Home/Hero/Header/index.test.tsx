import { render, screen } from '../../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import Header from './index';

// Mock TopNav component
vi.mock('./TopNav', () => ({
  default: () => <nav data-testid="top-nav">TopNav</nav>,
}));

describe('Header', () => {
  it('should render without crashing', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render as a header element', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });

  it('should render TopNav component', () => {
    render(<Header />);
    expect(screen.getByTestId('top-nav')).toBeInTheDocument();
  });

  it('should have correct structure', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    const nav = header?.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });
});
