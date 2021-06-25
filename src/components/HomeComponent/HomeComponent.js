import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar/NavBar'
import HowItWorks from './HowItWorks'
import AboutUs from './AboutUs'
import SearchComponent from './SearchComponent'
import PropertiesDescription from './PropertiesDescription'
import { useHistory, useLocation } from 'react-router-dom'
import bgImg from '../../assets/home-background.jpg'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100vh',
		[theme.breakpoints.down('sm')]: {
			height: '80vh',
		},

		boxSizing: 'border-box',
		//backgroundImage: `url(${bgImg})`,
		backgroundImage: `url(https://res.cloudinary.com/dojfndzbj/image/upload/f_auto,q_auto/v1624614300/home-background_nr4uah.jpg)`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center'
	},
	backgroundImage: {
		objectFit: 'cover',
		width: '100%',
		height: '100%'
	},
	whyRentHeading: {
		marginTop: '10px',
		fontFamily: 'Poppins',
		fontSize: '35px',
		color: '#e0e0e0',
		[theme.breakpoints.down('sm')]: {
            fontSize: '27px',
        },
		textAlign: 'center'
	},
	whyRentDesc: {
		marginTop: '10px',
		fontFamily: 'Poppins',
		fontSize: '25px',
		color: '#E0e0e0',
		[theme.breakpoints.down('sm')]: {
			fontSize: '20px',
		},
		textAlign: 'center'
	},
	contentArea: {
		width: '100%',
		maxWidth: '1300px',
		justifyContent: 'center',
		margin: 'auto',
		boxSizing: 'border-box',
		paddingLeft: '10px',
		paddingRight: '10px'
	},
	cardContent: {
		fontFamily: 'poppins',
		color: '#d5d5d5',
		fontSize: '20px',
		boxSizing: 'border-box',
		padding: '10px'
	},
	registerButton: {
		borderRadius: 10,
		marginBottom: '4px',
		backgroundColor: '#f36802',
		color: '#d5d5d5',
		fontSize: '20px',
		fontFamily: 'Poppins',
		marginBottom: '10px',
		border: 'solid',
		borderWidth: 'thin',
		borderColor: '#f36802',
		marginTop: '6px',
		"&:hover": {
			background: 'transparent',
		}
	},
	seeMoreButton: {
		borderRadius: 10,
		marginBottom: '4px',
		backgroundColor: 'transparent',
		color: '#d5d5d5',
		fontSize: '20px',
		fontFamily: 'Poppins',
		borderColor: '#e5e5e5',
		border: 'solid',
		borderWidth: 'thin',
		borderColor: '#f36802',
		
		"&:hover": {
			background: '#f36802',
		},
		textTransform: 'none',
		[theme.breakpoints.down('xs')]: {
			fontSize: '16px',
		},
	}
}));

const HomeComponent = () => {
	const classes = useStyles();
	const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

	const location = useLocation()
	const history = useHistory()

	const navigateToProperties = () => {
		history.push({
			pathname: '/properties',
		})
	}

	const navigateToHowItWorks = () => {
		history.push({
			pathname: '/how-it-works'
		})
	}

	const navigateToContactUs = () => {
		history.push({
			pathname: '/contact-us'
		})
	}

	const navigateToAboutUs = () => {
		history.push({
			pathname: '/about-us'
		})
	}

	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return (
		<>
		
			<div className={classes.root}>
				<NavBar homePage={true} />

				<SearchComponent isMobile={isMobile}></SearchComponent>

			</div>
			{!isMobile &&
				<div className={classes.contentArea}>
					<div className={classes.whyRentHeading}>
						Why rent with Wolpa?
					</div>
					<div className={classes.whyRentDesc} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: 15 }}>
						<div style={{ width: '50%', backgroundColor: '#212121', marginRight: '10px', borderRadius: 15, color: '#d5d5d5' }}>
							No Brokerage!
							<div>
								For the first time in Manipal!
							</div>
						</div>
						<div style={{ width: '50%', marginLeft: '10px', marginRight: '10px' }}>
							<div style={{ marginBottom: '10px', backgroundColor: '#212121', borderRadius: 15, color: '#d5d5d5' }}>
								Full Assistance in Renting
							</div>
							<div style={{ backgroundColor: '#212121', borderRadius: 15, color: '#d5d5d5' }}>
								Book from the comfort of home
							</div>
						</div>
					</div>

					<PropertiesDescription />
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Button variant="contained"
							className={classes.seeMoreButton}
							onClick={navigateToProperties}
							style={{ marginRight: '10px' }}
						>
							View Properties
            			</Button>
						<Button variant="contained"
							className={classes.seeMoreButton}
							onClick={navigateToContactUs}
						>
							Contact Us
            			</Button>
					</div>
					<HowItWorks navigateToHowItWorks={navigateToHowItWorks} />
					<AboutUs navigateToAboutUs={navigateToAboutUs}/>
				</div>
			}
			{isMobile &&
				<div className={classes.contentArea}>
					<div className={classes.whyRentHeading}>
						Why rent with Wolpa?
					</div>
					<div className={classes.whyRentDesc} style={{ width: '100%', backgroundColor: '#212121', borderRadius: 15 }}>
						No Brokerage!
							<div>
							For the first time in Manipal!
							</div>
					</div>
					<PropertiesDescription />
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Button variant="contained"
							className={classes.seeMoreButton}
							onClick={navigateToProperties}
							style={{ marginRight: '10px' }}
						>
							View Properties
            			</Button>
						<Button variant="contained"
							className={classes.seeMoreButton}
							onClick={navigateToContactUs}
						>
							Contact Us
            			</Button>
					</div>
					<HowItWorks navigateToHowItWorks={navigateToHowItWorks} />
					<AboutUs navigateToAboutUs={navigateToAboutUs}/>
				</div>

			}
		</>
	)
}

export default HomeComponent
