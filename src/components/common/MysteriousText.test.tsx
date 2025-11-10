import { render, screen } from '../../test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import MysteriousText from './MysteriousText';
import React from 'react';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    span: ({
      children,
      style,
      ...props
    }: React.PropsWithChildren<{ style?: React.CSSProperties }>) => (
      <span style={style} {...props}>
        {children}
      </span>
    ),
  },
  useSpring: () => ({
    opacity: 1,
  }),
}));

beforeEach(() => {
  // Mock Math.random for consistent tests
  vi.spyOn(Math, 'random').mockReturnValue(0.5);
});

describe('MysteriousText', () => {
  it('should render the text content', () => {
    const { container } = render(<MysteriousText>Hello World</MysteriousText>);
    expect(screen.getByText('H')).toBeInTheDocument();
    expect(screen.getByText('e')).toBeInTheDocument();
    expect(screen.getAllByText('l').length).toBeGreaterThan(0);
    expect(screen.getAllByText('o').length).toBeGreaterThan(0);
    expect(container.textContent).toBe('Hello World');
  });

  it('should split text into individual characters', () => {
    const { container } = render(<MysteriousText>Test</MysteriousText>);
    const spans = container.querySelectorAll('span');
    expect(spans).toHaveLength(4);
  });

  it('should render each character as a separate span', () => {
    const text = 'ABC';
    const { container } = render(<MysteriousText>{text}</MysteriousText>);
    const spans = container.querySelectorAll('span');

    expect(spans[0]).toHaveTextContent('A');
    expect(spans[1]).toHaveTextContent('B');
    expect(spans[2]).toHaveTextContent('C');
  });

  it('should handle empty string', () => {
    const { container } = render(<MysteriousText>{''}</MysteriousText>);
    const spans = container.querySelectorAll('span');
    expect(spans).toHaveLength(0);
  });

  it('should handle spaces in text', () => {
    const { container } = render(<MysteriousText>A B</MysteriousText>);
    const spans = container.querySelectorAll('span');
    expect(spans).toHaveLength(3);
    // Check that the text content includes the space
    expect(container.textContent).toBe('A B');
  });

  it('should wrap text in a paragraph element', () => {
    const { container } = render(<MysteriousText>Test</MysteriousText>);
    const paragraph = container.querySelector('p');
    expect(paragraph).toBeInTheDocument();
  });
});
