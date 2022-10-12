import {useState} from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Divider } from "@mui/material";
import Title from '../components/Title.jsx'
import { services } from '../utils/ServicesList.jsx'

const PortfolioLayout = () => {

    const [hover, setHover] = useState(false)
    const [cardSelected, setCardSelected] = useState(null)

    const handleOnHover = (index) => {
        setCardSelected(index)
        setHover(true)
    }
    const handleOutHover = () => {
        setCardSelected(null)
        setHover(false)
    }


    return (
        <Box 
            id='portfolio' 
            display='flex'
            sx={{
                bgcolor: 'gray',
                height: { xs: "100vh", sm: "110vh", md: "100vh" },
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                textAlign: 'center'
            }}>
            <Title title='Portfolio' />
            { services.map( (service, index) => 
            <Box 
                onMouseOver={() => handleOnHover(index)}
                onMouseOut={handleOutHover}>
                <Card 
                    sx={{
                        transition: "transform 0.5s ease-in-out",
                        transform: (hover && cardSelected === index) ? "scale3d(1.5, 1.5, 1) rotateY(180deg)" : "0",
                        maxWidth: 400, 
                        height: 350,
                        borderRadius: 10, 
                        m: 5, 
                        position: "relative",
                        zIndex: (hover && cardSelected === index) ? 100 : 0,
                        boxShadow: (hover && cardSelected === index) ? "5px 5px 5px #a80c06" : 3}}>
                    <CardMedia
                        component="img"
                        height={(hover && cardSelected === index) ? "50%": "100%"}
                        image={service.img}
                        alt={service.alt}
                        sx={{
                            transition: "height 0.5s ease-in-out,filter 0.5s ease-in-out ", 
                            transform: (hover && cardSelected === index) ? "scale3d(1.05, 1.05, 1)" : "0",
                            filter: (hover && cardSelected === index) ? "none" : "blur(3px)"
                        }}
                    />
                    <CardContent 
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontFamily:"Alkalami",
                        }}>
                        {!(hover && cardSelected === index) && (
                            <>
                                <Typography variant="h6" component="div"
                                    sx={{
                                        position: 'absolute',
                                        top: "35%",
                                        right: 0,
                                        left: 0,
                                        m: 'auto',
                                        px: 5,
                                        color: 'white',
                                    }}
                                >
                                    {service.name}
                                    <Divider sx={{ bgcolor: 'white', border: .5, mt: 1 }}/>
                                </Typography>
                                <Typography variant="h4" component="div"
                                    sx={{
                                        position: 'absolute',
                                        top: "50%",
                                        right: 0,
                                        left: 0,
                                        m: 'auto',
                                        px: 5,
                                        color: 'white',
                                        textShadow: '2.5px 2.5px 2.5px black'
                                    }}>
                                    {service.name}
                                </Typography>
                            </>
                        )}
                        {(hover && cardSelected === index) && (
                            <Typography 
                                variant="h6"
                                sx={{
                                    transform: "rotateY(-180deg)"
                                }}
                            >
                                {service.name}
                                {service.description}
                            </Typography>
                        )}
                    </CardContent>
                    <CardActions
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: "rotateY(-180deg)"
                        }}>
                        <Button size="small">View Site</Button>
                    </CardActions>
                </Card> 
            </Box>
            )}
        </Box>   
    )
}
export default PortfolioLayout
