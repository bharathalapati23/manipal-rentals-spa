import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SliderComponent from './SliderComponent'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux'
import { setBedroomFilter } from '../../actions/filters'
import HomeFeaturesFilter from './HomeFeaturesFilter.js'
import ZoneFilter from './ZoneFilter.js'
import ApartmentFilter from './ApartmentFilter.js'
import BedroomFilter from './BedroomFilter'

const useStyles = makeStyles((theme) => ({
    filterContainer: {
        position: 'sticky',
        margin: '20px',
        fontFamily: 'Poppins',
        width: '100%'
    },
    formControl: {
        // margin: theme.spacing(3),
        margin: '0 auto'
    },
    filterHeading: {
        padding: '10px',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#e5e5e5'
    },
    heading: {
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontWeight: 'bold',
    }
}));

const MobileFilterComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.filterContainer}>
            <Typography variant="h5" component="h2" className={classes.filterHeading}>
                FILTERS
        		</Typography>
            <SliderComponent />
            <Divider />
            <BedroomFilter />
            <ZoneFilter />

            <HomeFeaturesFilter />
            <ApartmentFilter />
            <div style={{ height: '5px' }}>

            </div>
        </div>
    )
}

export default MobileFilterComponent
