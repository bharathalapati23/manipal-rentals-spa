import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from 'react-responsive';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'



import AmenitiesComponent from './Amenities/AmenitiesComponent'
import ImageGalleryComponent from './ImageGalleryComponent'
import DescriptionComponent from './DescriptionComponent'
import MobileStickyBottom from './MobileStickyBottom'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '80px',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto',
        padding:'8px',
        [theme.breakpoints.up('md')]: {
            minWidth: '960px',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: '0px'
        },
        boxSizing:'border-box'
    },
    propertyName: {
        fontFamily: 'Bebas Neue',
        fontSize: '30px',
        color: '#FFFFFF',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        },
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    backToProperties: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#D0D0D0',
        cursor: 'pointer'
    },
    zoneStyle: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#e5e5e5'
    },
    rentStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
}));

const PropertyInfoComponent = () => {
    const classes = useStyles();
    let history = useHistory();
    const location = useLocation();
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
    const listingInfo = location.state.listing

    const navigateToProperties = () => {
        history.push({
            pathname: '/',
        })
    }

    return (
        <>
            <div className={classes.root}>
                {!isMobile &&
                    <div className={classes.title}>
                        <div className={classes.propertyName}>
                            {listingInfo.desc}
                        </div>
                        <div className={classes.backToProperties} onClick={navigateToProperties}>
                            Back to all properties
                    </div>
                    </div>
                }
                <div>
                    <ImageGalleryComponent images={listingInfo.images} />
                </div>
                {isMobile &&
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div>
                            <div className={classes.propertyName}>
                                {listingInfo.desc}
                            </div>
                            <div className={classes.zoneStyle}>
                                Zone
                        </div>
                        </div>
                        <div>
                            <div className={classes.rentStyle}>
                                <div style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '20px', paddingRight: '3px', color: '#f36802' }}>Rs. 10000</div>
                                <div style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '10px', color: '#e5e5e5' }}>per month</div>
                            </div>
                            <div className={classes.rentStyle}>
                                <div style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '15px', paddingRight: '3px', color: '#e5e5e5' }}>Rs. 10000</div>
                                <div style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '3px', color: '#e5e5e5' }}>deposit</div>
                            </div>
                        </div>
                    </div>
                }
                <div style={{ 'paddingTop': '20px' }}>
                    <DescriptionComponent listingInfo={listingInfo} />
                </div>
                <div style={{ 'paddingTop': '20px' }}>
                    <AmenitiesComponent homeFeatures={location.state.listing.homeFeatures} bedroomDetails={location.state.listing.bedroomDetails} />
                </div>

            </div>
            {isMobile &&
                <MobileStickyBottom navigateToProperties={navigateToProperties}/>
            }
        </>
    )
}

export default PropertyInfoComponent
