import { render, screen } from '../../../../test-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import DownloadCV from './DownloadCV';

// Mock react-spring
vi.mock('@react-spring/web', () => ({
  a: {
    a: ({ children, style, ...props }: any) => (
      <a style={style} {...props}>
        {children}
      </a>
    ),
  },
  useSpring: () => ({
    color: '#FFFFFF',
    backgroundColor: 'transparent',
  }),
  config: {
    stiff: {},
  },
}));

describe('DownloadCV', () => {
  it('should render without crashing', () => {
    render(<DownloadCV format=".pdf" href="/test.pdf" />);
    expect(screen.getByText('.pdf')).toBeInTheDocument();
  });

  it('should render the format text', () => {
    render(<DownloadCV format=".docx" href="/test.docx" />);
    expect(screen.getByText('.docx')).toBeInTheDocument();
  });

  it('should have correct href', () => {
    render(<DownloadCV format=".pdf" href="/resume.pdf" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/resume.pdf');
  });

  it('should have download attribute', () => {
    render(<DownloadCV format=".pdf" href="/test.pdf" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('download');
  });

  it('should handle hover state', async () => {
    const user = userEvent.setup();
    render(<DownloadCV format=".pdf" href="/test.pdf" />);
    const link = screen.getByRole('link');

    await user.hover(link);
    expect(link).toBeInTheDocument();

    await user.unhover(link);
    expect(link).toBeInTheDocument();
  });

  it('should render different formats', () => {
    const { rerender } = render(<DownloadCV format=".pdf" href="/test.pdf" />);
    expect(screen.getByText('.pdf')).toBeInTheDocument();

    rerender(<DownloadCV format=".docx" href="/test.docx" />);
    expect(screen.getByText('.docx')).toBeInTheDocument();
  });
});
