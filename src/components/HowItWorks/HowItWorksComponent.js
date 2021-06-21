import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import WhyUsCardsComponent from './WhyUsCardsComponent'
import VerticalStepperComponent from './VerticalStepperComponent'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '0 auto',
        maxWidth: '1300px',
        paddingLeft: '8px',
        paddingRight: '8px',
        boxSizing: 'border-box',
    },
    propertyName: {
        fontFamily: 'Poppins',
        fontSize: '45px',
        color: '#e0e0e0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
        },
        textAlign: 'center'
        // letterSpacing: '0.5px'
    },
}));

const HowItWorksComponent = () => {
    const classes = useStyles();
    React.useEffect(()=> {
        window.scrollTo(0,0)
    },[])

    return (
        <div className={classes.root}>
            <div className={classes.propertyName}>
                Why Rent with Wolpa?
            </div>
            <WhyUsCardsComponent />
            <div className={classes.propertyName} style={{ marginTop: '20px', textAlign:'center' }}>
                How it works
            </div>
            <VerticalStepperComponent />
        </div>
    )
}

export default HowItWorksComponent
