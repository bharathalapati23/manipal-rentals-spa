import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandIconCompnent from './ExpandIconCompnent';
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'

const AirbnbSlider = withStyles({
    root: {
        color: '#e0e0e0',
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: '#717171',
        opacity: 1,
        height: 3,
    },
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#e5e5e5',
        },
    },
})(Slider);


const useStyles = makeStyles({
    root: {
        width: 200,
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
});

export default function SliderComponent() {
    const classes = useStyles();
    const [value, setValue] = React.useState([]);
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    const history = useHistory();
    const location = useLocation();

    const priceRangeFilters = useSelector((state) => state.filters.priceRange)
    React.useEffect(() => {
        setValue(priceRangeFilters)
    }, [priceRangeFilters])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatchPriceRangeFilter = (event, newValue) => {
       
        const parsedLocation = queryString.parse(location.search);
        parsedLocation.budget = newValue

        let newLocationString = ''
        Object.keys(parsedLocation).map((filter, index) => {
            if (filter === 'page') return
            if (filter === 'budgetMax' || filter === 'budgetMin') {
                newLocationString += filter + '=' + parsedLocation[filter] + '&'
            }
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
       


        // dispatch(setPriceRangeFilter(value))
    }

    const [expanded, setExpanded] = React.useState(!isMobile);
    const handleExpand = (event, isExpanded) => {
        setExpanded(isExpanded)
    }

    let priceRangeFilter
    if (priceRangeFilters) {
        if (priceRangeFilters[0] != 0 || priceRangeFilters[1] != 40000)
            priceRangeFilter = 1
    }

    return (
        <Accordion defaultExpanded={!isMobile} className={classes.accordionStyle} onChange={handleExpand}>
            <AccordionSummary
                expandIcon={<ExpandIconCompnent expanded={expanded} value={priceRangeFilter} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Budget</Typography>
            </AccordionSummary>
            <AccordionDetails>

                <div className={classes.root}>

                    <AirbnbSlider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="off"
                        min={0}
                        max={40000}
                        onChangeCommitted={dispatchPriceRangeFilter}
                        // valueLabelFormat={value =>
                        //     <div style={{ fontFamily: 'Poppins' }}>
                        //         <span style={{ fontFamily: 'Bebas Neue' }}>???</span>
                        //         {value}
                        //     </div>
                        // }
                    />
                    <Typography id="range-slider" gutterBottom style={{ fontFamily: 'Poppins', display: 'flex', justifyContent: 'center' }}>
                        <span style={{ fontFamily: 'Bebas Neue', marginRight: '1px' }}>???</span>{value[0]} - <span style={{ fontFamily: 'Bebas Neue', marginRight: '1px' }}>???</span>{value[1]}
                    </Typography>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}