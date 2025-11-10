import { render, screen } from '../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import SelectedCompanies from './index';
import React from 'react';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    div: ({
      children,
      style,
      ...props
    }: React.PropsWithChildren<{ style?: React.CSSProperties }>) => (
      <div style={style} {...props}>
        {children}
      </div>
    ),
    h2: ({
      children,
      style,
      ...props
    }: React.PropsWithChildren<{ style?: React.CSSProperties }>) => (
      <h2 style={style} {...props}>
        {children}
      </h2>
    ),
  },
  useInView: () => [vi.fn(), { y: '0%' }],
  useSpring: () => ({ opacity: 1 }),
  config: {
    molasses: {},
    slow: {},
  },
}));

// Mock child components
vi.mock('../../../components/common/Spinner', () => ({
  default: () => <div data-testid="spinner">Spinner</div>,
}));

vi.mock('./CompaniesList', () => ({
  default: () => <div data-testid="companies-list">CompaniesList</div>,
}));

describe('SelectedCompanies', () => {
  it('should render without crashing', () => {
    const { container } = render(<SelectedCompanies />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render as a section element', () => {
    const { container } = render(<SelectedCompanies />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it('should render "Selected Companies" title', () => {
    render(<SelectedCompanies />);
    expect(screen.getByText('Selected Companies')).toBeInTheDocument();
  });

  it('should render Spinner component', () => {
    render(<SelectedCompanies />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render CompaniesList component', () => {
    render(<SelectedCompanies />);
    expect(screen.getByTestId('companies-list')).toBeInTheDocument();
  });

  it('should have correct structure with title container', () => {
    const { container } = render(<SelectedCompanies />);
    const h2 = container.querySelector('h2');
    expect(h2).toHaveTextContent('Selected Companies');
  });
});
