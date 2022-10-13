import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import {useState} from "react";
import { services } from '../utils/ServicesList.jsx'
import Title from '../components/Title.jsx'

const CompaniesLayout = () => {

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
            id="companies" 
            display='flex'
            sx={{
                bgcolor: 'black',
                height: { xs: "100vh", sm: "110vh", md: "100vh" },
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                textAlign: 'center'
            }}>
            <Title title='Companies' />
        </Box>   
    )
}

export default CompaniesLayout
