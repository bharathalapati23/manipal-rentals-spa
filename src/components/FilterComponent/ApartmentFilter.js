import React, { useState } from 'react'
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
import { setZoneFilter } from '../../actions/filters.js'
import { useDispatch } from 'react-redux'


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


const ApartmentFilter = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [checkedZones, setCheckedZones] = useState([])

    const handleZoneChange = (event) => {
        let changedZones = JSON.parse(JSON.stringify(checkedZones))
        if (event.target.checked)
            changedZones.push(event.target.name)
        else {
            const index = changedZones.indexOf(event.target.name);
            if (index > -1) {
                changedZones.splice(index, 1)
            }
        }
        setCheckedZones(changedZones)
        dispatch(setZoneFilter(changedZones))
    };


    return (
        <>
            <Divider />
            <Accordion style={{ boxShadow: "none" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Accomodation Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl required component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox name="Apartment" />}
                                label="Apartment"
                                onChange={handleZoneChange}
                            />
                            <FormControlLabel
                                control={<Checkbox name="Bungalow" />}
                                label="Bungalow"
                                onChange={handleZoneChange}
                            />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default ApartmentFilter
