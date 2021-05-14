import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import BottomNavigationComponent from './BottomNavigationComponent'
import FilterCardComponent from './FilterComponent/FilterCardComponent'
import MobileFilterComponent from './FilterComponent/MobileFilterComponent.js'
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import CardComponent from './CardComponent/CardComponent'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, clearPosts } from '../actions/posts.js'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { setZoneFilter } from '../actions/filters.js'

// import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		marginTop: '80px',
		width: '100%',
		maxWidth: '1300px',
		justifyContent: 'center',
		flexDirection: 'row',
		margin: 'auto',
		[theme.breakpoints.down('md')]: {
			width: '100%',
			// paddingBottom: '40px'
		},
		[theme.breakpoints.up('lg')]: {
			// minWidth: '950px',
		},
		paddingLeft: '8px',
		paddingRight: '8px',
		boxSizing: 'border-box',
		// flexWrap: 'wrap',
		// justifyContent: 'center',
		// alignItems: 'center'
	},
	filterContainer: {
		flexGrow: '1'
	},
	cardContainer: {
		// border: '1 1 solid', 
		// borderStyle: 'solid', 
		display: 'flex',
		flexGrow: '6',
		marginTop: '20px'
	},
	formControl: {
		margin: theme.spacing(3),
	},
	sortSelect: {
		width: '200px',
		fontFamily: 'Poppins',
		fontSize: '14px',
		color: '#e5e5e5',
		border: 'solid',
		borderColor: '#d0d0d0',
		borderWidth: 'thin',
		backgroundColor: '#121212',
		"& option": {
			backgroundColor: "#black",
		},
		"& li": {
			fontSize: 12,
		},
	},
	dropdownStyle: {
		backgroundColor: 'black'
	},
	selectIcon: {
		fill: '#e5e5e5'
	}
}));

export default function DashboardComponent() {
	const classes = useStyles();
	const location = useLocation();
	const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
	const [isFilterPage, setFilterPage] = useState(false)
	const posts = useSelector((state) => state.posts)
	const realposts = [...posts, ...posts, ...posts]
	const filter = useSelector((state) => state.filters)
	const dispatch = useDispatch();


	const parsedQuery = queryString.parse(location.search);
	useEffect(() => {
		if (Object.keys(parsedQuery).includes('zone')) {
			dispatch(setZoneFilter([parsedQuery.zone]))
		}
		window.scrollTo(0, 0)
	}, [])

	if (location.search) {
		if (Object.keys(parsedQuery).includes('zone')) {
			window.scrollTo(0, 0)
		}
	}


	const filteredPosts = realposts.filter((listing) => {
		if (filter.bedroom.length && !filter.bedroom.includes(listing.bedroom)) return false

		if (filter.zone.length && !filter.zone.includes(listing.zone)) return false

		if (filter.accomodationType.length && !filter.accomodationType.includes(listing.apOrBung)) return false

		if (filter.priceRange.length && (listing.rent > filter.priceRange[1] || listing.rent < filter.priceRange[0])) return false

		// Home Features
		let homeFeaturesFlag = false
		let homeFeaturesFilterPresent = false

		Object.keys(filter.homeFeatures).map((homeFeature) => {
			if (filter.homeFeatures[homeFeature] === true && listing.homeFeatures[homeFeature] === true)
				homeFeaturesFlag = true
			if (filter.homeFeatures[homeFeature] === true)
				homeFeaturesFilterPresent = true
		})

		if (homeFeaturesFilterPresent && homeFeaturesFlag === false)
			return false

		// Bedroom Details
		let bedroomDetailsFlag = false
		let bedroomDetailsFilterPresent = false

		Object.keys(filter.bedroomDetails).map((bedroomDetail) => {
			if (filter.bedroomDetails[bedroomDetail] === true) {
				bedroomDetailsFilterPresent = true
				for (let bedroomNo = 0; bedroomNo < listing.bedroomDetails.length; bedroomNo++) {
					if (listing.bedroomDetails[bedroomNo][bedroomDetail] === true) {
						bedroomDetailsFlag = true
						break
					}
				}
				// if(bedroomDetailsFlag)
				// 	break
			}
		})

		if (bedroomDetailsFilterPresent && bedroomDetailsFlag === false)
			return false

		return true
	})

	const getListings = (sortOrder) => {
		if (Number(sortOrder) == 0)
			dispatch(getPosts({ rent: 0 }));
		else if (Number(sortOrder) === 1)
			dispatch(getPosts({ rent: -1 }));
		else
			dispatch(getPosts({ rent: 1 }));
	}

	useEffect(() => {
		getListings(0)
	}, [dispatch]);

	return (
		<>
			<div className={`${classes.root}`}>
				{
					!isMobile &&
					<div className={classes.filterContainer}>
						<FilterCardComponent />
					</div>
				}
				{isFilterPage && isMobile && <MobileFilterComponent />}

				{!isFilterPage && <div className={classes.cardContainer}>
					<Grid container direction={'column'} spacing={24}>
						<div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px' }}>
							<div style={{ fontFamily: 'Poppins', color: '#E5E5E5', display: 'flex', flexDirection: 'column' }}>
								<div style={{ fontSize: '20px' }}>
									Properties
								</div>
								<div style={{ fontSize: '14px' }}>
									Showing 1-20 of 3437 places
								</div>
							</div>
							<div style={{ alignSelf: 'center' }}>
								<FormControl variant="outlined" size="small">
									<Select
										native
										defaultValue={0}
										onChange={(e) => {
											dispatch(clearPosts())
											getListings(e.target.value)
										}}
										className={classes.sortSelect}
										MenuProps={{ classes: { paper: classes.dropdownStyle } }}
										inputProps={{
											classes: {
												icon: classes.selectIcon,
											},
										}}
									>
										Sort By:
										<option value={0}>Recently Added</option>
										<option value={1}>Price:High to Low</option>
										<option value={2}>Price:Low to High</option>
									</Select>
								</FormControl>
							</div>
						</div>
						{filteredPosts.map((cardObj, index) => (
							<CardComponent cardObj={cardObj} />
						))}

					</Grid>
				</div>}
			</div>
			{isMobile && <BottomNavigationComponent setFilterPage={setFilterPage} />}
		</>
	);
}