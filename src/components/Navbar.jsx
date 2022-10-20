import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';


const pages = [
    {id: 'about', value:'About'}, 
    {id: 'services', value:'Services'}, 
    {id: 'portfolio', value:'Portfolio'}, 
    {id: 'companies', value:'Companies'}, 
    {id: 'contact', value:'Contact'}
]

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [changeBG, setChangeBG] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handlePageSeleted = (event, id) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            `#${id}`,
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
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
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'flex', md: 'none' }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.value+page.id} sx={{ 

                                }}>
                                    <Typography textAlign="center" onClick={handlePageSeleted}>{page.value}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
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

