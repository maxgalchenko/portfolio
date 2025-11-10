import { render, screen } from '../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import Hero from './index';

// Mock child components
vi.mock('./Title', () => ({
  default: () => <h1 data-testid="title">Title</h1>,
}));

vi.mock('./Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

describe('Hero', () => {
  it('should render without crashing', () => {
    const { container } = render(<Hero />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render as a section element', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('should render Title component', () => {
    render(<Hero />);
    expect(screen.getByTestId('title')).toBeInTheDocument();
  });

  it('should render Footer component', () => {
    render(<Hero />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render both Title and Footer', () => {
    render(<Hero />);
    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
