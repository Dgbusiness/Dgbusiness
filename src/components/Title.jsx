import { Typography } from "@mui/material";

const Title = ({ title, subtitle }) => {
    return (
        <>
            <Typography 
                sx={{ width: '100%' }}
                variant="h2"
                color="white"
                fontWeight={550}
                fontFamily="Alkalami">
                {title} 
            </Typography>
            {subtitle && (
                <>
                    <Typography 
                        sx={{ display: {xs: 'none', sm:'block'}, width: '100%', pt: 5, }}
                        variant="h4"
                        color="white"
                        fontFamily="Roboto">
                        {subtitle} 
                    </Typography>
                    <Typography 
                        sx={{ display: {xs: 'block', sm:'none'}, width: '100%', pt: 5, }}
                        variant="h5"
                        color="white"
                        fontFamily="Roboto">
                        {subtitle} 
                    </Typography>
                </>

            )}
        </>
    )
}

export default Title
