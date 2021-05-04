import React from 'react'
import Badge from '@material-ui/core/Badge';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
