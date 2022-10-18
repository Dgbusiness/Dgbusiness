import React from 'react'
import { Box, Typography, Icon } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BsStackOverflow } from 'react-icons/bs';


const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
}

const Footer = () => {

    return (
        <Box 
            id="footer"
            display='flex'
            sx={{
                height: 80,
                background: `radial-gradient(circle, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 100%)`,
                color: 'white',
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                px: 5
            }}
        >
            <Box width='40%'>
                <Typography
                    variant="h3"
                    component="a"
                    href="/"
                    sx={{
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    DG
                </Typography>
            </Box>
            <Box
                width='20%'
                display='flex'
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <GitHubIcon 
                    fontSize='large'
                    cursor='pointer' 
                    onClick={() => openInNewTab('https://github.com/dgbusiness')}
                    sx={{
                        '&:hover': {
                            transform: 'scale3d(1.2, 1.2, 1)'
                        },
                        mx: 1
                    }}
                />
                <LinkedInIcon 
                    fontSize='large'
                    cursor='pointer' 
                    onClick={() => openInNewTab('https://www.linkedin.com/in/daniel-giannotti-646950136/')}
                    sx={{
                        '&:hover': {
                            transform: 'scale3d(1.2, 1.2, 1)'
                        },
                        mx: 1
                    }}
                />
                <Icon 
                    fontSize='large'
                    onClick={() => openInNewTab('https://stackoverflow.com/users/12103611/dgbusiness')}
                    sx={{
                        '&:hover': {
                            transform: 'scale3d(1.2, 1.2, 1)'
                        },
                        mx: 1,
                        cursor: 'pointer'
                    }}
                >
                    <BsStackOverflow /> 
                </Icon>
            </Box>
            <Box width='40%'
                display='flex'
                sx={{
                    justifyContent:'right',
                    alignItems: 'center'
                }}>
                <Typography 
                    variant="body1"
                    component="a"
                    href="/"
                    sx={{
                        fontFamily: 'Roboto',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                    Copyright &#169; 2022 Daniel Giannotti. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
