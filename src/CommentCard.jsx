
export const CommentCard = ({body, votes, author, created_at}) => {
  return (
    <div className="commentCard">
        <p><strong>{author}</strong>: "{body}" </p>
        <p>Votes: {votes}</p>
        <small><p>Date: {created_at}</p></small>
    </div>
  );
};