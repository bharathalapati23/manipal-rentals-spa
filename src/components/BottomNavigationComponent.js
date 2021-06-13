import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FilterAltIcon from '@material-ui/icons/FilterAlt';
import ListIcon from '@material-ui/icons/List';
import Badge from '@material-ui/core/Badge';

import { useSelector } from 'react-redux';


const useStyles = makeStyles({
    stickToBottom: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'grey',
        height: '40px',
        alignItems: 'center',
        zIndex: '10000'
    },
    badge: {
        backgroundColor: "#f36802",
    }
});



const BottomNavigationComponent = ({ setFilterPage }) => {
    const classes = useStyles();
    const filter = useSelector((state) => state.filters)

    // Counting total number of filters
    let numFilters = 0
    numFilters += filter.bedroom.length
    numFilters += filter.zone.length
    numFilters += filter.accomodationType.length
    Object.keys(filter.homeFeatures).forEach((homeFeature) => {
        if (filter.homeFeatures[homeFeature])
            numFilters++
    })

    Object.keys(filter.bedroomDetails).forEach((bedroomDetail) => {
        if (filter.bedroomDetails[bedroomDetail])
            numFilters++
    })

    return (
        <div className={classes.stickToBottom}>
            <div onClick={() => {
                window.scrollTo(0, 0)
                setFilterPage(true)
            }}
                style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', width: '50%' }}>
                <div style={{ width: '100%' }} >
                    <Badge badgeContent={numFilters} classes={{ badge: classes.badge }}>
                        <FilterAltIcon style={{ left: '50%' }} />
                    </Badge>
                </div>
                <div style={{ fontFamily: 'Poppins', fontSize: '13px', lineHeight: '13px', marginBottom: '3px' }}>
                    Filters
                </div>
            </div>
            <div onClick={() => {
                window.scrollTo(0, 0)
                setFilterPage(false)
            }}
                style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', width: '50%' }}>
                <ListIcon style={{ left: '50%', width: '100%' }} />
                <div style={{ fontFamily: 'Poppins', fontSize: '13px', lineHeight: '13px', marginBottom: '3px' }}>
                    Listings
                </div>
            </div>
        </div>
    )
}

export default BottomNavigationComponent
