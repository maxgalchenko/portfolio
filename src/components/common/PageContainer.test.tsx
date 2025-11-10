import { render, screen } from '../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import PageContainer from './PageContainer';

// Mock the Header component
vi.mock('../../pages/Home/Hero/Header', () => ({
  default: () => <div data-testid="header">Header</div>,
}));

describe('PageContainer', () => {
  it('should render children', () => {
    render(
      <PageContainer>
        <div>Test Content</div>
      </PageContainer>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should render Header component', () => {
    render(
      <PageContainer>
        <div>Content</div>
      </PageContainer>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should render multiple children', () => {
    render(
      <PageContainer>
        <div>First Child</div>
        <div>Second Child</div>
        <div>Third Child</div>
      </PageContainer>
    );
    expect(screen.getByText('First Child')).toBeInTheDocument();
    expect(screen.getByText('Second Child')).toBeInTheDocument();
    expect(screen.getByText('Third Child')).toBeInTheDocument();
  });

  it('should render with nested components', () => {
    render(
      <PageContainer>
        <div>
          <h1>Title</h1>
          <p>Paragraph</p>
        </div>
      </PageContainer>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
  });

  it('should have proper structure with container div', () => {
    const { container } = render(
      <PageContainer>
        <div>Content</div>
      </PageContainer>
    );
    const containerDiv = container.firstChild;
    expect(containerDiv).toBeInTheDocument();
  });
});
