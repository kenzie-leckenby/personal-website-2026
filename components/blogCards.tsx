import { Box, Container, Divider, Typography, Chip } from "@mui/material";
import React from "react";
import Image from 'next/image';
import { Blog } from '@/types/blog'
import BlogData from '@/data/blogs.json';

const blogs: Blog[] = BlogData.blogs;

export default function BlogCards() {
    return (
        <React.Fragment>
            <Box sx={{display: {xs: 'flex', md: 'none'}, flexDirection: 'column', gap: 2}}>
                {blogs.map((blog) => (
                    <Box key={blog.title} component='a' href={'blog/' + blog.title.toLowerCase().replaceAll(' ', '-')} rel="noopener noreferrer" sx={{padding: 2, width: '100%', borderRadius: 4, '&:hover': { backgroundColor: 'action.hover'}}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                            <Box sx={{display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'space-between'}}>
                                <Typography sx={{
                                fontWeight: 400,
                                fontSize: 20
                                }}>
                                    {blog.title}
                                </Typography>
                                <Typography sx={{
                                fontWeight: 400,
                                fontSize: 14,
                                }}>
                                    {blog.date}
                                </Typography>
                            </Box>
                            <Divider sx={{mt: 1}} />
                            <Typography sx={{
                            fontWeight: 400,
                            fontSize: 14,
                            color: 'text.secondary',
                            mt: 1
                            }}>
                                {blog.subtitle}
                            </Typography>
                        </Box>

                        <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        mb: 1,
                        mt: 1,
                        }}>
                            {blog.topics.map((topic) => (
                                <Chip
                                key={topic}
                                label={topic}
                                variant='outlined'
                                size='small'
                                />
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box sx={{display: {xs: 'none', md: 'flex'}, flexDirection: 'column', gap: 2}}>
                {blogs.map((blog) => (
                    <Box key={blog.title} component='a' href={'blog/' + blog.title.toLowerCase().replaceAll(' ', '-')} rel="noopener noreferrer" sx={{padding: 2, width: '100%', borderRadius: 4, '&:hover': { backgroundColor: 'action.hover'}}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                            <Box sx={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Typography sx={{
                                fontWeight: 400,
                                fontSize: 24
                                }}>
                                    {blog.title}
                                </Typography>
                                <Typography sx={{
                                fontWeight: 400,
                                fontSize: 16,
                                }}>
                                    {blog.date}
                                </Typography>
                            </Box>
                            <Divider />
                            <Typography sx={{
                            fontWeight: 400,
                            fontSize: 16,
                            color: 'text.secondary',
                            mt: 1
                            }}>
                                {blog.subtitle}
                            </Typography>
                        </Box>

                        <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        mb: 1,
                        mt: 1,
                        }}>
                            {blog.topics.map((topic) => (
                                <Chip
                                key={topic}
                                label={topic}
                                variant='outlined'
                                size='small'
                                />
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </React.Fragment>
    );
}
