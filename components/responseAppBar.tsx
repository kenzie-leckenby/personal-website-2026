"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeToggleButton } from './themeProvider';
import { Divider } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import Link from 'next/link';


const pages = ['Blog', 'Apps'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
        position="sticky"
        sx={{
        backgroundColor: 'background.default',
        backgroundImage: 'none',
        borderBottom: 1,
        borderColor: 'background.paper',
        boxShadow: 'none'
    }}>
        <Container maxWidth="lg">
            <Toolbar disableGutters>

                {/* ----------------------- */}
                {/* Small Screen Components */}
                {/* ----------------------- */}

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        sx={{color: 'text.primary'}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontWeight: 400,
                    fontFamily: 'inherit',
                    color: 'text.primary'
                    }}
                >
                    Kenzie Leckenby
                </Typography>

                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 0, flexDirection: 'row'}}>
                    <Tooltip title="Change Website Theme">
                        <ThemeToggleButton />
                    </Tooltip>
                </Box>

                {/* ----------------------- */}
                {/* Large Screen Components */}
                {/* ----------------------- */}

                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 4,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 400,
                        fontFamily: 'inherit',
                        color: 'text.primary'
                    }}
                >
                    Kenzie Leckenby
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                    <Divider orientation="vertical" flexItem sx={{mr: 2}} />
                    {pages.map((page) => (
                        <Link key={page} href={'/' + page.toLowerCase()}>
                            <Button
                            sx={{ mr: 2, display: 'block', '&:hover': { backgroundColor: 'action.hover' }}}
                            >
                                {page}
                            </Button>
                        </Link>

                    ))}
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0, flexDirection: 'row', gap: 2}}>
                    <Tooltip title="Change Website Theme">
                        <ThemeToggleButton />
                    </Tooltip>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
