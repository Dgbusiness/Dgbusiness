import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Box, Typography } from "@mui/material";
import { options } from '../utils/ParticlesOptions.jsx';
import Carousel from 'react-material-ui-carousel'
import bg from '../assets/img/bg.png';

const HeroBanner = () => {
    const particlesInit = useCallback(async (engine) => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //await console.log(container);
    }, []);

    const skills = [
        {id: 0, value: "Web"},
        {id: 1, value: "Mobile"},
        {id: 2, value: "Videogame"},
    ]

    return (
        <Box 
            display='flex'
            id="back-to-top-anchor"
            alignItems="center"
            sx={{
                justifyContent: { xs: 'center', md: 'flex-start' },
                height: { xs: "100vh", sm: "100vh", md: "110vh" },
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                //background: `radial-gradient(circle, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 100%)`,
            }}
        >
            <Particles 
                id="tsparticles"
                init={particlesInit} 
                loaded={particlesLoaded} 
                options={options}
            />
            <Box
                display='flex'
                sx={{
                    flexDirection: 'column',
                    textAlign: { xs:"center", sm:"center", md:"left"},
                    marginTop: { xs: 15, sm: 20, md: 0 },
                    ml: { md: 5 }
                }}
            >
                <Typography 
                    color="white"
                    fontFamily="Alkalami"
                    sx={{
                        fontSize: {xs: 25, sm: 50, xl: 80}
                    }}>
                    Hi, I'm Daniel Giannotti
                </Typography>
                <Typography 
                    color="#a80c06"
                    fontWeight="bold"
                    fontFamily="Alkalami"
                    letterSpacing=".1rem"
                    sx={{
                        fontSize: {xs: 50, sm: 130, xl: 180},
                        mt: {xs: '1.5vh', sm: '4vh'}
                    }}
                >
                    <Carousel 
                        animation="fade" 
                        indicators={0} 
                        interval={2500} 
                        duration={500} 
                        navButtonsAlwaysInvisible={1}
                        sx={{
                            overflow: 'visible !important',
                            lineHeight: .5,
                        }}
                        axys="y">
                        {
                            skills.map( (item, i) => 
                                item.value  
                            )
                        } 
                    </Carousel>Developer
                </Typography>
                <Typography 
                    color="white"
                    fontWeight={550}
                    fontFamily="Alkalami"
                    sx={{
                        fontSize: {xs: 20, sm: 50, xl: 80},
                        mt: {xs: -3, sm: -6, xl: -8}
                    }}>
                    Based in Venezuela.
                </Typography>
            </Box>
        </Box>
    )
}

export default HeroBanner
