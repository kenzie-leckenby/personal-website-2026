import { Box, Container, Divider, Typography } from "@mui/material";

import React from "react";
import Image from 'next/image';

export default async function BlogPage() {
    return (
        <React.Fragment>
            <Container sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', marginBottom: 2}}>
                {/* Profile photo */}
                <Image src='/profile_photo.jpg' alt='A picture of me with a foreground of wisteria' width={256} height={256} style={{ borderRadius: '10%', objectFit: 'cover', marginBottom: 32}}/>

                <Typography sx={{
                fontWeight: 400,
                fontSize: 36
                }}>
                    Hello World! <br />
                    I'm Kenzie Leckenby <br />
                </Typography>
            </Container>

            <Box  sx={{ display: { xs: 'none', md: 'flex' }, marginBottom: 8, gap: 8}}>
                {/* Profile photo */}
                <Image src='/profile_photo.jpg' alt='A picture of me with a foreground of wisteria' width={200} height={200} style={{ borderRadius: '10%', objectFit: 'cover' }}/>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{
                        fontWeight: 400,
                        fontSize: 32
                        }}>
                            Sample Blog Post <br />
                        </Typography>
                        <Typography sx={{
                        fontWeight: 400,
                        fontSize: 20
                        }}>
                            A sample subtitle for a blog post that doesn't exist yet <br />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{
                        fontWeight: 400,
                        fontSize: 20
                        }}>
                            April 11, 2026
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Divider />


        </React.Fragment>
    );
}