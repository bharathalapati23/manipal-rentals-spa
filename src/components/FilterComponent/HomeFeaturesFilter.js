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
import { useSelector, useDispatch } from 'react-redux'
import ExpandIconCompnent from './ExpandIconCompnent';
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router-dom'


const initialHomeFeatures = {
    wifi: false,
    geyser: false,
    washingMachine: false,
    cookingHub: false,
    fridge: false,
    couch: false,
    coffeeTable: false,
    chairs: false,
    tv: false
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
    tv: 'TV'
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

const HomeFeaturesFilter = () => {
    const history = useHistory();
    const location = useLocation();

    const homeFilters = useSelector((state) => state.filters.homeFeatures)
    const [homeFeatures, setHomeFeatures] = useState(initialHomeFeatures)

    useEffect(() => {
        setHomeFeatures(homeFilters)
    }, [homeFilters])

    const handleFilterChange = (event, key) => {
        let homeFeaturesFilterArr = []
        let newHomeFeatures = {
            ...homeFeatures,
            [key]: event.target.checked
        }
        setHomeFeatures(newHomeFeatures)
        Object.keys(newHomeFeatures).map((newHomeFeature) => {
            if (newHomeFeatures[newHomeFeature] === true)
                homeFeaturesFilterArr.push(newHomeFeature)
        })
        const parsedLocation = queryString.parse(location.search);
        parsedLocation.homeFeatures = homeFeaturesFilterArr
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

    let selectedHomeFeatures = Object.keys(homeFeatures).reduce((total, homeFeature) => {
        if (homeFeatures[homeFeature] === true)
            return total + 1
        return total
    }, 0)

    return (
        <>
            <CustomAccordion onChange={handleExpand}>
                <AccordionSummary
                    expandIcon={<ExpandIconCompnent expanded={expanded} value={selectedHomeFeatures} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Heading>Home Features</Heading>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomFormControl required component="fieldset">
                        <FormGroup>
                            {Object.keys(homeFeatures).map((key, index) => {
                                return <
                                    FormControlLabel
                                    control={
                                        <Checkbox name="1"
                                            style={{ color: '#e0e0e0' }}
                                            checked={homeFeatures[key]}
                                        />
                                    }
                                    label={displayNameHomeFeatures[key]}
                                    onChange={(event) => handleFilterChange(event, key)}
                                    key={`${index}homefeaturefilter`}
                                />
                            })}
                        </FormGroup>
                    </CustomFormControl>
                </AccordionDetails>
            </CustomAccordion>
        </>
    )
}

export default HomeFeaturesFilter
