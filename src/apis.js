import axios from "axios";

const gamesApi = axios.create({baseURL: 'https://andrea-nc-games.onrender.com/api/'})

export const getReviews = () => {
    return gamesApi.get('/reviews').then((res) => {
        return res.data.reviews
    })
}

// export const getReview = (reviewId) => {
//     return gamesApi.get(`/reviews/${reviewId}`).then((res) => {
//         return res.data.review
//     })
// }