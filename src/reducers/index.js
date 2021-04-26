import { combineReducers } from 'redux'
import posts from './posts'
import filters from './filters'

export default combineReducers({
    posts,
    filters
})