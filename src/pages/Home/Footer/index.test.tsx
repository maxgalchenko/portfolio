import { render, screen } from '../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import Footer from './index';

// Mock child components
vi.mock('../MyLinks', () => ({
  default: () => <div data-testid="my-links">MyLinks</div>,
}));

vi.mock('./GetInTouch', () => ({
  default: () => <div data-testid="get-in-touch">GetInTouch</div>,
}));

describe('Footer', () => {
  it('should render without crashing', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render as a footer element', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('should render GetInTouch component', () => {
    render(<Footer />);
    expect(screen.getByTestId('get-in-touch')).toBeInTheDocument();
  });

  it('should render MyLinks component', () => {
    render(<Footer />);
    expect(screen.getByTestId('my-links')).toBeInTheDocument();
  });

  it('should render both child components', () => {
    render(<Footer />);
    expect(screen.getByTestId('get-in-touch')).toBeInTheDocument();
    expect(screen.getByTestId('my-links')).toBeInTheDocument();
  });
});
