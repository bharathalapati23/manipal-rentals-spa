import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from 'react-responsive';
import Button from '@material-ui/core/Button';



import AmenitiesComponent from './AmenitiesComponent'
import ImageGalleryComponent from './ImageGalleryComponent'
import DescriptionComponent from './DescriptionComponent'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '80px',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            minWidth: '960px',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: '0px'
        },
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
        color: '#D0D0D0'
    },
    zoneStyle: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 'bold',
    },
    rentStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
}));

const PropertyInfoComponent = () => {
    const classes = useStyles();
    const location = useLocation();
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    return (
        <>
            <div className={classes.root}>
                {!isMobile &&
                    <div className={classes.title}>
                        <div className={classes.propertyName}>
                            PROPERTY NAME
        	            </div>
                        <div className={classes.backToProperties}>
                            Back to all properties
                    </div>
                    </div>
                }
                <div>
                    <ImageGalleryComponent />
                </div>
                {isMobile &&
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div>
                            <Typography variant="h6" component="h2" className={classes.propertyName}>
                                PROPERTY NAME
                            </Typography>
                            <div className={classes.zoneStyle}>
                                Zone
                        </div>
                        </div>
                        <div>
                            <div className={classes.rentStyle}>
                                <div style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '20px', paddingRight: '3px' }}>Rs. 10000</div>
                                <div style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '10px' }}>per month</div>
                            </div>
                            <div className={classes.rentStyle}>
                                <div style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '15px', paddingRight: '3px' }}>Rs. 10000</div>
                                <div style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '3px' }}>deposit</div>
                            </div>
                        </div>
                    </div>
                }
                <div style={{ 'paddingTop': '20px' }}>
                    <DescriptionComponent />
                </div>
                <div style={{ 'paddingTop': '20px' }}>
                    <AmenitiesComponent homeFeatures={location.state.listing.homeFeatures} bedroomDetails={location.state.listing.bedroomDetails} />
                </div>

            </div>
            {isMobile &&
                <div style={{
                    width: '95%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'sticky',
                    bottom: 10,
                    margin: '0 auto',
                    backgroundColor: 'black',
                    padding: '10px',
                }}>
                    <Button variant="contained"
                        buttonStyle={{ borderRadius: 25 }}
                        style={{ borderRadius: 25, marginBottom: '4px' }}
                        color="red"
                    >
                        SCHEDULE PROPERTY TOUR
                </Button>
                    <Button variant="contained"
                        buttonStyle={{ borderRadius: 25 }}
                        style={{ borderRadius: 25 }}
                        color="red"
                    >
                        SEE MORE PROPERTIES
                </Button>
                </div>
            }
        </>
    )
}

export default PropertyInfoComponent
