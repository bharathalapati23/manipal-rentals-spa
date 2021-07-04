import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

const zones = [
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
        
        height: '56px',
        fontFamily: 'Poppins',
        fontSize: '14px',
        color: '#e5e5e5',
        border: 'solid',
        borderColor: '#2e2e2e',
        borderWidth: 'thin',
        backgroundColor: '#2e2e2e',
        paddingLeft: '5px',
        borderRadius: '5px',
        marginRight: '10px',
        "& option": {
            backgroundColor: "#black",
        },
        "& li": {
            fontSize: 12,
        },
        opacity: 0.9,
        [theme.breakpoints.up('md')]: {
			maxWidth: '400px',
		},
        [theme.breakpoints.down('sm')]: {
			width: '90%',
            
		},
    },
    bedroomSelect: {
        width: '100%',
        
        height: '56px',
        fontFamily: 'Poppins',
        fontSize: '14px',
        color: '#e5e5e5',
        border: 'solid',
        borderColor: '#2e2e2e',
        borderWidth: 'thin',
        backgroundColor: '#2e2e2e',
        paddingLeft: '5px',
        borderRadius: '5px',
        marginRight: '10px',
        "& option": {
            backgroundColor: "#black",
        },
        "& li": {
            fontSize: 12,
        },
        opacity: 0.9,
        [theme.breakpoints.up('md')]: {
			maxWidth: '200px',
		},
        [theme.breakpoints.down('sm')]: {
			width: '90%',
            marginBottom: '10px'
		},
    },
    registerButton: {
        borderRadius: 10,
        //background: '#f36802',
        color: '#F2F2F2',
        fontWeight: 'bold',
        fontSize: '20px',
        fontFamily: 'Poppins',
    },
    icon: {
        fill: '#d5d5d5',
    },
}));

const SearchComponent = ({ isMobile }) => {
    const classes = useStyles();
    const history = useHistory();
    const [bedroomSelect, setBedroomSelect] = React.useState(['Select Bedroom'])
    const [zoneSelect, setZoneSelect] = React.useState(['Select Zone']);

    const handleZoneChange = (event) => {
        let selectedZones = event.target.value
        if (selectedZones[0] == 'Select Zone')
            selectedZones.splice(0, 1)
        if (selectedZones.length === 0)
            selectedZones.push('Select Zone')
        setZoneSelect(selectedZones);
    };

    const handleBedroomChange = (event) => {
        let selectedBedroom = event.target.value
        if (selectedBedroom[0] == 'Select Bedroom')
            selectedBedroom.splice(0, 1)
        if (selectedBedroom.length === 0)
            selectedBedroom.push('Select Bedroom')

        setBedroomSelect(event.target.value);
    };

    const navigateToProperties = () => {
        let selectedZones = zoneSelect
        if (selectedZones[0] == 'Select Zone')
            selectedZones.splice(0, 1)

        let selectedBedroom = bedroomSelect
        if (selectedBedroom[0] == 'Select Bedroom')
            selectedBedroom.splice(0, 1)

        if (!selectedZones.length && !selectedBedroom.length)
            history.push('/properties')
        else {
            let queryString = ''
            if (selectedZones.length) queryString += 'zone=' + selectedZones.join(',') + '&'
            if (selectedBedroom.length) {
                let bedroomValue = selectedBedroom.map((bedroom) => {
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
            {!isMobile &&
                <div style={{ top: '50%', left: '50%', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Select
                        label="Age"
                        multiple
                        disableUnderline
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        value={zoneSelect}
                        onChange={handleZoneChange}
                        className={classes.sortSelect}
                        defaultValue="none"
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                            },
                        }}
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
                        disableUnderline
                        input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        value={bedroomSelect}
                        onChange={handleBedroomChange}
                        className={classes.bedroomSelect}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                            },
                        }}
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
                        style={{ background: '#f36802' }}
                    >
                        SEARCH
                    </Button>
                </div>
            }
            {isMobile &&
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Select
                        label="Age"
                        multiple
                        disableUnderline
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        value={zoneSelect}
                        onChange={handleZoneChange}
                        className={classes.sortSelect}
                        defaultValue="none"
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                            },
                        }}
                    >
                        {zones.map((zone) => (
                            <MenuItem key={zone.name} value={zone.name}>
                                <Checkbox checked={zoneSelect.indexOf(zone.name) > -1} />
                                <ListItemText primary={zone.name} />
                            </MenuItem>
                        ))}
                    </Select>
                    <Divider />
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        disableUnderline
                        input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        value={bedroomSelect}
                        onChange={handleBedroomChange}
                        className={classes.bedroomSelect}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                            },
                        }}
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
                        style={{ background: '#f36802' }}
                    >
                        SEARCH
                    </Button>
                </div>
            }
        </>
    )
}

export default SearchComponent
