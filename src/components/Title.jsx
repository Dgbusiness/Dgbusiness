import { Typography } from "@mui/material";

const Title = ({ title }) => {
    return (
        <Typography 
            sx={{ width: '100%' }}
            variant="h2"
            color="white"
            fontWeight={550}
            fontFamily="Alkalami">
            {title} 
        </Typography>
    )
}

export default Title
