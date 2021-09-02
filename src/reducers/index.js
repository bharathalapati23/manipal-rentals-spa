import { combineReducers } from 'redux'
import posts from './posts'
import filters from './filters'
import enquiryModal from './enquiryModal'
import ctaModal from './ctaModal'
import loading from './loading'
import footer from './footer'
import sortOrder from './sortOrder'

export default combineReducers({
    posts,
    filters,
    ctaModal,
    enquiryModal,
    loading,
    footer,
    sortOrder
})