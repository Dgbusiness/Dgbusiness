import { Box, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import {useState} from "react";
import { companies } from '../utils/CompaniesList'
import Title from '../components/Title.jsx'
import Carousel from 'react-material-ui-carousel'

const CompaniesLayout = () => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    const splitToChunks = (array, parts) => {
        let qty = array.length/parts
        let result = [];

        for (let i = qty; i > 0; i--) {
            result.push(array.splice(0, Math.ceil(array.length / i)));
        }

        return result;
    }

    const Item = (data, qty) => {

        let dataChunks = splitToChunks(data, qty)

        let result = dataChunks.map(item => (
            <Box sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }} >
                {
                    item.map(element => (
                        <Box
                            onClick={() => openInNewTab(element.url)}
                            component="img"
                            src={element.img}
                            alt="cgianns"
                            sx={{
                                height: element.type !== 'svg' ? 'auto' : 120,
                                width: "16%",
                                cursor: 'pointer',
                                px: 2,
                                '&:hover':{
                                    transform: 'scale3d(1.2, 1.2, 1)'
                                }
                            }}
                            className="mouse-wheel2"
                        />
                    ))
                }
            </Box>
        ))

        return result 
    }

    return (
        <Box 
            id="companies" 
            sx={{
                bgcolor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                py: 5
            }}>
            <Title title='Companies' subtitle='I have had the pleasure of working with these companies.'/>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: '50vh',
                }}
            >
                <Grid
                    item={true}
                    xs={12}
                    md={12}
                    sx={{
                        textAlign: { xs:"center", sm:"center", md:"center"},
                    }}
                >
                    <Carousel 
                        animation="slide" 
                        interval={2500} 
                        duration={500} 
                        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                            style: {
                                backgroundColor: 'white',
                                color:'black',
                            }
                        }} 
                        indicatorIconButtonProps={{
                            style: {
                                marginTop: '20vh',    // 1
                            }
                        }}
                        axys="y">
                        {
                            Item([...companies], 6) 
                        } 
                    </Carousel>
                </Grid>
            </Grid>
        </Box>   
    )
}

export default CompaniesLayout
