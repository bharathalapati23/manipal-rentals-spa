import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';


import SingleBedIcon from '@material-ui/icons/SingleBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import ChairIcon from '../../icons/ChairIcon.js'

import WifiIcon from '@material-ui/icons/Wifi';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'grey',
        padding: '10px',
        paddingLeft: '20px',
        borderRadius: '10px'
    },
    amenitiesTitle: {
        fontFamily: 'Bebas Neue',
        fontSize: '28px',
    },
    tabLabel: {
        fontFamily: 'Poppins',
        fontSize: '17px',
    },
}));


function BedroomDetailsPanel({ value, index }) {

    return (
        <div
            hidden={value !== index}
        >
            {value === index && (
                <Box style={{ width: '100%' }}>
                    <SingleBedIcon />
                    <WeekendIcon />
                </Box>
            )}
        </div>
    );
}

function HomeFeaturesPanel({ value, index, homeFeatures, isMobile }) {

    return (
        <div
            hidden={value !== index}
        >
            {value === index && (
                <Box style={{ width: '100%', verticalAlign: 'center' }}>
                    {Object.keys(homeFeatures).map((homeFeature, index) => {
                        if (index % 2 == 1) return
                        return (
                            <>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
                                        <WifiIcon style={{ color: 'red' }} />
                                        <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', fontWeight: 'bold' }}>WIFI</div>
                                    </div>
                                    <div style={{ flexGrow: 3, display: 'flex', flexDirection: 'row' }}>
                                        <WifiIcon style={{ color: 'red' }} />
                                        <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', fontWeight: 'bold' }}>Cooking Hub</div>
                                    </div>
                                </div>
                                <br></br>
                            </>)
                    })}

                </Box>
            )
            }
        </div >
    );
}



const AmenitiesComponent = ({ homeFeatures, bedroomDetails }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });


    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    return (
        <>
            { !isMobile && <div className={classes.root}>
                <Typography variant="h5" component="h2" className={classes.amenitiesTitle}>
                    AMENITIES
        	    </Typography>
                <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="Home" className={classes.tabLabel} />
                        {bedroomDetails.map((bedroom, index) => {
                            return <Tab label={`Bedroom ${index + 1}`} className={classes.tabLabel} />
                        })}
                    </Tabs>
                </AppBar>
                <div style={{ 'paddingTop': '20px' }}>
                    <HomeFeaturesPanel value={value} index={0} homeFeatures={homeFeatures} />
                    {bedroomDetails.map((bedroom, index) => {
                        return <BedroomDetailsPanel value={value} index={index + 1} />
                    })}
                </div>
            </div>}
            {isMobile &&
                <div>
                    <Typography variant="h5" component="h2" className={classes.amenitiesTitle}>
                        AMENITIES
        	        </Typography>

                </div>
            }
            { isMobile &&
                <>
                    <Divider />
                    <Accordion style={{ boxShadow: "none" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Accomodation Type</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <HomeFeaturesPanel value={value} index={0} homeFeatures={homeFeatures} isMobile={true} />
                        </AccordionDetails>
                    </Accordion>
                    {bedroomDetails.map((bedroom, index) => {
                        return (
                            <>
                                <Divider />
                                <Accordion style={{ boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>Bedroom {index + 1}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <HomeFeaturesPanel value={value} index={0} homeFeatures={homeFeatures} isMobile={true} />
                                    </AccordionDetails>
                                </Accordion>
                            </>)
                    })}

                </>}
        </>
    )
}

export default AmenitiesComponent
