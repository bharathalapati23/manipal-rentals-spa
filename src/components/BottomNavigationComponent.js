import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import SortIcon from '@material-ui/icons/Sort';
import Badge from '@material-ui/core/Badge';

import { useSelector } from 'react-redux';


const useStyles = makeStyles({
    stickToBottom: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'grey',
        height: '40px',
        alignItems: 'center',
        zIndex: '10000'
    },
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
            }}>
                <Badge badgeContent={numFilters} color="primary">
                    <FilterListIcon />
                </Badge>
            </div>
            <div onClick={() => {
                window.scrollTo(0, 0)
                setFilterPage(false)
            }}>
                <SortIcon />
            </div>
        </div>
    )
}

export default BottomNavigationComponent
