import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import './CardImageGallery.css'
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme) => ({
    carousel: {
        [theme.breakpoints.up('md')]: {
            width: '240px',
            height: '160px',
        },

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '60vw',
        },
        overflow: 'auto',
    }
}));

const CardImageGallery = ({ images, navigateToProperty }) => {
    const classes = useStyles();
    const [nloaded, isNLoaded] = useState(0)

    const onImageSlide = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    console.log(images)
    let imagesArr = images.map((image) => {
        let lowQualityImage = image.replace('upload/', 'upload/c_scale,f_auto,h_600,q_auto/')
        return {
            original: lowQualityImage,
            thumbnail: lowQualityImage
        }
    })

    return (
        <div id={'cardimages'} className={classes.carousel} onClick={onImageSlide}>
            <ImageGallery items={imagesArr}
                onImageLoad={() => {
                    isNLoaded(nloaded + 1)
                }}
                showPlayButton={false}
                showThumbnails={false}
                showFullscreenButton={false}
                onClick={navigateToProperty}
            />
        </div>
    )
}

export default CardImageGallery