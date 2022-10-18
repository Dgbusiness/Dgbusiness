import { Box, Typography } from "@mui/material";
import { certificates } from '../utils/Certificates.jsx'
import { SiUdemy } from 'react-icons/si'

const Certificates = ({ openInNewTab }) => (certificates.map( certificate => 
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
))                     

export default Certificates
