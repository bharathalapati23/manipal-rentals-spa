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
import BedroomFilter from './BedroomFilter.js'

const useStyles = makeStyles((theme) => ({
    filterContainer: {
        position: 'sticky',
        margin: '20px',
        fontFamily: 'Poppins',
        backgroundColor: '#2e2e2e',
        borderRadius:'10px'
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
}));

const FilterCardComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div className={classes.filterContainer}>
            <Box
                // boxShadow={3}
                spacing={3}
                border={1}
                borderRadius={10}
                borderColor="rgba(0,0,0,0.2)"
                container
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
                <div style={{ height: '5px' }}>

                </div>
            </Box>
        </div>
    )
}

export default FilterCardComponent
