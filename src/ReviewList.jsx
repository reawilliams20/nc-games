import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { getReviews, getCategories } from "./apis"
import { ReviewCard } from "./ReviewCard"
export const ReviewList = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const categoryQuery = searchParams.get('category')
    const [listOfReviews, setListOfReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getReviews().then((reviews) => {
            setListOfReviews(reviews)
            setIsLoading(false)
        })
    }, [])
    
    let categoryFilteredReviews = [...listOfReviews]
    if (categoryQuery) {
    categoryFilteredReviews = listOfReviews.filter((review)=>{
        return review.category === categoryQuery
    })
    }
    return isLoading ? (
        <p> Loading... </p>
    ) : categoryFilteredReviews.length === 0 ? (<p> This category doesnt exist</p>)
    :
    
    (
    <section>
        <h2> Reviews </h2>
        {
            categoryFilteredReviews.map(({review_id, title, designer, owner, review_img_url, category, created_at, votes, review_body}) => {
                return (
                        <ReviewCard key={review_id} review_id={review_id} title={title} designer={designer} owner={owner} img_url={review_img_url} category={category} created_at={created_at} votes={votes} review_body={review_body}/>
                )
            })
        }
    </section>
    )
}