import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getReview } from "./apis"

export const SingleReview = () => {
    const [review, setReview] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {review_id} = useParams()

    useEffect(()=>{
        getReview(review_id).then((newReview)=>{
            setReview(newReview)
            setIsLoading(false)
        })
    },[])

    return isLoading ? (
        <p> Loading... </p>
    ) :
    (<section>
        <div className="singleReviewCard">
        <h2 id="reviewTitle" > {review.title} </h2>  
        <img src={review.review_img_url} alt={`Image of ${review.title}`} width="200" height="200" /> 
        <p id="reviewBody"> {review.review_body} </p>
        <strong><p> Review By: {review.owner}</p></strong>
        <small><p>Date: {review.created_at}</p></small>
        <p> Designer: {review.designer}</p>
        <p> Category: {review.category}</p>
        <p>Votes: {review.votes}</p>
        <button>👍</button>
        <button>👎</button>
        </div>
        {/* </CommentList> */}
    </section>)
}
