import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { setAccomodationTypeFilter } from '../../actions/filters'
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import ExpandIconCompnent from './ExpandIconCompnent';
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'

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


const useStyles = makeStyles((theme) => ({
    formControl: {
        // margin: theme.spacing(3),
        margin: '0 auto'
    },
    heading: {
        fontFamily: 'Poppins',
        textAlign: 'center',
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

const ApartmentFilter = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
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

    const [expanded, setExpanded] = React.useState(true);
    const handleExpand = (event, isExpanded) => {
        setExpanded(isExpanded)
    }

    const selectedApartmentFilters = accomodationTypeFilters.length

    // console.log('apartmentfilters', selectedApartmentFilters)

    return (
        <Accordion className={classes.accordionStyle} defaultExpanded onChange={handleExpand}>
            <AccordionSummary
                expandIcon={<ExpandIconCompnent expanded={expanded} value={selectedApartmentFilters} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Accomodation Type</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl required component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        {apartmentState.map((apartmentType, index) => {
                            return <FormControlLabel
                                control={
                                    <Checkbox name={apartmentType.name}
                                        style={{ color: 'white' }}
                                    />}
                                label={apartmentType.label}
                                onChange={handleApartmentTypeChange}
                                checked={apartmentType.checked}
                                key={`apartmentfilter${index}`}
                            />
                        })}
                    </FormGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>
    )
}

export default ApartmentFilter
