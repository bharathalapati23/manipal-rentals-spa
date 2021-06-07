import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

const zones = [
    {
        label: 'Syndicate Circle',
        checked: false,
        name: 'Syndicate Circle'
    },
    {
        label: 'Venugopal Temple',
        checked: false,
        name: 'Venugopal Temple'
    },
    {
        label: 'Eshwar Nagar',
        checked: false,
        name: 'Eshwar Nagar'
    },
    {
        label: 'Ananth Nagar',
        checked: false,
        name: 'Ananth Nagar'
    },
    {
        label: 'End Point Road',
        checked: false,
        name: 'End Point Road'
    },
    {
        label: 'Perampalli Road',
        checked: false,
        name: 'Perampalli Road'
    },
    {
        label: 'Vidyaratna Nagar',
        checked: false,
        name: 'Vidyaratna Nagar'
    },

]

const bedrooms = [
    {
        label: '1BHK',
        checked: false,
        name: '1BHK'
    },
    {
        label: '2BHK',
        checked: false,
        name: '2BHK'
    },
    {
        label: '3BHK',
        checked: false,
        name: '3BHK'
    },
]

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {

    anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "left"
    },
    getContentAnchorEl: null,
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const useStyles = makeStyles((theme) => ({
    sortSelect: {
        width: '100%',
        maxWidth: '400px',
        height: '56px',
        marginTop: '5px',
        fontFamily: 'Poppins',
        fontSize: '14px',
        color: '#e5e5e5',
        border: 'solid',
        borderColor: '#121212',
        borderWidth: 'thin',
        backgroundColor: '#121212',
        paddingLeft: '5px',
        borderRadius: '5px',
        marginRight: '10px',
        "& option": {
            backgroundColor: "#black",
        },
        "& li": {
            fontSize: 12,
        },
    },
    bedroomSelect: {
        width: '100%',
        maxWidth: '100px',
        height: '56px',
        marginTop: '5px',
        fontFamily: 'Poppins',
        fontSize: '14px',
        color: '#e5e5e5',
        border: 'solid',
        borderColor: '#121212',
        borderWidth: 'thin',
        backgroundColor: '#121212',
        paddingLeft: '5px',
        borderRadius: '5px',
        marginRight: '10px',
        "& option": {
            backgroundColor: "#black",
        },
        "& li": {
            fontSize: 12,
        },
    },
    registerButton: {
        borderRadius: 10,
        marginBottom: '4px',
        backgroundColor: '#f36802',
        color: '#d5d5d5',
        fontWeight: 'bold',
        fontSize: '20px',
        fontFamily: 'Poppins',
        marginBottom: '10px',
        
    },
}));

const SearchComponent = () => {
    const classes = useStyles();
    const history = useHistory();
    const [bedroomSelect, setBedroomSelect] = React.useState([])
    const [zoneSelect, setZoneSelect] = React.useState([]);

    const handleZoneChange = (event) => {
        setZoneSelect(event.target.value);
    };

    const handleBedroomChange = (event) => {
        setBedroomSelect(event.target.value);
    };

    const navigateToProperties = () => {
        if (!zoneSelect.length && !bedroomSelect.length)
            history.push('/properties')
        else {
            let queryString = ''
            if (zoneSelect.length) queryString += 'zone=' + zoneSelect.join(',') + '&'
            if (bedroomSelect.length) {
                let bedroomValue = bedroomSelect.map((bedroom)=> {
                    return bedroom[0]
                })
                queryString += 'bedroom=' + bedroomValue.join(',')
            }
            history.push({
                pathname: '/properties',
                search: `?${queryString}`,
            })
        }
    }

    return (
        <>
            <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                value={zoneSelect}
                onChange={handleZoneChange}
                className={classes.sortSelect}
            >
                {zones.map((zone) => (
                    <MenuItem key={zone.name} value={zone.name}>
                        <Checkbox checked={zoneSelect.indexOf(zone.name) > -1} />
                        <ListItemText primary={zone.name} />
                    </MenuItem>
                ))}
            </Select>
            <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                value={bedroomSelect}
                onChange={handleBedroomChange}
                className={classes.bedroomSelect}
            >
                {bedrooms.map((bedroom) => (
                    <MenuItem key={bedroom.name} value={bedroom.name}>
                        <Checkbox checked={bedroomSelect.indexOf(bedroom.name) > -1} />
                        <ListItemText primary={bedroom.name} />
                    </MenuItem>
                ))}
            </Select>
            <Button variant="contained"
                className={classes.registerButton}
                onClick={navigateToProperties}
            >
                SEARCH
            </Button>
        </>
    )
}

export default SearchComponent
