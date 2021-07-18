export const setSortOrder = (sortOrder) => async (dispatch) => {
    try {
        console.log(sortOrder)
        if (sortOrder === 0)
            dispatch({ type: 'SET_ORDER_RECENT' })
        else if (sortOrder === -1)
            dispatch({ type: 'SET_ORDER_PRICE_DESC' })
        else if (sortOrder === 1)
            dispatch({ type: 'SET_ORDER_PRICE_ASC' })
    } catch (error) {
        console.log(error.message)
    }
}

