import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        maxWidth: '700px'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    stepperStyle: {
        backgroundColor: 'transparent',
        color: '#e5e5e5',
        fontFamily: 'poppins'
    },
    stepTitle: {
        fontSize: '20px',
        fontFamily: 'poppins',
        '&.MuiStepLabel-label': {
            color: '#e5e5e5'
        },
    },
    stepperIcon: {
        color: '#f36802 !important',
        '&.MuiStepIcon-text': {
            fill: 'black !important'
        }

    },
    contentStyle: {
        fontFamily: 'Poppins'
    },
    cardStyle: {
        backgroundColor: '#2e2e2e',
        fontFamily: 'poppins',
        color: '#e5e5e5',
        marginTop: '10px',
        boxSizing: 'border-box',
    },
}));

function getSteps() {
    return ['Select your home', 'Schedule property tour', 'Confirm your slot', 'Move in'];
}

function getStepContent(step, classes) {
    switch (step) {
        case 0:
            return (
                <div className={classes.contentStyle}>
                    Filter out budget, zone, accomodation type and amenities to get matches suiting your requirements.
                </div>
            )
        case 1:
            return (
                <div className={classes.contentStyle}>
                    Place a request for for property tour at your convenience by filling out form with your personal information.
                    <Card variant="outlined" style={{ borderRadius: '15px' }} className={classes.cardStyle}>
                        <CardContent>
                            {/* <div style={{ display:'flex', flexDirection:'row'}}>
                                <div style={{flexGrow:1, textAlign: 'right'}}>
                                    Viewing Charges:
                                </div>
                                <div style={{flexGrow:3}}>
                                    &nbsp;&nbsp;The below charges would apply to have a view of properties
                                </div>
                            </div> */}
                            <div style={{ fontSize: '18px', color: '#f36802' }}>
                                Viewing Charges
                            </div>
                            <div>
                                The below charges would apply to have a view of properties.
                            </div>
                            <div>
                                INR 500 - 3 Homes | INR 700 - 5 HOMES | INR 1000 - Unlimited
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )
        case 2:
            return (
                <div className={classes.contentStyle}>
                    Pay booking token to block a room. If in demand, you shall be placed in a waiting list
                    and intimidated within 72 hours of booking
                    <Card variant="outlined" style={{ borderRadius: '15px' }} className={classes.cardStyle}>
                        <CardContent>
                            <div style={{ fontSize: '18px', color: '#f36802' }}>
                                Booking fee
                            </div>
                            <div>
                                Pay one time fee of INR 1000 per room, includes service charges for setting up your
                                room prior to move -in.
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )
        case 3:
            return (
                <div className={classes.contentStyle}>
                    We shall assist you with the rental agreement and documentation and further steps till move-in.
                    Pay the deposit and move in.
                    <Card variant="outlined" style={{ borderRadius: '15px' }} className={classes.cardStyle}>
                        <CardContent>
                            <div style={{ fontSize: '18px', color: '#f36802' }}>
                                Security Deposit
                            </div>
                            <div>
                                Pay security deposit to an escrow account with more security and easy withdrawal
                                access while moving out.
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )
        default:
            return `Unknown step`
    }
}

const VerticalStepperComponent = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepperStyle}>
                {steps.map((label, index) => (
                    <Step key={label} active={true} >
                        <StepLabel classes={{
                            label: classes.stepTitle,
                            root: classes.stepperIcon,
                        }}
                        StepIconProps={{
                            classes: {
                              root: classes.stepperIcon,
                            }
                          }}>{label}</StepLabel>
                        <StepContent>
                            {getStepContent(index, classes)}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default VerticalStepperComponent
