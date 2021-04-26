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

export const setFurnishingFilter = (furnishing) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_FURNISHING_FILTER', payload: furnishing })
    } catch (error) {
        console.log(error.message)
    }
}

