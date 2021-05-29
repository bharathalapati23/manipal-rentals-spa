import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    heading: {
        marginTop: '20px',
        fontFamily: 'Bebas Neue',
        fontSize: '45px',
        color: '#FFFFFF',
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
        },
        textAlign: 'center'
        // letterSpacing: '0.5px'
    },
    content: {
        fontFamily: 'poppins',
        color: 'white',
        fontSize: '20px'
    },
    listButton: {
		borderRadius: 10,
		marginBottom: '4px',
		backgroundColor: 'transparent',
		color: 'white',
		fontSize: '20px',
		fontFamily: 'Poppins',
		borderColor: '#e5e5e5',
		border: 'solid',
		borderWidth: 'thin',
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderColor: '#f36802'
	}
}));

const AboutUs = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.heading}>
                About Us
            </div>
            <div className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </div>
            <div className={classes.heading}>
                DO YOU OWN A PROPERTY?
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
