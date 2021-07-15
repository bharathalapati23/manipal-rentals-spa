import * as api from '../api'

export const getUploads = (sortOrder) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_LOADING_TRUE' })
        const { data } = await api.fetchUploads(sortOrder);
        dispatch({ type: 'FETCH_ALL_UPLOADS', payload: data })
        dispatch({ type: 'SET_LOADING_FALSE'})
    } catch (error) {
        console.log(error.message)    
    }

}

export const createUpload = (post) => async (dispatch) => {
    try {
        const { data } = await api.createUpload(post);
        
        dispatch({ type: 'CREATE_UPLOAD', payload:data })
    } catch (error) {
        
    }
}

export const clearUploads = () => async (dispatch) => {
    try {
        dispatch({ type: 'CLEAR_ALL_UPLOADS' })
    } catch (error) {
        console.log(error.message)    
    }

}