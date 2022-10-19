import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Box, Grid, Typography } from "@mui/material";
import { options } from '../utils/ParticlesOptions.jsx';
import Carousel from 'react-material-ui-carousel'

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
        <Box id="back-to-top-anchor">
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: { xs: "100vh", sm: "110vh", md: "110vh" },
                    background: `radial-gradient(circle, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 100%)`,
                    color: 'white',
                }}
            >
                <Particles 
                    id="tsparticles"
                    init={particlesInit} 
                    loaded={particlesLoaded} 
                    options={options}
                />
                <Grid
                    item={true}
                    xs={12}
                    md={6}
                    sx={{
                        textAlign: { xs:"center", sm:"center", md:"left"},
                        marginTop: { xs: 15, sm: 20, md: 0 },
                    }}
                >
                    <Typography 
                        color="white"
                        fontFamily="Alkalami"
                        sx={{
                            fontSize: {xs: 25, sm: 50, lg: 80}
                        }}>
                        Hi, I'm Daniel Giannotti
                    </Typography>
                    <Typography 
                        color="#a80c06"
                        fontWeight="bold"
                        fontFamily="Alkalami"
                        letterSpacing=".1rem"
                        sx={{
                            fontSize: {xs: 50, sm: 130, lg: 180},
                            marginTop: {xs: '1vh', sm: '3vh'}
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
                            fontSize: {xs: 20, sm: 50, lg: 80},
                            mt: {xs: -2, sm: -4, lg: -8}
                        }}>
                        Based in Venezuela.
                    </Typography>

                </Grid>
                <Grid
                    item={true}
                    xs={12}
                    md={6}
                    sx={{
                        textAlign: "center",
                        marginTop: { xs: 15, sm: 20, md: 0 },
                    }}
                >

                    <Box
                        component="img"
                        src={`https://www.giantbomb.com/a/uploads/original/5/56742/3061198-arthur%20portrait%20transparent.png`}
                        alt="cgianns"
                        sx={{
                            height: { xs: 250, sm: 300, md: 350, lg: "100vh" },
                            marginBottom: { xs: 15, md: 0 },
                        }}
                        className="mouse-wheel2"
                    />

                </Grid>
            </Grid>
        </Box>
    )
}

export default HeroBanner
