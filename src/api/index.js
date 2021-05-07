import axios from 'axios'

const url = 'https://manipal-rentals-backend.herokuapp.com/posts'

export const fetchPosts = (sortOrder) => {
    return axios.get(url, {
        params: sortOrder
    })
}
export const createPost = (newPost) => {
    axios.post(url, newPost)
    console.log(newPost)
}
