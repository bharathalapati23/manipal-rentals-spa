import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingComponent = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div style={{ fontSize: '20px', fontFamily: 'Poppins', color: '#E5E5E5', textAlign: 'center', paddingTop: '40vh', marginBottom: '30vh' }}>
            <CircularProgress />
        </div>
    )
}

export default LoadingComponent
