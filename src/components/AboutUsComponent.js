import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '80px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '60px',
        },
        width: '100%',
        maxWidth: '1000px',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        paddingLeft: '16px',
        paddingRight: '16px',
        boxSizing: 'border-box',
    },
    heading: {
        fontFamily: 'Poppins',
        fontSize: '40px',
        color: '#e0e0e0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
        },
        textAlign: 'center'
    },
    subHeading: {
        fontFamily: 'Poppins',
        fontSize: '35px',
        color: '#e0e0e0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        },
        textAlign: 'center',
        marginBottom: '20px'
    },
}));

const AboutUsComponent = () => {
    const classes = useStyles()

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                About Us
            </div>
            <div className={classes.subHeading}>
                We Understand Rental Problems
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', color: '#e0e0e0', fontSize: '20px', fontFamily: 'poppins' }}>
                <div style={{ marginBottom: '20px' }}>Welcome to Wolpa!</div>
                <div style={{ marginBottom: '20px' }}>
                    Wolpa is a real estate tech-platform built for the students, by the old students from Manipal.
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Every year, Manipal welcomes around 30000 students from all parts of the country.
                    It has stood tall as one of the most inviting University towns, not just from around, but globally.
                    With the valleys & the hills in the backdrop, the serene Seetha Nadi flowing across the town, the beautiful people,
                    the lazy hangout spots {'&'} the evening clubs, and not to forget the MunnaPalla Lake, the list is long - what’s not good about the place?
                </div>
                <div style={{ marginBottom: '20px' }}>
                    We realized one of the only few challenges that students face in an otherwise easy-going college life,
                    is to find the right accommodation – which remains as a challenge generally in all aspects of the unorganized Indian Real Estate industry.
                    However, we are inspired by certain players taking up the initiative to organize this with a piecemeal approach, by getting it together in fragments.
                    We are here to strengthen the student community, with a strong accommodation backing their university life.
                </div>
                <div style={{ marginBottom: '20px' }}>
                    We soon look to bring in more value than just a place to stay, but a place to sit back and enjoy Manipal even better.
                </div>
                <div style={{ marginBottom: '20px' }}>
                    Wishing you a happy home hunt, connect with us to know what else we have to offer.
                </div>

            </div>
        </div>
    )
}

export default AboutUsComponent
