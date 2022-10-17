import {useState} from 'react';
import { Box, Grid, Typography, Tabs, Tab } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Skills from '../components/Skills.jsx'
import Title from '../components/Title.jsx'

const AboutLayout = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <Box >
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{
                    background: `rgba(50,50,50,1)`,
                    color: 'white',
                    textAlign: 'center',
                    py: 5 
                }}
            >
                <Title title='About' />
                <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                        textAlign: { xs:"center", sm:"center", md:"right"},
                        marginTop: { xs: 15, sm: 20, md: 0 },
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        component="img"
                        src={`https://www.giantbomb.com/a/uploads/original/5/56742/3061198-arthur%20portrait%20transparent.png`}
                        alt="cgianns"
                        sx={{
                            height: { xs: 100, sm: 150, md: 200 },
                            width: { xs: 100, sm: 150, md: 200 },
                            marginBottom: { xs: 15, md: 0 },
                            borderRadius: "100%",
                            background: "black"
                        }}
                        className="mouse-wheel2"
                    />
                </Grid>
                <Grid
                    id="about"
                    item
                    xs={12}
                    md={4}
                    sx={{
                        textAlign: { xs:"center", sm:"center", md:"justify"},
                        marginTop: { xs: 15, sm: 20, md: 0 },
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Typography 
                        color="white"
                        fontFamily="sans-serif"
                        data-aos="fade"
                        data-aos-duration="3000">
                        Since the beginning of my work experience more than 4 years ago I have had the opportunity to work remotely with several national and international companies as a Full Stack Web Developer. I am always innovating my knowledge since there are many areas that I am passionate about, very responsible, punctual and looking for new professional challenges to complete. 
                    </Typography>
                </Grid>
                <Box
                    display='flex'
                    xs={12}
                    md={12}
                    sx={{
                        textAlign: { xs:"center", sm:"center", md:"center"},
                        marginTop: { xs: 15, sm: 20, md: 0 },
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: 'wrap',
                        flexDirection: 'column'
                    }}
                >
                    <Tabs 
                        id='skills-and-studies'
                        centered
                        value={tabIndex} 
                        onChange={handleChange} 
                        TabIndicatorProps={{style: {background:'#a80c06'}}}>
                        <Tab 
                            icon={<LaptopChromebookIcon />} 
                            label="SKILLS"
                            sx={{
                                color: "white",
                            }}/>
                        <Tab icon={<SchoolIcon />} label="STUDIES" />
                        <Tab icon={<WorkspacePremiumIcon />} label="CERTIFICATES" />
                    </Tabs>
                    <Box sx={{ 
                        padding: 2, 
                        height:{ xs: '50', sm: '50vh', md: '50vh' }, 
                        width:{ xs: '100vw', sm: '100vw', md: '50vw' }, 
                        flexDirection: 'row', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} display="flex" gap={6}>
                        {tabIndex === 0 && (<Skills />)}
                        {tabIndex === 1 && (
                            <Box>
                                <Typography>The second tab</Typography>
                            </Box>
                        )}
                        {tabIndex === 2 && (
                            <Box>
                                <Typography>The third tab</Typography>
                            </Box>
                        )}
                    </Box> 
                </Box>
            </Grid>
        </Box>   
    )
}
export default AboutLayout
