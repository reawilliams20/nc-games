import { useState } from "react"
import { useParams } from "react-router-dom"
import { postComment } from "./apis"

export const PostComment = ({setListOfComments}) => {
    const [isAddedToCommentList, setIsAddedToCommentList] = useState(false)
    const {review_id} = useParams()
const handleSubmit = (e) => {
    e.preventDefault()
    setIsAddedToCommentList(false)
    const author = "cooljmessy"
    const newComment = {
        username: author,
        author: author,
        body: e.target[0].value,
        votes: 0,
        created_at: "Just now..."
    }
    //optimistic rendering:
    setListOfComments((comments) => {
        const newComments = [...comments]
        newComments.push(newComment)
        return newComments
    })
    postComment(review_id, newComment).catch((err) => {
        alert("sorry something went wrong, please try again later.")
        setListOfComments((comments) => {
            const newComments = [...comments]
                newComments.pop()
                return newComments
            })
    })
    if (postComment){setIsAddedToCommentList(true)}
}
if (isAddedToCommentList){
    return (
        <div>
            <p>Comment Added!</p>
            <button id="anotherComment" onClick={() => setIsAddedToCommentList(false)}>Post New Comment</button>
            <br></br>
        </div>
    )
}
    return (
        <section className="postComment">
            <h3 id="addCommentTitle"> Add Comment</h3>
            <form onSubmit={handleSubmit}>
                <textarea name="comment" id="comment" placeholder="say your thoughts..." required></textarea><br></br>
                <input type="submit" value="Post Comment"></input>
                <input type="reset" value="Clear"></input>
            </form>
            <br></br>
        </section>
    )
}
 