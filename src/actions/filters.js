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

export const setHomeFeaturesFilter = (homeFeatures) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_HOME_FEATURES_FILTER', payload: homeFeatures })
    } catch (error) {
        console.log(error.message)
    }
}

