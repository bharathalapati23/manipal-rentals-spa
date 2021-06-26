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
import CardImageGallery from './CardImageGallery'
import ImageGalleryComponent from '../PropertyInfoComponent/ImageGalleryComponent'
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: 14,
	},
	card: {
		width: '100%',
		marginBottom: '10px',
		backgroundColor: '#2e2e2e',

	},
	mobileCard: {
		marginBottom: 5,
		backgroundColor: '#2e2e2e',
		'& .MuiCardContent-root': {
			padding: '10px'
		}
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

	const navigateToProperty = (e) => {
		e.preventDefault()
		e.stopPropagation()
		if (e.target.classList[0] != 'control-arrow')
			history.push({
				pathname: '/property',
				search: `?search-id=${cardObj._id}`,
				state: { listing: cardObj }
			})
	}
	return (
		<Grid item >
			<Card className={isMobile ? classes.mobileCard : classes.card} variant="outlined" style={{ borderRadius: '15px', marginBottom: '8px', paddingBottom: '0px' }} onClick={(e) => navigateToProperty(e)}>
				<CardContent>
					<div className={isMobile ? classes.mobileCardContainer : classes.cardContainer}>
						{isMobile &&
							<div style={{
								color: '#e5e5e5',
								fontFamily: 'Poppins',
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								paddingBottom: '5px',

							}}>
								<div>
									<SingleBedIcon style={{ verticalAlign: 'middle', color: '#e5e5e5' }} />{cardObj.bedroom}BHK
								</div>
								{cardObj.zone}
							</div>}
						{/* <Carousel showThumbs={false} showIndicators={false} className={classes.carousel} >
							{cardObj.images.map((image, index) => (
								<div key={`cardimage${index}`}>
									<img src={image} className={classes.img} />
								</div>
							))}
						</Carousel> */}
						<CardImageGallery images={cardObj.images} navigateToProperty={navigateToProperty} />
						{isMobile &&
							<div style={{
								color: '#e5e5e5',
								fontFamily: 'Poppins',
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								paddingTop: '5px',
							}}>
								<div color="textSecondary" style={{
									display: 'flex',
									flexDirection: 'row',
								}}>
									<div style={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '20px', paddingRight: '3px', color: '#f36802' }}>
										<span style={{ fontFamily: 'Bebas Neue', fontSize: '22px', marginRight: '2px', fontWeight: 'normal' }}>₹</span>
										{cardObj.rent}
									</div>
									<div style={{ fontFamily: 'Poppins', fontSize: '12px', marginTop: '8px', color: '#e5e5e5', alignSelf: 'flex-start' }}>per month</div>
								</div>
							</div>}
						{!isMobile &&
							<div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
								<div>
									<div variant="h5" component="h2" style={{ fontFamily: 'Poppins', fontWeight: 'bolder', fontSize: '24px', color: '#e5e5e5' }}>
										{cardObj.title}
									</div>
									<div className={classes.title} color="textSecondary" style={{ fontFamily: 'Poppins', color: '#e5e5e5' }}>
										{cardObj.zone}
									</div>
								</div>
								<div>
									<div className={classes.title} color="textSecondary" style={{ fontFamily: 'Poppins', verticalAlign: 'middle', color: '#e5e5e5', fontSize: '18px' }}>
										<SingleBedIcon style={{ verticalAlign: 'middle', color: '#e5e5e5', fontSize: '24px' }} />
										{cardObj.bedroom}BHK
									</div>
									<div color="textSecondary" style={{ fontFamily: 'Poppins', verticalAlign: 'middle', color: '#f36802', marginTop: '3px', fontSize: '24px', fontWeight: 'bold' }}>
										<span style={{ fontFamily: 'Bebas Neue', fontSize: '26px', marginRight: '2px', fontWeight: 'lighter' }}>₹</span>
										{cardObj.rent}
										<span style={{ fontSize: '14px', color: '#d0d0d0', fontWeight: 'lighter'}}> per month</span>
        							</div>
								</div>

							</div>
						}
					</div>
				</CardContent>
			</Card>
		</Grid >
	);
}