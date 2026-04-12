'use client';

import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Project } from '@/types/project'
import projectData from '@/data/projects.json';
import { Divider, Chip, Box, Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

const projects: Project[] = projectData.projects;


export default function ProjectCard() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            el.scrollLeft += e.deltaY;
            setHasScrolled(true);
        };

        el.addEventListener('wheel', handleWheel, { passive: false });
            return () => el.removeEventListener('wheel', handleWheel);
    }, []);

    const handleScroll = () => {
        if (scrollRef.current && scrollRef.current.scrollLeft > 0) {
            setHasScrolled(true);
        }
    };

    return (
        <React.Fragment>
            <Box sx={{
            display: {xs: 'flex', md: 'none'},
            paddingTop: 2,
            gap: 2,
            flexDirection: 'column',
            }}>
                {projects.map((project) => (
                    <Box key={project.name} component="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer" sx={{ width: '100%', display: 'flex', flexDirection: 'column', padding: 2, borderRadius: '2.5%', '&:hover': { backgroundColor: 'action.hover'}}}>
                        <Typography sx={{
                        fontWeight: 500,
                        fontSize: 18}}>
                            {project.name}
                        </Typography>
                        <Typography sx={{
                        fontWeight: 400,
                        fontSize: 16,
                        color: 'text.secondary'
                        }}>
                            {project.dateStart + ' - ' + project.dateEnd}
                        </Typography>
                        <Divider sx={{mb: 1}}/>

                        <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        mb: 1,
                        }}>
                            {project.skills.map((skill) => (
                                <Chip
                                key={skill}
                                label={skill}
                                variant='outlined'
                                size='small'
                                />
                            ))}
                        </Box>

                        <Typography sx={{
                        fontWeight: 500,
                        fontSize: 18}}>
                            {project.description}
                        </Typography>
                    </Box>
                ))}
            </Box>

            <Box sx={{ position: 'relative', display: { xs: 'none', md: 'flex' } }}>
                <Box ref={scrollRef} onScroll={handleScroll} sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 2,
                paddingTop: 4,
                flexDirection: 'row',
                overflowX: 'auto',
                pb: 1,
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                scrollBehavior: 'smooth',
                }}>

                    {projects.map((project) => (
                        <Box key={project.name} component="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer" sx={{
                            width: 'calc(100% / 3 - 16px)',
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 2, borderRadius: '2.5%',
                            textDecoration: 'none',
                            color: 'inherit',
                            '&:hover': { backgroundColor: 'action.hover'},
                            }}>
                            <Box>
                                <Typography sx={{
                                fontWeight: 500,
                                fontSize: 18}}>
                                    {project.name}
                                </Typography>
                                <Typography sx={{
                                fontWeight: 400,
                                fontSize: 16,
                                color: 'text.secondary'
                                }}>
                                    {project.dateStart + ' - ' + project.dateEnd}
                                </Typography>
                            </Box>

                            <Divider sx={{mb: 1}}/>

                            <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            mb: 1,
                            }}>
                                {project.skills.map((skill) => (
                                    <Chip
                                    key={skill}
                                    label={skill}
                                    variant='outlined'
                                    size='small'
                                    />
                                ))}
                            </Box>

                            <Typography sx={{
                            fontWeight: 500,
                            fontSize: 18}}>
                                {project.description}
                            </Typography>

                        </Box>
                    ))}
                </Box>

                <Box sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                width: 60,
                justifyContent: 'flex-end',
                pl: 1,
                pointerEvents: 'none',
                opacity: hasScrolled ? 0 : 1,
                transition: 'opacity 0.5s ease',
                }}>
                    <ArrowForwardIos sx={{ color: 'text.secondary', animation: hasScrolled ? 'none' : 'nudge 1.2s ease-in-out infinite','@keyframes nudge': {'0%, 100%': { transform: 'translateX(0px)' },'50%': { transform: 'translateX(4px)' },},}} />
                </Box>
            </Box>


        </React.Fragment>
    );
}