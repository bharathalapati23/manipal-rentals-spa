import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchPosts = (sortOrder) => {
    return axios.get(url, {
        params: sortOrder
    })
}
export const createPost = (newPost) => {
    axios.post(url, newPost)
    console.log(newPost)
}
