import { render, screen } from '../../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import Footer from './index';

// Mock child components
vi.mock('./ScrollDownIcon', () => ({
  default: () => <div data-testid="scroll-down-icon">ScrollDownIcon</div>,
}));

vi.mock('./OpenToWork', () => ({
  default: () => <div data-testid="open-to-work">OpenToWork</div>,
}));

describe('Hero Footer', () => {
  it('should render without crashing', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render ScrollDownIcon component', () => {
    render(<Footer />);
    expect(screen.getByTestId('scroll-down-icon')).toBeInTheDocument();
  });

  it('should render OpenToWork component', () => {
    render(<Footer />);
    expect(screen.getByTestId('open-to-work')).toBeInTheDocument();
  });

  it('should render both child components', () => {
    render(<Footer />);
    expect(screen.getByTestId('scroll-down-icon')).toBeInTheDocument();
    expect(screen.getByTestId('open-to-work')).toBeInTheDocument();
  });

  it('should have proper structure', () => {
    const { container } = render(<Footer />);
    const children = container.firstChild?.childNodes;
    expect(children).toHaveLength(2);
  });
});
