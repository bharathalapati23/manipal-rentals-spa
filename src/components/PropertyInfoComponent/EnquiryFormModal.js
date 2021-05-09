import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'

const useStyles = makeStyles((theme) => ({
    modalStyle: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        top: '50%',
        left: '50%',
        WebkitTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)'
    },
}));

const EnquiryFormModal = () => {
    const classes = useStyles();
    const open = false

    return (
        <Modal
            open={open}
            // onClose={handleClose}
        >
            <div className={classes.modalStyle}>
                Hello
            </div>
        </Modal>
    )
}

export default EnquiryFormModal
