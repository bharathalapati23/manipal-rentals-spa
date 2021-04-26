const initialState = {
    bedroom: [],
    priceRange: [],
    furnishing: []
}

export default (filters = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case 'SET_BEDROOM_FITLER': {
            let newState = {
                ...filters,
                bedroom: action.payload
            }
            return newState
        }
        case 'SET_PRICE_FILTER': {
            let newState = {
                ...filters,
                priceRange: action.payload
            }
            return newState
        }
        case 'SET_FURNISHING_FILTER': {
            let newState = {
                ...filters,
                furnishing: action.payload
            }
            return newState
        }
        default:
            return filters
    }

}