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
import ExpandIconCompnent from './ExpandIconCompnent';


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
    }
}));


const ZoneFilter = () => {
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

    const [expanded, setExpanded] = React.useState(false);
    const handleExpand = (event, isExpanded) => {
        setExpanded(isExpanded)
    }

    return (
        <>
            {/* <Divider /> */}
            <Accordion className={classes.accordionStyle} onChange={handleExpand}>
                <AccordionSummary
                    expandIcon={<ExpandIconCompnent expanded={expanded} value={checkedZones.length} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={classes.heading}>Zone</div>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl required component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox name="Syndicate Circle"
                                        labelStyle={{ color: 'white' }}
                                        iconStyle={{ fill: 'white' }}
                                        style={{ color: 'white' }}
                                    />}
                                label="Syndicate Circle"
                                onChange={handleZoneChange}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="Venugopal Temple"
                                        labelStyle={{ color: 'white' }}
                                        iconStyle={{ fill: 'white' }}
                                        style={{ color: 'white' }}
                                    />
                                }
                                label="Venugopal Temple"
                                onChange={handleZoneChange}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="Eshwar Nagar"
                                        labelStyle={{ color: 'white' }}
                                        iconStyle={{ fill: 'white' }}
                                        style={{ color: 'white' }}
                                    />
                                }
                                label="Eshwar Nagar"
                                onChange={handleZoneChange}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="Ananth Nagar"
                                        labelStyle={{ color: 'white' }}
                                        iconStyle={{ fill: 'white' }}
                                        style={{ color: 'white' }}
                                    />
                                }
                                label="Ananth Nagar"
                                onChange={handleZoneChange}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="End Point Road"
                                        labelStyle={{ color: 'white' }}
                                        iconStyle={{ fill: 'white' }}
                                        style={{ color: 'white' }}
                                    />
                                }
                                label="End Point Road"
                                onChange={handleZoneChange}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="Perampalli Road"
                                        labelStyle={{ color: 'white' }}
                                        iconStyle={{ fill: 'white' }}
                                        style={{ color: 'white' }}
                                    />
                                }
                                label="Perampalli Road"
                                onChange={handleZoneChange}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox name="Vidyaratna Nagar"
                                        labelStyle={{ color: 'white' }}
                                        iconStyle={{ fill: 'white' }}
                                        style={{ color: 'white' }}
                                    />
                                }
                                label="Vidyaratna Nagar"
                                onChange={handleZoneChange}
                            />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default ZoneFilter
