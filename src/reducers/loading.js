export default (loading = true, action) => {
    switch(action.type) {
        case 'SET_LOADING_FALSE': 
            return false
        default:
            return loading
    }

}