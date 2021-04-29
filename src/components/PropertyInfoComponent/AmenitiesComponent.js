import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ImageGalleryComponent from './ImageGalleryComponent'

import SingleBedIcon from '@material-ui/icons/SingleBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import ChairIcon from '../../icons/ChairIcon.js'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}



const AmenitiesComponent = ({ homeFeatures, bedroomDetails }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    return (
        <div className={classes.root}>
            {/* <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="Home" />
                    {bedroomDetails.map((bedroom, index) => {
                        return <Tab label={`Bedroom ${index + 1}`} />
                    })}
                </Tabs>
            </AppBar>
            
            <Box style={{ width: '100%' }}>
                <SingleBedIcon />
                <WeekendIcon />
                <ChairIcon style={{
                    width: 60,
                    height: 60
                }} />

            </Box> */}
            <div style={{ height: '100px'}}>
                <ImageGalleryComponent/>
            </div>
        </div>
    )
}

export default AmenitiesComponent


{/* <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                {JSON.stringify(homeFeatures)}
            </TabPanel> */}