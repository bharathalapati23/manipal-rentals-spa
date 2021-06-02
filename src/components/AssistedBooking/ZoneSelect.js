import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

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
        marginTop: '5px',
        fontFamily: 'Poppins',
        fontSize: '14px',
        color: '#e5e5e5',
        border: 'solid',
        borderColor: '#121212',
        borderWidth: 'thin',
        backgroundColor: 'transparent',
        paddingLeft:'5px',
        borderRadius: '5px',
        "& option": {
            backgroundColor: "#black",
        },
        "& li": {
            fontSize: 12,
        },
    },
}));

const ZoneSelect = ({ enquiryForm, setEnquiryForm }) => {
    const classes = useStyles()
    // const [personName, setPersonName] = React.useState([]);
    const personName = enquiryForm.preferredZones
    const handleChange = (event) => {
        // setPersonName(event.target.value);
        setEnquiryForm({ ...enquiryForm, preferredZones: event.target.value })
    };

    return (
        <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            value={personName}
            onChange={handleChange}
            className={classes.sortSelect}
        >
            {zones.map((zone) => (
                <MenuItem key={zone.name} value={zone.name}>
                    <Checkbox checked={personName.indexOf(zone.name) > -1} />
                    <ListItemText primary={zone.name} />
                </MenuItem>
            ))}
        </Select>
    )
}

export default ZoneSelect
