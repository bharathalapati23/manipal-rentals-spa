import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme) => ({
	whyRentHeading: {
		marginTop: '30px',
		fontFamily: 'Poppins',
		fontSize: '40px',
		color: '#e0e0e0',
		[theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        },
		textAlign: 'center'
	},
	cardContent: {
		fontFamily: 'poppins',
		color: '#d5d5d5',
		fontSize: '20px',
		boxSizing: 'border-box',
		padding: '20px',
        paddingBottom:'10px',
        borderRadius:15
	},
}));

const PropertiesDescription = () => {
    const classes = useStyles()
	const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    return (
        <>
            <div className={classes.whyRentHeading}>
                Properties by Wolpa
					</div>
            <div className={classes.cardContent} style={{ marginBottom: '10px', backgroundColor: '#212121', }}>
                Identify your best fit. Our properties are carefully chosen to meet the requirements of the university or college students
					<ul style={{ columns: isMobile ? 1 : 2 }}>
                    <li>Closest Zone to your college</li>
                    <li>Amenities in your home and specific rooms</li>
                    <li>Budget</li>
                    <li>Verified Photographs</li>
                </ul>
            </div>
        </>
    )
}

export default PropertiesDescription
