import { useEffect, useState } from "react"
import { getReviews} from "./apis"
import { ReviewCard } from "./ReviewCard"
export const ReviewList = () => {
    const [sortBy, setSortBy] = useState('created_at')
    const [orderBy, setOrderBy] = useState('desc')
    const [listOfReviews, setListOfReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getReviews(sortBy, orderBy).then((reviews) => {
            setListOfReviews(reviews)
            setIsLoading(false)
        })
    }, [sortBy, orderBy])
    
    return isLoading ? (
        <p> Loading... </p>
    )
    :
    
    (
    <main>
        <h2> Reviews </h2>
        <section className="sortOrder">
            Sort:
            <select value={sortBy} onChange={(e) => {setSortBy(e.target.value)}}>
                <option value='created_at'>Date</option>
                <option value='comment_count'>Comments</option>
                <option value='votes'>Votes</option>
            </select>
            Order:
            <select value={orderBy} onChange={(e) => {setOrderBy(e.target.value)}}>
                <option value='asc'>Asc</option>
                <option value='desc'>Desc</option>
            </select>
        </section>
        <br></br>
        <br></br>
            {
                listOfReviews.map(({review_id, title, designer, owner, review_img_url, category, created_at, votes, review_body}) => {
                    return (
                            <ReviewCard key={review_id} review_id={review_id} title={title} designer={designer} owner={owner} img_url={review_img_url} category={category} created_at={created_at} votes={votes} review_body={review_body}/>
                    )
                })
            }
    </main>
    )
}
