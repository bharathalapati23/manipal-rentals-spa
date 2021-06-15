const initialHomeFeatures = {
    wifi: false,
    geyser: false,
    washingMachine: false,
    cookingHub: false,
    fridge: false,
    couch: false,
    coffeeTable: false,
    chairs: false,
}

const initialBedroomDetails = {
    singleBed: false,
    doubleBed: false,
    wardrobe: false,
    studyTable: false,
    chair: false,
    attachedToilet: false,
    attachedBalcony: false,
    airConditioner: false,
}

export const setBedroomFilter = (bedrooms) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_BEDROOM_FITLER', payload: bedrooms })
    } catch (error) {
        console.log(error.message)
    }
}

export const setPriceRangeFilter = (priceRange) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_PRICE_FILTER', payload: priceRange })
    } catch (error) {
        console.log(error.message)
    }
}

export const setZoneFilter = (zones) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_ZONE_FITLER', payload: zones })
    } catch (error) {
        console.log(error.message)
    }
}

export const setAccomodationTypeFilter = (accomodationTypes) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_ACCOMODATION_TYPE_FITLER', payload: accomodationTypes })
    } catch (error) {
        console.log(error.message)
    }
}

export const setHomeFeaturesFilter = (homeFeatures) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_HOME_FEATURES_FILTER', payload: homeFeatures })
    } catch (error) {
        console.log(error.message)
    }
}

export const setBedroomDetailsFilter = (bedroomDetails) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_BEDROOM_DETAILS_FILTER', payload: bedroomDetails })
    } catch (error) {
        console.log(error.message)
    }
}

export const clearFilters = () => async (dispatch) => {
    try {
        dispatch({ type: 'CLEAR_FILTERS' })
    } catch (error) {
        console.log(error.message)
    }
}

export const setLocationFilter = (parsedLocation) => async (dispatch) => {
    try {
        dispatch({ type: 'CLEAR_FILTERS' })
        if (Object.keys(parsedLocation).includes('zone')) {
            dispatch({ type: 'SET_ZONE_FITLER', payload: parsedLocation.zone.split(',') })
        }
        if (Object.keys(parsedLocation).includes('accomodationType')) {
            dispatch({ type: 'SET_ACCOMODATION_TYPE_FITLER', payload: parsedLocation.accomodationType.split(',') })
        }
        if (Object.keys(parsedLocation).includes('bedroom')) {
            const bedroomArr = parsedLocation.bedroom.split(',').map((bedroom) => Number(bedroom))
            dispatch({ type: 'SET_BEDROOM_FITLER', payload: bedroomArr })
        }
        if (Object.keys(parsedLocation).includes('homeFeatures')) {
            let newHomeFeatures = JSON.parse(JSON.stringify(initialHomeFeatures))
            let newHomeFeatureArr = parsedLocation.homeFeatures.split(',')
            for(let i=0; i<newHomeFeatureArr.length; i++) {
                newHomeFeatures = {
                    ...newHomeFeatures,
                    [newHomeFeatureArr[i]]:true
                }
            }
            dispatch({ type: 'SET_HOME_FEATURES_FILTER', payload: newHomeFeatures })
        }
        if (Object.keys(parsedLocation).includes('bedroomDetails')) {
            let newBedroomDetails = JSON.parse(JSON.stringify(initialBedroomDetails))
            let newBedroomDetailsArr = parsedLocation.bedroomDetails.split(',')
            for(let i=0; i<newBedroomDetailsArr.length; i++) {
                newBedroomDetails = {
                    ...newBedroomDetails,
                    [newBedroomDetailsArr[i]]:true
                }
            }
            dispatch({ type: 'SET_BEDROOM_DETAILS_FILTER', payload: newBedroomDetails })
        }
        if (Object.keys(parsedLocation).includes('budget')) {
            const budgetArr = parsedLocation.budget.split(',').map((budget) => Number(budget))
            dispatch({ type: 'SET_PRICE_FILTER', payload: budgetArr })
        }

    } catch (error) {
        console.log(error.message)
    }
}
