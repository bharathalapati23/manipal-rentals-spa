export const showFooter = () => async (dispatch) => {
    try {
        dispatch({ type: 'SHOW_FOOTER' })
    } catch (error) {
        console.log(error.message)
    }
}

export const hideFooter = () => async (dispatch) => {
    try {
        dispatch({ type: 'HIDE_FOOTER' })
    } catch (error) {
        console.log(error.message)
    }
}

