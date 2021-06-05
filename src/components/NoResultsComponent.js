import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux'

const NoResultsComponent = () => {
    const loading = useSelector(state => state.loading)
    return (
        <div style={{ fontSize: '20px', fontFamily: 'Poppins', color: '#E5E5E5', textAlign: 'center' }}>
            { loading
                ?
                <CircularProgress />
                :
                <>
                    Sorry we couldn't find any results. Please try changing the filters
                </>
            }
        </div>
    )
}

export default NoResultsComponent
