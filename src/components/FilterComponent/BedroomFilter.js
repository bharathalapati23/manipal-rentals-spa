import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { setBedroomFilter } from '../../actions/filters'
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


const useStyles = makeStyles((theme) => ({
    formControl: {
        // margin: theme.spacing(3),
        margin: '0 auto',
    },
    label: {
        fontFamily: 'poppins'
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

const BedroomFilter = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

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
        <Accordion className={classes.accordionStyle} defaultExpanded onChange={handleExpand}>
            <AccordionSummary
                expandIcon={<ExpandIconCompnent expanded={expanded} value={bedroomFilters.length} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Bedroom</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl required component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        {bedroomState.map((bedroom, index) => {
                            return <FormControlLabel
                                control={
                                    <Checkbox name={bedroom.name}
                                        style={{ color: '#e0e0e0', fontFamily: 'poppins' }}
                                    />}
                                classes={{
                                    label: classes.label,
                                }}
                                label={bedroom.label}
                                onChange={handleBedroomChange}
                                checked={bedroom.checked}
                                key={`bedroomfilter${index}`}
                            />
                        })}
                    </FormGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>
    )
}

export default BedroomFilter
