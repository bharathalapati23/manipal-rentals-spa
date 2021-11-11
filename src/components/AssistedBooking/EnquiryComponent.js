import React from 'react'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField';
import { useMediaQuery } from 'react-responsive';
import WhyUsCardsComponent from '../HowItWorks/WhyUsCardsComponent'
import ZoneSelect from './ZoneSelect'
import ConfigurationSelect from './ConfigurationSelect'
import axios from 'axios'

const RootDiv = styled('div')(({ theme }) => ({
    width: '100%',
    margin: '0 auto',
    marginTop: '80px',
    [theme.breakpoints.down('md')]: {
        marginTop: '60px',
    },
    maxWidth: '1300px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '10px',
    boxSizing: 'border-box'
}));

const EnquiryFormContainer = styled('div')(({ theme }) => ({
    flexGrow: 2,
    backgroundColor: '#2e2e2e',
    marginRight: '20px',
    borderRadius: '10px',
    padding: '20px',
    [theme.breakpoints.up('lg')]: {
        maxWidth: '67%'
    },
    [theme.breakpoints.down('lg')]: {
        margin: '0 auto'
    },
}));

const FilterHeading = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins',
    color: '#E5E5E5',
    fontSize: '30px',
    marginBottom: '15px'
}));

const InputHeading = styled('div')(() => ({
    fontFamily: 'Poppins',
    color: '#E5E5E5',
    paddingTop: '5px'
}));

const WhyUsContainer = styled('div')(() => ({
    flexGrow: 1,
    backgroundColor: '#2e2e2e',
    width: '20%',
    borderRadius: 10
}));

const ModalContainer = styled('div')(() => ({
    position: 'absolute',
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#121212',
    top: '50%',
    left: '50%',
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    boxSizing: 'border-box',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '20px',
    paddingTop: '20px'
}));

const CssTextField = styled(TextField)({
    marginTop: '5px',
    width: '100%',
    "& input.MuiOutlinedInput-input": {
        color: '#e0e0e0',
    },
    "& textarea.MuiOutlinedInput-input": {
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
});

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

        setSubmitClicked(true)
        if (enquiryForm.name.length && enquiryForm.contactNumber.length && enquiryForm.maxBudget.length) {
            handleSuccessOpen()
            setEnquiryForm(initialFormState)
            setSubmitClicked(false)
            axios.post(`https://wolpa-rentals-backend.herokuapp.com/leads`, enquiryForm)
                .then(res => {

                })
        }
    }

    return (
        <>
            <RootDiv>
                {!isMobile &&
                    <>
                        <EnquiryFormContainer>
                            <FilterHeading variant="h4" component="h2">
                                Fill in the form below
        		            </FilterHeading>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '40px' }}>
                                <div style={{ width: '49%' }}>
                                    <InputHeading>Name</InputHeading>
                                    <CssTextField variant="outlined"
                                        error={submitClicked && !enquiryForm.name.length}
                                        helperText={submitClicked && !enquiryForm.name.length ? 'This field is required.' : ''}
                                        value={enquiryForm.name}
                                        onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                                    />
                                </div>
                                <div style={{ width: '49%' }}>
                                    <InputHeading>Contact Number</InputHeading>
                                    <CssTextField variant="outlined"
                                        error={submitClicked && !enquiryForm.contactNumber.length}
                                        helperText={submitClicked && !enquiryForm.contactNumber.length ? 'This field is required.' : ''}
                                        type="number"
                                        value={enquiryForm.contactNumber}
                                        onChange={(e) => setEnquiryForm({ ...enquiryForm, contactNumber: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '40px' }}>
                                <div style={{ width: '49%' }}>
                                    <InputHeading>Max Budget</InputHeading>
                                    <CssTextField variant="outlined"
                                        error={submitClicked && !enquiryForm.maxBudget.length}
                                        helperText={submitClicked && !enquiryForm.maxBudget.length ? 'This field is required.' : ''}
                                        type="number"
                                        value={enquiryForm.maxBudget}
                                        onChange={(e) => setEnquiryForm({ ...enquiryForm, maxBudget: e.target.value })}
                                    />
                                </div>
                                <div style={{ width: '49%', maxWidth: '49%' }}>
                                    <InputHeading>Preferred Zones</InputHeading>
                                    <ZoneSelect setEnquiryForm={setEnquiryForm} enquiryForm={enquiryForm} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '40px' }}>
                                <div style={{ width: '49%' }}>
                                    <InputHeading>Preferred Configuration</InputHeading>
                                    <ConfigurationSelect setEnquiryForm={setEnquiryForm} enquiryForm={enquiryForm} />
                                </div>
                                <div style={{ width: '49%', visibility: 'hidden' }}>
                                    <InputHeading>Hidden Field</InputHeading>
                                </div>
                            </div>
                            <div style={{ margin: '0 auto', }}>
                                <InputHeading>Enquiry</InputHeading>

                                <CssTextField variant="outlined"
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
                        </EnquiryFormContainer>
                        <WhyUsContainer><WhyUsCardsComponent enquiryForm={true} /></WhyUsContainer>
                    </>}
                {isMobile &&
                    <EnquiryFormContainer>
                        <FilterHeading variant="h5" component="h2">
                            Fill in the form below
                        </FilterHeading>
                        <div>
                            <InputHeading>Name</InputHeading>
                            <CssTextField variant="outlined"
                                error={submitClicked && !enquiryForm.name.length}
                                helperText={submitClicked && !enquiryForm.name.length ? 'This field is required.' : ''}
                                value={enquiryForm.name}
                                onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <InputHeading>Contact Number</InputHeading>
                            <CssTextField variant="outlined"
                                error={submitClicked && !enquiryForm.contactNumber.length}
                                helperText={submitClicked && !enquiryForm.contactNumber.length ? 'This field is required.' : ''}
                                type="number"
                                value={enquiryForm.contactNumber}
                                onChange={(e) => setEnquiryForm({ ...enquiryForm, contactNumber: e.target.value })}
                            />
                        </div>
                        <div>
                            <InputHeading>Max Budget</InputHeading>
                            <CssTextField variant="outlined"
                                error={submitClicked && !enquiryForm.maxBudget.length}
                                helperText={submitClicked && !enquiryForm.maxBudget.length ? 'This field is required.' : ''}
                                type="number"
                                value={enquiryForm.maxBudget}
                                onChange={(e) => setEnquiryForm({ ...enquiryForm, maxBudget: e.target.value })}
                            />
                        </div>
                        <div style={{ width: '94vw' }}>
                            <InputHeading>Preferred Zones</InputHeading>
                            <ZoneSelect setEnquiryForm={setEnquiryForm} enquiryForm={enquiryForm} />
                        </div>
                        <div>
                            <InputHeading>Preferred Configuration</InputHeading>
                            <ConfigurationSelect setEnquiryForm={setEnquiryForm} enquiryForm={enquiryForm} />
                        </div>
                        <div style={{ margin: '0 auto', }}>
                            <InputHeading>Enquiry</InputHeading>
                            <CssTextField variant="outlined"
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
                    </EnquiryFormContainer>}
            </RootDiv >
            <Modal
                open={openSuccessModal}
                onClose={handleSuccessClose}
            >
                <ModalContainer>
                    <FilterHeading>
                        Submitted Successfully!
         		    </FilterHeading>
                    <InputHeading>
                        Thank you for placing your enquiry, our representative will get in touch shortly.
                        Call us on +919591798639 to connect with us immediately.
                    </InputHeading>
                </ModalContainer>
            </Modal>
        </>
    )
}

export default EnquiryComponent
