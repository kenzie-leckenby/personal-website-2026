import { Box, Container, Divider, Tabs, Typography } from "@mui/material";
import React from "react";
import Image from 'next/image';
import InterestBuffet from "@/components/interestBuffet";
import BasicTabs from "@/components/tabPanel";

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
                    <Image
                        src='/profile_photo.jpg'
                        alt='A picture of me with a foreground of wisteria'
                        width={256} height={256}
                        priority
                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                </Box>

                <Typography sx={{
                fontWeight: 400,
                fontSize: 32,
                }}>
                    Hello World! <br />
                    I'm Kenzie Leckenby <br />
                    <InterestBuffet fontSize={36} />
                </Typography>
            </Container>

            {/* Large Page */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
                <Typography sx={{
                fontWeight: 400,
                fontSize: 48
                }}>
                    Hello World! <br />
                    I'm Kenzie Leckenby <br />
                    <InterestBuffet />
                </Typography>

                {/* Profile photo */}
                <Image src='/profile_photo.jpg' alt='A picture of me with a foreground of wisteria' width={256} height={256} priority style={{ borderRadius: '50%', objectFit: 'cover' }}/>
            </Box>

            <BasicTabs />
        </React.Fragment>
    );
}
