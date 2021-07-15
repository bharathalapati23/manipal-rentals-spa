import { combineReducers } from 'redux'
import posts from './posts'
import filters from './filters'
import enquiryModal from './enquiryModal'
import loading from './loading'
import footer from './footer'
import uploads from './uploads'

export default combineReducers({
    posts,
    filters,
    enquiryModal,
    loading,
    footer,
    uploads
})