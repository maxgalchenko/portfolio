// emotion.d.ts

import '@emotion/react';

type ColorPalette = { [key: string]: string };

type ViewportUnits = {
  m: (px: number) => string;
  d: (px: number) => string;
};

type FlexStyles = {
  center: {
    display: 'flex';
    alignItems: 'center';
    justifyContent: 'center';
  };
  between: {
    display: 'flex';
    alignItems: 'center';
    justifyContent: 'space-between';
  };
};

type Theme = {
  color: ColorPalette;
  vw: ViewportUnits;
  flex: FlexStyles;
  media: {
    m: string;
    d: string;
  };
};

declare module '@emotion/react' {
  export interface Theme {
    color: ColorPalette;
    vw: ViewportUnits;
    flex: FlexStyles;
    media: {
      m: string;
      d: string;
    };
  }
}
