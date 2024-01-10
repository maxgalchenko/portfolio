import { createContext, useContext, useEffect, useState } from 'react';

const BreakpointContext = createContext(false);

const BreakpointProvider = ({ children }: { children: JSX.Element }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1023px)').matches);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <BreakpointContext.Provider value={isMobile}>{children}</BreakpointContext.Provider>;
};

const useBreakpoint = () => {
  return useContext(BreakpointContext);
};

export { BreakpointProvider, useBreakpoint };
