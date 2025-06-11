import React, { createContext, useContext } from 'react';

interface SmoothScrollContextType {
  handleSmoothScroll: (event: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | undefined>(undefined);

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider');
  }
  return context;
};

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handleSmoothScroll = (event: React.MouseEvent<HTMLElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ handleSmoothScroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}; 