import type { MDXComponents } from 'mdx/types';
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Divider } from '@mui/material';
import * as React from 'react';

const components = {
    body: ({ children }: { children: React.ReactNode }) => {
        return(
            <React.Fragment>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography sx={{
                    fontWeight: 400,
                    fontSize: {xs: 16, md: 18},
                    }}>
                        {children}
                    </Typography>
                </Box>
            </React.Fragment>
        );
    },
    h1: ({ children }: { children: React.ReactNode }) => {
        return(
            <React.Fragment>
                <Typography sx={{
                fontWeight: 400,
                fontSize: {xs: 28, md: 32},
                }}>
                    {children}
                </Typography>
            </React.Fragment>
        );
    },
    h2: ({ children }: { children: React.ReactNode }) => {
        return(
            <React.Fragment>
                <Typography sx={{
                fontWeight: 400,
                fontSize: {xs: 16, md: 18},
                color: 'text.secondary'
                }}>
                    {children}
                </Typography>
                <Divider sx={{mb: 2, mt: 1}} />
            </React.Fragment>
        );
    },
    h3: ({ children }: { children: React.ReactNode }) => {
        return(
            <React.Fragment>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography sx={{
                    fontWeight: 400,
                    fontSize: {xs: 16, md: 18},
                    }}>
                        {children}
                    </Typography>
                </Box>
            </React.Fragment>
        );
    },
    blockquote: ({ children }: { children: React.ReactNode }) => {
        return(
            <React.Fragment>
                <Divider sx={{mt: 4, mb: 4}}/>
                <Box sx={{display: 'flex', justifyContent: 'center', marginLeft: {xs: 2, md: 8}, marginRight: {xs: 2, md: 8}}}>
                    <Typography component='span' sx={{
                    fontWeight: 400,
                    fontSize: {xs: 16, md: 18},
                    fontStyle: 'italic'
                    }}>
                        {children}
                    </Typography>
                </Box>
                <Divider sx={{mt: 2, mb: 4}}/>
            </React.Fragment>
        );
    },
    p: ({ children }: { children: React.ReactNode }) => {
        return(
            <React.Fragment>
                <Typography component='p' sx={{
                fontWeight: 400,
                fontSize: {xs: 16, md: 18},
                mb: 2,
                }}>
                    {children}
                </Typography>
            </React.Fragment>
        );
    },
    hr: () => {
        return(
            <React.Fragment>
                <Divider sx={{mb: 4}}/>
            </React.Fragment>
        );
    },


}

export function useMDXComponents(): MDXComponents {
    return components
}