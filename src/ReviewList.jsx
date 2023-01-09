import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { getReviews } from "./apis"
import { ReviewCard } from "./ReviewCard"

export const ReviewList = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const categoryQuery = searchParams.get('category')

    const [listOfReviews, setListOfReviews] = useState([])

    useEffect(() => {
        getReviews().then((reviews) => {
            setListOfReviews(reviews)
        })
    }, [])
    console.log(listOfReviews)
    return (
    <section>
        <h2> Reviews </h2>
        {
            listOfReviews.map(({review_id, title, designer, owner, review_img_url, category, created_at, votes, review_body}) => {
                return (
                        <ReviewCard key={review_id} review_id={review_id} title={title} designer={designer} owner={owner} img_url={review_img_url} category={category} created_at={created_at} votes={votes} review_body={review_body}/>
                )
            })
        }
    </section>
    )
}