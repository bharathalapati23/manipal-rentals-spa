import React from 'react'
import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DescriptionIcon from '@mui/icons-material/Description';
import DepositIcon from '../../icons/HowItWorksIcons/DepositIcon'

const useStyles = makeStyles((theme) => ({
    enquiryCardStyle: {
        width: '90%',
        marginBottom: '20px',
        backgroundColor: '#2e2e2e',
        fontFamily: 'poppins',
        color: '#e5e5e5',
        fontWeight: 'bolder',
        letterSpacing: '0.04rem',
        fontSize: '23px',
        margin: '0 auto'
    },
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: '#2e2e2e',
    height: '100%',
    color: '#e5e5e5',
    border: 'none'
}));

const RootDiv = styled('div', {
    isEnquiryForm: (prop) => prop !== "isEnquiryForm"
})(({ theme, isEnquiryForm }) => ({
    display: 'flex',
    [theme.breakpoints.up('md')]: {
        flexDirection: isEnquiryForm ? 'column' : 'row',
    },
    width: '100%',
    margin: '0 auto',
    marginTop: '20px',
    maxWidth: '1300px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}));

const WhyUsCardContainer = styled(Card)(({ theme }) => ({
    width: '30%',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginBottom: '20px'
    },
    fontFamily: 'poppins',
    fontWeight: 'bolder',
    letterSpacing: '0.04rem',
    fontSize: '23px',
    borderRadius: '15px',
}));

const EnquiryCardContainer = styled(Card)(({ theme }) => ({
    width: '90%',
    fontFamily: 'poppins',
    color: '#e5e5e5',
    fontWeight: 'bolder',
    letterSpacing: '0.04rem',
    fontSize: '23px',
    margin: '0 auto',
    marginBottom: '20px',
}));

const CustomCardContainer = ({ index, isEnquiryForm, children }) => {
    return (
        <>
            {
                !isEnquiryForm &&
                <WhyUsCardContainer variant="outlined" key={`${index}whyuscard`} isEnquiryForm={isEnquiryForm}>
                    {children}
                </WhyUsCardContainer>
            }
            {
               isEnquiryForm &&
                <EnquiryCardContainer variant="outlined" key={`${index}whyuscard`} isEnquiryForm={isEnquiryForm}>
                    {children}
                </EnquiryCardContainer>
            }
        </>
    )
}

const WhyUsCardsComponent = (props) => {
    const cardsConfigArr = [
        {
            icon: <DepositIcon style={{ fontSize: '100px', color: '#f36802' }} />,
            content: 'Save money & Deposit secured.'
        },
        {
            icon: <DescriptionIcon style={{ fontSize: '100px', color: '#f36802' }} />,
            content: 'Assistance from choosing property to rental agreement.'
        },
        {
            icon: <SmartphoneIcon style={{ fontSize: '100px', color: '#f36802' }} />,
            content: 'Book from the comfort of your home.'
        }
    ]

    return (
        <RootDiv isEnquiryForm={props.enquiryForm}>
            {cardsConfigArr.map((cardConfig, index) => {
                return (
                    <CustomCardContainer index={index} isEnquiryForm={props.enquiryForm} key={`${index}customcardcontainer`}>
                        <CustomCardContent>
                            <div style={{ margin: '0 auto' }}>
                                {cardConfig.icon}
                            </div>
                            {cardConfig.content}
                        </CustomCardContent>
                    </CustomCardContainer>
                )
            })}
        </RootDiv>
    )
}

export default WhyUsCardsComponent
