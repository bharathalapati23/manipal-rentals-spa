import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useMediaQuery } from 'react-responsive';
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearFilters } from '../actions/filters.js'
import { useSelector } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';

const zones = ['Eshwar Nagar', 'Ananth Nagar', 'End Point Road', 'Perampalli Road']

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#e0e0e0',
        width: '100%',
        backgroundColor: '#2e2e2e',
        marginTop: '20px',
        fontFamily: 'poppins',

        paddingTop: '10px',
        paddingBottom: '10px',
        boxSizing: 'border-box',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '10px',
            paddingRight: '10px',
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '30px',
            paddingRight: '30px',
        },
    },
    topPart: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: '10px',
        paddingTop: '30px',
    },
    box1: {
        flexGrow: 2,
        display: 'flex',
        flexDirection: 'column'
    },
    box2: {
        flexGrow: 1,
    },
    box3: {
        flexGrow: 1,
    },
    linkStyle: {
        fontSize: '14px',
        color: '#ADB8FF',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}));

const FooterComponent = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
    const showFooter = useSelector((state) => state.footer)

    const history = useHistory();
    const location = useLocation();
    const isPropertiesPage = location.pathname.includes('properties')
    const dispatch = useDispatch();

    const navigateToPropertiesZoneFilter = (event, zone) => {

        dispatch(clearFilters())
        history.push({
            pathname: '/properties',
            search: `?zone=${zone}`,
        })
    }

    const navigateToPropertiesBedFilter = (bed) => {
        dispatch(clearFilters())
        history.push({
            pathname: '/properties',
            search: `?bedroom=${bed}`,
        })
    }

    const navigateToPropertiesAccomodationTypeFilter = (accomodationType) => {
        dispatch(clearFilters())
        history.push({
            pathname: '/properties',
            search: `?accomodationType=${accomodationType}`,
        })
    }

    const navigateToHome = () => {
        history.push({
            pathname: '/'
        })
    }

    const navigateToHowItWorks = () => {
        history.push({
            pathname: '/how-it-works'
        })
    }

    const navigateToProperties = () => {
        history.push({
            pathname: '/properties',
        })
    }

    const navigateToAssistedBooking = () => {
        history.push('/assisted-booking')
    }

    const navigateToAboutUs = () => {
        history.push({
            pathname: '/about-us'
        })
    }

    const navigateToContactUs = () => {
        history.push({
            pathname: '/contact-us'
        })
    }

    return (
        <>
            { isMobile && showFooter &&
                <div className={classes.root} style={{ marginBottom: `${isPropertiesPage ? '40px' : ''}` }}>
                    <div className={classes.topPart}>
                        <div className={classes.box1}>
                            <div>
                                Wolpa
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <div className={classes.linkStyle} onClick={navigateToHome}>
                                    Home
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle} onClick={navigateToAboutUs}>
                                    About Us
                                </div>
                            </div>
                            <div>
                                Need Help?
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <div className={classes.linkStyle} onClick={navigateToHowItWorks}>
                                    How it works
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle} onClick={navigateToContactUs}>
                                    Contact Us
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle}
                                    onClick={() => {
                                        window.open('https://docs.google.com/forms/d/1ZV5x2ATZHvMQ0cGvQSqDO4JH580G1DLzJFVNUmJEqOk/edit', "_blank")
                                    }}
                                >
                                    List with us
                                </div>
                            </div>
                            <div>
                                Property Tour
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <div className={classes.linkStyle} onClick={navigateToAssistedBooking}>
                                    Visit today
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle} onClick={navigateToAssistedBooking}>
                                    Schedule Tour
                                </div>
                            </div>
                            <div>
                                Zones
                                    </div>
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {zones.map((zone, index) => {
                                    return (
                                        <React.Fragment key={`footerzone${index}`}>
                                            <div className={classes.linkStyle} onClick={(event) => navigateToPropertiesZoneFilter(event, zone)}>
                                                {zone}
                                            </div>
                                            <div className={classes.linkStyle}>
                                                &nbsp;.&nbsp;
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                Useful Links
                            </div>
                            <div className={classes.linkStyle} onClick={navigateToProperties}>
                                Apartments in Manipal
                            </div>
                            <div className={classes.linkStyle} onClick={navigateToProperties}>
                                Bungalows in Manipal
                            </div>
                            <div className={classes.linkStyle} onClick={navigateToProperties}>
                                Rental Flats in Manipal
                            </div>
                            <div className={classes.linkStyle} onClick={navigateToProperties}>
                                Student Housing in Manipal
                            </div>
                            <div className={classes.linkStyle} onClick={() => navigateToPropertiesBedFilter(2)}>
                                2 Bedroom Manipal
                            </div>
                            <div className={classes.linkStyle} onClick={() => navigateToPropertiesBedFilter(3)}>
                                3 Bedroom Manipal
                            </div>
                        </div>
                    </div>
                    <Divider style={{ backgroundColor: '#e5e5e5' }} />
                    <div style={{ fontSize: '10px', paddingTop: '5px' }}>
                        Privacy Policy | Terms | SiteMap | 2021 ABC LLP
                    </div>
                </div>
            }
            { !isMobile &&
                <div className={classes.root}>
                    <div className={classes.topPart}>
                        <div className={classes.box1}>
                            <div>
                                Wolpa
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={classes.linkStyle} onClick={navigateToHome}>
                                    Home
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle} onClick={navigateToAboutUs}>
                                    About Us
                                </div>
                            </div>
                            <div>
                                Need Help?
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={classes.linkStyle} onClick={navigateToHowItWorks}>
                                    How it works
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle} onClick={navigateToContactUs}>
                                    Contact Us
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle}
                                    onClick={() => {
                                        window.open('https://docs.google.com/forms/d/1ZV5x2ATZHvMQ0cGvQSqDO4JH580G1DLzJFVNUmJEqOk/edit', "_blank")
                                    }}
                                >
                                    List with us
                                </div>
                            </div>
                            <div>
                                Property Tour
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={classes.linkStyle}>
                                    Visit today
                                </div>
                                <div className={classes.linkStyle} onClick={navigateToAssistedBooking}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle} onClick={navigateToAssistedBooking}>
                                    Schedule Tour
                                </div>
                            </div>
                            <div>
                                Zones
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                {zones.map((zone, index) => {
                                    return (
                                        <React.Fragment key={`footerzone${index}`}>
                                            <div className={classes.linkStyle} onClick={(event) => navigateToPropertiesZoneFilter(event, zone)}>
                                                {zone}
                                            </div>
                                            <div className={classes.linkStyle}>
                                                &nbsp;.&nbsp;
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={classes.box2}>
                            <div>
                                Useful Links
                            </div>
                            <div className={classes.linkStyle} onClick={() => navigateToPropertiesAccomodationTypeFilter('Apartment')}>
                                Apartments in Manipal
                            </div>
                            <div className={classes.linkStyle} onClick={() => navigateToPropertiesAccomodationTypeFilter('Bungalow')}>
                                Bungalows in Manipal
                            </div>
                            <div className={classes.linkStyle} onClick={navigateToProperties}>
                                Rental Flats in Manipal
                            </div>
                            <div className={classes.linkStyle} onClick={navigateToProperties}>
                                Student Housing in Manipal
                            </div>
                            <div className={classes.linkStyle} onClick={() => navigateToPropertiesBedFilter(2)}>
                                2 Bedroom Manipal
                            </div>
                            <div className={classes.linkStyle} onClick={() => navigateToPropertiesBedFilter(3)}>
                                3 Bedroom Manipal
                            </div>
                        </div>
                        <div className={classes.box3}>
                            <div style={{ textAlign: 'right' }}>
                                +919591798639
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                +918970133397
                            </div>
                            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                                <FacebookIcon style={{ fontSize: '50px', cursor: 'pointer' }}
                                    onClick={() => {
                                        window.open('https://www.facebook.com/wolpamanipal', "_blank")
                                    }}
                                />
                                <InstagramIcon style={{ fontSize: '50px', cursor: 'pointer' }}
                                    onClick={() => {
                                        window.open('https://www.instagram.com/wolpa.in/', "_blank")
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <Divider style={{ backgroundColor: '#e5e5e5' }} />
                    <div style={{ fontSize: '10px', paddingTop: '5px' }}>
                        Privacy Policy | Terms | SiteMap | 2021 ABC LLP
                    </div>
                </div>
            }
        </>
    )
}

export default FooterComponent
