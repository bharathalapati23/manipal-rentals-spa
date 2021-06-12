import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux'
import { openModal } from '../../actions/enquiryModal'
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    descContainer: {
        flexGrow: 8,
        maxWidth: '75%'
    },
    seeMoreProperties: {
        flexGrow: 3,
    },
    rentStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
    descTitle: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    descTitle: {
        fontFamily: 'Bebas Neue',
        fontSize: '20px',
        color: '#e5e5e5'
    },
    description: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        paddingRight: '10px',
        color: '#ffffff'
    },
    chipStyles: {
        marginRight: '10px',
        fontFamily: 'Poppins'
    }
}));


const DescriptionComponent = ({ listingInfo }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
    const dispatch = useDispatch();

    const openEnquiryModal = () => {
        dispatch(openModal())
    }

    return (
        <>
            {!isMobile &&
                <div className={classes.root}>
                    <div className={classes.descContainer}>
                        <div className={classes.descTitle}>
                            DESCRIPTION
        	            </div>
                        <div className={classes.description}>
                            {listingInfo.desc}
                        </div>
                    </div>
                    <div className={classes.seeMoreProperties}>
                        <div className={classes.rentStyle}>
                            <div style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '24px', paddingRight: '3px', color: '#f36802' }}>Rs. {listingInfo.rent}</div>
                            <div style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '12px', color: '#e5e5e5' }}>per month</div>
                        </div>
                        <div className={classes.rentStyle}>
                            <div style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '19px', paddingRight: '3px', color: '#e5e5e5' }}>Rs. 100000</div>
                            <div style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '7px', color: '#e5e5e5' }}>deposit</div>
                        </div>
                        <Button variant="contained"
                            style={{ borderRadius: 25, backgroundColor: '#f36802', color: 'white', fontWeight: 'bold' }}
                            onClick={openEnquiryModal}
                        >
                            SCHEDULE PROPERTY TOUR
                        </Button>
                    </div>
                </div>
            }
            {
                isMobile &&
                <>
                    <Typography variant="h5" component="h2" className={classes.descTitle} style={{ fontFamily: 'Bebas Neue' }}>
                        DESCRIPTION
        	        </Typography>
                    <div className={classes.description}>
                        {listingInfo.desc}
                    </div>
                </>
            }
            <div style={{ marginTop: '10px' }}>
                <Chip label={`${listingInfo.bedroom} Bedroom`} className={classes.chipStyles} />
                <Chip label={listingInfo.apOrBung} className={classes.chipStyles} />
                <Chip label={listingInfo.zone} className={classes.chipStyles} />
            </div>

        </>
    )
}

export default DescriptionComponent
