const homeFeatures = {
    wifi: false,
    geyser: false,
    washingMachine: false,
    cookingHub: false,
    fridge: false,
    couch: false,
    coffeeTable: false,
    chairs: false,
}

const initialState = {
    bedroom: [],
    priceRange: [],
    homeFeatures: homeFeatures,
    zone:[],
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
        case 'SET_ZONE_FITLER': {
            let newState = {
                ...filters,
                zone: action.payload
            }
            return newState
        }
        case 'SET_HOME_FEATURES_FILTER': {
            let newState = {
                ...filters,
                homeFeatures: action.payload
            }
            return newState
        }
        default:
            return filters
    }

}