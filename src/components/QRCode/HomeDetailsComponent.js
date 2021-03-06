import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { FormControl, Select, MenuItem } from "@material-ui/core";

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

const HomeDetailsComponent = ({ handleSuccessOpen }) => {
    const classes = useStyles();
    const [detailsForm, setDetailsForm] = useState(initialFormState);
    const [submitClicked, setSubmitClicked] = React.useState(false);

    const handleSubmit = () => {
        setSubmitClicked(true);
        console.log(detailsForm);

        if (
            detailsForm.propertyName.length &&
            detailsForm.houseNo.length &&
            detailsForm.totalFloors.length &&
            detailsForm.configuration.length &&
            detailsForm.furnishing.length &&
            detailsForm.rental.length &&
            detailsForm.deposit.length &&
            detailsForm.movingOut.length
        ) {
            handleSuccessOpen();
            setDetailsForm(initialFormState);
            setSubmitClicked(false);
            detailsForm.excelRow = localStorage.getItem("excelRow")
            axios
                .post(
                    `https://manipal-rentals-backend.herokuapp.com/qrCodeInfo`,
                    detailsForm
                )
                .then((res) => {
                    console.log(res.data);
                });
        }
    };


    return (
        <>
            <div>
                <Typography variant="h5" className={classes.heading}>
                    PROPERTY DETAILS{" "}
                </Typography>
                <div className={classes.details}>
                    <div className={classes.row}>
                        <Typography variant="h6" className={classes.label}>
                            Property Name
                        </Typography>
                        <CssTextField
                            variant="outlined"
                            value={detailsForm.propertyName}
                            error={submitClicked && !detailsForm.propertyName.length}
                            helperText={
                                submitClicked && !detailsForm.propertyName.length
                                    ? "This field is required."
                                    : ""
                            }
                            InputProps={{
                                className: classes.input,
                            }}
                            onChange={(e) =>
                                setDetailsForm({
                                    ...detailsForm,
                                    propertyName: e.target.value,
                                })
                            }
                            className={classes.textFieldStyles}
                        />
                    </div>
                    <div className={classes.row}>
                        <Typography variant="h6" className={classes.label}>
                            House No
                        </Typography>
                        <CssTextField
                            variant="outlined"
                            value={detailsForm.houseNo}
                            error={submitClicked && !detailsForm.houseNo.length}
                            helperText={
                                submitClicked && !detailsForm.houseNo.length
                                    ? "This field is required."
                                    : ""
                            }
                            InputProps={{
                                className: classes.input,
                            }}
                            onChange={(e) =>
                                setDetailsForm({ ...detailsForm, houseNo: e.target.value })
                            }
                            className={classes.textFieldStyles}
                        />
                    </div>
                </div>
                <div className={classes.details}>
                    <div className={classes.row}>
                        <Typography variant="h6" className={classes.label}>
                            Total Floors
                        </Typography>
                        <CssTextField
                            variant="outlined"
                            value={detailsForm.totalFloors}
                            type="number"
                            error={submitClicked && !detailsForm.totalFloors.length}
                            helperText={
                                submitClicked && !detailsForm.totalFloors.length
                                    ? "This field is required."
                                    : ""
                            }
                            InputProps={{
                                className: classes.input,
                            }}
                            onChange={(e) =>
                                setDetailsForm({
                                    ...detailsForm,
                                    totalFloors: e.target.value,
                                })
                            }
                            className={classes.textFieldStyles}
                        />
                    </div>
                    <div className={classes.row}>
                        <Typography variant="h6" className={classes.label}>
                            Flat Configuration
                        </Typography>
                        <FormControl
                            sx={{ m: 1, minWidth: 120 }}
                            className={classes.textFieldStyles}
                        >
                            <Select
                                variant="outlined"
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={detailsForm.configuration}
                                error={submitClicked && !detailsForm.configuration.length}
                                helperText={
                                    submitClicked && !detailsForm.configuration.length
                                        ? "This field is required."
                                        : ""
                                }
                                InputProps={{
                                    className: classes.input,
                                }}
                                style={{ color: "#e0e0e0", fontFamily: "Poppins" }}
                                onChange={(e) =>
                                    setDetailsForm({
                                        ...detailsForm,
                                        configuration: e.target.value,
                                    })
                                }
                            >
                                <MenuItem style={{ fontFamily: "Poppins" }} value={"1BHK"}>
                                    1 BHK
                                </MenuItem>
                                <MenuItem style={{ fontFamily: "Poppins" }} value={"2BHK"}>
                                    2 BHK
                                </MenuItem>
                                <MenuItem style={{ fontFamily: "Poppins" }} value={"3BHK"}>
                                    3 BHK
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <Typography variant="h5" className={classes.heading}>
                    RENTAL DETAILS
                </Typography>
                <div className={classes.details}>
                    <div className={classes.row}>
                        <Typography variant="h6" className={classes.label}>
                            Furnishing
                        </Typography>
                        <FormControl
                            sx={{ m: 1, minWidth: 120 }}
                            className={classes.textFieldStyles}
                        >
                            <Select
                                variant="outlined"
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={detailsForm.furnishing}
                                error={submitClicked && !detailsForm.furnishing.length}
                                helperText={
                                    submitClicked && !detailsForm.furnishing.length
                                        ? "This field is required."
                                        : ""
                                }
                                InputProps={{
                                    className: classes.input,
                                }}
                                style={{ color: "#e0e0e0", fontFamily: "Poppins" }}
                                onChange={(e) =>
                                    setDetailsForm({
                                        ...detailsForm,
                                        furnishing: e.target.value,
                                    })
                                }
                            >
                                <MenuItem
                                    style={{ fontFamily: "Poppins" }}
                                    value={"Unfurnished"}
                                >
                                    Unfurnished
                                </MenuItem>
                                <MenuItem
                                    style={{ fontFamily: "Poppins" }}
                                    value={"Semi-furnished"}
                                >
                                    Semi-furnished
                                </MenuItem>
                                <MenuItem
                                    style={{ fontFamily: "Poppins" }}
                                    value={"Fully-furnished"}
                                >
                                    Fully-furnished
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className={classes.row}>
                        <Typography variant="h6" className={classes.label}>
                            Rental
                        </Typography>
                        <CssTextField
                            variant="outlined"
                            value={detailsForm.rental}
                            type="number"
                            error={submitClicked && !detailsForm.rental.length}
                            helperText={
                                submitClicked && !detailsForm.rental.length
                                    ? "This field is required."
                                    : ""
                            }
                            InputProps={{
                                className: classes.input,
                            }}
                            onChange={(e) =>
                                setDetailsForm({ ...detailsForm, rental: e.target.value })
                            }
                            className={classes.textFieldStyles}
                        />
                    </div>
                </div>
                <div className={classes.details}>
                    <div className={classes.row}>
                        <Typography variant="h6" className={classes.label}>
                            Deposit
                        </Typography>
                        <CssTextField
                            variant="outlined"
                            value={detailsForm.deposit}
                            type="number"
                            error={submitClicked && !detailsForm.deposit.length}
                            helperText={
                                submitClicked && !detailsForm.deposit.length
                                    ? "This field is required."
                                    : ""
                            }
                            InputProps={{
                                className: classes.input,
                            }}
                            onChange={(e) =>
                                setDetailsForm({
                                    ...detailsForm,
                                    deposit: e.target.value,
                                })
                            }
                            className={classes.textFieldStyles}
                        />
                    </div>
                    <div className={classes.row}>
                        <Typography variant="h6" className={classes.label}>
                            Moving Out{" "}
                        </Typography>
                        <CssTextField
                            variant="outlined"
                            value={detailsForm.movingOut}
                            error={submitClicked && !detailsForm.movingOut.length}
                            helperText={
                                submitClicked && !detailsForm.movingOut.length
                                    ? "This field is required."
                                    : ""
                            }
                            InputProps={{
                                className: classes.input,
                            }}
                            onChange={(e) =>
                                setDetailsForm({
                                    ...detailsForm,
                                    movingOut: e.target.value,
                                })
                            }
                            className={classes.textFieldStyles}
                        />
                    </div>
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
                    onClick={handleSubmit}
                >
                    Submit Details
                </Button>
            </div>
        </>
    )
}

export default HomeDetailsComponent
