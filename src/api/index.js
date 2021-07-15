import axios from 'axios'

//const url = 'https://manipal-rentals-backend.herokuapp.com/posts'
const uploadUrl = 'http://localhost:5000/uploads'

//const url = 'https://wolpa-rentals-backend.herokuapp.com/posts'
const url = 'http://localhost:5000/posts'


export const fetchPosts = (sortOrder) => {
    return axios.get(url, {
        params: sortOrder
    })
}
export const createPost = (newPost) => {
    axios.post(url, newPost)
   
}

export const fetchUploads = (sortOrder) => {
    return axios.get(uploadUrl, {
        params: sortOrder
    })
}
export const createUpload = (newPost) => {
    axios.post(uploadUrl, newPost)
   
}

//const leadsUrl = 'https://manipal-rentals-backend.herokuapp.com/leads'
const leadsUrl = 'https://wolpa-rentals-backend.herokuapp.com/leads'

export const createLead = (leadInfo) => {
    
    axios.post(leadsUrl).then(()=> {
        
    })
}
