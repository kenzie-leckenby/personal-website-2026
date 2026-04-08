import { lightGreen, orange, grey, brown, amber } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Domine } from 'next/font/google';

export const domine = Domine({
  subsets: ['latin'],
});

export const DarkTheme = createTheme({
    typography: {
        fontFamily: domine.style.fontFamily,
    },
    palette: {
            primary: {
                main: lightGreen[400],
                contrastText: orange[50],
            },
            secondary: {
                main: orange[300],
                contrastText: orange[50],
            },
            info: {
                main: orange[500],
                contrastText: orange[50],
            },
            background: {
                default: grey[900],
                paper: grey[800],
            },
            text: {
                primary: orange[50],
                secondary: brown[100]
            },
            divider: grey[800],
            mode: 'dark', 
    },
});

export const LightTheme = createTheme({
    typography: {
        fontFamily: domine.style.fontFamily,
    },
    palette: {
            primary: {
                main: lightGreen[300],
            },
            secondary: {
                main: orange[300],
            },
            info: {
                main: orange[500] 
            },
            background: {
                default: amber[50],
                paper: brown[100],
            },
            text: {
                primary: grey[900],
                secondary: grey[800]
            },
            divider: brown[100],
            mode: 'light', 
    },
});

