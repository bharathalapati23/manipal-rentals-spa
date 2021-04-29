import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from 'react-responsive';
import Grid from '@material-ui/core/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'
import SingleBedIcon from '@material-ui/icons/SingleBed';
import GroupIcon from '@material-ui/icons/Group';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	card: {
		//	marginLeft: 275,
		//marginBottom: 5,
		width: '100%',
		marginBottom: '10px'
	},
	mobileCard: {
		marginBottom: 5,
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	mobileCardContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
	img: {
		[theme.breakpoints.up('md')]: {
			width: '250px',
			height: '180px',
			objectFit: 'cover'
		},


	},

	carousel: {
		[theme.breakpoints.up('md')]: {
			width: '230px'
		},


	}
}));

export default function CardComponent({ cardObj }) {
	const classes = useStyles();
	const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
	let history = useHistory();

	const navigateToProperty = () => {
		history.push({
			pathname: '/property',
			search: '?query=abc',
			state: { listing: cardObj }
		})
	}
	return (
		<Grid item >
			<Card className={isMobile ? classes.mobileCard : classes.card} variant="outlined" style={{ borderRadius: '10' }} onClick={navigateToProperty}>
				<CardContent>
					<div className={isMobile ? classes.mobileCardContainer : classes.cardContainer}>
						{isMobile && <Typography variant="h5" component="h2">
							{cardObj.desc}
						</Typography>}
						<Carousel showThumbs={false} showIndicators={false} className={classes.carousel}>
							{cardObj.images.map((image, index) => (
								<div>
									<img src={image} className={classes.img} />
								</div>
							))}
						</Carousel>

						{!isMobile &&
							<div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
								<div>
									<Typography variant="h5" component="h2" style={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>
										{cardObj.desc}
									</Typography>
									<Typography className={classes.title} color="textSecondary" gutterBottom style={{ fontFamily: 'Poppins', fontWeight: 'bolder' }}>
										{cardObj.zone}
									</Typography>
								</div>
								<div>
									<Typography className={classes.title} color="textSecondary" gutterBottom style={{ fontFamily: 'Poppins', fontWeight: 'bolder', verticalAlign: 'middle' }}>
										<SingleBedIcon style={{ paddingTop: '5px', verticalAlign: 'middle' }} />
										{cardObj.bedroom}BHK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<GroupIcon style={{ paddingTop: '5px', verticalAlign: 'middle' }} /> 3 capacity
										</Typography>
									<Typography className={classes.pos} color="textSecondary" style={{ fontFamily: 'Poppins', fontWeight: 'bolder', verticalAlign: 'middle' }}>
										{cardObj.rent}/month
        								</Typography>
								</div>

							</div>
						}
					</div>
				</CardContent>
			</Card>
		</Grid >
	);
}