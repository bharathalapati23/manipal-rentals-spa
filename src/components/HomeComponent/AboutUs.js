import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    heading: {
        marginTop: '30px',
        fontFamily: 'Poppins',
        fontSize: '35px',
        color: '#e0e0e0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '27px',
        },
        textAlign: 'center'
        // letterSpacing: '0.5px'
    },
    content: {
        fontFamily: 'poppins',
        color: '#d5d5d5',
        fontSize: '20px',
        paddingLeft: '8px'
    },
    listButton: {
        borderRadius: 10,
        marginBottom: '4px',
        backgroundColor: 'transparent',
        color: '#d5d5d5',
        marginTop: '10px',
        fontSize: '20px',
        fontFamily: 'Poppins',
        borderColor: '#e5e5e5',
        border: 'solid',
        borderWidth: 'thin',
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderColor: '#f36802',
        "&:hover": {
            background: '#f36802',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    learnButton: {
        marginTop: '10px',
        borderRadius: 10,
        marginBottom: '4px',
        backgroundColor: 'transparent',
        color: '#d5d5d5',
        fontSize: '20px',
        fontFamily: 'Poppins',
        borderColor: '#e5e5e5',
        border: 'solid',
        borderWidth: 'thin',
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderColor: '#f36802',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        "&:hover": {
            background: '#f36802',
        }
    }
}));

const AboutUs = ({ navigateToAboutUs }) => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.heading}>
                About Us
            </div>
            <div className={classes.content}>
                Wolpa was started by students from Manipal, with the aim to make off-campus student accommodation hassle-free for students. 
                You can find the home of your choice to rent from with no issues, we own the property search for you.
                We aim to find the place where you need to be, without charging that brokerage fee!
                A range of accommodation related services coming your way, sit back and enjoy your time in Manipal!
            </div>
            <Button variant="contained"
                className={classes.learnButton}
                onClick={navigateToAboutUs}
                color='#f36802'
            >
                LEARN ABOUT US
            </Button>
            <div className={classes.heading}>
                Do you own a property?
            </div>
            <Button variant="contained"
                className={classes.listButton}
            >
                LIST WITH US
            </Button>
        </>
    )
}

export default AboutUs
