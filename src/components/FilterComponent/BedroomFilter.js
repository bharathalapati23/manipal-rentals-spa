import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography';
import ExpandIconCompnent from './ExpandIconCompnent';
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router-dom'


const initialBedroomState = [
    {
        label: '1BHK',
        checked: false,
        name: '1'
    },
    {
        label: '2BHK',
        checked: false,
        name: '2'
    },
    {
        label: '3BHK',
        checked: false,
        name: '3'
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

const BedroomFilter = () => {
    const history = useHistory();
    const location = useLocation();

    const bedroomFilters = useSelector((state) => state.filters.bedroom)
    const [bedroomState, setBedroomState] = useState(initialBedroomState)

    useEffect(() => {
        let newBedroomState = JSON.parse(JSON.stringify(initialBedroomState))
        newBedroomState = newBedroomState.map((bedroom) => {
            if (bedroomFilters.includes(Number(bedroom.name))) {
                bedroom.checked = true
            }
            return bedroom
        })
        setBedroomState(newBedroomState)
    }, [bedroomFilters])

    const handleBedroomChange = (event) => {
        let changedBedrooms = []
        let newBedroomState = bedroomState.map((bedroom) => {
            if (bedroom.name === event.target.name) {
                bedroom.checked = event.target.checked
            }
            if (bedroom.checked === true)
                changedBedrooms.push(Number(bedroom.name))
            return bedroom
        })
        setBedroomState(newBedroomState)
        // dispatch(setBedroomFilter(changedBedrooms))
        const parsedLocation = queryString.parse(location.search);
        parsedLocation.bedroom = changedBedrooms
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

    const [expanded, setExpanded] = React.useState(true);
    const handleExpand = (event, isExpanded) => {
        setExpanded(isExpanded)
    }

    return (
        <CustomAccordion defaultExpanded onChange={handleExpand}>
            <AccordionSummary
                expandIcon={<ExpandIconCompnent expanded={expanded} value={bedroomFilters.length} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Heading>Bedroom</Heading>
            </AccordionSummary>
            <AccordionDetails>
                <CustomFormControl required component="fieldset">
                    <FormGroup>
                        {bedroomState.map((bedroom, index) => {
                            return <FormControlLabel
                                control={
                                    <Checkbox name={bedroom.name}
                                        style={{ color: '#e0e0e0', fontFamily: 'poppins' }}
                                    />}
                                label={bedroom.label}
                                onChange={handleBedroomChange}
                                checked={bedroom.checked}
                                key={`bedroomfilter${index}`}
                            />
                        })}
                    </FormGroup>
                </CustomFormControl>
            </AccordionDetails>
        </CustomAccordion>
    )
}

export default BedroomFilter
