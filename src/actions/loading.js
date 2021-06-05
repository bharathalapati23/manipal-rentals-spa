export const setLoadingFalse = () => async (dispatch) => {
    try {
        dispatch({ type: 'SET_LOADING_FALSE' })
    } catch (error) {
        console.log(error.message)
    }
}
