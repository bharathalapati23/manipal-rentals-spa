import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Paper, Select, Switch } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';

import useStyles from '../styles';

import { createPost, getPosts } from '../../actions/posts.js'

import SwitchComponent from './SwitchComponent'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Axios from 'axios'

const bedroomObj = {
    singleBed: false,
    doubleBed: false,
    wardrobe: false,
    studyTable: false,
    chair: false,
    attachedToilet: false,
    attachedBalcony: false,
    airConditioner: false,
}

const initialConfig = {
    refId: 0,
    title: '',
    bedroom: 0,
    rent: 0,
    bathroom: 0,
    deposit: 0,
    desc: '',
    zone: 'Syndicate Circle',
    apOrBung: 'Apartment',
    images: [],
    bedroomDetails: [],
    homeFeatures: {
        wifi: false,
        geyser: false,
        washingMachine: false,
        cookingHub: false,
        fridge: false,
        couch: false,
        coffeeTable: false,
        chairs: false,
    }
}

const UploadComponent = () => {
    const [postData, setPostData] = useState(initialConfig);
    const [images, setImages] = useState([])
    const [bedroom, setBedroom] = useState(0)
    const dispatch = useDispatch();
    const classes = useStyles();

    //const posts = useSelector((state) => state.posts)
    const posts = 1

    // console.log(postData)
    useEffect(() => {
        console.log(posts)
    }, [posts])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const promises = []
        const x = []

        images.length && Object.keys(images).map((imageIndex) => {
            let promise = handleUpload(images[imageIndex]).then((img) => x.push(img))
            promises.push(promise)
        })

        Promise.all(promises).then(() => {
            let finalObj = {
                ...postData,
                images: [...x]
            }
            console.log('finalObj', finalObj)
            dispatch(createPost(finalObj))
        });
    };



    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const handleChange = e => {
        if (e.target.files.length) {
            setImages(e.target.files)
        }
    }

    // dev
    // const handleUpload = (image) => {
    //     return new Promise((resolve, reject) => {
    //         const formData = new FormData()
    //         formData.append('file', image)
    //         formData.append('upload_preset', 'ypjwoflk')
    //         try {
    //             Axios.post('https://api.cloudinary.com/v1_1/dkmd4aqmt/image/upload', formData)
    //                 .then((resp) => {
    //                     resolve(resp.data.url)
    //                 })
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     })
    // }

    const handleUpload = (image) => {
        return new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append('file', image)
            formData.append('upload_preset', 'ohavfant')
            try {
                Axios.post('https://api.cloudinary.com/v1_1/dojfndzbj/image/upload', formData)
                    .then((resp) => {
                        resolve(resp.data.url)
                    })
            } catch (error) {
                console.log(error)
            }
        })
    }
    const clear = (e) => {
    };

    const bedroomChange = (event) => {
        let bedroomsFeaturesObj = []
        if (event.target.value < 1) {
            event.target.value = 0
            setBedroom(0)
            setPostData({ ...postData, bedroomDetails: bedroomsFeaturesObj })
        }
        else {
            for (let i = 0; i < Number(event.target.value); i++) {
                bedroomsFeaturesObj.push(bedroomObj)
            }
            setPostData({ ...postData, bedroom: event.target.value, bedroomDetails: bedroomsFeaturesObj })
            setBedroom(Number(event.target.value))
        }
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a Listing</Typography>
                <TextField type={"number"} name="refId" variant="outlined" label="Reference Id" fullWidth value={postData.refId} onChange={(e) => setPostData({ ...postData, refId: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField
                    type={"number"}
                    variant="outlined"
                    fullWidth
                    onChange={bedroomChange}
                    name='bedroom'
                    label='Bedroom'
                />
                <TextField
                    type={"number"}
                    variant="outlined"
                    fullWidth
                    onChange={(event) => {
                        if (event.target.value < 1) {
                            event.target.value = 0
                        }
                        else {
                            setPostData({ ...postData, rent: event.target.value })
                        }
                    }}
                    name='rent'
                    label='Rent'
                />
                <TextField
                    type={"number"}
                    variant="outlined"
                    fullWidth
                    onChange={(event) => {
                        if (event.target.value < 1) {
                            event.target.value = 0
                        }
                        else {
                            setPostData({ ...postData, deposit: event.target.value })
                        }
                    }}
                    name='deposit'
                    label='Deposit'
                />
                <TextField
                    type={"number"}
                    variant="outlined"
                    fullWidth
                    onChange={(event) => {
                        if (event.target.value < 1) {
                            event.target.value = 0
                        }
                        else {
                            setPostData({ ...postData, bathroom: event.target.value })
                        }
                    }}
                    name='bathroom'
                    label='Bathroom'
                />
                <TextField name="desc" variant="outlined" label="Desc" fullWidth multiline rows={4} value={postData.desc} onChange={(e) => setPostData({ ...postData, desc: e.target.value })} />
                <div className={classes.fileInput}>
                    <input type='file' multiple onChange={handleChange}></input>
                </div>


                <Select
                    native
                    defaultValue='Syndicate Circle'
                    onChange={(e) => setPostData({ ...postData, zone: e.target.value })}
                >
                    <option value={'Syndicate Circle'}>Syndicate Circle</option>
                    <option value={'End Point Road'}>End Point Road</option>
                    <option value={'Vidyaratna Nagar'}>Vidyaratna Nagar</option>
                    <option value={'Eshwar Nagar'}>Eshwar Nagar</option>
                    <option value={'Venugopal Temple'}>Venugopal Temple</option>
                    <option value={'Ananth Nagar'}>Ananth Nagar</option>
                    <option value={'Perampalli Road'}>Perampalli Road</option>
                </Select>
                <Select
                    native
                    defaultValue='Apartment'
                    onChange={(e) => setPostData({ ...postData, apOrBung: e.target.value })}
                >
                    <option value={'apartment'}>Apartment</option>
                    <option value={'Bungalow'}>Bungalow</option>
                </Select>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h6">Home Features</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {Object.keys(postData.homeFeatures).map((key, index) => {
                            return <SwitchComponent name={key} feature={'home'} postData={postData} setPostData={setPostData} />
                        })}
                    </AccordionDetails>
                </Accordion>
                {[...Array(bedroom)].map((e, bedroomIndex) => {
                    return (
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="h6">Bedroom {bedroomIndex + 1} Features</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {Object.keys(bedroomObj).map((key, index) => {
                                    return <SwitchComponent name={key} feature={'bedroom'} postData={postData} setPostData={setPostData} bedroomIndex={bedroomIndex} />
                                })}
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default UploadComponent


