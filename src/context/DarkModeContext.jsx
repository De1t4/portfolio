import React, { useState, useContext } from 'react';
import { DarkModeContext } from './ContextDark';


export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
