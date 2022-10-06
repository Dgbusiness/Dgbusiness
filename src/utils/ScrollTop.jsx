import React from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

const Scroll = (props) => {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
                behavior: "smooth"
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16}}
            >
                {children}
            </Box>
        </Fade>
    );
}


const ScrollTop = (props) =>            ( 
    <Scroll {...props}>
        <Fab size="small" aria-label="scroll back to top" sx={{ bgcolor: "gray", "&:hover":{ bgcolor: "black"} }}>
            <KeyboardArrowUpIcon sx={{ color: "white" }}/>
        </Fab>
    </Scroll>
)

export default ScrollTop


