import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import './ImageGallery.css'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme) => ({
}));

const ImageGalleryComponent = ({ images }) => {
    const classes = useStyles();
    const [nloaded, isNLoaded] = useState(0)
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    let imagesArr=  images.map((image)=> {
        return {
            original: image,
            thumbnail: image
        }
    })

    console.log(imagesArr)

    return (
        <div style={{ visibility: `${nloaded == imagesArr.length ? 'visible': 'hidden'}` }}>
            <ImageGallery items={imagesArr} thumbnailPosition={isMobile ? 'bottom' : 'right'}
                onImageLoad={() => {
                    isNLoaded(nloaded + 1)
                }} />
        </div>
    )
}

export default ImageGalleryComponent