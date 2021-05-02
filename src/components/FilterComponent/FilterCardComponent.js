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

const useStyles = makeStyles((theme) => ({
    filterContainer: {
        position: 'sticky',
        margin: '20px',
        fontFamily: 'Poppins',
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
        color: '#6167E7'
    },
    heading: {
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontWeight: 'bold',
    }
}));

const FilterCardComponent = () => {
    const classes = useStyles();
    const [checkedBedrooms, setCheckedBedrooms] = useState([])
    const dispatch = useDispatch();

    const handleBedroomChange = (event) => {
        let changedBedrooms = JSON.parse(JSON.stringify(checkedBedrooms))
        if (event.target.checked)
            changedBedrooms.push(Number(event.target.name))
        else {
            const index = changedBedrooms.indexOf(Number(event.target.name));
            if (index > -1) {
                changedBedrooms.splice(index, 1)
            }
        }
        setCheckedBedrooms(changedBedrooms)
        dispatch(setBedroomFilter(changedBedrooms))
    };

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
                {/* <Divider /> */}
                <Accordion style={{
                    boxShadow: "none", display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }} defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Budget</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SliderComponent />
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion style={{ boxShadow: "none" }} defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Bedroom</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl required component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={handleBedroomChange} name="1" />}
                                    label="1BHK"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleBedroomChange} name="2" />}
                                    label="2BHK"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleBedroomChange} name="3" />}
                                    label="3BHK"
                                />
                            </FormGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
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
