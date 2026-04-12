import * as React from 'react';
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Divider } from '@mui/material';


export default function MdxLayout({ children }: { children: React.ReactNode }) {


    return (
        <React.Fragment>
            <Container maxWidth='md'>
                {children}
            </Container>
        </React.Fragment>
    );
}