import {useState} from 'react';
import { Box, Typography, Tabs, Tab } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Skills from '../components/Skills.jsx'
import Studies from '../components/Studies.jsx'
import Certificates from '../components/Certificates.jsx'
import Title from '../components/Title.jsx'
import profile from '../assets/img/profile.jpg'


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
            id='about'
            display='flex'
            sx={{
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
            <Box 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                sx={{
                    flexDirection: { xs: 'column', md: 'row' }
                }}>
                <Box
                    component="img"
                    src={profile}
                    alt="profilePicture"
                    sx={{
                        height: { xs: 150, sm: 250 },
                        width: { xs: 150, sm: 250 },
                        marginBottom: { xs: 2, md: 0 },
                        borderRadius: "100%",
                        background: "black",
                        mx: 2, 
                        p: .5
                    }}
                />
                <Typography 
                    sx={{
                        width: {xs: 'full', md: '30%'},
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
                    marginTop: { xs: 5,  md: 0 },
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                }}
            >
                <Tabs 
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
                    width:{ xl: '50vw' }, 
                    flexWrap: 'wrap', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 5,
                }} display="flex" gap={6}>
                    {tabIndex === 0 && (
                        <Skills />
                    )}
                    {tabIndex === 1 && (
                        <Studies />
                    )}
                    {tabIndex === 2 && (
                        <Certificates openInNewTab={openInNewTab}/>
                    )}
                </Box> 
            </Box>
        </Box>   
    )
}
export default AboutLayout
