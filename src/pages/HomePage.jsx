import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { requies } from "../server";
import Home from "../home/Home";

import "./HomePage.scss";
import Card from "../components/card/Card";
import Carousel from "react-multi-carousel";
import Category from "../components/category/Category";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  const getData = async () => {
    try {
      const { data } = await requies.get(`/post/lastones/`);
      setPosts(data);
    } catch (er) {
      toast.error("Error");
    }
  };

  const getCategory = async () => {
    try {
      const {
        data: { data },
      } = await requies.get(`/category`);
      setCategory(data);
    } catch (err) {
      toast.error(err);
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <Fragment>
      <Home />
      <section className="container">
        <h1 className="popular">Popular blogs</h1>
        <div className="row">
          <Carousel
            // style={{ zIndex: "-1" }}
            responsive={responsive}
            keyBoardControl={true}
            autoPlay={false}
            showDots={false}
            infinite={true}
            autoPlaySpeed={100}
          >
            {posts.map((post) => (
              <Card key={post._id} post={post} />
            ))}
          </Carousel>
        </div>
      </section>
      <div className="container category">
        <h1 className="choose">Choose A Catagory</h1>
        <Carousel
          responsive={responsive2}
          keyBoardControl={true}
          autoPlay={false}
          showDots={false}
          infinite={true}
          autoPlaySpeed={100}
        >
          {category.map((post) => (
            <Category key={post._id} post={post} />
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
};

export default HomePage;
