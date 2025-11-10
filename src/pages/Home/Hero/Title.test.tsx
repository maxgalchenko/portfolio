import { render } from '../../../test-utils';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Title from './Title';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    span: ({ children, style, ...props }: any) => (
      <span style={style} {...props}>
        {children}
      </span>
    ),
  },
  useTrail: (length: number) => {
    return Array(length).fill({ y: 0, opacity: 1 });
  },
}));

describe('Title', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('should render without crashing', () => {
    const { container } = render(<Title />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render as an h1 element', () => {
    const { container } = render(<Title />);
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
  });

  it('should render initial text (Software Engineer)', () => {
    const { container } = render(<Title />);
    expect(container.textContent).toContain('Software');
    expect(container.textContent).toContain('Engineer');
  });

  it('should render text character by character', () => {
    const { container } = render(<Title />);
    const spans = container.querySelectorAll('span');
    // Software (8) + Engineer (8) = 16 characters minimum
    expect(spans.length).toBeGreaterThanOrEqual(16);
  });

  it('should set up interval for changing text', () => {
    const setIntervalSpy = vi.spyOn(global, 'setInterval');
    render(<Title />);

    // Verify that setInterval was called with correct duration (3500ms)
    expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 3500);
    setIntervalSpy.mockRestore();
  });

  it('should contain a line break', () => {
    const { container } = render(<Title />);
    const br = container.querySelector('br');
    expect(br).toBeInTheDocument();
  });

  it('should cleanup interval on unmount', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval');
    const { unmount } = render(<Title />);

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
