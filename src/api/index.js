import axios from 'axios'

//const url = 'https://manipal-rentals-backend.herokuapp.com/posts'
//const url = 'http://localhost:5000/posts'

const url = 'https://wolpa-rentals-backend.herokuapp.com/posts'

export const fetchPosts = (sortOrder) => {
    return axios.get(url, {
        params: sortOrder
    })
}
export const createPost = (newPost) => {
    axios.post(url, newPost)
   
}

//const leadsUrl = 'https://manipal-rentals-backend.herokuapp.com/leads'
const leadsUrl = 'https://wolpa-rentals-backend.herokuapp.com/leads'

export const createLead = (leadInfo) => {
    
    axios.post(leadsUrl).then(()=> {
        
    })
}
