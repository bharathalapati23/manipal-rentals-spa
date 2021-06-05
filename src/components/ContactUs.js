import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useMediaQuery } from 'react-responsive';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

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
        padding: '10px',
        boxSizing: 'border-box',
        color: 'white',
        [theme.breakpoints.up('md')]: {
            height: 'calc(100vh - 366px)'
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
        width: '50%',
        textAlign: 'center',
    },
    propertyName: {
        fontFamily: 'Bebas Neue',
        fontSize: '45px',
        color: '#FFFFFF',
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
        },
        textAlign: 'center'
    },
    wolpaHeading: {
        fontFamily: 'Bebas Neue',
        fontSize: '30px',
        color: '#FFFFFF',
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
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
        color: "white"
    },
    textFieldStyles: {
        [theme.breakpoints.down('md')]: {
            width: '98%'
        },
        width: '50%',
        marginTop: '5px',
        backgroundColor: '#2e2e2e',
        marginRight: '10px'
    },
    sortSelect: {
        marginRight: '10px',
        width: '98%',
        height: '56px',
        marginTop: '5px',
        fontFamily: 'Poppins',
        fontSize: '14px',
        color: '#e5e5e5',
        border: 'solid',
        borderColor: '#121212',
        borderWidth: 'thin',
        backgroundColor: '#2e2e2e',
        paddingLeft: '5px',
        borderRadius: '5px',
        "& option": {
            backgroundColor: "#black",
        },
        "& li": {
            fontSize: 12,
        },
    },
}));

const ContactUs = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    className={classes.textFieldStyles}
                                    placeholder='Name'
                                />
                                <CssTextField variant="outlined"
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    className={classes.textFieldStyles}
                                    placeholder='Email ID'
                                />
                            </div>
                        }
                        {isMobile &&
                            <>
                                <CssTextField variant="outlined"
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    className={classes.textFieldStyles}
                                    placeholder='Name'
                                />
                                <CssTextField variant="outlined"
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    className={classes.textFieldStyles}
                                    placeholder='Email ID'
                                />
                            </>
                        }
                        <div>
                            <Select
                                input={<Input />}
                                MenuProps={MenuProps}
                                className={classes.sortSelect}
                            >

                                <MenuItem>
                                    <ListItemText primary={'Student'} />
                                </MenuItem>
                                <MenuItem>
                                    <ListItemText primary={'Broker'} />
                                </MenuItem>
                                <MenuItem>
                                    <ListItemText primary={'Home Owner'} />
                                </MenuItem>
                            </Select>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <CssTextField variant="outlined"
                                InputProps={{
                                    className: classes.input
                                }}
                                className={classes.textFieldStyles}
                                placeholder='Your Message'
                                style={{ width: '98%' }}
                                multiline
                                rows={4}
                            />
                        </div>
                        <Button variant="contained"
                            style={{ borderRadius: 25, backgroundColor: '#f36802', color: 'white', fontWeight: 'bold', marginTop: '10px', left: '50%', transform: 'translate(-50%,0)' }}
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
        </>
    )
}

export default ContactUs
