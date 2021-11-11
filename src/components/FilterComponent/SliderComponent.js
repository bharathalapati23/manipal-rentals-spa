import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandIconCompnent from './ExpandIconCompnent';
import { useHistory, useLocation } from 'react-router-dom'
import queryString from 'query-string'

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#e0e0e0',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '& .airbnb-bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
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
}));

function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

const SliderRoot = styled('div')(() => ({
    width: 200,
    margin: '0 auto'
}));

const CustomAccordion = styled(Accordion)(() => ({
    boxShadow: "none",
    backgroundColor: 'transparent',
    color: '#e5e5e5',
    boxShadow: "none",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
}));

const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins',
    textAlign: 'center',
}));

export default function SliderComponent() {
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
        <CustomAccordion defaultExpanded={!isMobile} onChange={handleExpand}>
            <AccordionSummary
                expandIcon={<ExpandIconCompnent expanded={expanded} value={priceRangeFilter} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Heading>Budget</Heading>
            </AccordionSummary>
            <AccordionDetails>
                <SliderRoot>
                    <AirbnbSlider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="off"
                        min={0}
                        max={40000}
                        onChangeCommitted={dispatchPriceRangeFilter}
                        components={{ Thumb: AirbnbThumbComponent }}
                    />
                    <Typography id="range-slider" gutterBottom style={{ fontFamily: 'Poppins', display: 'flex', justifyContent: 'center' }}>
                        <span style={{ fontFamily: 'Bebas Neue', marginRight: '1px' }}>₹</span>{value[0]} - <span style={{ fontFamily: 'Bebas Neue', marginLeft: '2px' }}>₹</span>{value[1]}
                    </Typography>
                </SliderRoot>
            </AccordionDetails>
        </CustomAccordion>
    );
}