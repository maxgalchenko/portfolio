import { render } from '../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import Advantage from './Advantage';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    p: ({ children, style, ...props }: any) => (
      <p style={style} {...props}>
        {children}
      </p>
    ),
  },
  useSpring: () => ({ backgroundPositionX: '100%' }),
  config: {
    slow: {},
  },
}));

describe('Advantage', () => {
  it('should render without crashing', () => {
    const { container } = render(<Advantage title="Test Advantage" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render the title', () => {
    const { container } = render(<Advantage title="Test Advantage" />);
    expect(container.textContent).toBe('Test Advantage');
  });

  it('should render as a paragraph element', () => {
    const { container } = render(<Advantage title="Another Title" />);
    const p = container.querySelector('p');
    expect(p).toBeInTheDocument();
  });

  it('should setup scroll event listener', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    render(<Advantage title="Test" />);

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );
    addEventListenerSpy.mockRestore();
  });

  it('should cleanup scroll event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = render(<Advantage title="Test" />);

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );
    removeEventListenerSpy.mockRestore();
  });

  it('should render different titles', () => {
    const { container, rerender } = render(<Advantage title="First Title" />);
    expect(container.textContent).toBe('First Title');

    rerender(<Advantage title="Second Title" />);
    expect(container.textContent).toBe('Second Title');
  });
});
