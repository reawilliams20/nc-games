import { Link } from "react-router-dom";

export const ReviewCard = ({review_id, title, designer, owner, img_url, category, created_at, votes, review_body}) => {
  return (
    <div className="reviewCard">
      <Link to={`/reviews/${review_id}`}>
        <h3> {title} </h3>
      </Link>
        <img src={img_url} alt={`Image of review ${review_id}`} width="100" height="100" />
        <p> {review_body} </p>
        <p>Designer: {designer}</p>
        <p>Category: {category}</p>
        <strong><p>User: {owner}</p></strong>
        <strong><p>Date: {created_at}</p></strong>
        <section>
            <p>Votes: {votes}</p>
            <button>👍</button>
            <button>👎</button>
        </section>
    </div>
  );
};