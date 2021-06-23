import { combineReducers } from 'redux'
import posts from './posts'
import filters from './filters'
import enquiryModal from './enquiryModal'
import loading from './loading'
import footer from './footer'

export default combineReducers({
    posts,
    filters,
    enquiryModal,
    loading,
    footer
})