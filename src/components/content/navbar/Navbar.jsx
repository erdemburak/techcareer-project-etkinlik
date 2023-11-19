import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#C3C3C3' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AdbIcon sx={{ mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component={Link}
                                to={`/`}
                                sx={{
                                    mr: 2,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                ETKINLIK
                            </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button key='Etkinlikler' component={Link} to={`/`} sx={{ my: 2, color: 'white', display: 'block' }} >
                                Etkinlikler
                            </Button>
                            <Button key='EskiEtkinlikler' component={Link} to={`/eskiEtkinlikler`} sx={{ my: 2, color: 'white', display: 'block' }} >
                                Geçmiş Etkinlikler
                            </Button>
                            <Button key='Favoriler' component={Link} to={`/favoriEtkinlikler`} sx={{ my: 2, color: 'white', display: 'block' }} >
                                Favoriler
                            </Button>
                        </Box>

                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
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
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem key='Etkinlikler' onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" component={Link} to={`/`}>Etkinlikler</Typography>
                                </MenuItem>
                                <MenuItem key='EskiEtkinlikler' onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" component={Link} to={`/eskiEtkinlikler`}>Geçmiş Etkinlikler</Typography>
                                </MenuItem>
                                <MenuItem key='Favoriler' onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" component={Link} to={`/favoriEtkinlikler`}>Favoriler</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;