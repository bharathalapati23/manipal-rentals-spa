import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal'
import { useMediaQuery } from 'react-responsive';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import axios from 'axios'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "left"
    },
    getContentAnchorEl: null,
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

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
        '& .MuiInputBase-root': {
            backgroundColor: '#2e2e2e'
        }
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '80px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
        },
        width: '100%',
        margin: '0 auto',
        maxWidth: '1300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px',
        boxSizing: 'border-box',
        color: '#e0e0e0',
        [theme.breakpoints.up('md')]: {
            minHeight: 'calc(100vh - 366px)'
        },

    },
    formComponent: {
        width: '49%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
        padding: '0 10px 10px 10px',
        boxSizing: 'border-box'
    },
    contactDetails: {
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px'
        },
        width: '50%',
        textAlign: 'center',
    },
    propertyName: {
        fontFamily: 'Bebas Neue',
        fontSize: '45px',
        color: '#e0e0e0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
        },
        textAlign: 'center'
    },
    wolpaHeading: {
        fontFamily: 'Bebas Neue',
        fontSize: '30px',
        color: '#e0e0e0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        },
        textAlign: 'center'
    },
    subHeadings: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle: {
        fontSize: '40px',
        marginRight: '15px'
    },
    input: {
        color: "#e5e5e5"
    },
    textFieldStyles: {
        [theme.breakpoints.down('md')]: {
            width: '98%'
        },
        width: '50%',
        marginTop: '10px',
        marginRight: '10px'
    },
    icon: {
        fill: '#d5d5d5',
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
    filterHeading: {
        fontFamily: 'Bebas Neue',
        color: '#E5E5E5',
        fontSize: '30px'
    },
}));

const initialFormState = {
    name: '',
    emailId: '',
    contactNumber: '',
    enquiryDesc: '',
    contactUs: true
}

const ContactUs = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    const [enquiryForm, setEnquiryForm] = React.useState(initialFormState)
    const [submitClicked, setSubmitClicked] = React.useState(false)

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);

    const handleSuccessOpen = () => {
        setOpenSuccessModal(true);
    };

    const handleSuccessClose = () => {
        setOpenSuccessModal(false);
    };

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleSubmit = () => {
        console.log(enquiryForm)
        setSubmitClicked(true)
        if (enquiryForm.name.length && enquiryForm.contactNumber.length) {
            handleSuccessOpen()
            setEnquiryForm(initialFormState)
            setSubmitClicked(false)
            axios.post(`https://manipal-rentals-backend.herokuapp.com/leads`, enquiryForm)
                .then(res => {

                })
        }
        // axios.post(`http://localhost:5000/leads`, enquiryForm)
        //         .then(res => {

        //         })
        //}
    }


    return (
        <>
            <div className={classes.root}>
                <div className={classes.propertyName}>
                    CONTACT US
                </div>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
                    <div className={classes.formComponent}>
                        <div className={classes.wolpaHeading}>
                            REQUEST FOR SUPPORT
                        </div>
                        {!isMobile &&
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <CssTextField variant="outlined"
                                    label='Name'
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#777777', fontFamily: 'poppins', fontWeight: 'bold' },
                                    }}
                                    className={classes.textFieldStyles}
                                    value={enquiryForm.name}
                                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                                    error={submitClicked && !enquiryForm.name.length}
                                    helperText={submitClicked && !enquiryForm.name.length ? 'This field is required.' : ''}
                                />
                                <CssTextField variant="outlined"
                                    label='Email ID'
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#777777', fontFamily: 'poppins', fontWeight: 'bold' },
                                    }}
                                    className={classes.textFieldStyles}
                                    value={enquiryForm.emailId}
                                    onChange={(e) => setEnquiryForm({ ...enquiryForm, emailId: e.target.value })}
                                />
                            </div>
                        }
                        {isMobile &&
                            <>
                                <CssTextField variant="outlined"
                                    label='Name'
                                    className={classes.textFieldStyles}
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#777777', fontFamily: 'poppins', fontWeight: 'bold' },
                                    }}
                                    value={enquiryForm.name}
                                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                                    error={submitClicked && !enquiryForm.name.length}
                                    helperText={submitClicked && !enquiryForm.name.length ? 'This field is required.' : ''}
                                />
                                <CssTextField variant="outlined"
                                    label='Email ID'
                                    className={classes.textFieldStyles}
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    InputLabelProps={{
                                        style: { color: '#777777', fontFamily: 'poppins', fontWeight: 'bold' },
                                    }}
                                    value={enquiryForm.emailId}
                                    onChange={(e) => setEnquiryForm({ ...enquiryForm, emailId: e.target.value })}
                                />
                            </>
                        }
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <CssTextField variant="outlined"
                                label='Phone Number'
                                className={classes.textFieldStyles}
                                InputProps={{
                                    className: classes.input
                                }}
                                InputLabelProps={{
                                    style: { color: '#777777', fontFamily: 'poppins', fontWeight: 'bold' },
                                }}
                                style={{ width: '100%', marginRight: isMobile ? '5px' : '' }}
                                type="number"
                                value={enquiryForm.contactNumber}
                                onChange={(e) => setEnquiryForm({ ...enquiryForm, contactNumber: e.target.value })}
                                error={submitClicked && !enquiryForm.contactNumber.length}
                                helperText={submitClicked && !enquiryForm.contactNumber.length ? 'This field is required.' : ''}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <CssTextField variant="outlined"
                                label='Enquiry Description'
                                className={classes.textFieldStyles}
                                InputProps={{
                                    className: classes.input
                                }}
                                InputLabelProps={{
                                    style: { color: '#777777', fontFamily: 'poppins', fontWeight: 'bold' },
                                }}
                                style={{ width: '100%', marginRight: isMobile ? '5px' : '' }}
                                multiline
                                rows={4}
                                value={enquiryForm.enquiryDesc}
                                onChange={(e) => setEnquiryForm({ ...enquiryForm, enquiryDesc: e.target.value })}
                            />
                        </div>
                        <Button variant="contained"
                            style={{ borderRadius: 25, backgroundColor: '#f36802', color: '#e0e0e0', fontWeight: 'bold', marginTop: '10px', left: '50%', transform: 'translate(-50%,0)' }}
                            onClick={handleSubmit}
                        >
                            SUBMIT DETAILS
                        </Button>
                    </div>
                    <div className={classes.contactDetails}>
                        <div className={classes.wolpaHeading}>
                            WOLPA ACCO SERVICES
                            </div>
                        <div className={classes.subHeadings}>
                            <LocationOnIcon className={classes.iconStyle} />
                            <div>Manipal 576104</div>
                        </div>
                        <div className={classes.subHeadings}>
                            <PhoneIcon className={classes.iconStyle} />
                            <div>+919876543210</div>
                        </div>
                        <div className={classes.subHeadings}>
                            <MailOutlineIcon className={classes.iconStyle} />
                            <div>xyz@email.com</div>
                        </div>
                        <div style={{ marginTop: '40px' }}>
                            <FacebookIcon style={{ fontSize: '80px' }} />
                            <InstagramIcon style={{ fontSize: '80px' }} />
                            <TwitterIcon style={{ fontSize: '80px' }} />
                        </div>
                    </div>
                </div>
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

export default ContactUs
