import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { requies } from "../server";

import homeUImg from "../assets/home/man.png";

import "./Home.scss";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState({});
  const [time, setTime] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const { data } = await requies.get(`/post/lastone/`);
      setData(data);
      // setPhoto(
      // `https://blog-backend-production-a0a8.up.railway.app/upload/${
      //   data?.category?.photo
      // }.${data?.photo?.name.split(".")[1]}`
      // );
      // console.log(data?.photo?.name.split(".")[1]);
      setTime(data?.createdAt.split("T")[0]);
    } catch (er) {
      toast.error("Error");
    }
  };
  let vaqt = new Date(time).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  console.log(data);
  return (
    <Fragment>
      <div
        className="bg-img"
        style={{
          backgroundImage: `url(${homeUImg})`,
        }}
      >
        <div className="container">
          <p className="bg-title">
            Posted on <span>{data?.category?.name}</span>
          </p>
          <h3 className="bg-text">
            Step-by-step guide to choosing great font pairs
          </h3>
          <p className="bg-name">
            By{" "}
            <span>
              {data?.user?.first_name} {data?.user?.last_name}{" "}
            </span>
            | {vaqt}
          </p>
          <p className="bg-texts">{data?.category?.description}</p>
          <Link to="/posts" className="btn-read">
            Read More {">"}
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
