import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import {useState} from 'react';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const pages = [
    {id: 'about', value:'About'}, 
    {id: 'services', value:'Services'}, 
    {id: 'portfolio', value:'Portfolio'}, 
    {id: 'companies', value:'Companies'}, 
    {id: 'contact', value:'Contact'}
]

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(false);
    const [changeBG, setChangeBG] = useState(false);

    const handleOpenNavMenu = () => {
        setAnchorElNav(true);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
    };

    const handlePageSeleted = (event, id) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            `#${id}`,
        );

        if (anchor) {
            anchor.scrollIntoView();
        }
    };

    /**
     * If the window is scrolled down 80px, change the background color. If the window is
     * scrolled up 80px, change the background color to transparent.
     */
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setChangeBG(true);
        } else {
            setChangeBG(false);
        }
    };

    /* Listening for the scroll event and calling the `changeBackground` function. */
    window.addEventListener("scroll", changeBackground);

    return (
        <AppBar 
            position="fixed" 
            component='nav'
            sx={{ 
                background: changeBG
                    ? `rgba(0,0,0,.8)`
                    : "transparent",
                boxShadow: changeBG ? "" : "none",
                pt: 1
            }}>
            <Toolbar >
                <Box 
                    sx={{
                        display: { xs: 'flex', md: 'none' }, 
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'relative'
                    }}
                > 
                    <Box 
                        sx={{ 
                            display: { xs: 'flex', md: 'none' }, 
                        }}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box component="nav">
                            <Drawer
                                variant="temporary"
                                open={anchorElNav}
                                onClose={handleCloseNavMenu}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '75%', bgcolor: 'rgb(30,30,30)', color: 'white' },
                                }}
                            >
                                <Box onClick={handleCloseNavMenu} sx={{ textAlign: 'center' }}>
                                    <Typography variant="h4" fontFamily='Roboto' sx={{ my: 2 }}>
                                        DG
                                    </Typography>
                                    <Divider sx={{ bgcolor: 'white'}}/>
                                    <List>
                                        {pages.map((page) => (
                                            <ListItem key={page.id} disablePadding>
                                                <ListItemButton sx={{ textAlign: 'center', '&:hover': { bgcolor: 'rgb(50,50,50)' } }}>
                                                    <ListItemText onClick={(e) => handlePageSeleted(e, page.id)} primary={page.value} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                    </Box>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            position: 'absolute',
                            left: '50%',
                        }}
                    >
                        DG
                    </Typography>
                </Box>
                <Typography
                    variant="h3"
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        textAlign: "right",
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        letterSpacing: '0',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    DG
                </Typography>
                <Box sx={{ 
                    flexGrow: 1, 
                    display: { xs: 'none', md: 'flex' }, 
                }}>
                    {pages.map((page) => (
                        <Button
                            key={page.id}
                            onClick={(e) => handlePageSeleted(e, page.id)}
                            sx={{ my: 2, color: 'white', display: 'block',
                                "&:hover": { 
                                    fontWeight: "bold",
                                    color: "#a80c06",
                                    textDecoration: "underline #a80c06 .15rem"
                                }, 
                            }}
                        >
                            {page.value}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

