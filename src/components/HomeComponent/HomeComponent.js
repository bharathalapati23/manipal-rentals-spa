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

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100vh',
		[theme.breakpoints.down('sm')]: {
			height: '80vh',
		},

		boxSizing: 'border-box',
		backgroundImage: 'url(https://www.manipalthetalk.org/wp-content/uploads/2017/08/image2.jpg)',
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
		fontFamily: 'Bebas Neue',
		fontSize: '45px',
		color: '#FFFFFF',
		[theme.breakpoints.down('sm')]: {
			fontSize: '40px',
		},
		textAlign: 'center'
		// letterSpacing: '0.5px'
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
		fontWeight: 'bold',
		fontSize: '20px',
		fontFamily: 'Poppins',
		marginBottom: '10px'
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
		marginRight: '10px'
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

	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return (
		<>
			<div className={classes.root}>
				<NavBar homePage={true} />
				<div style={{ top: '50%', left: '50%', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					{!isMobile && <SearchComponent></SearchComponent>}
				</div>
			</div>
			{!isMobile &&
				<div className={classes.contentArea}>
					<div className={classes.whyRentHeading}>
						WHY RENT WITH WOLPA?
					</div>
					<div className={classes.whyRentHeading} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: 15 }}>
						<div style={{ width: '50%', backgroundColor: '#212121', marginRight: '10px' }}>
							No Brokerage
							<div>
								For the first time in Manipal!
							</div>
						</div>
						<div style={{ width: '50%', marginLeft: '10px', marginRight: '10px' }}>
							<div style={{ marginBottom: '10px', backgroundColor: '#212121', }}>
								Full Assistance in Renting
							</div>
							<div style={{ backgroundColor: '#212121', }}>
								Book from the comfort of home
							</div>
						</div>
					</div>

					<PropertiesDescription />
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Button variant="contained"
							className={classes.seeMoreButton}
							onClick={navigateToProperties}
						>
							VIEW PROPERTIES
            			</Button>
						<Button variant="contained"
							className={classes.registerButton}
						>
							CONTACT US
            			</Button>
					</div>
					<HowItWorks navigateToHowItWorks={navigateToHowItWorks} />
					<AboutUs />
				</div>
			}
			{isMobile &&
				<div className={classes.contentArea}>
					<div className={classes.whyRentHeading}>
						WHY RENT WITH WOLPA?
					</div>
					<div className={classes.whyRentHeading} style={{ width: '100%', backgroundColor: '#212121', borderRadius: 15 }}>
						No Brokerage
							<div>
							For the first time in Manipal!
							</div>
					</div>
					<PropertiesDescription />
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Button variant="contained"
							className={classes.seeMoreButton}
							onClick={navigateToProperties}
						>
							VIEW PROPERTIES
            			</Button>
						<Button variant="contained"
							className={classes.registerButton}
						>
							CONTACT US
            			</Button>
					</div>
					<HowItWorks navigateToHowItWorks={navigateToHowItWorks} />
					<AboutUs />
				</div>

			}
		</>
	)
}

export default HomeComponent
