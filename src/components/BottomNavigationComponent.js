import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import SortIcon from '@material-ui/icons/Sort';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles({
    stickToBottom: {
        width: '100%',
        position: 'sticky',
        bottom: 0,
        backgroundColor: 'grey',
        margin: '0 auto'
    },
});



const BottomNavigationComponent = ({ setFilterPage }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{
            width: '96%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'sticky',
            bottom: 0,
            margin: '0 auto',
            backgroundColor: 'grey',
            padding: '10px',
            zIndex: 10000
        }}>
            <div onClick={() => setFilterPage(true)}>
                <Badge badgeContent={4} color="primary">
                    <FilterListIcon />
                </Badge>
            </div>
            <div onClick={() => setFilterPage(false)}>
                <SortIcon />
            </div>
        </div>
    )
}

export default BottomNavigationComponent
