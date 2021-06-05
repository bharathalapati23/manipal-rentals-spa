import { combineReducers } from 'redux'
import posts from './posts'
import filters from './filters'
import enquiryModal from './enquiryModal'
import loading from './loading'

export default combineReducers({
    posts,
    filters,
    enquiryModal,
    loading
})