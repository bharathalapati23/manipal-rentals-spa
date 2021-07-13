import * as api from '../api'

export const getPosts = (sortOrder) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_LOADING_TRUE' })
        const { data } = await api.fetchPosts(sortOrder);
        dispatch({ type: 'FETCH_ALL', payload: data })
        dispatch({ type: 'SET_LOADING_FALSE'})
    } catch (error) {
        console.log(error.message)    
    }

}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        
        dispatch({ type: 'CREATE', payload:data })
    } catch (error) {
        
    }
}