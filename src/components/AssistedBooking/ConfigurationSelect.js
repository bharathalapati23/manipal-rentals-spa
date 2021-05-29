import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

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

const ConfigurationSelect = ({ enquiryForm, setEnquiryForm }) => {
    const classes = useStyles()
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
        setEnquiryForm({ ...enquiryForm, preferredConfig: event.target.value })
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
            {bedrooms.map((bedroom) => (
                <MenuItem key={bedroom.name} value={bedroom.name}>
                    <Checkbox checked={personName.indexOf(bedroom.name) > -1} />
                    <ListItemText primary={bedroom.name} />
                </MenuItem>
            ))}
        </Select>
    )
}

export default ConfigurationSelect
