import { render, screen } from '../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import Home from './index';

// Mock all child components
vi.mock('../../components/common/PageContainer', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="page-container">{children}</div>
  ),
}));

vi.mock('./Hero', () => ({
  default: () => <div data-testid="hero">Hero</div>,
}));

vi.mock('./Advantages', () => ({
  default: () => <div data-testid="advantages">Advantages</div>,
}));

vi.mock('./SelectedCompanies', () => ({
  default: () => <div data-testid="selected-companies">SelectedCompanies</div>,
}));

vi.mock('./Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

describe('Home', () => {
  it('should render without crashing', () => {
    render(<Home />);
    expect(screen.getByTestId('page-container')).toBeInTheDocument();
  });

  it('should render main element', () => {
    const { container } = render(<Home />);
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
  });

  it('should render Hero component', () => {
    render(<Home />);
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  it('should render Advantages component', () => {
    render(<Home />);
    expect(screen.getByTestId('advantages')).toBeInTheDocument();
  });

  it('should render SelectedCompanies component', () => {
    render(<Home />);
    expect(screen.getByTestId('selected-companies')).toBeInTheDocument();
  });

  it('should render Footer component', () => {
    render(<Home />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render components in correct order', () => {
    const { container } = render(<Home />);
    const main = container.querySelector('main');
    const children = main?.children;

    expect(children?.[0]).toHaveAttribute('data-testid', 'hero');
    expect(children?.[1]).toHaveAttribute('data-testid', 'advantages');
    expect(children?.[2]).toHaveAttribute('data-testid', 'selected-companies');
  });
});
