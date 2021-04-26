export default (posts =[], action) => {
    switch(action.type) {
        case 'FETCH_ALL': 
            return action.payload
        case 'CREATE':
            return [...posts, action.payload]
        case 'CLEAR_ALL':
            return []
        default:
            return posts
    }

}