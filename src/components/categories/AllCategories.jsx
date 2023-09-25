import PropTypes from "prop-types";
import "./AllCategories.scss";
// import { Link } from "react-router-dom";

const AllCategories = ({ categoryies }) => {
  return (
    <div className="categoryies-flex container">
      {/* <Link to={`blog/${categoryies._id}`}> */}
      <img
        src={`https://blog-backend-production-a0a8.up.railway.app/upload/${
          categoryies?.photo?._id
        }.${categoryies?.photo?.name.slice(-3)}`}
        alt=""
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
