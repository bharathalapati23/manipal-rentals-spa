export default (sortOrder = -1000, action) => {
    switch (action.type) {
        case 'SET_ORDER_RECENT':
            return 0
        case 'SET_ORDER_PRICE_DESC':
            return -1
        case 'SET_ORDER_PRICE_ASC':
            return 1
        default:
            return sortOrder
    }

}