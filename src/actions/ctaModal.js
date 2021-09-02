export const openCTAModal = () => async (dispatch) => {
    try {
        dispatch({ type: 'OPEN_CTA_MODAL' })
    } catch (error) {
        console.log(error.message)
    }
}

export const closeCTAModal = () => async (dispatch) => {
    try {
        dispatch({ type: 'CLOSE_CTA_MODAL' })
    } catch (error) {
        console.log(error.message)
    }
}