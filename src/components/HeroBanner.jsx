import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Box } from "@mui/material";


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
    return (
        <Box 
            className="heroBanner container" 
            sx={{
                height: { xs: "100vh", sm: "110vh", md: "100vh" },
                bgcolor: "black",
                color: 'white',
                display: 'flex',

            }}
        >
            <Particles 
                id="tsparticles"
                init={particlesInit} 
                loaded={particlesLoaded} 

                options={
                    {
                        background: {
                            color: {
                                value: "#000000",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "grab",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                grab: {
                                    quantity: 12,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: true,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "character",
                                character: {
                                    "value": "DG", // the text to use as particles, any string is valid, for escaping unicode char use the `\uXXXX` syntax
                                    "font": "Verdana", // the font to use to draw the text. If the font needs an external css or javascript like FontAwesome you should include all the necessary files on your own
                                    "style": "", // any additional css style to add to the text
                                    "weight": "" // the css weight property, some fonts like font awesome have a specified weight, check the documentation if needed
                                } 
                            },
                            size: {
                                value: { min: 1, max: 10 },
                            },
                        },
                        detectRetina: true,
                    }
                }
            />
        </Box>
    )
}

export default HeroBanner
