import { Box, Container, Divider, Typography } from "@mui/material";

import React from "react";
import Image from 'next/image';
import BlogCards from "@/components/blogCards";

export default async function BlogPage() {
    return (
        <React.Fragment>
            <BlogCards />
        </React.Fragment>
    );
}