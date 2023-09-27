import PropTypes from "prop-types";

import "./Category.scss";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Category = ({ post }) => {
  return (
    <Link to={`category/${post._id}`} className="card-link">
      <div className="card-category">
        <div className="card">
          <LazyLoadImage
            src={`https://blog-backend-production-a0a8.up.railway.app/upload/${post?.photo?._id}.jpg`}
            effect="blur"
            alt=""
          />
        </div>
        <div className="category-textes">
          <h1 className="category-h1">{post.name}</h1>
          <p className="category-p">{post.description}</p>
        </div>
      </div>
    </Link>
  );
};
Category.propTypes = {
  post: PropTypes.object,
};
export default Category;
