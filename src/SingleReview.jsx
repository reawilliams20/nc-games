import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getReview, patchReview } from "./apis"
import { CommentList } from "./CommentList"

export const SingleReview = () => {
    const [review, setReview] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const increaseVote = {inc_votes: 1}
    const decreaseVote = {inc_votes: -1}
    const {review_id} = useParams()

    useEffect(()=>{
        getReview(review_id).then((newReview)=>{
            setReview(newReview)
            setIsLoading(false)
        })
    },[])

    const upVote = () => {
        setReview((review) => {
            const newReview = {...review}
            newReview.votes += 1;
            return newReview;
        })
        patchReview(review_id, increaseVote).catch(() => {
            setReview((review) => {
                const newReview = {...review}
                newReview.votes -= 1;
                return newReview;
            })
        })
    }
    const downVote = () => {
        setReview((review) => {
            const newReview = {...review}
            newReview.votes -= 1;
            return newReview;
        })
        patchReview(review_id, decreaseVote).catch(() => {
            setReview((review) => {
                const newReview = {...review}
                newReview.votes += 1;
                return newReview;
            })
        })
    }

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
        <button id="up" onClick = {() => upVote()}>👍</button>
        <button id="down" onClick = {() => downVote()}>👎</button>
        </div>
        <div>
        <CommentList review_id={review.review_id}/>
        </div>
    </section>)
}
