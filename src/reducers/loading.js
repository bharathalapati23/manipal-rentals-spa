export default (loading = true, action) => {
    switch(action.type) {
        case 'SET_LOADING_FALSE': 
            return false
        case 'SET_LOADING_TRUE':
            return true
        default:
            return loading
    }

}