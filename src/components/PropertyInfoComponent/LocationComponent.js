import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Box, Grid } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useMediaQuery } from 'react-responsive';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Accordion from '@material-ui/core/Accordion';

const useStyles = makeStyles(() => ({
    root: {
        fontFamily: 'Poppins',
        padding: '10px ',
        paddingLeft: '25px',
    },
    locationTitle: {
        color: '#D0D0D0',
        fontFamily: 'Poppins',
        fontSize: '25px',
        paddingLeft: '5px',
        fontWeight: 600
    },
    locationInfoDesktop: {
        color: '#D0D0D0',
        fontFamily: 'Poppins',
        fontSize: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    locationInfoMobile: {
        color: '#D0D0D0',
        fontFamily: 'Poppins',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    accordionStyle: {
        boxShadow: "none",
        backgroundColor: 'transparent',
        color: '#e5e5e5',
        marginTop: '5px',
        paddingLeft: '16px',
        paddingRight: '16px'
    },
}));

const LocationComponent = ({ distanceMatrix }) => {

    const classes = useStyles()
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    const filteredLocations = ["Coin Circle", "Syndicate Circle", "MIT Main Gate", "KMC Greens", "DOC", "TAPMI",]
    return (
        <>
            {
                distanceMatrix &&
                <>
                    {!isMobile &&
                        <div style={{ display: 'flex', padding: '5px 0px 0px 30px', flexDirection: 'column', gap: '12px' }} >
                            <Typography variant="h5" component="h1" className={classes.locationTitle} >Location </Typography>
                            {distanceMatrix.map((distanceObj) => {
                                return (
                                    <>
                                        {
                                            filteredLocations.includes(distanceObj.name) &&
                                            < div className={classes.locationInfoDesktop}>
                                                <LocationOnIcon />
                                                <span style={{ fontWeight: 'bold' }}>&nbsp;{`${distanceObj.distance}`}</span>&nbsp;{`from ${distanceObj.name}`}
                                            </div>
                                        }
                                    </>
                                )
                            })}
                        </div>
                    }
                    {
                        isMobile &&
                        <Accordion className={classes.accordionStyle}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ color: '#e5e5e5' }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{ padding: '0' }}
                            >
                                <Typography variant="h5" component="h2" >Location </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ display: 'flex', padding: '5px 0px 0px 30px', flexDirection: 'column', gap: '12px' }} >
                                    {distanceMatrix.map((distanceObj) => {
                                        return (
                                            <>
                                                {
                                                    filteredLocations.includes(distanceObj.name) &&
                                                    < div className={classes.locationInfoMobile}>
                                                        <LocationOnIcon />
                                                        <span style={{ fontWeight: 'bold' }}>&nbsp;{`${distanceObj.distance}`}</span>&nbsp;{`from ${distanceObj.name}`}
                                                    </div>
                                                }
                                            </>
                                        )
                                    })}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    }
                </>
            }
        </>
    )
};

export default LocationComponent;