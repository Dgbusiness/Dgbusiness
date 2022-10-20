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
                background: `radial-gradient(circle, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 100%)`,
                color: 'white',
                flexWrap: 'wrap',
                flexDirection: {xs: 'column', sm: 'row'},
                justifyContent: 'space-around',
                textAlign: 'center',
                py: 1,
                gap: { xs: 2, sm: 0 }
            }}
        >
            <Box sx={{ display: { xs: 'flex', md: 'none'}, width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Box>
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
                    display='flex'
                    sx={{
                        alignItems: 'center'
                    }}>
                    <GitHubIcon 
                        fontSize='medium'
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
                        fontSize='medium'
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
                        fontSize='medium'
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
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex'}, width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'  }}>
                <Box >
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
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        textAlign: 'center'
                    }}>
                    <Typography 
                        variant="body1"
                        sx={{
                            fontFamily: 'Roboto',
                            color: 'inherit',
                            textDecoration: 'none',
                            justifyContent:'center',
                            alignItems: 'center'
                        }}>
                        Copyright &#169; 2022 Daniel Giannotti. All Rights Reserved.
                    </Typography>
                </Box>
                <Box
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
            </Box>
            <Box 
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    justifyContent:'center',
                    alignItems: 'center'
                }}>
                <Typography 
                    variant="body1"
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
