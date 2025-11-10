import { render, screen } from '../../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import OpenToWork from './OpenToWork';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    div: ({ children, style, ...props }: any) => (
      <div style={style} {...props}>
        {children}
      </div>
    ),
    p: ({ children, style, ...props }: any) => (
      <p style={style} {...props}>
        {children}
      </p>
    ),
  },
  useSpring: () => ({ opacity: 1, y: 0 }),
  config: {
    slow: {},
  },
}));

// Mock Spinner
vi.mock('../../../../components/common/Spinner', () => ({
  default: () => <div data-testid="spinner">Spinner</div>,
}));

describe('OpenToWork', () => {
  it('should render without crashing', () => {
    const { container } = render(<OpenToWork />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render "open to work" text', () => {
    render(<OpenToWork />);
    expect(screen.getByText('open to work')).toBeInTheDocument();
  });

  it('should render location text', () => {
    render(<OpenToWork />);
    expect(screen.getByText('Based in Canada, Vancouver')).toBeInTheDocument();
  });

  it('should render Spinner component', () => {
    render(<OpenToWork />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should have correct structure', () => {
    const { container } = render(<OpenToWork />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBeGreaterThanOrEqual(1);
  });
});
