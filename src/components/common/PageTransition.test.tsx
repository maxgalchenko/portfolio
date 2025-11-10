import { render, screen } from '../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import PageTransition from './PageTransition';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    div: ({ children, style, ...props }: any) => (
      <div style={style} {...props}>
        {children}
      </div>
    ),
  },
  useTransition: (children: any) => {
    // Return a function that mimics the transitions render prop
    return (renderCallback: (style: any, item: any) => any) => {
      return renderCallback({}, children);
    };
  },
  config: {
    default: {},
  },
}));

// Mock ScrollRestoration
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    ScrollRestoration: () => <div data-testid="scroll-restoration" />,
  };
});

describe('PageTransition', () => {
  it('should render children', () => {
    render(
      <PageTransition>
        <div>Page Content</div>
      </PageTransition>
    );
    expect(screen.getByText('Page Content')).toBeInTheDocument();
  });

  it('should render ScrollRestoration component', () => {
    render(
      <PageTransition>
        <div>Content</div>
      </PageTransition>
    );
    expect(screen.getByTestId('scroll-restoration')).toBeInTheDocument();
  });

  it('should render with multiple child elements', () => {
    render(
      <PageTransition>
        <div>
          <h1>Title</h1>
          <p>Description</p>
        </div>
      </PageTransition>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('should render with React fragments', () => {
    render(
      <PageTransition>
        <>
          <div>First</div>
          <div>Second</div>
        </>
      </PageTransition>
    );
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });

  it('should handle null children gracefully', () => {
    const { container } = render(<PageTransition>{null}</PageTransition>);
    expect(container).toBeInTheDocument();
  });
});
