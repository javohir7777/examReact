import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { requies } from "../server";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Search from "../components/search/Search";

import "./AllPostsPage.scss";

const AllPostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const {
        data: { data },
      } = await requies.get("post");
      setPosts(data);
    } catch (err) {
      toast.error("Error");
    }
  };

  return (
    <div className="container">
      <div className="all-postss">
        <Search setFilteredPosts={setPosts} />
        <div className="all-posts">
          <h1 className="all-posts__h1">All Posts</h1>
          <hr />
          <div className="all-post__basis">
            {posts.map((post) => (
              <div key={post?._id} className="all-post__flex">
                <LazyLoadImage
                  className="all-post__img"
                  src={`https://blog-backend-production-a0a8.up.railway.app/upload/${
                    post?.photo?._id
                  }.${post?.photo?.name.split(".")[1]}`}
                  effect="blur"
                  all=""
                />
                <div className="all-post__texts">
                  <h6 className="all-post__h6">{post?.category?.name}</h6>
                  <h1 className="all-post__h1">{post?.title}</h1>
                  <p className="all-post__p">{post?.category?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPostsPage;
