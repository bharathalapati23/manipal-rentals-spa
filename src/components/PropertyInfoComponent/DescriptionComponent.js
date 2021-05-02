import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    descContainer: {
        flexGrow: 3,
        maxWidth: '75%'
    },
    seeMoreProperties: {
        flexGrow: 1,
    },
    rentStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
    descTitle: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    descTitle: {
        fontFamily: 'Bebas Neue',
        fontSize: '20px',
        color: '#e5e5e5'
    },
    description: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        paddingRight: '10px',
        color: '#ffffff'
    }
}));


const DescriptionComponent = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    return (
        <>
            {!isMobile &&
                <div className={classes.root}>
                    <div className={classes.descContainer}>
                        <div className={classes.descTitle}>
                            DESCRIPTION
        	            </div>
                        <div className={classes.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque condimentum, odio at efficitur venenatis, magna tellus maximus odio, a fringilla velit dolor nec ligula.
                            Aenean ac ligula mattis, luctus elit eget, congue nunc. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas.
                        </div>
                    </div>
                    <div className={classes.seeMoreProperties}>
                        <div className={classes.rentStyle}>
                            <div style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '24px', paddingRight: '3px', color:'#f36802' }}>Rs. 10000</div>
                            <div style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '12px', color:'#e5e5e5' }}>per month</div>
                        </div>
                        <div className={classes.rentStyle}>
                            <div style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '19px', paddingRight: '3px', color:'#e5e5e5' }}>Rs. 10000</div>
                            <div style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '7px', color:'#e5e5e5' }}>deposit</div>
                        </div>
                        <Button variant="contained"
                            buttonStyle={{ borderRadius: 25 }}
                            style={{ borderRadius: 25 }}
                            color="red"
                        >
                            SCHEDULE PROPERTY TOUR
                        </Button>
                    </div>
                </div>
            }
            {
                isMobile &&
                <>
                    <Typography variant="h5" component="h2" className={classes.descTitle} style={{ fontFamily: 'Bebas Neue' }}>
                        DESCRIPTION
        	        </Typography>
                    <div className={classes.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque condimentum, odio at efficitur venenatis, magna tellus maximus odio, a fringilla velit dolor nec ligula.
                        Aenean ac ligula mattis, luctus elit eget, congue nunc. Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas.
                    </div>
                </>
            }
        </>
    )
}

export default DescriptionComponent
