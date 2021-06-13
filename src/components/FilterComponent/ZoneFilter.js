import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory, useLocation } from 'react-router-dom'
import { setZoneFilter } from '../../actions/filters.js'
import { useSelector, useDispatch } from 'react-redux'
import ExpandIconCompnent from './ExpandIconCompnent';
import queryString from 'query-string'

const initialZoneState = [
    {
        label: 'Syndicate Circle',
        checked: false,
        name: 'Syndicate Circle'
    },
    {
        label: 'Venugopal Temple',
        checked: false,
        name: 'Venugopal Temple'
    },
    {
        label: 'Eshwar Nagar',
        checked: false,
        name: 'Eshwar Nagar'
    },
    {
        label: 'Ananth Nagar',
        checked: false,
        name: 'Ananth Nagar'
    },
    {
        label: 'End Point Road',
        checked: false,
        name: 'End Point Road'
    },
    {
        label: 'Perampalli Road',
        checked: false,
        name: 'Perampalli Road'
    },
    {
        label: 'Vidyaratna Nagar',
        checked: false,
        name: 'Vidyaratna Nagar'
    },

]


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
    const history = useHistory();
    const location = useLocation();
    const zoneFilters = useSelector((state) => state.filters.zone)
    const [zoneState, setZoneState] = useState(initialZoneState)

    useEffect(() => {
        let newZoneState = JSON.parse(JSON.stringify(initialZoneState))
        newZoneState = initialZoneState.map((zone) => {
            let newZone = JSON.parse(JSON.stringify(zone))
            if (zoneFilters.includes(newZone.name)) {
                newZone.checked = true
            }
            return newZone
        })
        setZoneState(newZoneState)
    }, [zoneFilters])

    const handleZoneChange = (event) => {
        let changedZones = []
        let newZoneState = zoneState.map((zone) => {
            if (zone.name === event.target.name) {
                zone.checked = event.target.checked
            }
            if (zone.checked === true)
                changedZones.push(zone.name)
            return zone
        })
        setZoneState(newZoneState)
        // dispatch(setZoneFilter(changedZones))
        const parsedLocation = queryString.parse(location.search);
        parsedLocation.zone = changedZones
        let newLocationString = ''
        Object.keys(parsedLocation).map((filter, index) => {
            if(filter === 'page') return
            if(parsedLocation[filter].length) {
                newLocationString += filter + '='
                newLocationString += parsedLocation[filter]
                if(index !== Object.keys(parsedLocation).length-1)
                newLocationString += '&'
            }
        })
        
        history.push({
            pathname: '/properties',
            search: `?${newLocationString}`,
        })

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
                    expandIcon={<ExpandIconCompnent expanded={expanded} value={zoneFilters.length} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Zone</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl required component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            {zoneState.map((zone, index) => {
                                return <FormControlLabel
                                    control={
                                        <Checkbox name={zone.name}
                                            style={{ color: '#e0e0e0' }}
                                        />}
                                    onChange={handleZoneChange}
                                    label={zone.label}
                                    checked={zone.checked}
                                    key={'zoneFilter' + index}
                                />
                            })}
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default ZoneFilter
