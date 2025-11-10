import { render } from '../../../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import ScrollDownIcon from './index';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    div: ({ children, style, ...props }: any) => (
      <div style={style} {...props}>
        {children}
      </div>
    ),
  },
  useSpring: () => ({ rotate: 0 }),
}));

// Mock RoundText SVG
vi.mock('./roundText.svg?react', () => ({
  default: () => <svg data-testid="round-text">RoundText</svg>,
}));

// Mock Spinner
vi.mock('../../../../../components/common/Spinner', () => ({
  default: () => <div data-testid="spinner">Spinner</div>,
}));

describe('ScrollDownIcon', () => {
  it('should render without crashing', () => {
    const { container } = render(<ScrollDownIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render RoundText SVG', () => {
    const { container } = render(<ScrollDownIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should render Spinner component', () => {
    const { container } = render(<ScrollDownIcon />);
    const spinner = container.querySelector('[data-testid="spinner"]');
    expect(spinner).toBeInTheDocument();
  });

  it('should have correct structure', () => {
    const { container } = render(<ScrollDownIcon />);
    const divs = container.querySelectorAll('div');
    expect(divs.length).toBeGreaterThanOrEqual(2);
  });
});
