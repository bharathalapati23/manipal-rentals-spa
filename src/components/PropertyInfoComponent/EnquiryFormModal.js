import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../actions/enquiryModal'
import axios from 'axios'

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
        paddingTop: '20px'
    },
    filterHeading: {
        textAlign: 'center',
        padding: '10px',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#E5E5E5'
    },
    heading: {
        fontFamily: 'Poppins',
        color: '#E5E5E5',
        paddingTop: '5px'
    },
    input: {
        color: "#e0e0e0"
    },
    textFieldStyles: {
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
        width: '100%',
        marginTop: '5px',
        backgroundColor: '#2e2e2e'
    },
    submitButton: {
        borderRadius: 25,
        backgroundColor: '#f36802',
        color: '#e0e0e0',
        fontWeight: 'bold',
        marginTop: '20px',
        left: '50%',
        transform: 'translate(-50%, 0)',
    }
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#e0e0e0',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
})(TextField);

const initialFormState = {
    name: '',
    contactNumber: '',
    maxBudget: '',
    preferredZones: [],
    preferredConfig: [],
    enquiryDesc: '',
    preferredTime: '',
    searchId: ''
}

const EnquiryFormModal = ({ searchId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const open = useSelector((state) => state.enquiryModal)

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const [submitClicked, setSubmitClicked] = React.useState(false)
    const [enquiryForm, setEnquiryForm] = React.useState(initialFormState)

    React.useEffect(()=> {
        setEnquiryForm({ ...enquiryForm, searchId: searchId })
    }, [])

    const handleSuccessOpen = () => {
        setOpenSuccessModal(true);
    };

    const handleSuccessClose = () => {
        setOpenSuccessModal(false);
    };


    const closeEnquiryModal = () => {
        dispatch(closeModal())
    }

    const handleSubmit = () => {
        
        setSubmitClicked(true)
        if (enquiryForm.name.length && enquiryForm.contactNumber.length) {
            handleSuccessOpen()
            setEnquiryForm(initialFormState)
            setSubmitClicked(false)
            axios.post(`https://manipal-rentals-backend.herokuapp.com/leads`, enquiryForm)
                .then(res => {

                })
        }
    }

    return (
        <>
            <Modal
                open={open}
                onClose={closeEnquiryModal}
            >
                <div className={classes.modalStyle}>
                    <Typography variant="h5" component="h2" className={classes.filterHeading}>
                        PROPERTY TOUR
        		    </Typography>
                    <div className={classes.heading}>Name</div>
                    <CssTextField variant="outlined"
                        error={submitClicked && !enquiryForm.name.length}
                        helperText={submitClicked && !enquiryForm.name.length ? 'This field is required.' : ''}
                        InputProps={{
                            className: classes.input
                        }}
                        className={classes.textFieldStyles}
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    />
                    <div className={classes.heading}>Contact Number</div>
                    <CssTextField variant="outlined"
                        error={submitClicked && !enquiryForm.contactNumber.length}
                        helperText={submitClicked && !enquiryForm.contactNumber.length ? 'This field is required.' : ''}
                        InputProps={{
                            className: classes.input
                        }}
                        className={classes.textFieldStyles}
                        value={enquiryForm.contactNumber}
                        type="number"
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, contactNumber: e.target.value })}
                    />
                    <div className={classes.heading}>Preferred Time</div>
                    <CssTextField variant="outlined"
                        InputProps={{
                            className: classes.input
                        }}
                        className={classes.textFieldStyles}
                        type="time"
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, preferredTime: e.target.value })}
                    />
                    <Button variant="contained"
                        buttonStyle={{ borderRadius: 25 }}
                        className={classes.submitButton}
                        onClick={() => {
                            closeEnquiryModal()
                            handleSubmit()
                        }}
                    >
                        SCHEDULE PROPERTY TOUR
                </Button>
                </div>
            </Modal>
            <Modal
                open={openSuccessModal}
                onClose={handleSuccessClose}
            >
                <div className={classes.modalStyle}>
                    <Typography variant="h5" component="h2" className={classes.filterHeading}>
                        Submitted Successfully!
         		    </Typography>
                    <div className={classes.heading}>
                        Thank you for placing your enquiry, our representative will get in touch shortly.
                        Call us on +919591798639 to connect with us immediately.
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default EnquiryFormModal
