import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import AmenitiesComponent from './AmenitiesComponent'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '80px',
        width: '60%',
        [theme.breakpoints.up('md')]: {
            minWidth: '950px',
        },
        [theme.breakpoints.down('md')]: {
            width: '99%'
        },
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto'

    },
}));

const PropertyInfoComponent = () => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <div className={classes.root}>
            {/* {JSON.stringify(location.state.detail)} */}
            <AmenitiesComponent homeFeatures={location.state.listing.homeFeatures} bedroomDetails={location.state.listing.bedroomDetails} />
        </div>
    )
}

export default PropertyInfoComponent
