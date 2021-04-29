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
import { setHomeFeaturesFilter } from '../../actions/filters.js'
import { useDispatch } from 'react-redux'

const initialHomeFeatures = {
    wifi: false,
    geyser: false,
    washingMachine: false,
    cookingHub: false,
    fridge: false,
    couch: false,
    coffeeTable: false,
    chairs: false,
}

const displayNameHomeFeatures = {
    wifi: 'Wifi',
    geyser: 'Geyser',
    washingMachine: 'Washing Machine',
    cookingHub: 'Cooking Hub',
    fridge: 'Fridge',
    couch: 'Couch',
    coffeeTable: 'Coffee Table',
    chairs: 'Chairs',
}

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    formControl: {
        // margin: theme.spacing(3),
        margin: '0 auto'
    },
}));

const HomeFeaturesFilter = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [homeFeatures, setHomeFeatures] = useState(initialHomeFeatures)

    useEffect(() => {
        console.log(homeFeatures)

    }, [homeFeatures])

    const handleFilterChange = (event, key) => {
        let newHomeFeatures = {
            ...homeFeatures,
            [key]: event.target.checked
        }
        setHomeFeatures(newHomeFeatures)
        //setCheckedBedrooms(changedBedrooms)
        dispatch(setHomeFeaturesFilter(newHomeFeatures))
    };

    return (
        <>
            <Divider />
            <Accordion style={{ boxShadow: "none" }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Home Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl required component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            {Object.keys(homeFeatures).map((key, index) => {
                                return <
                                    FormControlLabel
                                    control={<Checkbox name="1" />}
                                    label={displayNameHomeFeatures[key]}
                                    onChange={(event)=>handleFilterChange(event, key)}
                                />
                            })}
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default HomeFeaturesFilter
