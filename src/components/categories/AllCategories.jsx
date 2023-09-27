import PropTypes from "prop-types";
import "./AllCategories.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link } from "react-router-dom";

const AllCategories = ({ categoryies }) => {
  return (
    <div className="categoryies-flex container">
      {/* <Link to={`blog/${categoryies._id}`}> */}
      <LazyLoadImage
        src={`https://blog-backend-production-a0a8.up.railway.app/upload/${
          categoryies?.photo?._id
        }.${categoryies?.photo?.name.slice(-3)}`}
        effect="blur"
        alt={`https://blog-backend-production-a0a8.up.railway.app/upload/${
          categoryies?.photo?._id
        }.${categoryies?.photo?.name.slice(-3)}`}
      />
      {/* </Link> */}
      <div className="categoryies-texts">
        <h3 className="categoryies-h3"> {categoryies?.category?.name}</h3>
        <h4 className="categoryies-h4">{categoryies?.title}</h4>
        <p className="categoryies-p">{categoryies?.description}</p>
      </div>
    </div>
  );
};

AllCategories.propTypes = {
  categoryies: PropTypes.object,
};
export default AllCategories;
