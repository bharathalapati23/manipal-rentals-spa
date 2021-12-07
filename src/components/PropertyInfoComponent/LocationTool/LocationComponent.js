import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Box, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMediaQuery } from 'react-responsive';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Accordion from '@material-ui/core/Accordion';

const useStyles = makeStyles(() => ({
    root: {
        fontFamily: 'Poppins',
        padding: '10px ',
        paddingLeft: '5px',
    },
    locationTitle: {
        color: '#D0D0D0',
        fontFamily: 'Poppins',
        fontSize: '25px',
    },
    locationInfoDesktop: {
        color: '#D0D0D0',
        fontFamily: 'Poppins',
        fontSize: '15px',
    },
    locationInfoMobile: {
        color: '#D0D0D0',
        fontFamily: 'Poppins',
        fontSize: '7.8px',
    },
    accordionStyle: {
        boxShadow: "none",
        backgroundColor: 'transparent',
        color: '#e5e5e5',
    },
}));



const LocationComponent = () => {

    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const permanentDestination = ["Coin Circle", "Syndicate Circle", "Tiger Circle", "Manipal Lake", "Dee Tee", "MIT", "KMC", "DOC", "TAPMI",]
    return (
        <div className={classes.root}>
            {!isMobile &&
                <div className={classes.root} >
                    <Box sx={{ mt: '-40px' }}>
                        <Typography variant="h5" component="h2" className={classes.locationTitle} ><b>Location</b> </Typography>
                        {permanentDestination.map((ele, index) => {
                            return (
                                <div style={{ display: 'inline-flex', width: '150%', padding: '5px', }}>
                                    <Typography variant="h7" component="h7" className={classes.locationInfoDesktop}  >
                                        <LocationOnIcon className={classes.locationInfoDesktop} /> 0.7km From {permanentDestination[index]}</Typography>
                                </div>
                            )
                        })}
                    </Box>
                </div>
            }
            {
                isMobile &&
                <Accordion className={classes.accordionStyle}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: '#e5e5e5' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h5" component="h2" className={classes.locationTitle}  ><b>Location</b> </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div >
                            {permanentDestination.map((ele, index) => {
                                return (
                                    <Box sx={{ display: 'inline-flex', width: '50%', justifyContent: 'space-between' }}>
                                        <Typography variant="h7" component="h7" className={classes.locationInfoMobile}>
                                            <LocationOnIcon className={classes.locationInfoMobile} style={{ fontSize: 15 }} /> 0.7km From {permanentDestination[index]}</Typography>
                                    </Box>
                                )
                            })}
                        </div>
                    </AccordionDetails>
                </Accordion>
            }

        </div >
    )
};

export default LocationComponent;