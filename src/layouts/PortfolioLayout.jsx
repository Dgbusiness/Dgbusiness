import {useState} from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Divider } from "@mui/material";
import Title from '../components/Title.jsx'
import { projects } from '../utils/ProjectsList'

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

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <Box 
            id='portfolio' 
            display='flex'
            sx={{
                bgcolor: 'gray',
                height: 'auto',
                minHeight: { xs: "100vh", sm: "110vh", md: "80vh" },
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                textAlign: 'center',
                py: 5
            }}>
            <Title title='Portfolio' subtitle='These are some of the projects I have been working on recently.'/>
            { projects.map( (project, index) => 
            <Box 
                key={index}
                onMouseOver={() => handleOnHover(index)}
                sx={{ 
                    m: (hover && cardSelected === index) ? 5 : 0,
                }}
                onMouseOut={handleOutHover}>
                <Card 
                    sx={{
                        transition: "transform 0.5s ease-in-out",
                        transform: (hover && cardSelected === index) ? "scale3d(1.5, 1.5, 1) rotateY(180deg)" : "0",
                        width: {xs: 'auto', sm: '50vw', md: '30vw'}, 
                        maxWidth: 350,
                        height: {xs: 250, sm: 300, md: 350},
                        borderRadius: 10, 
                        m: (hover && cardSelected === index) ? 10 : 5,
                        position: "relative",
                        cursor: 'pointer',
                        zIndex: (hover && cardSelected === index) ? 100 : 0,
                        boxShadow: (hover && cardSelected === index) ? "5px 5px 5px #a80c06" : 3}}>
                    <CardMedia
                        component="img"
                        height={(hover && cardSelected === index) ? "60%": "100%"}
                        image={project.img}
                        alt={project.name}
                        sx={{
                            transition: "height 0.5s ease-in-out,filter 0.5s ease-in-out ", 
                            transform: (hover && cardSelected === index) ? "scale3d(1.05, 1.05, 1) rotateY(180deg)" : "rotateY(-180deg)",
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
                                        top: {xs: '30%', sm: "35%"},
                                        right: 0,
                                        left: 0,
                                        m: 'auto',
                                        px: 5,
                                        color: 'white',
                                        textShadow: '2.5px 2.5px 2.5px black'
                                    }}
                                >
                                    {project.topTools}
                                    <Divider 
                                        sx={{ 
                                            bgcolor: 'white', 
                                            border: .5, 
                                            textShadow: '2.5px 2.5px 2.5px black',
                                            mt: 1 
                                        }}
                                    />
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
                                    {project.name}
                                </Typography>
                            </>
                        )}
                        {(hover && cardSelected === index) && (
                            <Typography 
                                variant="body2"
                                sx={{
                                    textAlign: {xs: 'left', sm: 'justify'},
                                    fontWeight: '28px',
                                    fontSize: { xs: '7.5px', sm: '0.8rem'},
                                    transform: "rotateY(-180deg)",
                                    fontFamily:"Roboto",
                                }}
                            >
                                Project Name: {project.name}
                                <Divider/>
                                Software type: {project.type}
                                <Divider/>
                                Tools used: {project.tools}
                                <Divider/>
                            </Typography>
                        )}
                    </CardContent>
                    <CardActions
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: "rotateY(-180deg)",
                        }}>
                        <Button 
                            sx={{ 
                                bgcolor: '#a80c06', 
                                '&:hover': {
                                    bgcolor: 'rgb(120, 12, 6)'
                                },
                                borderRadius: 1, 
                                color: 'white', 
                                fontWeight: 'bold',
                                fontSize: { xs: 9 }, 
                                mt:{xs: -1.5, sm: -1, md: -.5, lg: 0 } 
                            }} 
                            onClick={() => openInNewTab(project.url)} 
                            size="small">
                            View Site
                        </Button>
                    </CardActions>
                </Card> 
            </Box>
            )}
        </Box>   
    )
}
export default PortfolioLayout
