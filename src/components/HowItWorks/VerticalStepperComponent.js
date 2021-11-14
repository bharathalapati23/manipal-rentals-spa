import React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const CustomContentDiv = styled('div')(({ theme }) => ({
    fontFamily: 'Poppins'
}));

const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#2e2e2e',
    fontFamily: 'poppins',
    color: '#e5e5e5',
    marginTop: '10px',
    boxSizing: 'border-box',
}));

const RootDiv = styled('div')(({ theme }) => ({
    width: '80%',
    margin: '0 auto',
    maxWidth: '700px',
    padding: '24px',
    boxSizing: 'border-box'
}));

const CustomStepper = styled(Stepper)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: '#e5e5e5',
    fontFamily: 'poppins'
}));

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
    "& .MuiStepLabel-label": {
        fontSize: '20px',
        fontFamily: 'poppins',
        '&.MuiStepLabel-label': {
            color: '#e5e5e5'
        },
    },
    '& .MuiStepLabel-iconContainer': {
        '& .MuiSvgIcon-root': {
            color: '#f36802 !important',
        },
        '&.MuiStepIcon-text': {
            fill: 'black !important'
        }
    }
}));

function getSteps() {
    return ['Select your home', 'Schedule property tour', 'Confirm your slot', 'Move in'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <CustomContentDiv>
                    Filter out budget, zone, accomodation type and amenities to get matches suiting your requirements.
                </CustomContentDiv>
            )
        case 1:
            return (
                <CustomContentDiv>
                    Place a request for property tour at your convenience by filling out form with your personal information.
                    <CustomCard variant="outlined" style={{ borderRadius: '15px' }}>
                        <CardContent>
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
                    </CustomCard>
                </CustomContentDiv>
            )
        case 2:
            return (
                <CustomContentDiv>
                    Pay booking token to block a room. If in demand, you shall be placed in a waiting list
                    and intimated within 72 hours of booking
                    <CustomCard variant="outlined" style={{ borderRadius: '15px' }}>
                        <CardContent>
                            <div style={{ fontSize: '18px', color: '#f36802' }}>
                                Booking fee
                            </div>
                            <div>
                                Pay one time fee of INR 1000 per room as service charges. Room can be cleaned and set-up additionally before move-in.
                            </div>
                        </CardContent>
                    </CustomCard>
                </CustomContentDiv>
            )
        case 3:
            return (
                <CustomContentDiv>
                    We shall assist you with the rental agreement and documentation and further steps till move-in.
                    Pay the deposit and move in.
                    <CustomCard variant="outlined" style={{ borderRadius: '15px' }}>
                        <CardContent>
                            <div style={{ fontSize: '18px', color: '#f36802' }}>
                                Security Deposit
                            </div>
                            <div>
                                Pay security deposit to an escrow account with more security and easy withdrawal
                                access while moving out.
                            </div>
                        </CardContent>
                    </CustomCard>
                </CustomContentDiv>
            )
        default:
            return `Unknown step`
    }
}

const VerticalStepperComponent = () => {
    const steps = getSteps();

    return (
        <RootDiv>
            <CustomStepper orientation="vertical" >
                {steps.map((label, index) => (
                    <Step key={label} active={true} >
                        <CustomStepLabel>{label}</CustomStepLabel>
                        <StepContent>
                            {getStepContent(index)}
                        </StepContent>
                    </Step>
                ))}
            </CustomStepper>
        </RootDiv>
    );
}

export default VerticalStepperComponent
