import React from 'react'
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

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

const SelectComponent = styled(Select)(({ theme }) => ({
    width: '100%',
    height: '56px',
    marginTop: '5px',
    fontFamily: 'Poppins',
    fontSize: '14px',
    color: '#e5e5e5',
    border: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.23)',
    borderWidth: 'thin',
    backgroundColor: 'transparent',
    paddingLeft: '5px',
    borderRadius: '5px',
    "& option": {
        backgroundColor: "#black",
    },
    "& li": {
        fontSize: 12,
    },
    '&:hover': {
        borderRadius: 1,
        borderColor: '#fffff',
        boxShadow: '0 0 0 0.1rem rgba(255,255,255,1)',
    },
}));

const ConfigurationSelect = ({ enquiryForm, setEnquiryForm }) => {
    const personName = enquiryForm.preferredConfig

    const handleChange = (event) => {
        setEnquiryForm({ ...enquiryForm, preferredConfig: event.target.value })
    };

    return (
        <SelectComponent
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            disableUnderline
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            value={personName}
            onChange={handleChange}
        >
            {bedrooms.map((bedroom) => (
                <MenuItem key={bedroom.name} value={bedroom.name}>
                    <Checkbox checked={personName.indexOf(bedroom.name) > -1} />
                    <ListItemText primary={bedroom.name} />
                </MenuItem>
            ))}
        </SelectComponent>
    )
}

export default ConfigurationSelect
