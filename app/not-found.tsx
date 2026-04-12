import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Image from 'next/image';
import InterestBuffet from "@/components/interestBuffet";

export default function Home() {
    return (
        <React.Fragment>
            {/* Small Page */}
            <Container sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', marginBottom: 2, justifyContent: 'center', alignItems: 'center'}}>
                {/* Profile photo */}
                <Box sx={{
                    position: 'relative',
                    marginBottom: 4,
                }}>
                    <Image src='/page_not_found.gif' alt='A meme of Marin from My Dress-Up Darling' width={256} height={256} unoptimized style={{ borderRadius: '50%', objectFit: 'cover' }}/>
                </Box>

                <Typography sx={{
                fontWeight: 400,
                fontSize: 36,
                }}>
                    404 - Page Not Found
                </Typography>
            </Container>

            {/* Large Page */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
                <Typography sx={{
                fontWeight: 400,
                fontSize: 48
                }}>
                    404 - Page Not Found
                </Typography>

                {/* Profile photo */}
                <Image src='/page_not_found.gif' alt='A meme of Marin from My Dress-Up Darling' width={256} height={256} unoptimized style={{ borderRadius: '50%', objectFit: 'cover' }}/>
            </Box>

            <Divider />
        </React.Fragment>
    );
}