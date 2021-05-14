import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'sticky',
        bottom: 0,
        margin: '0 auto',
        backgroundColor: '#121212',
        padding: '10px',
        borderTop: 'solid',
        borderTopColor: '#e5e5e5',
        borderWidth: 'thin'
    },
    registerButton: {
        borderRadius: 25,
        marginBottom: '4px',
        backgroundColor: '#f36802',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        fontFamily: 'Poppins',
        marginBottom: '10px'
    },
    seeMoreButton: {
        borderRadius: 25,
        marginBottom: '4px',
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '14px',
        fontFamily: 'Poppins',
        borderColor:'#e5e5e5',
        border:'solid',
        borderWidth: 'thin'

    }
}));

const MobileStickyBottom = ({navigateToProperties}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained"
                buttonStyle={{ borderRadius: 25, }}
                className={classes.registerButton}
            >
                SCHEDULE PROPERTY TOUR
            </Button>
            <Button variant="contained"
                buttonStyle={{ borderRadius: 25 }}
                className={classes.seeMoreButton}
                onClick={navigateToProperties}
            >
                SEE MORE PROPERTIES
            </Button>
        </div>
    )
}

export default MobileStickyBottom
