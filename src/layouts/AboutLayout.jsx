import {useState} from 'react';
import { Box, Grid, Typography, Tabs, Tab } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Skills from '../components/Skills.jsx'
import Title from '../components/Title.jsx'
import { certificates } from '../utils/Certificates.jsx'
import { SiUdemy } from 'react-icons/si'

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
}


const AboutLayout = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <Box 
            display='flex'
            sx={{
                height: { xs: "100vh", sm: "110vh", md: "auto" },
                background: `rgba(50,50,50,1)`,
                color: 'white',
                textAlign: 'center',
                p: 5,
                flexWrap: 'wrap'
            }}
            justifyContent="center"
            alignItems="center"
        >
            <Title title='About' />
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Box
                    component="img"
                    src={`https://www.giantbomb.com/a/uploads/original/5/56742/3061198-arthur%20portrait%20transparent.png`}
                    alt="profilePicture"
                    sx={{
                        height: { xs: 100, sm: 150, md: 250 },
                        width: { xs: 100, sm: 150, md: 250 },
                        marginBottom: { xs: 15, md: 0 },
                        borderRadius: "100%",
                        background: "black",
                        mx: 2 
                    }}
                />
                <Typography 
                    sx={{
                        width: '30%',
                        textAlign: 'justify'
                    }}
                    color="white"
                    fontFamily="sans-serif">
                    Since the beginning of my work experience more than 4 years ago I have had the opportunity to work remotely with several national and international companies as a Full Stack Web Developer. I am always innovating my knowledge since there are many areas that I am passionate about, very responsible, punctual and looking for new professional challenges to complete. 
                </Typography>
            </Box>
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
                    flexDirection: 'column',
                }}
            >
                <Tabs 
                    id='skills-and-studies'
                    centered
                    value={tabIndex} 
                    textColor='inherit'
                    onChange={handleChange} 
                    TabIndicatorProps={{style: {
                        background:'#a80c06',
                    }}}>
                    <Tab 
                        icon={<LaptopChromebookIcon />} 
                        label="SKILLS"
                        sx={{
                            color: "white",
                        }}/>
                    <Tab icon={<SchoolIcon />} label="STUDIES" sx={{
                            color: "white",
                        }}/>
                    <Tab icon={<WorkspacePremiumIcon />} label="CERTIFICATES" sx={{
                            color: "white",
                        }}/>
                </Tabs>
                <Box sx={{ 
                    width:{ xs: '100vw', sm: '100vw', md: '50vw' }, 
                    flexWrap: 'wrap', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 5,
                }} display="flex" gap={6}>
                    {tabIndex === 0 && (<Skills />)}
                    {tabIndex === 1 && (
                        <Box>
                            <Typography>The second tab</Typography>
                        </Box>
                    )}
                    {tabIndex === 2 && certificates.map( certificate => 
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                width: '30%',
                                '&:hover':{
                                    transform: 'scale3d(1.2, 1.2, 1)',
                                    transition: 'transform 1s'
                                }
                            }}
                            onClick={() => openInNewTab(certificate.url)}>
                            <Box fullWidth display='flex' textAlign='center'>
                                <Box width='80%'>
                                    <Typography> 
                                        {certificate.name} 
                                    </Typography>
                                </Box>
                                {certificate.platform === 'udemy' && (
                                    <Box>
                                        <SiUdemy style={{ 
                                            fontSize: 45, 
                                        }}/>
                                    </Box>)
                                }
                            </Box>
                            <Box fullWidth>
                                <Box
                                    component="img"
                                    src={certificate.img}
                                    alt={certificate.name.toLowerCase().trim()}
                                    sx={{
                                        height: { xs: 100, sm: 150, md: 200 },
                                        borderRadius: 10,
                                    }}
                                />
                            </Box>
                        </Box>
                    )}
                </Box> 
            </Box>
        </Box>   
    )
}
export default AboutLayout
