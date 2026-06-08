'use client';
import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/material";

const interests = ['graphics nerd', 'hobby bookbinder', 'college student', 'game modder', 'space lover'];

interface InterestBuffetProps {
    fontSize?: number;
}

function InterestBuffet({ fontSize = 48 }: InterestBuffetProps) {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 5000;
    const [mounted, setMounted] = React.useState(false);
    const [currentInterest, setCurrentInterest] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopIndex, setLoopIndex] = React.useState(0);
    const [charIndex, setCharIndex] = React.useState(0);
    const blink = keyframes`
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    `;

    React.useEffect(() => {
        setMounted(true);
    }, []);

    React.useEffect(() => {
        if (!mounted) return;
        const currentWord = interests[loopIndex % interests.length];
        let typingTimeout: ReturnType<typeof setTimeout>;
        if (!isDeleting && charIndex < currentWord.length) {
            typingTimeout = setTimeout(() => {
                setCurrentInterest((prev) => prev + currentWord[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typeSpeed);
        } else if (isDeleting && charIndex > 0) {
            typingTimeout = setTimeout(() => {
                setCurrentInterest((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, deleteSpeed);
        } else if (charIndex === currentWord.length && !isDeleting) {
            typingTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setLoopIndex((prev) => prev + 1);
        }
        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, loopIndex, mounted]);

    if (!mounted) return <span />;

    return (
        <Typography
        component='span'
        sx={{
        color: 'primary.main',
        WebkitBackgroundClip: 'text',
        fontSize: fontSize,
        '& .blinking-cursor': {
            color: 'text.primary',
            animation: `${blink} 1s step-end infinite`,
        }
        }}>
            <span>A </span>
            {currentInterest}
            <span className="blinking-cursor">|</span>
        </Typography>
    );
}

export default InterestBuffet;