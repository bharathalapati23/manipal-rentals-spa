import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '80px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
        },
        width: '100%',
        maxWidth: '1300px',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        paddingLeft: '8px',
        paddingRight: '8px',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
        boxSizing: 'border-box',
    },
    mainHeading: {
        fontFamily: 'Poppins',
        color: '#E5E5E5',
        fontSize: '35px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '25px',
        },
        marginBottom: '15px'
    },
    description: {
        fontFamily: 'poppins',
        color: '#e5e5e5',
        fontSize: '20px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
        boxSizing: 'border-box',
    },
}));

const UploadListing = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h2" className={classes.mainHeading}>
                Fill in the form below
        	</Typography>
            <div className={classes.description}>
                We are building this platform to increase the ease of viewing properties
                for students from Manipal. If you or any one in your network has a home
                to be rented out, you could list it on our platform at no cost and start
                getting enquiries.
                <div style={{ paddingTop: '10px'}}>
                    We request to share below details for creating your listing.
                </div>
            </div>
            
        </div>
    )
}

export default UploadListing
