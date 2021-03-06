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
import { setBedroomDetailsFilter } from '../../actions/filters.js'
import { useSelector, useDispatch } from 'react-redux'
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

const BedroomDetailsFilter = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

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
        //dispatch(setBedroomDetailsFilter(newBedroomDetails))
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
            <Accordion className={classes.accordionStyle} onChange={handleExpand}>
                <AccordionSummary
                    expandIcon={<ExpandIconCompnent expanded={expanded} value={selectedBedroomDetails} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Bedroom Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl required component="fieldset" className={classes.formControl}>
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
                                    classes={{
                                        label: classes.label,
                                    }}
                                    label={displayNameBedroomDetails[key]}
                                    onChange={(event) => handleFilterChange(event, key)}
                                    key={`${index}bedroomdetailsfilter`}
                                />
                            })}
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default BedroomDetailsFilter
