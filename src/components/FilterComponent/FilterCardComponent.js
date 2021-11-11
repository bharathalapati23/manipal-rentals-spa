import React from 'react'
import { styled } from '@mui/material/styles';
import SliderComponent from './SliderComponent'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import HomeFeaturesFilter from './HomeFeaturesFilter.js'
import ZoneFilter from './ZoneFilter.js'
import ApartmentFilter from './ApartmentFilter.js'
import BedroomFilter from './BedroomFilter.js'
import BedroomDetailsFilter from './BedroomDetailsFilter.js'
import { useInView } from 'react-intersection-observer';

const FilterContainer = styled('div')(() => ({
    position: 'sticky',
    margin: '20px',
    fontFamily: 'Poppins',
    backgroundColor: '#2e2e2e',
    borderRadius: '10px',
    marginLeft: '0px'
}));

const ApplyFilterButton = styled(Button)(({ theme }) => ({
    width: '200px',
    margin: '0 auto',
    position: 'fixed',
    top: '80px',
    marginLeft: '40px',
    backgroundColor: '#2e2e2e',
    color: '#e5e5e5',
    fontFamily: 'Poppins'
}));

const FilterHeading = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#E5E5E5'
}));

const CustomDivider = styled(Divider)(({ theme }) => ({
    borderWidth: '0',
}));


const FilterCardComponent = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px',
        initialInView: true
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return <>
        <FilterContainer ref={ref}>
            <Box
                spacing={3}
                border={1}
                borderRadius="10px"
                borderColor="rgba(0,0,0,0.2)"
            >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative' }}>
                    <FilterHeading variant="h5" component="h2">
                        FILTERS
                    </FilterHeading>
                </div>
                <CustomDivider />
                <SliderComponent />
                <CustomDivider/>
                <BedroomFilter />
                <CustomDivider />
                <ApartmentFilter />
                <CustomDivider />
                <ZoneFilter />
                <CustomDivider />
                <HomeFeaturesFilter />
                <CustomDivider />
                <BedroomDetailsFilter />
                <div style={{ height: '5px' }}>
                </div>
            </Box>
        </FilterContainer>
        {!inView && <ApplyFilterButton variant="contained" onClick={scrollToTop}>APPLY MORE FILTERS</ApplyFilterButton>}
    </>;
}

export default FilterCardComponent
