import { useEffect, useState } from "react"
import { getComments } from "./apis"
import { CommentCard } from "./CommentCard"

export const CommentList = ({review_id}) => {

    const [listOfComments, setListOfComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getComments(review_id).then((comments) => {
            setListOfComments(comments)
            setIsLoading(false)
        })
    }, [])

    return isLoading ? (
        <p> Loading... </p>
    ) :
    listOfComments.length === 0 ?  (<div><p> No comments yet </p>
    <form>
    <input type="text"></input>
    <input type="textarea"></input>
<button>Add Comment</button>
</form></div> )
    :
    (
    <section className="commentList">
        <h3> Comments: </h3>
        {
            listOfComments.map(({body, votes, author, created_at, comment_id, review_id}) => {
                return (
                        <CommentCard key={comment_id} body={body} author={author} created_at={created_at} review_id={review_id} votes={votes} />
                )
            })
        }
        <form>
            <input type="text"></input>
            <input type="textarea"></input>
        <button>Add Comment</button>
        </form>
    </section>
    )
}