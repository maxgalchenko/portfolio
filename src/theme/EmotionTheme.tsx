import { ThemeProvider } from '@emotion/react';
import { ReactElement } from 'react';
import { Theme } from '../types/emotion';

const theme: Theme = {
  color: {
    white: '#ffffff',
    black: '#000000',
    black2: '#111111',
  },

  vw: {
    m: (px: number) => `${(px / 375) * 100}vw`,
    d: (px: number) => `${(px / 1920) * 100}vw`,
  },

  flex: {
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    between: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },

  mediaDesktop: '@media (min-width: 1280px)',
};

const EmotionTheme = ({ children }: { children: ReactElement }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default EmotionTheme;
