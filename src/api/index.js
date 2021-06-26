import axios from 'axios'

const url = 'https://manipal-rentals-backend.herokuapp.com/posts'
//const url = 'http://localhost:5000/posts'

export const fetchPosts = (sortOrder) => {
    return axios.get(url, {
        params: sortOrder
    })
}
export const createPost = (newPost) => {
    axios.post(url, newPost)
    console.log(newPost)
}

const leadsUrl = 'https://manipal-rentals-backend.herokuapp.com/leads'

export const createLead = (leadInfo) => {
    console.log(leadInfo, leadsUrl)
    axios.post(leadsUrl).then(()=> {
        
    })
}
