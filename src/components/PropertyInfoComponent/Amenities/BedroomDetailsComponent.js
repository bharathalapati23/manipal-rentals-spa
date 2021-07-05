import React from 'react'
import SingleBedIcon from '@material-ui/icons/SingleBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from 'react-responsive'
import WardrobeIcon from '../../../icons/Amenities/Bedroom/WardrobeIcon'
import TableIcon from '../../../icons/Amenities/Bedroom/TableIcon'
import ChairIcon from '../../../icons/Amenities/Home/ChairIcon'
import BalconyIcon from '../../../icons/Amenities/Bedroom/BalconyIcon'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import NoMeetingRoomIcon from '@material-ui/icons/NoMeetingRoom';


const bedroomDetailsDisplay = {
    singleBed: {
        name: 'Single Bed',
        icon: <SingleBedIcon style={{ color: '#e0e0e0' }} />
    },
    doubleBed: {
        name: 'Double Bed',
        icon: <SingleBedIcon style={{ color: '#e0e0e0' }} />
    },
    wardrobe: {
        name: 'Wardrobe',
        icon: <WardrobeIcon style={{ color: '#e0e0e0' }} />
    },
    studyTable: {
        name: 'Study Table',
        icon: <TableIcon style={{ color: '#e0e0e0' }} />
    },
    chair: {
        name: 'Chair',
        icon: <ChairIcon style={{ color: '#e0e0e0' }} />
    },
    attachedToilet: {
        name: 'Attached Toilet',
        icon: <WeekendIcon style={{ color: '#e0e0e0' }} />
    },
    attachedBalcony: {
        name: 'Attached Balcony',
        icon: <BalconyIcon style={{ color: '#e0e0e0' }} />
    },
    airConditioner: {
        name: 'Air Conditioner',
        icon: <AcUnitIcon style={{ color: '#e0e0e0' }} />
    },
}


const BedroomDetailsComponent = ({ value, index, bedroomDetails }) => {
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
    const hidden = isMobile || value === index

    const filteredBedroomDetails = Object.keys(bedroomDetails).filter((bedroomDetail) => {
        if (bedroomDetails[bedroomDetail] === false || bedroomDetail == '_id')
            return false
        return true
    })
    const filteredBedroomDisplay = filteredBedroomDetails.map((filteredBedroom) => {
        return bedroomDetailsDisplay[filteredBedroom]
    })

    return (
        <div
            style={{ width: '100%' }}
            hidden={!hidden}
        >
            {hidden && (
                <Box style={{ width: '100%', verticalAlign: 'center' }}>
                    {filteredBedroomDisplay.length ? filteredBedroomDisplay.map((filteredBedroom, index) => {
                        if (index % 2 == 1) return
                        return (
                            <React.Fragment key={`bedroomdetails${index}`}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <div style={{ width: `${isMobile ? '50%' : '30%'}`, display: 'flex', flexDirection: 'row' }}>
                                        {filteredBedroom.icon}
                                        <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: '#e0e0e0' }}>
                                            {filteredBedroom.name}
                                        </div>
                                    </div>
                                    {filteredBedroomDisplay[index + 1] &&
                                        (<div style={{ width: `${isMobile ? '50%' : '60%'}`, display: 'flex', flexDirection: 'row' }}>
                                            {filteredBedroomDisplay[index + 1].icon}
                                            <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: '#e0e0e0' }}>
                                                {filteredBedroomDisplay[index + 1].name}
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>
                                <br></br>
                            </React.Fragment>)
                    }) : null}
                    {
                        !filteredBedroomDisplay.length ?
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
            )}
        </div>
    );
}

export default BedroomDetailsComponent
