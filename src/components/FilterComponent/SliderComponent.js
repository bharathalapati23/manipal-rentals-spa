import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { setPriceRangeFilter } from '../../actions/filters'
import { useDispatch, useSelector } from 'react-redux'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandIconCompnent from './ExpandIconCompnent';

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
    const [value, setValue] = React.useState([0, 60000]);
    const dispatch = useDispatch();

    const priceRangeFilters = useSelector((state) => state.filters.priceRange)
    React.useEffect(() => {
        setValue(priceRangeFilters)
    }, [priceRangeFilters])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatchPriceRangeFilter = () => {
        dispatch(setPriceRangeFilter(value))
    }

    const [expanded, setExpanded] = React.useState(true);
    const handleExpand = (event, isExpanded) => {
        setExpanded(isExpanded)
    }

    return (
        <Accordion defaultExpanded className={classes.accordionStyle} onChange={handleExpand}>
            <AccordionSummary
                expandIcon={<ExpandIconCompnent expanded={expanded} />}
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
                        valueLabelDisplay="on"
                        min={0}
                        max={60000}
                        onChangeCommitted={dispatchPriceRangeFilter}
                    />
                    {/* <Typography id="range-slider" gutterBottom>
                        Rs.{value[0]} - Rs.{value[1]}
                    </Typography> */}
                </div>
            </AccordionDetails>
        </Accordion>
    );
}