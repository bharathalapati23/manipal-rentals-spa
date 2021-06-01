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


const bedroomDetailsDisplay = {
    singleBed: {
        name: 'Single Bed',
        icon: <SingleBedIcon style={{ color: 'white' }} />
    },
    doubleBed: {
        name: 'Double Bed',
        icon: <SingleBedIcon style={{ color: 'white' }} />
    },
    wardrobe: {
        name: 'Wardrobe',
        icon: <WardrobeIcon style={{ color: 'white' }} />
    },
    studyTable: {
        name: 'Study Table',
        icon: <TableIcon style={{ color: 'white' }} />
    },
    chair: {
        name: 'Chair',
        icon: <ChairIcon style={{ color: 'white' }} />
    },
    attachedToilet: {
        name: 'Attached Toilet',
        icon: <WeekendIcon style={{ color: 'white' }} />
    },
    attachedBalcony: {
        name: 'Attached Balcony',
        icon: <BalconyIcon style={{ color: 'white' }} />
    },
    airConditioner: {
        name: 'Air Conditioner',
        icon: <AcUnitIcon style={{ color: 'white' }} />
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
                    {filteredBedroomDisplay.map((filteredBedroom, index) => {
                        if (index % 2 == 1) return
                        return (
                            <React.Fragment key={`bedroomdetails${index}`}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <div style={{ width: `${isMobile ? '50%' : '30%'}`, display: 'flex', flexDirection: 'row' }}>
                                        {filteredBedroom.icon}
                                        <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: 'white' }}>
                                            {filteredBedroom.name}
                                        </div>
                                    </div>
                                    {filteredBedroomDisplay[index + 1] &&
                                        (<div style={{ width: `${isMobile ? '50%' : '60%'}`, display: 'flex', flexDirection: 'row' }}>
                                            {filteredBedroomDisplay[index + 1].icon}
                                            <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: 'white' }}>
                                                {filteredBedroomDisplay[index + 1].name}
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>
                                <br></br>
                            </React.Fragment>)
                    })}

                </Box>
            )}
        </div>
    );
}

export default BedroomDetailsComponent
