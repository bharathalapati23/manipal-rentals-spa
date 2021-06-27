import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux'

const LoadingComponent = () => {
    return (
        <div style={{ fontSize: '20px', fontFamily: 'Poppins', color: '#E5E5E5', textAlign: 'center', paddingTop: '40vh', marginBottom: '20vh' }}>
            <CircularProgress />
        </div>
    )
}

export default LoadingComponent
