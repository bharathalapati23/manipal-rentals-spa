import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useMediaQuery } from 'react-responsive';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function NavBar() {
    const classes = useStyles();
    const isMobile = useMediaQuery({ query: `(max-width: 769px)` });
    let history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        setAnchorEl(null)
    }, [isMobile])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigateToHome = () => {
        history.push('/')
    }

    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar} style={{position: 'fixed'}}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} >
                        PROJET01
                    </Typography>
                    {
                        !isMobile &&
                        <>
                            <Button color="inherit" onClick={navigateToHome}>About</Button>
                            <Button color="inherit">Contact</Button>
                        </>
                    }
                    {isMobile &&
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon onClick={handleClick} />
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>About</MenuItem>
                                <MenuItem onClick={handleClose}>Contact</MenuItem>
                            </Menu>
                        </IconButton>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar
