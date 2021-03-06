import axios from 'axios'

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL })

API.interceptors.request.use((req, res) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }

  return req
})

export const fetchPosts = () => API.get('/posts')

export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPostsByTag = (tag) => API.get(`/posts/?tagName=${tag}`)

export const createPost = (newPost) => API.post('/posts', newPost)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
export const updatePost = (id, updatedPost) =>
  API.put(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)

export const getQuote = async () => (await API.get('/quotes'))

export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)

export const fetchImages = () => API.get('/images/')
export const uploadImages = (images) => {
  const formData = new FormData()
  formData.append('images', images)
  API.post('/images/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export const deleteImage = (id) => API.delete(`/images/${id}`)

export const getTags = () => API.get('/tags')
export const createTag = (formData) => API.post('/tags', formData)
export const deleteTag = (id) => API.delete(`/tags/${id}`)

export const getRandomImage = () => API.get('/images/random')
