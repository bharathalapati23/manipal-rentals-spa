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

const bedroomDetails = {
    singleBed: false,
    doubleBed: false,
    wardrobe: false,
    studyTable: false,
    chair: false,
    attachedToilet: false,
    attachedBalcony: false,
    airConditioner: false,
}

const initialState = {
    bedroom: [],
    priceRange: [0, 40000],
    homeFeatures: homeFeatures,
    zone:[],
    accomodationType: [],
    bedroomDetails:bedroomDetails
}

export default (filters = initialState, action) => {
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
        case 'SET_ACCOMODATION_TYPE_FITLER': {
            let newState = {
                ...filters,
                accomodationType: action.payload
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
        case 'SET_BEDROOM_DETAILS_FILTER': {
            let newState = {
                ...filters,
                bedroomDetails: action.payload
            }
            return newState
        }
        case 'CLEAR_FILTERS': {
            let newState = {
                ...initialState,
            }
            return newState
        }
        default:
            return filters
    }

}