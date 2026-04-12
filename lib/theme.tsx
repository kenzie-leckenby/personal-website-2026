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
        action: {
            hover: 'rgba(255, 255, 255, 0.08)',
            selected: 'rgba(255, 255, 255, 0.16)'
        },
        divider: grey[800],
        mode: 'dark',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: orange[50],
                    textTransform: 'none',
                    fontSize: 16
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: orange[50],
                    textTransform: 'none',
                    fontSize: 16
                }
            }
        }
    }
});

export const LightTheme = createTheme({
    typography: {
        fontFamily: domine.style.fontFamily,
    },
    palette: {
        primary: {
            main: lightGreen[800],
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
        action: {
            hover: 'rgba(0, 0, 0, 0.04)',
            selected: 'rgba(0, 0, 0, 0.08)'
        },
        divider: brown[100],
        mode: 'light',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: grey[900],
                    textTransform: 'none',
                    fontSize: 16
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: grey[900],
                    textTransform: 'none',
                    fontSize: 16
                }
            }
        }
    }
});

