import { useContext, useEffect, useState } from "react";
import { deleteComment } from "./apis";
import { UserContext } from "./User";

export const DeleteComment = ({author, comment_id, setListOfComments, listOfComments, setIsLoading}) => {
    const { user, isLoggedIn } = useContext(UserContext)

    const deleteCommentById = () => {
        const commentListDeleted = listOfComments.filter((comment) => {return comment.comment_id !== comment_id})
        const commentList = [...listOfComments]
        setIsLoading(true)
        setListOfComments(commentListDeleted)
        deleteComment(comment_id).then(() => {
            setIsLoading(false)
            alert("Comment Deleted")
        }).catch(() => {
            alert("sorry something went wrong, your comment was not deleted, please try again later.")
            setListOfComments(commentList)
        })
    }

    if (isLoggedIn && user.username === author){
        if (comment_id){
            return (<button className="deleteComment" onClick={deleteCommentById}>Delete</button>)
        }
      }

}