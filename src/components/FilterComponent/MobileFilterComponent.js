import React from 'react'
import SliderComponent from './SliderComponent'
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HomeFeaturesFilter from './HomeFeaturesFilter.js'
import ZoneFilter from './ZoneFilter.js'
import ApartmentFilter from './ApartmentFilter.js'
import BedroomFilter from './BedroomFilter'
import BedroomDetailsFilter from './BedroomDetailsFilter.js'
import { useDispatch } from 'react-redux'
import { hideFooter, showFooter } from '../../actions/footer'

const FilterContainer = styled('div')(({ theme }) => ({
    position: 'sticky',
    margin: '20px',
    fontFamily: 'Poppins',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        marginBottom: '50px',
    },
}));

const FilterHeading = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#E5E5E5'
}));

const MobileFilterComponent = ({ setFilterPage }) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(hideFooter())
        return () => {
            dispatch(showFooter())

        }
    }, [])

    return (
        <FilterContainer>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <FilterHeading variant="h4" component="h2">
                    FILTERS
        	    </FilterHeading>
                <CloseOutlinedIcon style={{ color: '#d0d0d0', fontSize: '35px' }} onClick={() => setFilterPage(false)} />

            </div>
            <SliderComponent />
            <Divider />
            <BedroomFilter />
            <ApartmentFilter />
            <ZoneFilter />
            <HomeFeaturesFilter />
            <BedroomDetailsFilter />
            <div style={{ height: '5px' }}>

            </div>
        </FilterContainer>
    )
}

export default MobileFilterComponent
