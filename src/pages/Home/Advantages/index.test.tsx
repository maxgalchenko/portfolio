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
      screen.getByText('Scalable Front-End Architecture')
    ).toBeInTheDocument();
    expect(screen.getByText('Product-Driven Engineering')).toBeInTheDocument();
    expect(
      screen.getByText('Technical Leadership & Mentorship')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Champion for Web Accessibility (WCAG)')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Expert in Performance Optimization')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Driving Quality with TDD & CI/CD')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Disciplined & Analytical Problem-Solving')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Proven Reliability & Client Success')
    ).toBeInTheDocument();
  });
});
