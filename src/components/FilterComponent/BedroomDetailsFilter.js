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
import { useSelector } from 'react-redux'
import ExpandIconCompnent from './ExpandIconCompnent';
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router-dom'


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

const BedroomDetailsFilter = () => {
    const history = useHistory();
    const location = useLocation();

    const bedroomFilters = useSelector((state) => state.filters.bedroomDetails)
    const [bedroomDetails, setBedroomDetails] = useState(initialBedroomDetails)

    useEffect(() => {
        setBedroomDetails(bedroomFilters)
    }, [bedroomFilters])

    const handleFilterChange = (event, key) => {
        let bedroomDetailsFilterArr = []

        let newBedroomDetails = {
            ...bedroomDetails,
            [key]: event.target.checked
        }
        setBedroomDetails(newBedroomDetails)
        Object.keys(newBedroomDetails).map((newBedroomDetail) => {
            if (newBedroomDetails[newBedroomDetail] === true)
                bedroomDetailsFilterArr.push(newBedroomDetail)
        })
        const parsedLocation = queryString.parse(location.search);
        parsedLocation.bedroomDetails = bedroomDetailsFilterArr
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

    let selectedBedroomDetails = Object.keys(bedroomDetails).reduce((total, bedroomDetail) => {
        if (bedroomDetails[bedroomDetail] === true)
            return total + 1
        return total
    }, 0)

    return (
        <>
            <CustomAccordion onChange={handleExpand}>
                <AccordionSummary
                    expandIcon={<ExpandIconCompnent expanded={expanded} value={selectedBedroomDetails} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Heading>Bedroom Details</Heading>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomFormControl required component="fieldset">
                        <FormGroup>
                            {Object.keys(bedroomDetails).map((key, index) => {
                                return <
                                    FormControlLabel
                                    control={
                                        <Checkbox name="1"
                                            style={{ color: '#e0e0e0' }}
                                            checked={bedroomDetails[key]}
                                        />
                                    }
                                    label={displayNameBedroomDetails[key]}
                                    onChange={(event) => handleFilterChange(event, key)}
                                    key={`${index}bedroomdetailsfilter`}
                                />
                            })}
                        </FormGroup>
                    </CustomFormControl>
                </AccordionDetails>
            </CustomAccordion>
        </>
    )
}

export default BedroomDetailsFilter
