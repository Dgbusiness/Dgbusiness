import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import {useState} from "react";
import { services } from '../utils/ServicesList.jsx'
import Title from '../components/Title.jsx'

const ServicesLayout = () => {

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
            id="services" 
            display='flex'
            sx={{
                bgcolor: 'black',
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                textAlign: 'center',
                py: 5
            }}>
            <Title title='Services' />
            { services.map( (service, index) => 
            <Card 
                key={service.alt+index}
                onMouseOver={() => handleOnHover(index)}
                onMouseOut={handleOutHover} 
                sx={{
                    transition: "transform 0.15s ease-in-out",
                    transform: (hover && cardSelected === index) ? "scale3d(1.05, 1.05, 1)" : "0",
                    maxWidth: 345, 
                    height: 500,
                    borderRadius: 10, 
                    m: 5, 
                    cursor: 'pointer',
                    boxShadow: (hover && cardSelected === index) ? "5px 5px 5px #a80c06" : 3}}>
                <CardMedia
                    component="img"
                    height={(hover && cardSelected === index) ? "50%": "80%"}
                    image={service.img}
                    alt={service.alt}
                    sx={{transition: "height 0.15s ease-in-out", transform: (hover && cardSelected === index) ? "scale3d(1.05, 1.05, 1)" : "0"}}
                />
                <CardContent 
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontFamily:"Alkalami"
                    }}>
                    <Typography gutterBottom variant="h4" component="div">
                        {service.name}
                    </Typography>
                    {(hover && cardSelected === index) && (
                        <Typography variant="h6" color="text.secondary">
                            {service.description}
                        </Typography>
                    )}
                </CardContent>
            </Card> 
            )}
        </Box>   
    )
}

export default ServicesLayout
