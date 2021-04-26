import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { setPriceRangeFilter } from '../../actions/filters'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles({
    root: {
        width: 200,
        margin:'0 auto'
    },
});

export default function SliderComponent() {
    const classes = useStyles();
    const [value, setValue] = React.useState([15000, 60000]);
    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        dispatch(setPriceRangeFilter(newValue))
    };

    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={15000}
                max={60000}
            />
            <Typography id="range-slider" gutterBottom>
                Rs.{value[0]} - Rs.{value[1]}
            </Typography>
        </div>
    );
}