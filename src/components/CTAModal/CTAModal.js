import React from 'react'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import { closeCTAModal } from '../../actions/ctaModal'

const useStyles = makeStyles((theme) => ({
    modalStyle: {
        position: 'absolute',
        width: '100%',
        maxWidth: '500px',
        backgroundColor: '#121212',
        // border: '10px solid #000',
        top: '50%',
        left: '50%',
        WebkitTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
        boxSizing: 'border-box',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '20px',
        paddingTop: '20px',
        color: 'white'
    },
}));

const CTAModal = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const open = useSelector((state) => state.ctaModal)
    const closeEnquiryModal = () => {
        dispatch(closeCTAModal())
    }

    return (
        <>
            <Modal
                open={open}
                onClose={closeEnquiryModal}
            >
                <div className={classes.modalStyle}>
                    WOLPA
                </div>
            </Modal>
        </>
    )
}

export default CTAModal
