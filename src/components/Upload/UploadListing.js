import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#e0e0e0',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
})(TextField);

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
    input: {
        color: "#e0e0e0"
    },
    textFieldStyles: {
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
        width: '100%',
        marginTop: '5px',
        backgroundColor: '#2e2e2e',
    },
    desktopEnquiryForm: {
        flexGrow: 2,
        backgroundColor: '#2e2e2e',
        borderRadius: '10px',
        padding: '20px',
        [theme.breakpoints.up('lg')]: {
            width: '100%',
            maxWidth: '700px'
        },
        [theme.breakpoints.down('md')]: {
            margin: '0 auto'
        },
        marginTop: '30px',
        marginLeft: '40px',
        marginRight: '40px'
    },
    filterHeading: {
        fontFamily: 'Poppins',
        color: '#E5E5E5',
        fontSize: '28px',
        marginBottom: '15px'
    },
    heading: {
        fontFamily: 'Poppins',
        color: '#E5E5E5',
        paddingTop: '5px'
    },
}));

const UploadListing = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h2" className={classes.mainHeading}>
                List Your Home
        	</Typography>
            <div className={classes.description}>
                We are building this platform to increase the ease of viewing properties
                for students from Manipal. If you or any one in your network has a home
                to be rented out, you could list it on our platform at no cost and start
                getting enquiries.
                <div style={{ paddingTop: '10px' }}>
                    We request to share below details for creating your listing.
                </div>
            </div>
            <div className={classes.desktopEnquiryForm}>
                <Typography variant="h5" component="h2" className={classes.filterHeading}>
                    Fill in the form below
        		</Typography>
                <div className={classes.heading}>Name</div>
                <CssTextField variant="outlined"
                    InputProps={{
                        className: classes.input
                    }}
                    className={classes.textFieldStyles}
                />
            </div>

        </div>
    )
}

export default UploadListing
