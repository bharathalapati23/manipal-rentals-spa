import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import './ImageGallery.css'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';

// import { Carousel } from 'react-responsive-carousel';


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles((theme) => ({
    carousel: {
        // [theme.breakpoints.up('md')]: {
        // 	width: '230px'
        // },


    }
}));

const images = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/manipal-rentals.appspot.com/o/images%2Fdownload.jfif?alt=media&token=3898e3c5-d791-4175-8d76-8e185491600c',
        thumbnail: 'https://firebasestorage.googleapis.com/v0/b/manipal-rentals.appspot.com/o/images%2Fdownload.jfif?alt=media&token=3898e3c5-d791-4175-8d76-8e185491600c',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    // {
    //     original: 'https://picsum.photos/id/1019/1000/600/',
    //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
    // },
    // {
    //     original: 'https://picsum.photos/id/1019/1000/600/',
    //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
    // },
    // {
    //     original: 'https://picsum.photos/id/1019/1000/600/',
    //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
    // },
    // {
    //     original: 'https://picsum.photos/id/1019/1000/600/',
    //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
    // },
];

const ImageGalleryComponent = () => {
    const classes = useStyles();
    const [loaded, isLoaded] = useState('hidden')
    const [nloaded, isNLoaded] = useState(0)
    const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

    return (
        <div style={{ visibility: `${nloaded == 3 ? 'visible': 'hidden'}` }}>
            <ImageGallery items={images} thumbnailPosition={isMobile ? 'bottom' : 'right'}
                onImageLoad={() => {
                    isLoaded('visible')
                    isNLoaded(nloaded + 1)
                }} />
        </div>
    )

    // return (
    //     <CarouselProvider
    //         naturalSlideWidth={100}
    //         naturalSlideHeight={125}
    //         totalSlides={3}
    //     >
    //         <div style={{ position: 'relative' }}>
    //             <Slider style={{ height: '40vh' }}>
    //                 <Slide index={0}>
    //                     <img src='https://firebasestorage.googleapis.com/v0/b/manipal-rentals.appspot.com/o/images%2Fdownload.jfif?alt=media&token=3898e3c5-d791-4175-8d76-8e185491600c'
    //                         style={{ height: '40vh', objectFit: 'cover' }}
    //                     ></img>
    //                 </Slide>
    //                 <Slide index={1}>
    //                     <img
    //                         style={{ height: '500px', objectFit: 'cover' }}
    //                         src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    //                         alt=""
    //                     />
    //                 </Slide>
    //                 <Slide index={2}>I am the third Slide.</Slide>
    //             </Slider>
    //             <ButtonBack style={{ position: 'absolute', top: '50%' }} children='<ArrowBackIcon />'>Back</ButtonBack>
    //             <ButtonNext style={{ position: 'absolute', top: '50%', right: '0' }}>Next</ButtonNext>
    //             <ArrowBackIcon style={{ position: 'absolute', top: '50%' }}/>
    //         </div>
    //     </CarouselProvider>
    // );
}

export default ImageGalleryComponent