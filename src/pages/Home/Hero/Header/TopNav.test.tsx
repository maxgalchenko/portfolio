import { render, screen } from '../../../../test-utils';
import { describe, it, expect, vi } from 'vitest';
import TopNav from './TopNav';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    span: ({ children, style, ...props }: any) => (
      <span style={style} {...props}>
        {children}
      </span>
    ),
    div: ({ children, style, ...props }: any) => (
      <div style={style} {...props}>
        {children}
      </div>
    ),
  },
  useTrail: (length: number) => Array(length).fill({ y: 0, opacity: 1 }),
  useSpring: () => ({ opacity: 1 }),
  config: {
    slow: {},
  },
}));

// Mock DownloadCV
vi.mock('./DownloadCV', () => ({
  default: ({ format, href }: { format: string; href: string }) => (
    <a href={href} data-testid={`download-cv-${format}`}>
      {format}
    </a>
  ),
}));

describe('TopNav', () => {
  it('should render without crashing', () => {
    const { container } = render(<TopNav />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render as a nav element', () => {
    const { container } = render(<TopNav />);
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('should render full name', () => {
    const { container } = render(<TopNav />);
    const text = container.textContent || '';
    // Name is rendered as individual spans, so check for parts
    expect(text).toContain('Max');
    expect(text).toContain('Galchenko');
  });

  it('should render name as link to home', () => {
    const { container } = render(<TopNav />);
    const links = container.querySelectorAll('a');
    // First link is the name link
    const nameLink = Array.from(links).find((link) =>
      link.textContent?.includes('Max')
    );
    expect(nameLink).toHaveAttribute('href', '/');
  });

  it('should render "Download CV:" text', () => {
    render(<TopNav />);
    expect(screen.getByText('Download CV:')).toBeInTheDocument();
  });

  it('should render PDF download link', () => {
    render(<TopNav />);
    const pdfLink = screen.getByTestId('download-cv-.pdf');
    expect(pdfLink).toBeInTheDocument();
    expect(pdfLink).toHaveAttribute(
      'href',
      '/Max_Senior_Frontend_Engineer_React_Resume.pdf'
    );
  });

  it('should render DOCX download link', () => {
    render(<TopNav />);
    const docxLink = screen.getByTestId('download-cv-.docx');
    expect(docxLink).toBeInTheDocument();
    expect(docxLink).toHaveAttribute(
      'href',
      '/Max_Senior_Frontend_Engineer_React_Resume.docx'
    );
  });

  it('should have h2 element', () => {
    const { container } = render(<TopNav />);
    const h2 = container.querySelector('h2');
    expect(h2).toBeInTheDocument();
  });
});
