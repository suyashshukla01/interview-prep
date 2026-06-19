import api from './axios.js'

export const registerUser = (data) => api.post('/auth/register', data).then((r) => r.data)

export const loginUser = (data) => api.post('/auth/login', data).then((r) => r.data)

export const logoutUser = () => api.get('/auth/logout').then((r) => r.data)

export const getMe = () => api.get('/auth/get-me').then((r) => r.data)
