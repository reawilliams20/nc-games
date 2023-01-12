
import { DeleteComment } from "./DeleteComment";


export const CommentCard = ({body, votes, author, created_at, comment_id, listOfComments, setListOfComments}) => {
  
  return (
    <div className="commentCard">
        <p><strong>{author}</strong>: "{body}" </p>
        <p>Votes: {votes}</p>
        <small><p>Date: {created_at}</p></small>
        <DeleteComment author={author} comment_id={comment_id} setListOfComments={setListOfComments} listOfComments={listOfComments}/>
    </div>
  );
};