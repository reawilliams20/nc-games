import { useEffect, useState } from "react"
import { getComments } from "./apis"
import { CommentCard } from "./CommentCard"
import { PostComment } from "./PostComment"
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
    listOfComments.length === 0 ?  (<div><p> No comments yet </p><PostComment setListOfComments={setListOfComments}/></div>)
    :
    (
    <section>
        <div className="commentList">
            <h3> Comments: </h3>
            {
                listOfComments.map(({body, votes, author, created_at, comment_id}) => {
                    return (
                            <CommentCard key={comment_id} body={body} author={author} created_at={created_at} votes={votes} comment_id={comment_id} listOfComments={listOfComments} setListOfComments={setListOfComments} setIsLoading={setIsLoading}/>
                    )
                })
            }
        </div>
            <PostComment setListOfComments={setListOfComments}/>
    </section>
    )
}