import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const initialFormState = {
    name: "",
    contactNo: "",
    propertyName: "",
    houseNo: "",
    totalFloors: "",
    configuration: "",
    furnishing: "",
    rental: "",
    deposit: "",
    movingOut: "",
};

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#e0e0e0",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "white",
        },
        "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
                borderColor: "white",
            },
            "&.Mui-focused fieldset": {
                borderColor: "white",
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    heading: {
        fontFamily: "poppins",
        fontSize: "25px",
        marginTop: "1vh",
        marginBottom: "2vh",
        marginLeft: "3%",
        color: "#f36802",
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
        },
    },
    message: {
        textAlign: "center",
        fontSize: "18px",
        margin: "20px 25px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
            margin: "10px 10px",
            textAlign: "left",
        },
    },
    details: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    input: {
        color: "#e0e0e0",
        fontFamily: "poppins",
        backgroundColor: "#2e2e2e",
        borderColor: "white",
        width: "100%",
    },
    label: {
        fontSize: "17px",
        fontFamily: "poppins",
        marginTop: "1.5vh",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        },
    },
    row: {
        width: "100%",
        paddingLeft: "3%",
    },
    textFieldStyles: {
        "&.Mui-focused fieldset": {
            borderColor: "green",
        },
        color: "#e0e0e0",
        width: "94%",
        marginTop: "0.1vh",
        backgroundColor: "#2e2e2e",
        marginBottom: "2vh",
    },
}));

const PersonalDetailsComponent = ({ setSaved }) => {
    const classes = useStyles();
    const [detailsForm, setDetailsForm] = useState(initialFormState);
    const [saveClicked, setSaveClicked] = React.useState(false);

    const handleSave = () => {
        setSaveClicked(true);
        if (detailsForm.name.length && detailsForm.contactNo.length) {
            setSaved(true);
        }
        axios.post(`https://manipal-rentals-backend.herokuapp.com/qrCodeInfo`, detailsForm)
            .then(res => {
                localStorage.setItem("excelRow", res.data?.excelRow);
            })
    };

    return (
        <>
            <div>
                <Typography variant="h5" className={classes.heading}>
                    PERSONAL DETAILS
                </Typography>
                <div className={classes.details}>
                    <div className={classes.row}>
                        <Typography variant="h6" className={classes.label}>
                            Name
                        </Typography>
                        <CssTextField
                            variant="outlined"
                            value={detailsForm.name}
                            error={saveClicked && !detailsForm.name.length}
                            helperText={
                                saveClicked && !detailsForm.name.length
                                    ? "This field is required."
                                    : ""
                            }
                            InputProps={{
                                className: classes.input,
                            }}
                            onChange={(e) => {
                                setDetailsForm({ ...detailsForm, name: e.target.value });
                            }}
                            className={classes.textFieldStyles}
                        />
                    </div>
                    <div className={classes.row}>
                        <Typography variant="h6" className={classes.label}>
                            Contact No
                        </Typography>
                        <CssTextField
                            variant="outlined"
                            value={detailsForm.contactNo}
                            type="number"
                            error={saveClicked && !detailsForm.contactNo.length}
                            helperText={
                                saveClicked && !detailsForm.contactNo.length
                                    ? "This field is required."
                                    : ""
                            }
                            InputProps={{
                                className: classes.input,
                            }}
                            onChange={(e) => {
                                setDetailsForm({
                                    ...detailsForm,
                                    contactNo: e.target.value,
                                });
                            }}
                            className={classes.textFieldStyles}
                        />
                    </div>
                </div>
                <div className={classes.message}>
                    This is an initiative by Wolpa to know the current trends in the
                    Manipal rental market along with the goal to understand the
                    ineffeciencies and tackle them. <br />
                    <br />
                    Individually, we are on a mission to help all the departing
                    tenants in Manipal receive their security deposit on time, your
                    few minutes in filling this form will help us negotiate with your
                    owner for the same. Contact at
                    <strong> +919591798639</strong> To know more
                </div>
                <Button
                    variant="contained"
                    style={{
                        borderRadius: 25,
                        backgroundColor: "#f36802",
                        color: "#e0e0e0",
                        fontWeight: "bold",
                        fontFamily: "poppins",
                        marginTop: "20px",
                        marginLeft: "3%",
                    }}
                    onClick={handleSave}
                >
                    Save Details
                </Button>
            </div>
        </>
    )
}

export default PersonalDetailsComponent
