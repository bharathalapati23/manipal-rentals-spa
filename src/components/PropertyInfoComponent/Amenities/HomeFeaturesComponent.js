import React from 'react'
import WifiIcon from '@material-ui/icons/Wifi';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from 'react-responsive'

import ChairIcon from '../../../icons/Amenities/Home/ChairIcon'
import CookingHubIcon from '../../../icons/Amenities/Home/CookingHubIcon'
import FridgeIcon from '../../../icons/Amenities/Home/FridgeIcon'
import GeyserIcon from '../../../icons/Amenities/Home/GeyserIcon'
import WashingMachineIcon from '../../../icons/Amenities/Home/WashingMachineIcon'
import TableIcon from '../../../icons/Amenities/Bedroom/TableIcon'
import WeekendIcon from '@material-ui/icons/Weekend';
import TvIcon from '@material-ui/icons/Tv';
import NoMeetingRoomIcon from '@material-ui/icons/NoMeetingRoom';

const homeFeaturesDisplay = {
    wifi: {
        name: 'WiFi',
        icon: <WifiIcon style={{ color: '#e0e0e0' }} />
    },
    tv: {
        name: 'TV',
        icon: <TvIcon style={{ color: '#e0e0e0' }} />
    },
    geyser: {
        name: 'Geyser',
        icon: <GeyserIcon style={{ color: '#e0e0e0' }} />
    },
    washingMachine: {
        name: 'Washing Machine',
        icon: <WashingMachineIcon style={{ color: '#e0e0e0' }} />
    },
    cookingHub: {
        name: 'Cooking Hub',
        icon: <CookingHubIcon style={{ color: '#e0e0e0' }} />
    },
    fridge: {
        name: 'Fridge',
        icon: <FridgeIcon style={{ color: '#e0e0e0' }} />
    },
    couch: {
        name: 'Couch',
        icon: <WeekendIcon style={{ color: '#e0e0e0' }} />
    },
    coffeeTable: {
        name: 'Coffee Table',
        icon: <TableIcon style={{ color: '#e0e0e0' }} />
    },
    chairs: {
        name: 'Chairs',
        icon: <ChairIcon style={{ color: '#e0e0e0' }} />
    },
}

const HomeFeaturesComponent = ({ value, index, homeFeatures }) => {
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
    const hidden = isMobile || value === index

    let filteredHomeFeatures = []
    Object.keys(homeFeatures).forEach((homeFeature) => {
        if (!homeFeatures[homeFeature] === false)
            filteredHomeFeatures.push(homeFeaturesDisplay[homeFeature])
    })

    return (
        <div
            style={{ width: '100%' }}
            hidden={!hidden}
        >
            {hidden && (
                <Box style={{ width: '100%', verticalAlign: 'center' }}>
                    {filteredHomeFeatures.length ? filteredHomeFeatures.map((homeFeature, index) => {
                        if (index % 2 == 1) return
                        return (
                            <React.Fragment key={`homefeature${index}`}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }} >
                                    <div style={{ width: `${isMobile ? '50%' : '30%'}`, display: 'flex', flexDirection: 'row' }}>
                                        {homeFeature.icon}
                                        <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: '#e0e0e0' }}>
                                            {homeFeature.name}
                                        </div>
                                    </div>
                                    {filteredHomeFeatures[index + 1] &&
                                        (<div style={{ width: `${isMobile ? '50%' : '60%'}`, display: 'flex', flexDirection: 'row' }}>
                                            {filteredHomeFeatures[index + 1].icon}
                                            <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: '#e0e0e0' }}>
                                                {filteredHomeFeatures[index + 1].name}
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>
                                <br></br>
                            </React.Fragment>)
                    }) : null}
                    {
                        !filteredHomeFeatures.length ?
                            <>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <div style={{ width: `${isMobile ? '50%' : '30%'}`, display: 'flex', flexDirection: 'row' }}>
                                        <NoMeetingRoomIcon style={{ color: '#e0e0e0' }} />
                                        <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: '#e0e0e0' }}>
                                            Unfurnished
                                    </div>
                                    </div>
                                </div>
                                <br></br>
                            </> : null
                    }

                </Box>
            )
            }
        </div >
    )
}

export default HomeFeaturesComponent
