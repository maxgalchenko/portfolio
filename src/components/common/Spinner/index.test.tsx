import { render } from '../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import Spinner from './index';

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
    rotate: 0,
  }),
}));

// Mock the SVG import
vi.mock('./spinner.svg', () => ({
  default: 'test-spinner.svg',
}));

describe('Spinner', () => {
  it('should render spinner image', () => {
    const { container } = render(
      <Spinner animationDuration={1000} animationDirection="forward" />
    );
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
  });

  it('should have correct image source', () => {
    const { container } = render(
      <Spinner animationDuration={1000} animationDirection="forward" />
    );
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', 'test-spinner.svg');
  });

  it('should have empty alt text for decorative image', () => {
    const { container } = render(
      <Spinner animationDuration={1000} animationDirection="forward" />
    );
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('alt', '');
  });

  it('should render with forward animation direction', () => {
    const { container } = render(
      <Spinner animationDuration={1000} animationDirection="forward" />
    );
    expect(container.firstChild).toBeInTheDocument();
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
  });

  it('should render with backward animation direction', () => {
    const { container } = render(
      <Spinner animationDuration={2000} animationDirection="backward" />
    );
    expect(container.firstChild).toBeInTheDocument();
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
  });

  it('should accept different animation durations', () => {
    const { container, rerender } = render(
      <Spinner animationDuration={500} animationDirection="forward" />
    );
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();

    rerender(<Spinner animationDuration={3000} animationDirection="forward" />);
    const img2 = container.querySelector('img');
    expect(img2).toBeInTheDocument();
  });
});
