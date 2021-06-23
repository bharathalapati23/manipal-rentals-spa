export default (showFooter = true, action) => {
    switch(action.type) {
        case 'HIDE_FOOTER': 
            return false
        case 'SHOW_FOOTER':
            return true
        default:
            return showFooter
    }

}