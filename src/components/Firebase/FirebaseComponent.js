import React, {useState} from 'react'
import { storage } from './index.js'

const FirebaseComponent = () => {
    const [image, setImage] = useState(null)

    const handleChange = e => {
        if(e.target.files[0]) {
            setImage(e.target.files[0] )
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error)
            },
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url)
                    })
            }
        )
    }
    return (
        <div>
        <input type='file' multiple onChange={handleChange}></input>
        <button onClick={handleUpload}>Upload</button>
        </div>
    )
}

export default FirebaseComponent
