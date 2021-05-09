export const openModal = () => async (dispatch) => {
    try {
        dispatch({ type: 'OPEN_MODAL' })
    } catch (error) {
        console.log(error.message)
    }
}

export const closeModal = () => async (dispatch) => {
    try {
        dispatch({ type: 'CLOSE_MODAL' })
    } catch (error) {
        console.log(error.message)
    }
}