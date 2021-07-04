import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NumberCounter from './NumberCounter'

const useStyles = makeStyles((theme) => ({
    heading: {
        marginTop: '30px',
        fontFamily: 'Poppins',
        fontSize: '35px',
        color: '#e0e0e0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '27px',
        },
        textAlign: 'center',
        marginBottom:'10px'
        // letterSpacing: '0.5px'
    },
    content: {
        fontFamily: 'poppins',
        color: '#d5d5d5',
        fontSize: '20px',
        paddingLeft: '8px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
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
        textTransform: 'none',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
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
        "&:hover": {
            background: '#f36802',
        },
        textTransform: 'none',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
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
                Wolpa was started by students from Manipal, with the aim to make off-campus student accommodation hassle-free.
                Hunting homes, dealing with intermediaries, collecting the security deposit, maintaining the upkeep of the property have all been a challenge,
                in an otherwise easy-going college life. At Wolpa, we want to identify the place where you need to be, without charging that brokerage fee!
                A range of accommodation related services coming your way, sit back and enjoy your time in Manipal! Wolpa shall own property hunt for you.
            </div>
            <Button variant="contained"
                className={classes.learnButton}
                onClick={navigateToAboutUs}
                color='#f36802'
            >
                Learn about us
            </Button>
            <NumberCounter />
            <div className={classes.heading}>
                Do you own a property?
            </div>
            <Button variant="contained"
                className={classes.listButton}
                onClick={() => {
                    window.open('https://docs.google.com/forms/d/1ZV5x2ATZHvMQ0cGvQSqDO4JH580G1DLzJFVNUmJEqOk/edit', "_blank")
                }}
            >
                List with us
                </Button>
        </>
    )
}

export default AboutUs
