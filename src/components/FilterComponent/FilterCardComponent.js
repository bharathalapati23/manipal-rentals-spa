import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SliderComponent from './SliderComponent'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useDispatch } from 'react-redux'
import HomeFeaturesFilter from './HomeFeaturesFilter.js'
import ZoneFilter from './ZoneFilter.js'
import ApartmentFilter from './ApartmentFilter.js'
import BedroomFilter from './BedroomFilter.js'
import BedroomDetailsFilter from './BedroomDetailsFilter.js'

import { useInView } from 'react-intersection-observer';


const useStyles = makeStyles((theme) => ({
    filterContainer: {
        position: 'sticky',
        margin: '20px',
        fontFamily: 'Poppins',
        backgroundColor: '#2e2e2e',
        borderRadius: '10px'
    },
    formControl: {
        // margin: theme.spacing(3),
        margin: '0 auto'
    },
    filterHeading: {
        textAlign: 'center',
        padding: '10px',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#E5E5E5'
    },
    heading: {
        fontFamily: 'Poppins',
        textAlign: 'center',
    },
    applyFilters: {
        width: '200px',
        margin: '0 auto',
        // left: '50%',
        // transform: 'translate(-50%, 0)',
        position: 'fixed',
        top:'80px',
        marginLeft:'40px',
        backgroundColor: '#2e2e2e',
        color: '#e5e5e5',
        fontFamily:'Poppins'

    }
}));

const FilterCardComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px',
        initialInView: true
    });

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <>
            <div className={classes.filterContainer} ref={ref}>
                <Box
                    spacing={3}
                    border={1}
                    borderRadius={10}
                    borderColor="rgba(0,0,0,0.2)"
                >
                    <Typography variant="h5" component="h2" className={classes.filterHeading}>
                        FILTERS
        		    </Typography>
                    <Divider />
                    <SliderComponent />
                    <Divider />
                    <BedroomFilter />
                    <Divider />
                    <ZoneFilter />
                    <Divider />
                    <HomeFeaturesFilter />
                    <Divider />
                    <ApartmentFilter />
                    <Divider />
                    <BedroomDetailsFilter />
                    <div style={{ height: '5px' }}>

                    </div>
                </Box>
            </div>
            {!inView && <Button variant="contained" className={classes.applyFilters} onClick={scrollToTop}>APPLY MORE FILTERS</Button>}
        </>
    )
}

export default FilterCardComponent
