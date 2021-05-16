import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DescriptionIcon from '@material-ui/icons/Description';

import DepositIcon from '../../icons/HowItWorksIcons/DepositIcon'
import ShowerIcon from '../../icons/ShowerIcon'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: '0 auto',
        maxWidth: '1300px',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    cardStyle: {
        width: '30%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginBottom: '20px'
        },
        backgroundColor: '#2e2e2e',
        fontFamily: 'poppins',
        color: '#e5e5e5',
        fontWeight: 'bolder',
        letterSpacing: '0.04rem',
        fontSize: '23px'
    },
    cardContentStyle: {
        display: 'flex',
        flexDirection: 'column',
    },
    iconStyle: {
        fontSize: '100px',
        color: '#f36802',
    }
}));


const WhyUsCardsComponent = () => {
    const classes = useStyles();

    const cardsConfigArr = [
        {
            icon: <DepositIcon className={classes.iconStyle} />,
            content: 'Save money & Deposit secured.'
        },
        {
            icon: <DescriptionIcon className={classes.iconStyle} />,
            content: 'Assistance from choosing property to rental agreement.'
        },
        {
            icon: <SmartphoneIcon className={classes.iconStyle} />,
            content: 'Book from the comfort of your home.'
        }
    ]

    return (
        <div className={classes.root}>
            {cardsConfigArr.map((cardConfig) => {
                return (
                    <Card variant="outlined" style={{ borderRadius: '15px' }} className={classes.cardStyle}>
                        <CardContent className={classes.cardContentStyle}>
                            <div style={{ margin: '0 auto'}}>
                                {cardConfig.icon}
                            </div>
                            {cardConfig.content}
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default WhyUsCardsComponent
