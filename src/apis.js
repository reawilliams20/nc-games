import axios from "axios";

const gamesApi = axios.create({baseURL: 'https://andrea-nc-games.onrender.com/api/'})

export const getReviews = () => {
    return gamesApi.get('/reviews').then((res) => {
        return res.data.reviews
    })
}

export const getCategories = () => {
    return gamesApi.get('/categories').then((res) => {
        return res.data.categories
    })
}

export const getReview = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}`).then((res) => {
        return res.data.review
    })
}

export const getComments = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
        return res.data.comments
    })
}