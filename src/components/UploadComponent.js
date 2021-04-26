import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Paper, Select } from '@material-ui/core'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';

import { createPost, getPosts } from '../actions/posts.js'
import { storage } from './Firebase'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         marginTop: '80px',
//     },
// }));

const UploadComponent = () => {
    const [postData, setPostData] = useState({ bedroom: 0, rent: 0, bathroom: 0, desc: '', label: '', zone: '', apOrBung: 'Apartment', images: [], furnishing: 0 });
    const [images, setImages] = useState([])
    const dispatch = useDispatch();
    const classes = useStyles();

    const posts = useSelector((state) => state.posts)

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
                images:[...x]
            }
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

    const handleUpload = (image) => {
        return new Promise((resolve, reject) => {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);

            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error)
                    reject(error)
                },
                () => {
                    storage
                        .ref('images')
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            resolve(url)
                        })
                }
            )
        })
    }

    const clear = (e) => {
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a Listing</Typography>
                <TextField
                    type={"number"}
                    variant="outlined"
                    fullWidth
                    onChange={(event) => {
                        if (event.target.value < 1) {
                            event.target.value = 0
                        }
                        else {
                            setPostData({ ...postData, bedroom: event.target.value })
                        }
                    }}
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
                            setPostData({ ...postData, bathroom: event.target.value })
                        }
                    }}
                    name='bathroom'
                    label='Bathroom'
                />
                <TextField name="desc" variant="outlined" label="Desc" fullWidth multiline rows={4} value={postData.desc} onChange={(e) => setPostData({ ...postData, desc: e.target.value })} />
                <TextField name="label" variant="outlined" label="Label" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, label: e.target.value })} />
                <div className={classes.fileInput}>
                    {/* <FileBase type="file" multiple={true} onDone={(images) => {
                    let base64Arr = images.map((image) => image.base64)
                    setPostData({ ...postData, images: base64Arr })
                }} /> */}
                </div>
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
                </Select>
                <Select
                    native
                    defaultValue={0}
                    onChange={(e) => setPostData({ ...postData, furnishing: e.target.value })}
                >
                    <option value={0}>No</option>
                    <option value={1}>Semi</option>
                    <option value={2}>Full</option>
                </Select>
                <Select
                    native
                    defaultValue='Apartment'
                    onChange={(e) => setPostData({ ...postData, apOrBung: e.target.value })}
                >
                    <option value={'apartment'}>Apartment</option>
                    <option value={'Bungalow'}>Bungalow</option>
                </Select>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default UploadComponent
