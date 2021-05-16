import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import './ImageGallery.css'
import { useMediaQuery } from 'react-responsive';

const ImageGalleryComponent = ({ images }) => {
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
        <div id={'propertyinfoimages'} style={{ visibility: `${nloaded == imagesArr.length ? 'visible': 'hidden'}` }}>
            <ImageGallery items={imagesArr} thumbnailPosition={isMobile ? 'bottom' : 'right'}
                onImageLoad={() => {
                    isNLoaded(nloaded + 1)
                }} 
                showPlayButton={false}/>
        </div>
    )
}

export default ImageGalleryComponent