import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '80px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
        },
        width: '100%',
        maxWidth: '1000px',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        paddingLeft: '8px',
        paddingRight: '8px',
        boxSizing: 'border-box',
    },
    heading: {
        fontFamily: 'Bebas Neue',
        fontSize: '45px',
        color: '#FFFFFF',
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
        },
        textAlign: 'center'
    },
    subHeading: {
        fontFamily: 'Bebas Neue',
        fontSize: '35px',
        color: '#FFFFFF',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        },
        textAlign: 'center',
        marginBottom: '20px'
    },
}));

const AboutUsComponent = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                ABOUT US
            </div>
            <div className={classes.subHeading}>
                We Understand Broker Problems
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', color: 'white', fontSize: '20px', fontFamily: 'poppins' }}>
                <div style={{ marginBottom: '20px' }}>Welcome to Wolpa!</div>
                <div style={{ marginBottom: '20px' }}>
                    Wolpa is a real estate platform built for the students – by the old
                    students from Manipal.
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Every year, Manipal welcomes around 30000 students from all
                    parts of the country. Manipal has stood tall as one of the most
                    inviting University towns, not just from around, but globally. With
                    the hills in the backdrop, the serene Seetha Nadi flowing across,
                    ……the beautiful people.. what’s not good about this place…
                </div>
                <div style={{ marginBottom: '20px' }}>
                    We realized one of the only few challenges that students face in an
                    otherwise easy-going college life is finding the right
                    accommodation – which has been the challenge in all aspects of the
                    unorganized Indian Real Estate industry. However, we are inspired
                    by certain organized players taking up the initiative to organize this
                    with a piecemeal approach – getting it together in fragments. We
                    are here to strengthen the student community with a strong
                    student accommodation backing the university life.
                </div>
                <div style={{ marginBottom: '20px' }}>
                    We soon look to bring in more value than just a place to stay, but a
                    place to sit back and enjoy Manipal even better.
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Wishing you a happy home hunt, connect with us to know what
                    else we have to offer.
                </div>

            </div>
        </div>
    )
}

export default AboutUsComponent
