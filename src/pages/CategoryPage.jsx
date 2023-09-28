import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { requies } from "../server";
import Search from "../components/search/Search";
import AllCategories from "../components/categories/AllCategories";
import CategoryOne from "../components/categories/CategoryOne";

const CategoryPage = () => {
  const [category, setCategory] = useState({});
  const [filteredPosts, setFilteredPosts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getCategoryOne();
    getCategory();
  }, []);

  const getCategoryOne = async () => {
    try {
      const { data } = await requies.get(`category/${id}`);
      setCategory(data);
    } catch (er) {
      toast.error("Error");
    }
  };

  const getCategory = async () => {
    try {
      const {
        data: { data },
      } = await requies.get("post");
      setFilteredPosts(data);
    } catch (er) {
      toast.error("Error");
    }
  };
  let filteredPost = filteredPosts.filter(
    (post) => post.category.name === category.name
  );

  return (
    <div>
      <CategoryOne category={category} />
      <Search setFilteredPosts={setFilteredPosts} />
      {filteredPost.map((categoryies) => (
        <AllCategories key={categoryies._id} categoryies={categoryies} />
      ))}
    </div>
  );
};

export default CategoryPage;
