import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { useMediaQuery } from 'react-responsive';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory, useLocation } from 'react-router-dom'

import LogoIcon from '../../icons/LogoIcon'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'grey'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontFamily: 'poppins',
        fontSize: '35px',
        marginLeft: '5px',
        color: '#2E2E2E',
        fontWeight: 'bolder'
    },
    popoverPaper: {
        left: '0 !important'
    },
    menuItemRoot: {
        justifyContent: "center"
    }
}));

function NavBar({ homePage }) {
    const classes = useStyles();
    const location = useLocation();
    const isMobile = useMediaQuery({ query: `(max-width: 769px)` });
    let history = useHistory();
    const ref = useRef()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const showNavBar = !location.pathname.includes('home')

    useEffect(() => {
        setAnchorEl(null)
    }, [isMobile])

    const handleClick = (event) => {
        setAnchorEl(ref.current);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigateToHome = () => {
        history.push('/')
    }

    const navigateToProperties = () => {
        history.push('/properties')
    }

    const navigateToHowItWorks = () => {
        history.push('/how-it-works')
    }

    const navigateToAssistedBooking = () => {
        history.push('/assisted-booking')
    }

    return (
        <div className={classes.root}>
            <AppBar position={homePage ? 'static' : 'fixed'}
                className={classes.appBar}
                style={{
                    background: `${homePage ? 'transparent' : ''}`,
                    boxShadow: 'none',
                    color: `${homePage ? 'black' : ''}`
                }}
                ref={ref}
            >
                <Toolbar>
                    <IconButton onClick={navigateToHome} disableRipple>
                        <LogoIcon style={{ fontSize: '50px' }} />
                    </IconButton>

                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
                        {
                            !isMobile &&
                            <>
                                <Typography variant="h6" className={classes.title} onClick={navigateToHome}>
                                    wolpa
                                </Typography>
                                <Button style={{ textTransform: 'none' }} color="inherit" onClick={navigateToProperties}>Properties</Button>
                                <Button style={{ textTransform: 'none' }} color="inherit" onClick={navigateToHowItWorks}>How it Works</Button>
                                <Button style={{ textTransform: 'none' }} color="inherit" onClick={navigateToAssistedBooking}>Assisted Booking</Button>

                            </>
                        }
                    </div>
                    {
                        !isMobile &&
                        <>

                            <Button style={{ textTransform: 'none' }} color="inherit" onClick={navigateToHome}>About Us</Button>
                            <Button style={{ textTransform: 'none' }} color="inherit">Contact Us</Button>
                        </>
                    }
                    {isMobile &&
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            {!Boolean(anchorEl) ? <MenuIcon onClick={handleClick} /> : <CloseIcon />}
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                getContentAnchorEl={null}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "center"
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "center"
                                }}
                                PaperProps={{
                                    style: {
                                        width: "100%",
                                        maxWidth: "100%",
                                        borderRadius: 0
                                    }
                                }}
                                PopoverClasses={{ paper: classes.popoverPaper }}
                            >
                                <MenuItem onClick={handleClose} classes={{ root: classes.menuItemRoot }}>Properties</MenuItem>
                                <MenuItem onClick={handleClose} classes={{ root: classes.menuItemRoot }}>How it Works</MenuItem>
                                <MenuItem onClick={handleClose} classes={{ root: classes.menuItemRoot }}>Assisted Booking</MenuItem>
                                <MenuItem onClick={handleClose} classes={{ root: classes.menuItemRoot }}>About Us</MenuItem>
                                <MenuItem onClick={handleClose} classes={{ root: classes.menuItemRoot }}>Contact Us</MenuItem>
                            </Menu>
                        </IconButton>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar
