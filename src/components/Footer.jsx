import React from 'react'
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {

    return (
        <Box 
            id="footer"
            sx={{
                height: { xs: "100vh", sm: "110vh", md: "10vh" },
                background: `radial-gradient(circle, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 100%)`,
                color: 'white',
            }}
        >
        </Box>
    )
}

export default Footer
