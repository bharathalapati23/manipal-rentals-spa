import React from 'react'
import { Switch } from '@material-ui/core'


const SwitchComponent = ({ name, feature, postData, setPostData, bedroomIndex }) => {
    const handleChange = (event) => {
        
        if (feature == 'home') {
            setPostData({
                ...postData,
                homeFeatures: {
                    ...postData.homeFeatures,
                    [name]: event.target.checked
                }
            })
        }
        else {
            let newBedroomDetails = [...postData.bedroomDetails]
            newBedroomDetails[bedroomIndex] = {
                ...newBedroomDetails[bedroomIndex],
                [name]: event.target.checked
            }
            setPostData({
                ...postData,
                bedroomDetails: newBedroomDetails
            })
        }
    }

    return (
        <>
            {name}
            <Switch
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                onChange={handleChange}
            />
        </>
    )
}

export default SwitchComponent
