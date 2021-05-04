import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import BottomNavigationComponent from './BottomNavigationComponent'
import FilterCardComponent from './FilterComponent/FilterCardComponent'
import MobileFilterComponent from './FilterComponent/MobileFilterComponent.js'
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import CardComponent from './CardComponent/CardComponent'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, clearPosts } from '../actions/posts.js'



const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		marginTop: '80px',
		width: '80%',
		justifyContent: 'center',
		flexDirection: 'row',
		margin: 'auto',
		minHeight: '84vh',
		[theme.breakpoints.down('md')]: {
			width: '100%',
			paddingBottom:'40px'
		},
		[theme.breakpoints.up('lg')]: {
			minWidth: '950px',
		},
		paddingLeft:'8px',
		paddingRight:'8px',
		boxSizing:'border-box',
		paddingBottom:'40px'
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
		backgroundColor: 'lightgrey'
	}
}));

export default function DashboardComponent() {
	const classes = useStyles();
	const isMobile = useMediaQuery({ query: `(max-width: 960px)` });
	const [isFilterPage, setFilterPage] = useState(false)
	const posts = useSelector((state) => state.posts)
	const filter = useSelector((state) => state.filters)
	const dispatch = useDispatch();

	const filteredObj = posts.filter((ob) => {
		if (filter.bedroom.length && !filter.bedroom.includes(ob.bedroom)) return false

		if (filter.zone.length && !filter.zone.includes(ob.zone)) return false

		if (filter.priceRange.length && (ob.rent > filter.priceRange[1] || ob.rent < filter.priceRange[0])) return false

		let homeFeaturesFlag = true

		Object.keys(filter.homeFeatures).map((key) => {
			if (filter.homeFeatures[key] === true && ob.homeFeatures[key] === false)
				homeFeaturesFlag = false
		})

		return homeFeaturesFlag
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
			<div className={classes.root}>
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
							<div style={{ fontFamily: 'Poppins', color: '#E5E5E5' }}>
								Properties
						</div>
							<div>
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
									>
										Sort By:
										<option value={0}>Recently Added</option>
										<option value={1}>Price:High to Low</option>
										<option value={2}>Price:Low to High</option>
									</Select>
								</FormControl>
							</div>
						</div>
						{filteredObj.map((cardObj, index) => (
							<CardComponent cardObj={cardObj} />
						))}

					</Grid>
				</div>}
				{isMobile && <div style={{height: '1000px', clear:'both'}}></div>}
			</div>
			{isMobile && <BottomNavigationComponent setFilterPage={setFilterPage} />}
		</>
	);
}