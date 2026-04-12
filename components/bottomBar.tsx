import { AppBar, Container, Toolbar, Typography, Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function BottomBar () {
    return(
        <AppBar
            position="static"
            sx={{
            backgroundColor: 'background.default',
            backgroundImage: 'none',
            borderTop: 1,
            borderColor: 'background.paper',
            boxShadow: 'none'
        }}>
            <Container disableGutters maxWidth='lg'>
                <Toolbar disableGutters sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: 14,
                        color: 'text.secondary'
                    }}>
                        © 2026 Kenzie Leckenby. All rights reserved.
                    </Typography>

                    <Box sx={{display: 'flex', gap: 2}}>
                        <IconButton component='a' href='https://www.linkedin.com/in/kenzie-leckenby/' target='_blank' rel='noopener noreferrer'>
                            <LinkedInIcon sx={{color: 'text.secondary'}}/>
                        </IconButton>
                        <IconButton component='a' href='https://github.com/kenzie-leckenby' target='_blank' rel='noopener noreferrer'>
                            <GitHubIcon sx={{color: 'text.secondary'}}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}