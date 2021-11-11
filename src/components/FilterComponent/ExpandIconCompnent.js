import React from 'react'
import Badge from '@mui/material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandIconCompnent = ({ expanded, value }) => {
    return (
        <>
            {
            !expanded 
            ? <Badge badgeContent={value} color="primary"><ExpandMoreIcon style={{ color: '#e5e5e5' }} /></Badge> 
            : <ExpandMoreIcon style={{ color: '#e5e5e5' }} />
            }

        </>
    )
}

export default ExpandIconCompnent
