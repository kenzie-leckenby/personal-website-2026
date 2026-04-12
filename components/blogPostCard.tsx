import { SubstackPost } from '@/types/substack';
import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Image from 'next/image';

interface PostCardProps {
  post: SubstackPost;
}

/*
export default function PostCard({ post }: PostCardProps) {
    const formattedDate = new Date(post.post_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
        <Typography sx={{
        fontWeight: 500,
        fontSize: 36
        }}>
            {post.title}
        </Typography>
        <Typography sx={{
        fontWeight: 400,
        fontSize: 24
        }}>
            {post.subtitle}
        </Typography>
        <Typography sx={{
        fontWeight: 400,
        fontSize: 12
        }}>
            {formattedDate} - {post.}
        </Typography>

        <Image src={post.cover_image} alt={post.title} width={256} height={256} style={{ borderRadius: '10%', objectFit: 'cover' }}/>
    </Box>
  );
}
*/