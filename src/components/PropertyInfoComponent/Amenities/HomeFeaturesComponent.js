import React from 'react'
import WifiIcon from '@material-ui/icons/Wifi';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from 'react-responsive'

import ChairIcon from '../../../icons/Amenities/Home/ChairIcon'
import CookingHubIcon from '../../../icons/Amenities/Home/CookingHubIcon'
import FridgeIcon from '../../../icons/Amenities/Home/FridgeIcon'
import GeyserIcon from '../../../icons/Amenities/Home/GeyserIcon'
import WashingMachineIcon from '../../../icons/Amenities/Home/WashingMachineIcon'
import WeekendIcon from '@material-ui/icons/Weekend';


const homeFeaturesDisplay = {
    wifi: {
        name: 'WiFi',
        icon: <WifiIcon style={{ color: 'white' }} />
    },
    geyser: {
        name: 'Geyser',
        icon: <GeyserIcon style={{ color: 'white' }} />
    },
    washingMachine: {
        name: 'Washing Machine',
        icon: <WashingMachineIcon style={{ color: 'white' }} />
    },
    cookingHub: {
        name: 'Cooking Hub',
        icon: <CookingHubIcon style={{ color: 'white' }} />
    },
    fridge: {
        name: 'Fridge',
        icon: <FridgeIcon style={{ color: 'white' }} />
    },
    couch: {
        name: 'Couch',
        icon: <WeekendIcon style={{ color: 'white' }} />
    },
    coffeeTable: {
        name: 'Coffee Table',
        icon: <WifiIcon style={{ color: 'white' }} />
    },
    chairs: {
        name: 'Chairs',
        icon: <ChairIcon style={{ color: 'white' }} />
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
    console.log(filteredHomeFeatures)

    return (
        <div
            hidden={!hidden}
        >
            {hidden && (
                <Box style={{ width: '100%', verticalAlign: 'center' }}>
                    {filteredHomeFeatures.map((homeFeature, index) => {
                        if (index % 2 == 1) return
                        return (
                            <React.Fragment key={`homefeature${index}`}>
                                <div style={{ display: 'flex', flexDirection: 'row' }} >
                                    <div style={{ width:'30%', display: 'flex', flexDirection: 'row' }}>
                                        {homeFeature.icon}
                                        <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: 'white' }}>
                                            {homeFeature.name}
                                        </div>
                                    </div>
                                    {filteredHomeFeatures[index + 1] &&
                                        (<div style={{ width:'60%', display: 'flex', flexDirection: 'row' }}>
                                            {filteredHomeFeatures[index + 1].icon}
                                            <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: 'white' }}>
                                                {filteredHomeFeatures[index + 1].name}
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>
                                <br></br>
                            </React.Fragment>)
                    })}

                </Box>
            )
            }
        </div >
    )
}

export default HomeFeaturesComponent


{/* {Object.keys(homeFeatures).map((homeFeature, index) => {
                        if (index % 2 == 1) return
                        return (
                            <>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
                                        <WifiIcon style={{ color: 'white' }} />
                                        <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: 'white' }}>
                                            Wifi
                                        </div>
                                    </div>
                                    <div style={{ flexGrow: 3, display: 'flex', flexDirection: 'row' }}>
                                        <WifiIcon style={{ color: 'white' }} />
                                        <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: 'white' }}>Cooking Hub</div>
                                    </div>
                                </div>
                                <br></br>
                            </>)
                    })} */}
