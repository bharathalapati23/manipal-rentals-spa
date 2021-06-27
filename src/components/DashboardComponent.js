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
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'
import { setZoneFilter, clearFilters, setLocationFilter } from '../actions/filters.js'

import NoResultsComponent from './NoResultsComponent'
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		marginTop: '80px',
		[theme.breakpoints.down('sm')]: {
			marginTop: '50px',
		},
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
		flexGrow: '5',
		marginTop: '20px'
	},
	formControl: {
		"& .Mui-focused .MuiOutlinedInput-notchedOutline": {
			border: "1px solid black",
		},
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
	},
	paginationStyles: {
		color: '#e5e5e5',
		'& .MuiPaginationItem-root': {
			backgroundColor: 'transparent',
			color: '#e5e5e5',
		},
	}
}));

export default function DashboardComponent() {
	const classes = useStyles();
	const location = useLocation();
	const history = useHistory();
	const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
	const [isFilterPage, setFilterPage] = useState(false)
	const posts = useSelector((state) => state.posts)
	const realposts = [...posts, ...posts, ...posts]
	const [page, setPage] = React.useState(1);

	const filter = useSelector((state) => state.filters)
	const dispatch = useDispatch();


	const parsedQuery = queryString.parse(location.search);

	useEffect(() => {
		if (!Object.keys(parsedQuery).length) {
			dispatch(clearFilters())
		}
		else {
			dispatch(setLocationFilter(parsedQuery))
		}
		if (!isFilterPage)
			window.scrollTo(0, 0)
	}, [location])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [page])


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
			}
		})

		if (bedroomDetailsFilterPresent && bedroomDetailsFlag === false)
			return false

		return true
	})

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	};

	//Pagination
	const pagePosts = filteredPosts.slice((page - 1) * 10, page * 10)

	const totalPages = Math.ceil(filteredPosts.length / 10)

	const getListings = (sortOrder) => {
		if (Number(sortOrder) == 0)
			dispatch(getPosts({ rent: 0 }));
		else if (Number(sortOrder) === 1)
			dispatch(getPosts({ rent: -1 }));
		else
			dispatch(getPosts({ rent: 1 }));
	}

	useEffect(() => {
		setPage(1)
	}, [filter])


	useEffect(() => {
		getListings(0)
	}, [dispatch]);

	const noOfResults = {
		start: (page - 1) * 10 + 1,
		end: 0,
		total: filteredPosts.length
	}

	if (page * 10 - filteredPosts.length < 10 && page * 10 > filteredPosts.length)
		noOfResults.end = filteredPosts.length
	else
		noOfResults.end = page * 10



	return (
		<>
			<div className={`${classes.root}`}>
				{
					!isMobile &&
					<div className={classes.filterContainer}>
						<FilterCardComponent />
					</div>
				}
				{isFilterPage && isMobile && <MobileFilterComponent setFilterPage={setFilterPage}/>}

				{!isFilterPage &&
					<>
						<div className={classes.cardContainer}>
							<Grid container direction={'column'}>
								<div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px' }}>
									<div style={{ fontFamily: 'Poppins', color: '#E5E5E5', display: 'flex', flexDirection: 'column' }}>
										<div style={{ fontSize: '20px' }}>
											Properties
										</div>
										<div style={{ fontSize: '14px' }}>
											{noOfResults.start} - {noOfResults.end} of {noOfResults.total} results
										</div>
									</div>
									<div style={{ alignSelf: 'center' }}>
										<FormControl variant="outlined" size="small" classes={{
											root: classes.formControl
										}}>
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
												<option style={{ backgroundColor: '#212121'}} value={0}>Recently Added</option>
												<option style={{ backgroundColor: '#212121'}} value={1}>Price: High to Low</option>
												<option style={{ backgroundColor: '#212121'}} value={2}>Price: Low to High</option>
											</Select>
										</FormControl>
									</div>
								</div>
								{!filteredPosts.length && <NoResultsComponent />}
								{filteredPosts.length &&
									<>
										{pagePosts.map((cardObj, index) => (
											<CardComponent cardObj={cardObj} key={`Card${index}`} />
										))}
										<Pagination
											count={totalPages}
											color="primary"
											variant="outlined"
											shape="rounded"
											style={{ alignSelf: 'center' }}
											className={classes.paginationStyles}
											onChange={handleChangePage}
											page={page}
										/>
									</>
								}
							</Grid>
						</div>
					</>
				}
			</div>
			{isMobile && <BottomNavigationComponent setFilterPage={setFilterPage} isFilterPage={isFilterPage}/>}
		</>
	);
}