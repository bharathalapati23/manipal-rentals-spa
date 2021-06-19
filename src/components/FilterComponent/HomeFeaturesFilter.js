import React, { useState, useEffect } from 'react'
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
import { setHomeFeaturesFilter } from '../../actions/filters.js'
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
}

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: 'Poppins',
        textAlign: 'center',
    },
    formControl: {
        // margin: theme.spacing(3),
        margin: '0 auto'
    },
    label: {
        fontFamily: 'poppins'
    },
    accordionStyle: {
        boxShadow: "none",
        backgroundColor: 'transparent',
        color: '#e5e5e5',
        boxShadow: "none",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
}));

const HomeFeaturesFilter = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

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
        // dispatch(setHomeFeaturesFilter(newHomeFeatures))
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
            <Accordion className={classes.accordionStyle} onChange={handleExpand}>
                <AccordionSummary
                    expandIcon={<ExpandIconCompnent expanded={expanded} value={selectedHomeFeatures} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Home Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl required component="fieldset" className={classes.formControl}>
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
                                    classes={{
                                        label: classes.label,
                                    }}
                                    label={displayNameHomeFeatures[key]}
                                    onChange={(event) => handleFilterChange(event, key)}
                                    key={`${index}homefeaturefilter`}
                                />
                            })}
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default HomeFeaturesFilter
