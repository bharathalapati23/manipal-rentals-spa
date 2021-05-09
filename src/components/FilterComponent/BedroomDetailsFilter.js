import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { setBedroomDetailsFilter } from '../../actions/filters.js'
import { useSelector, useDispatch } from 'react-redux'
import ExpandIconCompnent from './ExpandIconCompnent';


const initialBedroomDetails = {
    singleBed: false,
    doubleBed: false,
    wardrobe: false,
    studyTable: false,
    chair: false,
    attachedToilet: false,
    attachedBalcony: false,
    airConditioner: false,
}

const displayNameBedroomDetails = {
    singleBed: 'Single Bed',
    doubleBed: 'Double Bed',
    wardrobe: 'Wardrobe',
    studyTable: 'Study Table',
    chair: 'Chair',
    attachedToilet: 'Attached Toilet',
    attachedBalcony: 'Attached Balcony',
    airConditioner: 'Air Conditioner',
}

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: 'Poppins',
        textAlign: 'center',
    },
    formControl: {
        // margin: theme.spacing(3),
        margin: '0 auto'
    },
    accordionStyle: {
        boxShadow: "none",
        backgroundColor: 'transparent',
        color: '#e5e5e5',
        boxShadow: "none",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
}));

const BedroomDetailsFilter = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const bedroomFilters = useSelector((state) => state.filters.bedroomDetails)
    const [bedroomDetails, setBedroomDetails] = useState(initialBedroomDetails)

    useEffect(() => {
        setBedroomDetails(bedroomFilters)
    }, [bedroomFilters])

    const handleFilterChange = (event, key) => {
        let newBedroomDetails = {
            ...bedroomDetails,
            [key]: event.target.checked
        }
        setBedroomDetails(newBedroomDetails)
        dispatch(setBedroomDetailsFilter(newBedroomDetails))
    };

    const [expanded, setExpanded] = React.useState(false);
    const handleExpand = (event, isExpanded) => {
        setExpanded(isExpanded)
    }

    let selectedBedroomDetails = Object.keys(bedroomDetails).reduce((total, bedroomDetail) => {
        if (bedroomDetails[bedroomDetail] === true)
            return total + 1
        return total
    }, 0)

    return (
        <>
            <Accordion className={classes.accordionStyle} onChange={handleExpand}>
                <AccordionSummary
                    expandIcon={<ExpandIconCompnent expanded={expanded} value={selectedBedroomDetails} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={classes.heading}>Bedroom Details</div>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl required component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            {Object.keys(bedroomDetails).map((key, index) => {
                                return <
                                    FormControlLabel
                                    control={
                                        <Checkbox name="1"
                                            labelStyle={{ color: 'white' }}
                                            iconStyle={{ fill: 'white' }}
                                            style={{ color: 'white' }}
                                            checked={bedroomDetails[key]}
                                        />
                                    }
                                    label={displayNameBedroomDetails[key]}
                                    onChange={(event) => handleFilterChange(event, key)}
                                />
                            })}
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default BedroomDetailsFilter
