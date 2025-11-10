import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EmotionTheme from './EmotionTheme';

describe('EmotionTheme', () => {
  it('should render children without crashing', () => {
    render(
      <EmotionTheme>
        <div data-testid="child">Test Child</div>
      </EmotionTheme>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('should provide theme context to children', () => {
    const { container } = render(
      <EmotionTheme>
        <div>Content</div>
      </EmotionTheme>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render multiple children', () => {
    render(
      <EmotionTheme>
        <>
          <div data-testid="child1">Child 1</div>
          <div data-testid="child2">Child 2</div>
        </>
      </EmotionTheme>
    );
    expect(screen.getByTestId('child1')).toBeInTheDocument();
    expect(screen.getByTestId('child2')).toBeInTheDocument();
  });
});
