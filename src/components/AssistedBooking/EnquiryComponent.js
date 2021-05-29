import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
            marginTop: '50px',
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
        padding: '10px',
        [theme.breakpoints.up('lg')]: {
            maxWidth: '67%'
        },

    },
    whyUsComponent: {
        flexGrow: 1,
        backgroundColor: '#2e2e2e',
        width: '20%'
    },
    filterHeading: {
        fontFamily: 'Bebas Neue',
        color: '#E5E5E5',
        fontSize: '30px'
    },
    input: {
        color: "white"
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
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
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
    preferredConfig: []
}

const EnquiryComponent = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    const [enquiryForm, setEnquiryForm] = React.useState(initialFormState)
    const [submitClicked, setSubmitClicked] = React.useState(false)

    const handleSubmit = () => {
        setSubmitClicked(true)
        if (enquiryForm.name.length && enquiryForm.contactNumber.length && enquiryForm.maxBudget.length) {
            axios.post(`http://localhost:5000/leads`, enquiryForm)
                .then(res => {
                    console.log(res)
                    setEnquiryForm(initialFormState)
                    setSubmitClicked(false)
                })
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.desktopEnquiryForm}>
                <Typography variant="h5" component="h2" className={classes.filterHeading}>
                    FILL IN THE FORM BELOW
        		</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <div style={{ width: '40%' }}>
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
                    <div style={{ width: '40%' }}>
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
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <div style={{ width: '40%' }}>
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
                    <div style={{ width: '40%', maxWidth: '40%' }}>
                        <div className={classes.heading}>Preferred Zones</div>
                        <ZoneSelect setEnquiryForm={setEnquiryForm} enquiryForm={enquiryForm} />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <div style={{ width: '40%' }}>
                        <div className={classes.heading}>Preferred Configuration</div>
                        <ConfigurationSelect setEnquiryForm={setEnquiryForm} enquiryForm={enquiryForm} />
                    </div>
                    <div style={{ width: '40%', visibility: 'hidden' }}>
                        <div className={classes.heading}>Hidden Field</div>
                    </div>
                </div>
                <Button variant="contained"
                    style={{ borderRadius: 25, backgroundColor: '#f36802', color: 'white', fontWeight: 'bold', fontFamily: 'poppins', marginTop: '20px' }}
                    onClick={handleSubmit}
                >
                    CONTACT US
                </Button>
            </div>
            {!isMobile && <div className={classes.whyUsComponent}><WhyUsCardsComponent enquiryForm={true} /></div>}
        </div>
    )
}

export default EnquiryComponent
