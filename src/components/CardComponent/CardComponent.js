import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "react-responsive";
import Grid from "@material-ui/core/Grid";
import "./Carousel.css";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import GroupIcon from "@material-ui/icons/Group";
import { useHistory } from "react-router-dom";
import CardImageGallery from "./CardImageGallery";
import { Divider } from "@material-ui/core";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkIcon from "@mui/icons-material/Link";
import { IconButton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  card: {
    width: "100%",
    marginBottom: "10px",
    backgroundColor: "#2e2e2e",
  },
  mobileCard: {
    marginBottom: 5,
    backgroundColor: "#2e2e2e",
    "& .MuiCardContent-root": {
      padding: "10px",
    },
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
  },
  mobileCardContainer: {
    display: "flex",
    flexDirection: "column",
  },
  img: {
    [theme.breakpoints.up("md")]: {
      width: "250px",
      height: "180px",
      objectFit: "cover",
    },
  },

  carousel: {
    [theme.breakpoints.up("md")]: {
      width: "230px",
    },
  },
  shareDiv: {
    color: "#d0d0d0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  icons: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
}));

export default function CardComponent({ cardObj }) {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
  const [shareClicked, setShareClicked] = React.useState(false);
  const src = `https://www.wolpa.in/property?search-id=${cardObj._id}`;
  let history = useHistory();

  const navigateToProperty = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList[0] !== "control-arrow")
      history.push({
        pathname: "/property",
        search: `?search-id=${cardObj._id}`,
        state: { listing: cardObj },
      });
  };

  return (
    <Grid item>
      <Card
        className={isMobile ? classes.mobileCard : classes.card}
        variant="outlined"
        style={{
          borderRadius: "15px",
          marginBottom: "8px",
          paddingBottom: "0px",
          width: "100%",
        }}
      >
        <CardContent>
          <div
            className={
              isMobile ? classes.mobileCardContainer : classes.cardContainer
            }
          >
            {isMobile && (
              <div
                style={{
                  color: "#e5e5e5",
                  fontFamily: "Poppins",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "5px",
                }}
              >
                <div>
                  <SingleBedIcon
                    style={{ verticalAlign: "middle", color: "#e5e5e5" }}
                  />
                  {cardObj.bedroom}BHK
                </div>
                {cardObj.zone}
              </div>
            )}
            {/* <Carousel showThumbs={false} showIndicators={false} className={classes.carousel} >
							{cardObj.images.map((image, index) => (
								<div key={`cardimage${index}`}>
									<img src={image} className={classes.img} />
								</div>
							))}
						</Carousel> */}
            <CardImageGallery
              images={cardObj.images}
              navigateToProperty={navigateToProperty}
            />

            {isMobile && (
              <div
                style={{
                  color: "#e5e5e5",
                  fontFamily: "Poppins",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "5px",
                }}
                onClick={(e) => navigateToProperty(e)}
              >
                <div
                  color="textSecondary"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      fontSize: "20px",
                      paddingRight: "3px",
                      color: "#f36802",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Bebas Neue",
                        fontSize: "22px",
                        marginRight: "2px",
                        fontWeight: "normal",
                      }}
                    >
                      ₹
                    </span>
                    {cardObj.rent}
                  </div>
                  <div
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      marginTop: "8px",
                      color: "#e5e5e5",
                      alignSelf: "flex-start",
                    }}
                  >
                    per month
                  </div>
                </div>
              </div>
            )}
            {!isMobile && (
              <div
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                onClick={(e) => navigateToProperty(e)}
              >
                <div>
                  <div
                    variant="h5"
                    component="h2"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bolder",
                      fontSize: "24px",
                      color: "#e5e5e5",
                    }}
                  >
                    {cardObj.title}
                  </div>
                  <div
                    className={classes.title}
                    color="textSecondary"
                    style={{ fontFamily: "Poppins", color: "#e5e5e5" }}
                  >
                    {cardObj.zone}
                  </div>
                </div>
                <div>
                  <div
                    className={classes.title}
                    color="textSecondary"
                    style={{
                      fontFamily: "Poppins",
                      verticalAlign: "middle",
                      color: "#e5e5e5",
                      fontSize: "18px",
                    }}
                  >
                    <SingleBedIcon
                      style={{
                        verticalAlign: "middle",
                        color: "#e5e5e5",
                        fontSize: "24px",
                      }}
                    />
                    {cardObj.bedroom}BHK
                  </div>
                  <div
                    color="textSecondary"
                    style={{
                      fontFamily: "Poppins",
                      verticalAlign: "middle",
                      color: "#f36802",
                      marginTop: "3px",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Bebas Neue",
                        fontSize: "26px",
                        marginRight: "2px",
                        fontWeight: "lighter",
                      }}
                    >
                      ₹
                    </span>
                    {cardObj.rent}
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#d0d0d0",
                        fontWeight: "lighter",
                      }}
                    >
                      {" "}
                      per month
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className={classes.shareDiv}>
              <ShareIcon
                sx={
                  isMobile
                    ? {
                        fontSize: "25px",
                        margin: "6px 10px",
                        cursor: "pointer",
                      }
                    : {
                        fontSize: "32px",
                        margin: "10px 10px",
                        cursor: "pointer",
                      }
                }
                onClick={() => setShareClicked(!shareClicked)}
              />

              {shareClicked && (
                <div className={classes.icons}>
                  <a
                    href={`whatsapp://send?text=${src}`}
                    data-action="share/whatsapp/share"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon
                      sx={
                        isMobile
                          ? {
                              fontSize: "25px",
                              margin: "4px 10px",
                              cursor: "pointer",
                              color: "#d0d0d0",
                            }
                          : {
                              fontSize: "32px",
                              margin: "10px 10px",
                              cursor: "pointer",
                              color: "#d0d0d0",
                            }
                      }
                    />
                  </a>
                  <LinkIcon
                    sx={
                      isMobile
                        ? {
                            fontSize: "25px",
                            margin: "4px 6px",
                            cursor: "pointer",
                          }
                        : {
                            fontSize: "32px",
                            margin: "10px 10px",
                            cursor: "pointer",
                          }
                    }
                    onClick={() => {
                      navigator.clipboard.writeText(src);
                      alert("URL Copied to Clipboard");
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
