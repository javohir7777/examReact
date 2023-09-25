import { Fragment, useEffect, useState } from "react";
import "./Home.scss";
import { toast } from "react-toastify";
import { requies } from "../server";
const Home = () => {
  const [data, setData] = useState({});
  const [photo, setPhoto] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const { data } = await requies.get(`/post/lastone/`);
      console.log(data);
      setData(data);
      setPhoto(
        `https://blog-backend-production-a0a8.up.railway.app/upload/${data?.photo._id}.jpg`
      );
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
  return (
    <Fragment>
      <div className="bg-img" style={{ backgroundImage: `url(${photo})` }}>
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
          <button className="btn-read">Read More {">"}</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
