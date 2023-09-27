import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Card.scss";

const Card = ({ post }) => {
  let data = post.createdAt.split("T")[0];
  let newData = new Date(data).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <Link to={`blog/${post._id}`} className="card-decoration">
      <div className="card">
        <LazyLoadImage
          src={`https://blog-backend-production-a0a8.up.railway.app/upload/${
            post?.photo?._id
          }.${post?.photo?.name.split(".")[1]}`}
          effect="blur"
          alt={`https://blog-backend-production-a0a8.up.railway.app/upload/${
            post?.photo?._id
          }.${post?.photo?.name.split(".")[1]}`}
        />
        <div className="cart-title">
          <p className="cart-name">
            By <span>{post?.user?.first_name}</span> l {newData}{" "}
          </p>
          <h3 className="cart-category"> {post?.category?.description}</h3>
          <p className="card-desc">{post?.description}</p>
        </div>
      </div>
    </Link>
  );
};
Card.propTypes = {
  post: PropTypes.object,
};
export default Card;
