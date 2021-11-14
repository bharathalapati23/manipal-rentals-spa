import React from 'react'
import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
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
}));

const RootDiv = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '0 auto',
    marginTop: '80px',
    maxWidth: '1300px',
    paddingLeft: '8px',
    paddingRight: '8px',
    boxSizing: 'border-box',
}));

const PropertyNameDiv = styled('div')(({ theme }) => ({
    fontFamily: 'Poppins',
    fontSize: '45px',
    color: '#e0e0e0',
    [theme.breakpoints.down('md')]: {
        fontSize: '30px',
    },
    textAlign: 'center'
}));

const HowItWorksComponent = () => {
    const classes = useStyles();
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <RootDiv>
            <PropertyNameDiv>
                Why Rent with Wolpa?
            </PropertyNameDiv>
            <WhyUsCardsComponent />
            <PropertyNameDiv style={{ marginTop: '20px', textAlign: 'center' }}>
                How it works
            </PropertyNameDiv>
            <VerticalStepperComponent />
        </RootDiv>
    )
}

export default HowItWorksComponent
