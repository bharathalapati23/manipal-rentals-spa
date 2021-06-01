import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import HomeIcon from '@material-ui/icons/Home';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: '0 auto',
        maxWidth: '1300px',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
        },
        textAlign: 'center'
    },
    cardStyle: {
        width: '24%',
        [theme.breakpoints.down('sm')]: {
            width: '49%',
            marginBottom: '20px'
        },
        backgroundColor: '#212121',
        fontFamily: 'poppins',
        color: '#e5e5e5',
        fontWeight: 'bolder',
        letterSpacing: '0.04rem',
        fontSize: '23px',
        borderRadius: '15px',
    },
    cardContentStyle: {
        display: 'flex',
        flexDirection: 'column',
    },
    iconStyle: {
        fontSize: '100px',
        color: '#f36802',
    },
    whyRentHeading: {
        marginTop: '20px',
        fontFamily: 'Bebas Neue',
        fontSize: '45px',
        color: '#FFFFFF',
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
        },
        textAlign: 'center'
        // letterSpacing: '0.5px'
    },
    learnButton: {
        borderRadius: 10,
        marginBottom: '4px',
        backgroundColor: 'transparent',
        color: '#d5d5d5',
        fontSize: '20px',
        fontFamily: 'Poppins',
        borderColor: '#e5e5e5',
        border: 'solid',
        borderWidth: 'thin',
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderColor: '#f36802',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    }
}));


const HowItWorks = (props) => {
    const classes = useStyles(props);
    const { navigateToHowItWorks } = props

    const cardsConfigArr = [
        {
            icon: <HomeIcon className={classes.iconStyle} />,
            content: 'Select your home.'
        },
        {
            icon: <QueryBuilderIcon className={classes.iconStyle} />,
            content: 'Schedule Property Tour.'
        },
        {
            icon: <CheckCircleOutlineIcon className={classes.iconStyle} />,
            content: 'Confirm your slot.'
        },
        {
            icon: <ArrowForwardIcon className={classes.iconStyle} />,
            content: 'Move-in.'
        }
    ]

    return (
        <>


            <div className={classes.whyRentHeading}>
                HOW IT WORKS
				</div>
            <div className={classes.root}>
                {cardsConfigArr.map((cardConfig) => {
                    return (
                        <Card variant="outlined" className={classes.cardStyle}>
                            <CardContent className={classes.cardContentStyle}>
                                <div style={{ margin: '0 auto' }}>
                                    {cardConfig.icon}
                                </div>
                                {cardConfig.content}
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            <Button variant="contained"
                className={classes.learnButton}
                onClick={navigateToHowItWorks}
            >
                LEARN HOW IT WORKS
            </Button>
        </>
    )
}

export default HowItWorks
