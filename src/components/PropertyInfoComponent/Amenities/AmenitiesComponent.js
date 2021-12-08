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

import { useMediaQuery } from 'react-responsive';

import BedroomDetailsComponent from './BedroomDetailsComponent'
import HomeFeaturesComponent from './HomeFeaturesComponent'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#2e2e2e',
        padding: '10px',
        paddingLeft: '20px',
        borderRadius: '10px'
    },
    amenitiesTitle: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        color: '#e5e5e5'
    },
    tabLabel: {
        fontFamily: 'Poppins',
        fontSize: '17px',
    },
    accordionStyle: {
        boxShadow: "none",
        backgroundColor: 'transparent',
        color: '#e5e5e5'
    },
    indicator: {
        backgroundColor: '#f36802',
    },
}));

const AmenitiesComponent = ({ homeFeatures, bedroomDetails }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            { !isMobile && <div className={classes.root}>
                <Typography variant="h5" component="h2" className={classes.amenitiesTitle}>
                    Amenities
        	    </Typography>
                <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="scrollable"
                        scrollButtons="auto"
                        classes={{
                            indicator: classes.indicator
                        }}
                    >
                        <Tab label="Home" className={classes.tabLabel} />
                        {bedroomDetails.map((bedroom, index) => {
                            return <Tab label={`Bedroom ${index + 1}`} className={classes.tabLabel} key={`bedroomDetails${index}`} />
                        })}
                    </Tabs>
                </AppBar>
                <div style={{ 'paddingTop': '20px' }}>
                    <HomeFeaturesComponent value={value} index={0} homeFeatures={homeFeatures} />
                    {bedroomDetails.map((bedroom, index) => {
                        return <BedroomDetailsComponent value={value} index={index + 1} bedroomDetails={bedroom} key={`bedroomDetails${index}`} />
                    })}
                </div>
            </div>}
            {isMobile &&
                <div>
                    <Typography variant="h5" component="h2" className={classes.amenitiesTitle}>
                    Amenities
        	        </Typography>

                </div>
            }
            { isMobile &&
                <>
                    <Divider />
                    <Accordion className={classes.accordionStyle}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#e5e5e5' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Home Features</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <HomeFeaturesComponent value={value} index={0} homeFeatures={homeFeatures} isMobile={true} />
                        </AccordionDetails>
                    </Accordion>
                    {bedroomDetails.map((bedroom, index) => {
                        return (
                            <React.Fragment key={`amenities${index}`}>
                                <Divider />
                                <Accordion className={classes.accordionStyle}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: '#e5e5e5' }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>Bedroom {index + 1}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <BedroomDetailsComponent value={value} index={index + 1} bedroomDetails={bedroom} />
                                    </AccordionDetails>
                                </Accordion>
                            </React.Fragment>)
                    })}

                </>}
        </>
    )
}

export default AmenitiesComponent
