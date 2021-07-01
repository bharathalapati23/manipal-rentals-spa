import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import './ImageGallery.css'
import { useMediaQuery } from 'react-responsive';

const ImageGalleryComponent = ({ images }) => {
    const [nloaded, isNLoaded] = useState(0)
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    let imagesArr = images.map((image) => {
        let lowQualityImage
        if (isMobile)
            lowQualityImage = image.replace('upload/', 'upload/c_scale,f_auto,h_600,q_auto/')
        else
            lowQualityImage = image.replace('upload/', 'upload/f_auto,h_600,q_auto/')
        return {
            original: lowQualityImage,
            thumbnail: lowQualityImage
        }
    })

    return (
        <>
            <div id={'propertyinfoimages'} style={{ visibility: `${nloaded == imagesArr.length ? 'visible' : 'hidden'}`, height: isMobile ? '' : '400px' }}>
                <ImageGallery items={imagesArr} thumbnailPosition={isMobile ? 'bottom' : 'right'}
                    onImageLoad={() => {
                        isNLoaded(nloaded + 1)
                    }}
                    showPlayButton={false}
                    showFullscreenButton={!isMobile} />
            </div>
            
        </>
    )
}

export default ImageGalleryComponent