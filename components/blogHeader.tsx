import * as React from 'react';
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Divider } from '@mui/material';
import BlogData from '@/data/blogs.json'
import { Blog } from '@/types/blog'

const blogs: Blog[] = BlogData.blogs;

export default function BlogHeader({ title }: { title: string }) {
    const blogData = blogs.find((blog) => blog.title === title);
    return (
        <React.Fragment>
            <Typography sx={{
            fontWeight: 400,
            fontSize: {xs: 28, md: 32},
            }}>
                {blogData?.title}
            </Typography>
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-between'}}>
                <Typography sx={{
                fontWeight: 400,
                fontSize: {xs: 16, md: 18},
                color: 'text.secondary',
                }}>
                    {blogData?.subtitle}
                </Typography>
                <Typography sx={{
                fontWeight: 400,
                fontSize: {xs: 16, md: 18},
                color: 'text.secondary'
                }}>
                    {blogData?.date}
                </Typography>
            </Box>

            <Divider sx={{mb: 2, mt: 1}} />
        </React.Fragment>
    );
}
