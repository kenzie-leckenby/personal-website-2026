'use client';

import * as React from 'react';
import { useRef, useState } from 'react';
import { Project } from '@/types/project'
import projectData from '@/data/projects.json';
import { Divider, Chip, Box, Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';

export default function AboutMe () {
    return (
        <React.Fragment>
            <Box sx={{display: {xs: 'flex', md: 'none'}, flexDirection: 'column', alignItems: 'center', gap: 2, marginLeft: 6, marginRight: 6, paddingTop: 2}}>
                <Box sx={{
                    position: 'relative',
                }}>
                    <Image
                    src='/about_me_photo_1.jpg'
                    alt='A picture of me sitting cross-legged on stairs'
                    width={256} height={256}
                    priority
                    style={{ borderRadius: '5%', objectFit: 'cover' }}
                    />
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Typography sx={{
                    fontWeight: 400,
                    fontSize: 18}}>
                        Currently a student at George Mason University majoring in Computer Science with an interest in graphics computing.
                        I am also studying Japanese as part of a minor and currently preparing for the JLPT N3 exam.
                    </Typography>
                    <Typography sx={{
                    fontWeight: 400,
                    fontSize: 18}}>
                        In my freetime you can also find me translating manga, reading books, and making music
                    </Typography>
                </Box>
            </Box>

            <Box sx={{display: {xs: 'none', md: 'flex'}, flexDirection: 'row', justifyContent: 'space-between', gap: 8, paddingTop: 8}}>
                <Image
                src='/about_me_photo_1.jpg'
                alt='A picture of me sitting cross-legged on stairs'
                width={300} height={256}
                priority
                style={{ borderRadius: '2.5%', objectFit: 'cover' }}
                />

                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Typography sx={{
                    fontWeight: 400,
                    fontSize: 24}}>
                        Currently a student at George Mason University majoring in Computer Science with an interest in graphics computing.
                        I am also studying Japanese as part of a minor and currently preparing for the JLPT N3 exam.
                    </Typography>
                    <Typography sx={{
                    fontWeight: 400,
                    fontSize: 24}}>
                        In my freetime you can also find me translating manga, reading books, and making music
                    </Typography>
                </Box>
            </Box>
        </React.Fragment>
    );
}