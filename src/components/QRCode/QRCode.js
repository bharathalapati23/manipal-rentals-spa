import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import code from "./qr-code-image.png";

const useStyles = makeStyles((theme) => ({
  code: {
    marginTop: "20vh",
    marginBottom: "20vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  codeImage: {
    width: "80%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
}));

const QRCode = ({ images, navigateToProperty }) => {
  const classes = useStyles();

  return (
    <div className={classes.code}>
      <img src={code} alt="QRcode" className={classes.codeImage} />
    </div>
  );
};

export default QRCode;
