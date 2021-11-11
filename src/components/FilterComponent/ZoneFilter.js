import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ExpandIconCompnent from './ExpandIconCompnent';
import queryString from 'query-string'

const initialZoneState = [
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
]

const CustomAccordion = styled(Accordion)(() => ({
    boxShadow: "none",
    backgroundColor: 'transparent',
    color: '#e5e5e5',
    boxShadow: "none",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    "& span.MuiTypography-root": {
        fontFamily: 'poppins'
    },
}));

const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins',
    textAlign: 'center',
}));

const CustomFormControl = styled(FormControl)(() => ({
    width: '100%',
    alignItems: 'center'
}));

const ZoneFilter = () => {
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
            if (filter === 'page') return
            if (parsedLocation[filter].length) {
                newLocationString += filter + '='
                newLocationString += parsedLocation[filter]
                if (index !== Object.keys(parsedLocation).length - 1)
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
            <CustomAccordion onChange={handleExpand}>
                <AccordionSummary
                    expandIcon={<ExpandIconCompnent expanded={expanded} value={zoneFilters.length} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Heading>Zone</Heading>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomFormControl required component="fieldset">
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
                    </CustomFormControl>
                </AccordionDetails>
            </CustomAccordion>
        </>
    )
}

export default ZoneFilter
