import axios from "axios";
import React from "react";
import { useContext, useEffect, useState } from "react";
// import { Context } from "../contextApi/Context";
import "./home.css";

function Home() {
  // const { count, setCount, image, setImage } = useContext(Context);
  const [image, setImage] = useState([]);
  const [page, setPage] = useState([1]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://api.pexels.com/v1/search?query=cars&per_page=10",
          {
            headers: {
              Authorization: import.meta.env.VITE_PEXEL_API_KEY,
            },
          }
        );

        setImage([...image, result.data.photos]);
        setPage([result.data.page + 1]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="body">
      <h1 className="home">Home</h1>
      <div className="cardcont">
        {image?.map((i, k) => {
          return (
            <div key={k} className="card">
              <img
                src={i?.src?.portrait}
                loading="lazy"
                alt="img"
                srcSet=""
                className="img"
              />
            </div>
          );
        })}
      </div>
      <div className="footer">
          <button className="btn" onClick={() => setImage()}>
            Load More
          </button>
          <button className="btn" onClick={() => setPage()}>
            Next Page
          </button>
        </div>
    </div>
  );
}

export default Home;
