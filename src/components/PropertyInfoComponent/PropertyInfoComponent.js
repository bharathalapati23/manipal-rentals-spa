import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'
import SingleBedIcon from '@material-ui/icons/SingleBed';

import AmenitiesComponent from './Amenities/AmenitiesComponent'
import ImageGalleryComponent from './ImageGalleryComponent'
import DescriptionComponent from './DescriptionComponent'
import MobileStickyBottom from './MobileStickyBottom'
import EnquiryFormModal from './EnquiryFormModal'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '80px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
        },
        width: '100%',
        maxWidth: '1300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto',
        padding: '8px',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: '0px'
        },
        boxSizing: 'border-box'
    },
    propertyName: {
        fontFamily: 'Poppins',
        fontSize: '25px',
        color: '#e0e0e0',
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
        color: '#e5e5e5',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5px'
    },
    rentStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
}));

const PropertyInfoComponent = () => {
    const classes = useStyles();
    let history = useHistory();
    const location = useLocation();
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
    const [listingInfo, setListingInfo] = React.useState(false)
    const parsedQuery = queryString.parse(location.search);

    React.useEffect(() => {
        if (!location.state) {
            axios.get(`https://manipal-rentals-backend.herokuapp.com/posts/singlePost?objId=${parsedQuery['search-id']}`)
                .then((res) => {
                    const listingObj = res.data[0]
                    console.log(res.data[0])
                    history.replace({ ...history.location, state: { listing: listingObj } })
                })
        }
        else
            setListingInfo(location.state.listing)
    }, [location])

    const navigateToProperties = () => {
        history.push({
            pathname: '/properties',
        })
    }

    React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

    return (
        <>
            { listingInfo &&
                <>
                    <div className={classes.root}>
                        {!isMobile &&
                            <div className={classes.title}>
                                <div className={classes.propertyName}>
                                    {listingInfo.title}
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
                            <>
                                <div className={classes.propertyName}>
                                    {listingInfo.title}
                                </div>

                                <div className={classes.zoneStyle}>
                                    {listingInfo.zone}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px' }}>
                                    <div className={classes.rentStyle}>
                                        <span style={{ fontFamily: 'Bebas Neue', fontSize: '26px', marginRight: '2px', fontWeight: 'normal', color: '#f36802', marginTop: '1px' }}>₹</span>
                                        <span style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '24px', paddingRight: '3px', color: '#f36802' }}>{listingInfo.rent}</span>
                                        <span style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '12px', color: '#e5e5e5' }}>per month</span>
                                    </div>
                                    <div className={classes.rentStyle} style={{ alignSelf: 'center', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ fontFamily: 'Bebas Neue', fontSize: '21px', marginRight: '2px', fontWeight: 'normal', color: '#e5e5e5', marginTop: '1px' }}>₹</span>
                                        <span style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '19px', paddingRight: '3px', color: '#e5e5e5' }}>100000</span>
                                        <span style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '7px', color: '#e5e5e5' }}>deposit</span>
                                    </div>
                                </div>
                            </>
                        }
                        <div style={{ 'paddingTop': '20px' }}>
                            <DescriptionComponent listingInfo={listingInfo} />
                        </div>
                        <div style={{ 'paddingTop': '20px' }}>
                            <AmenitiesComponent homeFeatures={listingInfo.homeFeatures} bedroomDetails={listingInfo.bedroomDetails} />
                        </div>

                    </div>
                    <>
                        {isMobile &&
                            <MobileStickyBottom navigateToProperties={navigateToProperties} />
                        }
                    </>
                    <EnquiryFormModal searchId={parsedQuery['search-id']} />
                </>
            }

        </>
    )
}

export default PropertyInfoComponent
