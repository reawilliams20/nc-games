import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUsers, postComment } from "./apis"


export const PostComment = ({setListOfComments}) => {
    const [isAddedToCommentList, setIsAddedToCommentList] = useState(false)
    const [users, setUsers] = useState([])
    const {review_id} = useParams()

    useEffect(()=> {
        getUsers().then((users) => {
          const usernames = users.map((user) => {return user.username})
            setUsers(usernames)
        })
    }, [])

const handleSubmit = (e) => {
    e.preventDefault()
    setIsAddedToCommentList(false)
    const newComment = {
        username: e.target[0].value, 
        body: e.target[1].value,
        votes: 0,
        created_at: "Just now..."
    }

    if (users.includes(newComment.username)){
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
    else{
        alert("invalid username")
    }
    
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
        <div className="postComment">
            <h3 id="addCommentTitle"> Add Comment</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username:</label><br></br>
                <input type="text" name="username" id="username" required></input><br></br>
                <label htmlFor="comment">comment:</label><br></br>
                <textarea name="comment" id="comment"></textarea><br></br>
                <input type="submit" value="Post Comment"></input>
                <input type="reset" value="Clear"></input>
            </form>
        </div>
    )
}