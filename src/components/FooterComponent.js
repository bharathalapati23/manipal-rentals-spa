import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setZoneFilter, clearFilters } from '../actions/filters.js'


const zones = ['Syndicate Circle', 'Venugopal Temple', 'Eshwar Nagar', 'Ananth Nagar', 'End Point Road', 'Perampalli Road', 'Vidyaratna Nagar']

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        width: '100%',
        backgroundColor: '#2e2e2e',
        marginTop: '20px',
        fontFamily: 'poppins',

        paddingTop: '10px',
        paddingBottom: '10px',
        boxSizing: 'border-box',
        [theme.breakpoints.down('md')]: {
            marginBottom: '40px',
            paddingLeft: '10px',
            paddingRight: '10px',
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
        paddingTop: '30px'
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

    const history = useHistory();
    const dispatch = useDispatch();

    const navigateToPropertiesZoneFilter = (event, zone) => {
        console.log(zone)
        dispatch(clearFilters())
        dispatch(setZoneFilter([zone]))
        history.push({
            pathname: '/',
            search: `?zone=${zone}`,
        })
    }

    return (
        <>
            { isMobile &&
                <div className={classes.root}>
                    <div className={classes.topPart}>
                        <div className={classes.box1}>
                            <div>
                                Company Name
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={classes.linkStyle}>
                                    Home
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle}>
                                    About Us
                                </div>
                            </div>
                            <div>
                                Need Help?
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={classes.linkStyle}>
                                    How it works
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle}>
                                    Contact Us
                                </div>
                            </div>
                            <div>
                                Property Tour
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={classes.linkStyle}>
                                    Visit today
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle}>
                                    Schedule Tour
                                </div>
                            </div>
                            <div>
                                Zones
                                    </div>
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                {zones.map((zone, index) => {
                                    return (
                                        <div className={classes.linkStyle} onClick={(event) => navigateToPropertiesZoneFilter(event, zone)} key={`footerzone${index}`}>
                                            {`${zone} .`}
                                        </div>
                                    )
                                })}
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                Useful Links
                            </div>
                            <div className={classes.linkStyle}>
                                Student accomodation in Manipal
                            </div>
                            <div className={classes.linkStyle}>
                                Apartments in Manipal
                            </div>
                            <div className={classes.linkStyle}>
                                Rental Flats in Manipal
                            </div>
                            <div className={classes.linkStyle}>
                                Student Housing in Manipal
                            </div>
                            <div className={classes.linkStyle}>
                                2 Bedroom Manipal
                            </div>
                            <div className={classes.linkStyle}>
                                3 Bedroom Manipal
                            </div>
                        </div>
                    </div>
                    <Divider style={{ backgroundColor: '#e5e5e5' }} />
                </div>
            }
            { !isMobile &&
                <div className={classes.root}>
                    <div className={classes.topPart}>
                        <div className={classes.box1}>
                            <div>
                                Company Name
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={classes.linkStyle}>
                                    Home
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle}>
                                    About Us
                                </div>
                            </div>
                            <div>
                                Need Help?
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={classes.linkStyle}>
                                    How it works
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle}>
                                    Contact Us
                                </div>
                            </div>
                            <div>
                                Property Tour
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className={classes.linkStyle}>
                                    Visit today
                                </div>
                                <div className={classes.linkStyle}>
                                    &nbsp;.&nbsp;
                                </div>
                                <div className={classes.linkStyle}>
                                    Schedule Tour
                                </div>
                            </div>
                            <div>
                                Zones
                                    </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                {zones.map((zone, index) => {
                                    return (
                                        <div className={classes.linkStyle} onClick={(event) => navigateToPropertiesZoneFilter(event, zone)} key={`footerzone${index}`}>
                                            {`${zone} .`}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={classes.box2}>
                            <div>
                                Useful Links
                            </div>
                            <div className={classes.linkStyle}>
                                Student accomodation in Manipal
                            </div>
                            <div className={classes.linkStyle}>
                                Apartments in Manipal
                            </div>
                            <div className={classes.linkStyle}>
                                Rental Flats in Manipal
                            </div>
                            <div className={classes.linkStyle}>
                                Student Housing in Manipal
                            </div>
                            <div className={classes.linkStyle}>
                                2 Bedroom Manipal
                            </div>
                            <div className={classes.linkStyle}>
                                3 Bedroom Manipal
                            </div>
                        </div>
                        <div className={classes.box3}>
                            <div style={{ textAlign: 'right' }}>
                                +911234567890
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                +919876543210
                            </div>
                            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                                <FacebookIcon style={{ fontSize: '50px' }} />
                                <InstagramIcon style={{ fontSize: '50px' }} />
                                <TwitterIcon style={{ fontSize: '50px' }} />
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
