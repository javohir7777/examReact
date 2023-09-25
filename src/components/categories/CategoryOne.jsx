import PropTypes from "prop-types";

import "./Category.scss";

const CategoryOne = ({ category }) => {
  return (
    <div className="one-category">
      <h1 className="one-category__h1">{category.name}</h1>
      <p className="one-category__p">{category.description}</p>
      <p className="one-category__text">
        Blog {">"} {category.name}
      </p>
    </div>
  );
};

CategoryOne.propTypes = {
  category: PropTypes.object,
};

export default CategoryOne;
