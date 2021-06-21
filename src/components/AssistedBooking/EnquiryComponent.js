import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField';
import { useMediaQuery } from 'react-responsive';
import WhyUsCardsComponent from '../HowItWorks/WhyUsCardsComponent'
import ZoneSelect from './ZoneSelect'
import ConfigurationSelect from './ConfigurationSelect'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '80px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '60px',
        },
        width: '100%',
        margin: '0 auto',
        maxWidth: '1300px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '10px',
        boxSizing: 'border-box'
    },
    desktopEnquiryForm: {
        flexGrow: 2,
        backgroundColor: '#2e2e2e',
        marginRight: '20px',
        borderRadius: '10px',
        padding: '20px',
        [theme.breakpoints.up('lg')]: {
            maxWidth: '67%'
        },
        [theme.breakpoints.down('md')]: {
            margin: '0 auto'
        },

    },
    whyUsComponent: {
        flexGrow: 1,
        backgroundColor: '#2e2e2e',
        width: '20%',
        borderRadius: 10
    },
    filterHeading: {
        fontFamily: 'Poppins',
        color: '#E5E5E5',
        fontSize: '30px',
        marginBottom: '15px'
    },
    input: {
        color: "#e0e0e0"
    },
    heading: {
        fontFamily: 'Poppins',
        color: '#E5E5E5',
        paddingTop: '5px'
    },
    textFieldStyles: {
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
        width: '100%',
        marginTop: '5px',
        backgroundColor: '#2e2e2e'
    },
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
    heading: {
        fontFamily: 'Poppins',
        color: '#E5E5E5',
        paddingTop: '5px'
    },
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

const EnquiryComponent = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    const [enquiryForm, setEnquiryForm] = React.useState(initialFormState)
    const [submitClicked, setSubmitClicked] = React.useState(false)

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);

    const handleSuccessOpen = () => {
        setOpenSuccessModal(true);
    };

    const handleSuccessClose = () => {
        setOpenSuccessModal(false);
    };

    const handleSubmit = () => {
        console.log(enquiryForm)
        setSubmitClicked(true)
        if (enquiryForm.name.length && enquiryForm.contactNumber.length && enquiryForm.maxBudget.length) {
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
            <div className={classes.root}>
                {!isMobile &&
                    <>
                        <div className={classes.desktopEnquiryForm}>
                            <Typography variant="h5" component="h2" className={classes.filterHeading}>
                                Fill in the form below
        		            </Typography>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '40px' }}>
                                <div style={{ width: '49%' }}>
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
                                </div>
                                <div style={{ width: '49%' }}>
                                    <div className={classes.heading}>Contact Number</div>
                                    <CssTextField variant="outlined"
                                        error={submitClicked && !enquiryForm.contactNumber.length}
                                        helperText={submitClicked && !enquiryForm.contactNumber.length ? 'This field is required.' : ''}
                                        InputProps={{
                                            className: classes.input
                                        }}
                                        className={classes.textFieldStyles}
                                        type="number"
                                        value={enquiryForm.contactNumber}
                                        onChange={(e) => setEnquiryForm({ ...enquiryForm, contactNumber: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '40px' }}>
                                <div style={{ width: '49%' }}>
                                    <div className={classes.heading}>Max Budget</div>
                                    <CssTextField variant="outlined"
                                        error={submitClicked && !enquiryForm.maxBudget.length}
                                        helperText={submitClicked && !enquiryForm.maxBudget.length ? 'This field is required.' : ''}
                                        InputProps={{
                                            className: classes.input
                                        }}
                                        className={classes.textFieldStyles}
                                        type="number"
                                        value={enquiryForm.maxBudget}
                                        onChange={(e) => setEnquiryForm({ ...enquiryForm, maxBudget: e.target.value })}
                                    />
                                </div>
                                <div style={{ width: '49%', maxWidth: '49%' }}>
                                    <div className={classes.heading}>Preferred Zones</div>
                                    <ZoneSelect setEnquiryForm={setEnquiryForm} enquiryForm={enquiryForm} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '40px' }}>
                                <div style={{ width: '49%' }}>
                                    <div className={classes.heading}>Preferred Configuration</div>
                                    <ConfigurationSelect setEnquiryForm={setEnquiryForm} enquiryForm={enquiryForm} />
                                </div>
                                <div style={{ width: '49%', visibility: 'hidden' }}>
                                    <div className={classes.heading}>Hidden Field</div>
                                </div>
                            </div>
                            <div style={{ margin: '0 auto', }}>
                                <div className={classes.heading}>Enquiry</div>

                                <CssTextField variant="outlined"
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    className={classes.textFieldStyles}
                                    multiline
                                    rows={4}
                                    value={enquiryForm.enquiryDesc}
                                    onChange={(e) => setEnquiryForm({ ...enquiryForm, enquiryDesc: e.target.value })}
                                />
                            </div>
                            <Button variant="contained"
                                style={{ borderRadius: 25, backgroundColor: '#f36802', color: '#e0e0e0', fontWeight: 'bold', fontFamily: 'poppins', marginTop: '20px' }}
                                onClick={handleSubmit}
                            >
                                CONTACT US
                            </Button>
                        </div>
                        <div className={classes.whyUsComponent}><WhyUsCardsComponent enquiryForm={true} /></div>
                    </>}
                {isMobile &&
                    <div className={classes.desktopEnquiryForm}>
                        <Typography variant="h5" component="h2" className={classes.filterHeading}>
                        Fill in the form below
                        </Typography>
                        <div>
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
                        </div>
                        <div>
                            <div className={classes.heading}>Contact Number</div>
                            <CssTextField variant="outlined"
                                error={submitClicked && !enquiryForm.contactNumber.length}
                                helperText={submitClicked && !enquiryForm.contactNumber.length ? 'This field is required.' : ''}
                                InputProps={{
                                    className: classes.input
                                }}
                                className={classes.textFieldStyles}
                                type="number"
                                value={enquiryForm.contactNumber}
                                onChange={(e) => setEnquiryForm({ ...enquiryForm, contactNumber: e.target.value })}
                            />
                        </div>
                        <div>
                            <div className={classes.heading}>Max Budget</div>
                            <CssTextField variant="outlined"
                                error={submitClicked && !enquiryForm.maxBudget.length}
                                helperText={submitClicked && !enquiryForm.maxBudget.length ? 'This field is required.' : ''}
                                InputProps={{
                                    className: classes.input
                                }}
                                className={classes.textFieldStyles}
                                type="number"
                                value={enquiryForm.maxBudget}
                                onChange={(e) => setEnquiryForm({ ...enquiryForm, maxBudget: e.target.value })}
                            />
                        </div>
                        <div style={{ width: '94vw' }}>
                            <div className={classes.heading}>Preferred Zones</div>
                            <ZoneSelect setEnquiryForm={setEnquiryForm} enquiryForm={enquiryForm} />
                        </div>
                        <div>
                            <div className={classes.heading}>Preferred Configuration</div>
                            <ConfigurationSelect setEnquiryForm={setEnquiryForm} enquiryForm={enquiryForm} />
                        </div>
                        <div style={{ margin: '0 auto', }}>
                            <div className={classes.heading}>Enquiry</div>

                            <CssTextField variant="outlined"
                                InputProps={{
                                    className: classes.input
                                }}
                                className={classes.textFieldStyles}
                                multiline
                                rows={4}
                                value={enquiryForm.enquiryDesc}
                                onChange={(e) => setEnquiryForm({ ...enquiryForm, enquiryDesc: e.target.value })}
                            />
                        </div>
                        <Button variant="contained"
                            style={{ borderRadius: 25, backgroundColor: '#f36802', color: '#e0e0e0', fontWeight: 'bold', fontFamily: 'poppins', marginTop: '20px' }}
                            onClick={handleSubmit}
                        >
                            CONTACT US
                        </Button>
                    </div>}
            </div >
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
                        Call us on 9876543210 to connect with us immediately.
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default EnquiryComponent
