import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '80px',
    }
}));

const HowItWorksComponent = () => {
	const classes = useStyles();

    return (
        <div className={classes.root}>
            hello         
        </div>
    )
}

export default HowItWorksComponent
