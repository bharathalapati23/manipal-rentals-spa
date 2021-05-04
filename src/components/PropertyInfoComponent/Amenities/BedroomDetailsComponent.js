import React from 'react'
import SingleBedIcon from '@material-ui/icons/SingleBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import Box from '@material-ui/core/Box';
import { useMediaQuery } from 'react-responsive'

const bedroomDetailsDisplay = {
    singleBed: {
        name: 'Single Bed',
        icon: <WeekendIcon style={{ color: 'white' }} />
    },
    doubleBed: {
        name: 'Double Bed',
        icon: <WeekendIcon style={{ color: 'white' }} />
    },
    wardrobe: {
        name: 'Wardrobe',
        icon: <WeekendIcon style={{ color: 'white' }} />
    },
    studyTable: {
        name: 'Study Table',
        icon: <WeekendIcon style={{ color: 'white' }} />
    },
    chair: {
        name: 'Chair',
        icon: <WeekendIcon style={{ color: 'white' }} />
    },
    attachedToilet: {
        name: 'Attached Toilet',
        icon: <WeekendIcon style={{ color: 'white' }} />
    },
    attachedBalcony: {
        name: 'Attached Balcony',
        icon: <WeekendIcon style={{ color: 'white' }} />
    },
    airConditioner: {
        name: 'Air Conditioner',
        icon: <WeekendIcon style={{ color: 'white' }} />
    },
}


const BedroomDetailsComponent = ({ value, index, bedroomDetails }) => {
	const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
    const hidden = isMobile || value === index

    const filteredBedroomDetails = Object.keys(bedroomDetails).filter((bedroomDetail) => {
        if (bedroomDetails[bedroomDetail] === false || bedroomDetail=='_id')
            return false
        return true
    })
    const filteredBedroomDisplay = filteredBedroomDetails.map((filteredBedroom) => {
        return bedroomDetailsDisplay[filteredBedroom]
    })

    return (
        <div
            hidden={!hidden}
        >
            {hidden && (
                <Box style={{ width: '100%', verticalAlign: 'center' }}>
                    {filteredBedroomDisplay.map((filteredBedroom, index) => {
                        if (index % 2 == 1) return
                        return (
                            <>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
                                        {filteredBedroom.icon}
                                        <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: 'white' }}>
                                            {filteredBedroom.name}
                                        </div>
                                    </div>
                                    {filteredBedroomDisplay[index + 1] &&
                                        (<div style={{ flexGrow: 3, display: 'flex', flexDirection: 'row' }}>
                                            {filteredBedroomDisplay[index + 1].icon}
                                            <div style={{ paddingLeft: '10px', fontFamily: 'Poppins', color: 'white' }}>
                                                {filteredBedroomDisplay[index + 1].name}
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>
                                <br></br>
                            </>)
                    })}

                </Box>
            )}
        </div>
    );
}

export default BedroomDetailsComponent
