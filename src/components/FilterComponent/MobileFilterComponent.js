import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SliderComponent from './SliderComponent'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import HomeFeaturesFilter from './HomeFeaturesFilter.js'
import ZoneFilter from './ZoneFilter.js'
import ApartmentFilter from './ApartmentFilter.js'
import BedroomFilter from './BedroomFilter'
import BedroomDetailsFilter from './BedroomDetailsFilter.js'
import { useDispatch } from 'react-redux'
import { hideFooter, showFooter } from '../../actions/footer'

const useStyles = makeStyles((theme) => ({
    filterContainer: {
        position: 'sticky',
        margin: '20px',
        fontFamily: 'Poppins',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '50px',
        },
    },
    formControl: {
        // margin: theme.spacing(3),
        margin: '0 auto'
    },
    filterHeading: {
        padding: '10px',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#e5e5e5'
    },
    heading: {
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontWeight: 'bold',
    }
}));

const MobileFilterComponent = ({ setFilterPage }) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(hideFooter())
        return () => {
            dispatch(showFooter())

        }
    }, [])

    return (
        <div className={classes.filterContainer}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4" component="h2" className={classes.filterHeading}>
                    FILTERS
        	    </Typography>
                <CloseOutlinedIcon style={{ color: '#d0d0d0', fontSize: '35px' }} onClick={() => setFilterPage(false)} />

            </div>
            <SliderComponent />
            <Divider />
            <BedroomFilter />
            <ApartmentFilter />
            <ZoneFilter />
            <HomeFeaturesFilter />
            <BedroomDetailsFilter />
            <div style={{ height: '5px' }}>

            </div>
        </div>
    )
}

export default MobileFilterComponent
