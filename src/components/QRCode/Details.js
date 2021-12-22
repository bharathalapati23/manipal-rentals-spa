import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PersonalDetailsComponent from "./PersonalDetailsComponent";
import HomeDetailsComponent from "./HomeDetailsComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  detailsForm: {
    backgroundColor: "#2e2e2e",
    borderRadius: "10px",
    padding: "20px",
    color: "#E5E5E5",
    fontFamily: "poppins",
    width: "67%",
  },
  modalStyle: {
    position: "absolute",
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#121212",
    top: "50%",
    left: "50%",
    WebkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    boxSizing: "border-box",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "20px",
    paddingTop: "20px",
  },
  modalText: {
    fontFamily: 'Poppins',
    color: '#E5E5E5',
    paddingTop: '5px'
  },
  stepperStyle: {
    backgroundColor: 'transparent',
    color: '#e5e5e5',
    fontFamily: 'poppins',
  },
  stepTitle: {
    fontSize: '20px',
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
  },
    fontFamily: 'poppins',
    '&.MuiStepLabel-label': {
      color: '#e5e5e5'
    },
  },
  stepperIcon: {
    fill: 'grey'
  },
  active: {
    fill: '#f36802',
  }
}));

function getSteps() {
  return ['Personal Details', 'Owner and Home Details'];
}

const Details = () => {
  const classes = useStyles();
  const steps = getSteps();
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const [saved, setSaved] = React.useState(
    localStorage.getItem("excelRow") !== null
  );

  const handleSuccessOpen = () => {
    setOpenSuccessModal(true);
  };

  const handleSuccessClose = () => {
    setOpenSuccessModal(false);
  };

  return (
    <div className={classes.root}>
      <Stepper className={classes.stepperStyle} activeStep={saved ? 1 : 0}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel classes={{
              label: classes.stepTitle,
              root: classes.stepperIcon,
            }}
              StepIconProps={{
                classes: {
                  root: classes.stepperIcon,
                  active: classes.active,
                  disabled: classes.disabled
                }
              }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.detailsForm}>
        {!saved && (
          <PersonalDetailsComponent setSaved={setSaved} />
        )}
        {saved && (
          <HomeDetailsComponent handleSuccessOpen={handleSuccessOpen} />
        )}
      </div>
      <Modal open={openSuccessModal} onClose={handleSuccessClose}>
        <div className={classes.modalStyle}>
          <Typography variant="h5" component="h2" className={classes.modalText}>
            Submitted Successfully!
          </Typography>
          <div className={classes.modalText}>
            Thank you for placing your enquiry, our representative will get in touch shortly.
            Call us on +919591798639 to connect with us immediately.
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Details;
