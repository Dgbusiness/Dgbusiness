import { Box, Typography } from "@mui/material";
import ucv from '../assets/img/logo_ucv.png'

const Studies = () => (
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover':{
                transform: 'scale3d(1.2, 1.2, 1)',
                transition: 'transform 1s'
            }
        }}>
        <Box
            component="img"
            src={ucv}
            alt='ucvlogo'
            sx={{
                height: { xs: 100, sm: 150, md: 300 },
                borderRadius: 10,
            }}
        />
        <Box>
            <Typography 
                variant='h5'> 
                Central University of Venezuela 
            </Typography>
            <Typography 
                variant='h6'> 
                BA in Computer Science 
            </Typography>
            <Typography 
                variant='h6'> 
                2015 - 2022 
            </Typography>
        </Box>
    </Box>
)

export default Studies
