import axios from "axios";

const gamesApi = axios.create({baseURL: 'https://andrea-nc-games.onrender.com/api/'})

export const getReviews = (category) => {
    return gamesApi.get('/reviews', {params:{category:category}}).then((res) => {
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

export const patchReview = (review_id, vote) => {
    const patchBody = {inc_votes: vote}
    return gamesApi.patch(`/reviews/${review_id}`, patchBody).then((res) => {
        return res.data.review
    })

}

// export const getUsers = () => {
//     return gamesApi.get('/users').then((res) => {
//         return res.data.users
//     })
// }

export const postComment = (review_id, newComment) => {
    return gamesApi.post(`/reviews/${review_id}/comments`, newComment).then((res) => {
        return res.data.comment
    })
}