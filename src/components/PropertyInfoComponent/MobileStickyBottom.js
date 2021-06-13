import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'
import { openModal } from '../../actions/enquiryModal'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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
        borderWidth: 'thin',
        boxSizing:'border-box'
    },
    registerButton: {
        borderRadius: 25,
        marginBottom: '4px',
        backgroundColor: '#f36802',
        color: '#e0e0e0',
        fontWeight: 'bold',
        fontSize: '16px',
        fontFamily: 'Poppins',
        marginBottom: '10px'
    },
    seeMoreButton: {
        borderRadius: 25,
        marginBottom: '4px',
        backgroundColor: 'transparent',
        color: '#e0e0e0',
        fontSize: '14px',
        fontFamily: 'Poppins',
        borderColor:'#e5e5e5',
        border:'solid',
        borderWidth: 'thin'

    }
}));

const MobileStickyBottom = ({navigateToProperties}) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const openEnquiryModal = () => {
        dispatch(openModal())
    }
    return (
        <div className={classes.root}>
            <Button variant="contained"
                buttonStyle={{ borderRadius: 25, }}
                className={classes.registerButton}
                onClick={openEnquiryModal}
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
