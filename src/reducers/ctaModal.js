export default (modalOpen =false, action) => {
    switch(action.type) {
        case 'OPEN_CTA_MODAL': 
            return true
        case 'CLOSE_CTA_MODAL':
            return false
        default:
            return modalOpen
    }

}