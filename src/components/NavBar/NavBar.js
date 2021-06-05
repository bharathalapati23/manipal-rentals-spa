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
        paddingRight: '0px'
    },
    title: {
        fontFamily: 'poppins',
        fontSize: '35px',
        marginLeft: '5px',
        color: '#2E2E2E',
        fontWeight: 'bolder',
        cursor:'pointer'
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
        if (isMobile) handleClose()
        history.push('/properties')
    }

    const navigateToHowItWorks = () => {
        if (isMobile) handleClose()
        history.push('/how-it-works')
    }

    const navigateToAssistedBooking = () => {
        if (isMobile) handleClose()
        history.push('/assisted-booking')
    }

    const navigateToContactUs = () => {
        if (isMobile) handleClose()
        history.push('/contact-us')
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
                    <IconButton onClick={navigateToHome} style={{ padding: 0 }}>
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
                            <Button style={{ textTransform: 'none' }} color="inherit" onClick={navigateToContactUs}>Contact Us</Button>
                        </>
                    }
                    {isMobile &&
                        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
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
                                <MenuItem classes={{ root: classes.menuItemRoot }} onClick={navigateToProperties}>Properties</MenuItem>
                                <MenuItem classes={{ root: classes.menuItemRoot }} onClick={navigateToHowItWorks}>How it Works</MenuItem>
                                <MenuItem classes={{ root: classes.menuItemRoot }} onClick={navigateToAssistedBooking}>Assisted Booking</MenuItem>
                                <MenuItem onClick={handleClose} classes={{ root: classes.menuItemRoot }}>About Us</MenuItem>
                                <MenuItem classes={{ root: classes.menuItemRoot }} onClick={navigateToContactUs}>Contact Us</MenuItem>
                            </Menu>
                        </IconButton>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar
