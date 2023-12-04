import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EmotionTheme from './theme/EmotionTheme';
import GlobalStyles from './theme/GlobalStyles';
import { BreakpointProvider } from './hooks/useBreakpoint';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />

    <EmotionTheme>
      <BreakpointProvider>
        <App />
      </BreakpointProvider>
    </EmotionTheme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
