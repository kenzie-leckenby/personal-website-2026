"use client";

import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LightTheme, DarkTheme } from '@/lib/theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';

const ColorModeContext = createContext({ toggleTheme: () => {}, isDark: false });
const useColorMode = () => useContext(ColorModeContext);

export function ThemeToggleButton() {
    const { toggleTheme, isDark } = useColorMode();
    
    return(
        <IconButton onClick={toggleTheme} sx={{color: 'text.primary'}}>
            {isDark ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
};

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
    const toggleTheme = () => setIsDark(prev => !prev);
    const [isDark, setIsDark] = useState(false);

    return (
        <ColorModeContext.Provider value={{ toggleTheme, isDark }}>
        <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
        </ColorModeContext.Provider>
    );
}