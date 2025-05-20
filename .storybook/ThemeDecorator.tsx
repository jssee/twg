import React from 'react';
import { useEffect, useState } from 'react';

// Theme decorator component that wraps stories
export const ThemeDecorator = (Story: React.ComponentType, context: any) => {
  const { globals } = context;
  const [theme, setTheme] = useState(globals.theme);

  // Apply the theme class to the body element
  useEffect(() => {
    const body = document.body;
    body.classList.remove('light', 'dark');
    body.classList.add(theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  // Update the theme when the global theme changes
  useEffect(() => {
    setTheme(globals.theme);
  }, [globals.theme]);

  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="bg-background text-foreground p-6 min-h-screen">
        <Story />
      </div>
    </div>
  );
};