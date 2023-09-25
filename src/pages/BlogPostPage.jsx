import { useParams } from "react-router-dom";
import { requies } from "../server";
import { useEffect, useState } from "react";

import "./BlogPost.scss";

const BlogPostPage = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    const { data } = await requies.get(
      `https://blog-backend-production-a0a8.up.railway.app/api/v1/post/${id}`
    );
    setBlog(data);
  };
  console.log(blog?.user?.first_name);
  return (
    <div className="container blog">
      <div className="blog-div">
        <img
          src={`https://blog-backend-production-a0a8.up.railway.app/upload/${
            blog?.photo?._id
          }.${blog?.photo?.name.slice(-3)}`}
          alt=""
        />
      </div>
      <div className="blog-flex">
        <div className="blogs">
          <img
            src={`https://blog-backend-production-a0a8.up.railway.app/upload/${blog.user?.photo}`}
            alt=""
          />
          <p>
            {" "}
            {blog?.user?.first_name} {blog?.user?.last_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
