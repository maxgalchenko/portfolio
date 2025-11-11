import { render, screen } from '../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import Advantages from './index';

// Mock Advantage component
vi.mock('./Advantage', () => ({
  default: ({ title }: { title: string }) => (
    <div data-testid="advantage">{title}</div>
  ),
}));

describe('Advantages', () => {
  it('should render without crashing', () => {
    const { container } = render(<Advantages />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render as an unordered list', () => {
    const { container } = render(<Advantages />);
    const ul = container.querySelector('ul');
    expect(ul).toBeInTheDocument();
  });

  it('should render 8 advantages', () => {
    render(<Advantages />);
    const advantages = screen.getAllByTestId('advantage');
    expect(advantages).toHaveLength(8);
  });

  it('should render each advantage in a list item', () => {
    const { container } = render(<Advantages />);
    const listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(8);
  });

  it('should render all advantage titles', () => {
    render(<Advantages />);
    expect(
      screen.getByText('Micro-Frontend Architecture & Module Federation')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Design Systems & Component Libraries')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Enterprise-Scale React & TypeScript')
    ).toBeInTheDocument();
    expect(
      screen.getByText('95+ Lighthouse Scores & Core Web Vitals')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Technical Leadership & Team Mentorship')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Accessibility-First Development (WCAG)')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Test-Driven Development & CI/CD Pipelines')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Top 3% on Upwork for Client Satisfaction')
    ).toBeInTheDocument();
  });
});
