import { Link } from "react-router-dom";

export const ReviewCard = ({review_id, title, designer, owner, img_url, category, created_at}) => {
  return (
    <div className="reviewCard">
      <Link to={`/reviews/${review_id}`}>
        <h3> {title} </h3>
      </Link>
        <img src={img_url} alt={`Image of review ${review_id}`} width="100" height="100" />
        <strong><p>Review by: {owner}</p></strong>
        <p>Designer: {designer}</p>
        <p>Category: {category}</p>
        <small><p>Date: {created_at}</p></small>
    </div>
  );
};