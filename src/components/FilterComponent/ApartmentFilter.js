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
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useMediaQuery } from 'react-responsive';

const initialApartmentState = [
    {
        label: 'Apartment',
        checked: false,
        name: 'Apartment'
    },
    {
        label: 'Bungalow',
        checked: false,
        name: 'Bungalow'
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


const ApartmentFilter = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    const history = useHistory();
    const location = useLocation();

    const accomodationTypeFilters = useSelector((state) => state.filters.accomodationType)
    const [apartmentState, setApartmentState] = useState(initialApartmentState)

    useEffect(() => {
        let newApartmentState = initialApartmentState.map((apartment) => {
            let newApartment = JSON.parse(JSON.stringify(apartment))
            if (accomodationTypeFilters.includes(apartment.name)) {
                newApartment.checked = true
            }
            return newApartment
        })
        setApartmentState(newApartmentState)
    }, [accomodationTypeFilters])

    const handleApartmentTypeChange = (event) => {
        let changedApartmentType = []
        let newApartmentState = apartmentState.map((apartmentType) => {
            if (apartmentType.name === event.target.name) {
                apartmentType.checked = event.target.checked
            }
            if (apartmentType.checked === true)
                changedApartmentType.push(apartmentType.name)
            return apartmentType
        })
        setApartmentState(newApartmentState)
        // dispatch(setAccomodationTypeFilter(changedApartmentType))
        const parsedLocation = queryString.parse(location.search);
        parsedLocation.accomodationType = changedApartmentType
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

    const [expanded, setExpanded] = React.useState(!isMobile);
    const handleExpand = (event, isExpanded) => {
        setExpanded(isExpanded)
    }

    const selectedApartmentFilters = accomodationTypeFilters.length
    return (
        <CustomAccordion defaultExpanded={!isMobile} onChange={handleExpand}>
            <AccordionSummary
                expandIcon={<ExpandIconCompnent expanded={expanded} value={selectedApartmentFilters} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Heading>Accomodation Type</Heading>
            </AccordionSummary>
            <AccordionDetails>
                <CustomFormControl required component="fieldset">
                    <FormGroup>
                        {apartmentState.map((apartmentType, index) => {
                            return <FormControlLabel
                                control={
                                    <Checkbox name={apartmentType.name}
                                        style={{ color: '#e0e0e0' }}
                                    />}
                                label={apartmentType.label}
                                onChange={handleApartmentTypeChange}
                                checked={apartmentType.checked}
                                key={`apartmentfilter${index}`}
                            />
                        })}
                    </FormGroup>
                </CustomFormControl>
            </AccordionDetails>
        </CustomAccordion>
    )
}

export default ApartmentFilter
