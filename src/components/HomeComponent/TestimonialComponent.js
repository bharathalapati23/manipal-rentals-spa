import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const testimonialArr = [
    {
        role: 'Kiran',
        flat: 'Owner',
        rating: 5,
        testimonial: 'Thank you so much for making it like cake walk to find a new tenant to my flat in this platform. I truly appreciate the digital platform which served the purpose, specially in this situation.',
        pic: 'https://springhub.org/wp-content/uploads/2021/04/blank_profile.png'
    },
    {
        role: 'Nikhil',
        flat: 'Student',
        rating: 5,
        testimonial: 'Very quick response by the team. Follow-ups with the customer was quick. Would definitely recommend to students.',
        pic: 'https://res.cloudinary.com/dojfndzbj/image/upload/c_scale,f_auto,h_300,q_auto/v1626368752/WhatsApp_Image_2021-07-09_at_12.08.13_PM_jnuy6w.jpg'
    },
    {
        role: 'Nameesha Shetty',
        flat: 'Professional',
        rating: 5,
        testimonial: 'Very easy going and hassle free. Love the support from the team!',
        pic: 'https://res.cloudinary.com/dojfndzbj/image/upload/c_scale,f_auto,h_300,q_auto/v1626368752/WhatsApp_Image_2021-07-13_at_2.51.49_PM_zgtycj.jpg'
    },
    {
        role: 'Bavan Mendon',
        flat: 'Professional',
        rating: 5,
        testimonial: 'Flexible with timings and got honest opinions on the properties. Would recommend to friends and colleagues.',
        pic: 'https://res.cloudinary.com/dojfndzbj/image/upload/c_scale,f_auto,h_300,q_auto/v1626368752/WhatsApp_Image_2021-07-15_at_12.01.50_AM_hwdutt.jpg'
    }
]
const useStyles = makeStyles((theme) => ({
    heading: {
        marginTop: '30px',
        fontFamily: 'Poppins',
        fontSize: '35px',
        color: '#e0e0e0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '27px',
        },
        textAlign: 'center',
        marginBottom: '10px'
    },
    gridContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    testimonialContainer: {
        width: '30%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            margin: '0 auto'
        },
        maxWidth: '300px',

        fontFamily: 'poppins',
        color: '#d5d5d5',
        fontSize: '20px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
        boxSizing: 'border-box',
        padding: '35px',
        // paddingLeft: '10px',
        // paddingRight: '10px',
        paddingTop: '0px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    picContainer: {
        width: '70%',
        height: 'auto',
        borderRadius: '50%',
        paddingBottom: '70%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    },
    unknownPicContainer: {
        width: '70%',
        height: 'auto',
        borderRadius: '50%',
        paddingBottom: '70%',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom 10px center',
    },
    role: {
        fontSize: '17px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        },
        paddingTop: '10px'
    },
    flat: {
        fontSize: '17px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        },
    },
    progressButton: {
        justifyContent: 'center',
        background: 'transparent'    
    },
    inactiveDot: {
        backgroundColor: '#2e2e2e'
    },
    activeDot: {
        backgroundColor: '#f36802'
    }
}));

const TestimonialComponent = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
      };

    return (
        <>
            <div className={classes.heading}>
                Testimonials
            </div>
            {!isMobile &&
                <div className={classes.gridContainer}>
                    {testimonialArr.map((testimonial) => {
                        return (
                            <div className={classes.testimonialContainer}>
                                <div 
                                    className={`${testimonial.role == 'Kiran' ? classes.unknownPicContainer : classes.picContainer}`} 
                                    style={{ backgroundImage: `url(${testimonial.pic})`}}>
                                </div>
                                <div className={classes.role}>
                                    {testimonial.role}
                                </div>
                                <div className={classes.flat}>
                                    {testimonial.flat}
                                </div>
                                <Rating name="read-only" value={testimonial.rating} readOnly style={{ paddingTop: '10px', paddingBottom: '15px' }} />
                                "{testimonial.testimonial}"
                            </div>
                        )
                    })}
                </div>
            }
            {isMobile && 
            <>
            <AutoPlaySwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            >
            {testimonialArr.map((testimonial) => {
                        return (
                            <div className={classes.testimonialContainer}>
                                <div 
                                    className={`${testimonial.role == 'Kiran' ? classes.unknownPicContainer : classes.picContainer}`} 
                                    style={{ backgroundImage: `url(${testimonial.pic})`}}>
                                </div>
                                <div className={classes.role}>
                                    {testimonial.role}
                                </div>
                                <div className={classes.flat}>
                                    {testimonial.flat}
                                </div>
                                <Rating name="read-only" value={testimonial.rating} readOnly style={{ paddingTop: '10px', paddingBottom: '15px' }} />
                                "{testimonial.testimonial}"
                            </div>
                        )
                    })}
          </AutoPlaySwipeableViews>
          <MobileStepper
            variant="dots"      
            steps={testimonialArr.length}
            position="static"
            activeStep={activeStep}
            className={classes.progressButton}
            classes={{
                dot: classes.inactiveDot,
                dotActive: classes.activeDot  
            }}
            nextButton={
              <Button size="small" style={{ display: 'none'}}>
                 Next
              </Button>
            }
            backButton={
              <Button size="small" style={{ display: 'none'}}>
                Back
              </Button>
            }
            />
          </>
          }
        </>
    )
}

export default TestimonialComponent
