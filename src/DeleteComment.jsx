import { useContext, useEffect } from "react";
import { deleteComment } from "./apis";
import { UserContext } from "./User";

export const DeleteComment = ({author, comment_id, setListOfComments, listOfComments}) => {
    const { user, isLoggedIn } = useContext(UserContext)


    const deleteCommentById = () => {
        const commentList = [...listOfComments]
        const commentListDeleted = listOfComments.filter((comment) => {return comment.comment_id !== comment_id})
        setListOfComments(commentListDeleted)
        deleteComment(comment_id).catch(() => {
            alert("sorry something went wrong, please try again later.")
            setListOfComments(commentList)
        })
    }

    if (isLoggedIn && user.username === author){
        return (<button className="deleteComment" onClick={deleteCommentById}>Delete</button>)
      }

}