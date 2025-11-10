import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock the router and pages
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    RouterProvider: () => (
      <div data-testid="router-provider">Router Provider</div>
    ),
    createBrowserRouter: vi.fn(() => ({})),
  };
});

vi.mock('./components/common/PageTransition', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock('./pages/Home', () => ({
  default: () => <div>Home Page</div>,
}));

vi.mock('./pages/Company', () => ({
  default: () => <div>Company Page</div>,
}));

vi.mock('./theme/GlobalStyles', () => ({
  default: () => null,
}));

vi.mock('./theme/EmotionTheme', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock('./hooks/useBreakpoint', () => ({
  BreakpointProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  useBreakpoint: () => false,
}));

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('router-provider')).toBeInTheDocument();
  });

  it('should initialize router provider', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('should wrap content with providers', () => {
    render(<App />);
    expect(screen.getByTestId('router-provider')).toBeInTheDocument();
  });

  it('should have skip to main content link', () => {
    render(<App />);
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('skip link should be positioned off-screen by default', () => {
    render(<App />);
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toHaveStyle({ left: '-9999px' });
  });
});
