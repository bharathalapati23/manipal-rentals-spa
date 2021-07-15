export default (uploads =[], action) => {
    switch(action.type) {
        case 'FETCH_ALL_UPLOADS': 
            return action.payload
        case 'CREATE_UPLOAD':
            return [...uploads, action.payload]
        case 'CLEAR_ALL_UPLOADS':
            return []
        default:
            return uploads
    }

}