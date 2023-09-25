import PropTypes from "prop-types";

import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  console.log(post);
  let data = post.createdAt.split("T")[0];
  let newData = new Date(data).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  // console.log(newData);
  return (
    <Link to={`blog/${post._id}`} className="card-decoration">
      <div className="card">
        <img
          src={`https://blog-backend-production-a0a8.up.railway.app/upload/${post.photo._id}.jpg`}
          alt=""
        />
        <div className="cart-title">
          <p className="cart-name">
            By <span>{post.user.first_name}</span> l {newData}{" "}
          </p>
          <h3 className="cart-category"> {post.category.description}</h3>
          <p className="card-desc">{post.description}</p>
        </div>
      </div>
    </Link>
  );
};
Card.propTypes = {
  post: PropTypes.array,
};
export default Card;
