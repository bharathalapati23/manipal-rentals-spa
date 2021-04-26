import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles({
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'grey'
    },
});



const BottomNavigationComponent = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.stickToBottom} showLabels>
            <BottomNavigationAction label="Filter" value="filter" icon={<FilterListIcon />} />
            <BottomNavigationAction label="Sort" value="sort" icon={<SortIcon />} />
        </BottomNavigation>
    )
}

export default BottomNavigationComponent
