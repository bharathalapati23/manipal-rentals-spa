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
        fontFamily: 'Poppins',
        fontSize: '20px',
        color: '#e5e5e5'
    },
    description: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        paddingRight: '10px',
        color: '#e0e0e0'
    },
    chipStyles: {
        marginRight: '10px',
        fontFamily: 'Poppins',
        fontWeight: 'bold'
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
                            Description
        	            </div>
                        <div className={classes.description}>
                            {listingInfo.desc}
                        </div>
                    </div>
                    <div className={classes.seeMoreProperties} style={{ textAlign: 'right' }}>
                        <div>
                            <span style={{ fontFamily: 'Bebas Neue', fontSize: '26px', marginRight: '2px', fontWeight: 'normal', color: '#f36802' }}>₹</span>
                            <span style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '24px', paddingRight: '3px', color: '#f36802' }}>{listingInfo.rent}</span>
                            <span style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '12px', color: '#e5e5e5' }}>per month</span>
                        </div>
                        <div style={{ marginTop: '5px' }}>
                            <span style={{ fontFamily: 'Bebas Neue', fontSize: '21px', marginRight: '2px', fontWeight: 'normal', color: '#e5e5e5', marginTop: '20px' }}>₹</span>
                            <span style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '19px', paddingRight: '3px', color: '#e5e5e5' }}>{listingInfo.deposit}</span>
                            <span style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '7px', color: '#e5e5e5' }}>deposit</span>
                        </div>
                    </div>
                </div>
            }
            {
                isMobile &&
                <>
                    <Typography variant="h5" component="h2" className={classes.descTitle} style={{ fontFamily: 'Poppins' }}>
                        Description
        	        </Typography>
                    <div className={classes.description}>
                        {listingInfo.desc}
                    </div>
                </>
            }
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <Chip label={`${listingInfo.bedroom} Bedroom`} className={classes.chipStyles} />
                    <Chip label={listingInfo.apOrBung} className={classes.chipStyles} />
                    <Chip label={listingInfo.zone} className={classes.chipStyles} />
                </div>
                {!isMobile &&
                    <Button variant="contained"
                        style={{ borderRadius: 25, backgroundColor: '#f36802', color: '#e0e0e0', fontWeight: 'bold' }}
                        onClick={openEnquiryModal}
                    >
                        SCHEDULE PROPERTY TOUR
                    </Button>
                }
            </div>

        </>
    )
}

export default DescriptionComponent
